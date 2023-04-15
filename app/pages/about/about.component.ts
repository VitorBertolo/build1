import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
  
  selectedImage: File = null;
  selectedFileName: string;
  uploadProgress: Observable<number>;
  imageUrl: string = '';
  imageUrls: string[] = [];
  imageNames: string[] = [];
  uploadSuccess = false;
  imageDescription: string = '';

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) {
    
  }

  ngOnInit() {
    this.db.list('images').valueChanges().subscribe(async (names: string[]) => {
      this.imageUrls = [];
      this.imageNames = [];
      
      const allImages = await this.storage.ref('images').listAll().toPromise();
      const allImageNames = allImages.items.map(item => item.name);

      for (let i = 0; i < names.length; i++) {
        const name = names[i] as string;
        if (allImageNames.includes(name)) {
          const url = await this.storage.ref(`images/${name}`).getDownloadURL().toPromise();
          this.imageUrls.push(url);
          this.imageNames.push(name);
        } else {
          console.log(`A imagem ${name} não existe no Firebase Storage.`);
        }
      }
    });
  }
  
  onFileSelected(event) {
    this.selectedImage = event.target.files[0];
  }
 
  uploadImage() {
    const fileRef = this.storage.ref(`images/${this.selectedImage.name}`);
    const task = this.storage.upload(`images/${this.selectedImage.name}`, this.selectedImage);
    this.uploadProgress = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url);
          const imageData = {
            name: this.selectedImage.name,
            description: this.imageDescription,
            url: url
          };
          this.db.list('images').push(imageData);
          this.selectedFileName = ''
        });
        this.uploadSuccess = true; 
      })
    ).subscribe();
  }

  deleteImage(url: string) {
    // Remove a imagem do banco de dados
    const index = this.imageUrls.findIndex(imgUrl => imgUrl === url);
    if (index !== -1) {
      this.db.list('images').remove(index.toString()).then(() => {
        // Atualiza a lista de URLs e nomes
        this.imageUrls.splice(index, 1);
        this.imageNames.splice(index, 1);
      });
    }
  }
  
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
