import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { FirebaseService } from "./firebase.service";
import { Observable } from "rxjs";
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from "@angular/fire/compat/storage";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import * as pdfjs from "pdfjs-dist/build/pdf.min.js";
import { finalize } from "rxjs/operators";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { User } from "../users/shared/user";
import { UsersService } from "../users/shared/user.service";
import { MatDialog } from "@angular/material/dialog";
import { ModalServicesComponent } from "./modal-services/modal-services.component";
import { Usuario } from "src/app/pages/home/usuario";
import { AuthService } from "src/app/pages/home/auth.service";

@Component({
  selector: "app-upload-form",
  templateUrl: "./upload-form.component.html",
  styleUrls: ["./upload-form.component.scss"],
})
export class UploadFormComponent {
  selectedFile: File | null = null;
  uploadProgress$: Observable<number | undefined> | null = null;
  downloadURL$: Observable<string | null>;
  pdfs$: Observable<any[]>;
  task: AngularFireUploadTask;
  uploadPercent: Observable<number>;
  pdfs: any[] = [];
  downloadURL: Observable<string>;
  uploadForm: any;
  uploadProgress = 0;
  User!: User[];
  nomeUsuario: string;
  termo = '';
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase,
    private fb: FormBuilder,
    public userApi: UsersService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {
    this.pdfs$ = this.db.list("pdfs").valueChanges();
    this.uploadForm = this.fb.group({
      file: [null, Validators.required],
      description: ["", Validators.required],
      nome: [""],
      serviceOrigem:["", Validators.required]
    });
  }

  
  ngOnInit(){

    this.nomeUsuario = this.authService.getNomeUsuarioAtual();
    
    let s = this.userApi.GetUsersList();
    s.snapshotChanges().subscribe((data) => {
      this.User = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.User.push(a as User);
      });
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (!this.selectedFile) {
      console.error("No file selected");
      alert("Nenhum arquivo foi selecionado, por favor selecione um arquivo.");
      return;
    }

    const fileExtension = this.selectedFile.name.split(".").pop();
    const fileName = `file-${new Date().getTime()}.${fileExtension}`;
    const filePath = `pdfs/${fileName}`;
    const fileRef = this.storage.ref(filePath);
    const task: AngularFireUploadTask = this.storage.upload(
      filePath,
      this.selectedFile
    );
    // Set the metadata for the file
    task.then((snapshot) => {
      return snapshot.ref.updateMetadata({
        customMetadata: {
          originalName: this.selectedFile.name,
          description: this.description,
          nome: this.nomeUsuario,
        },
      });
    });

    this.uploadProgress$ = task.percentageChanges();

    task.then(() => {
      fileRef.getDownloadURL().subscribe((downloadURL) => {
        this.downloadURL$ = downloadURL;
        const uploadTime = new Date().toISOString(); // Cria um objeto Date com a hora atual
        this.db.list("pdfs").push({
          name: fileName,
          url: downloadURL,
          description: this.description,
          uploadTime: uploadTime,
          size: this.selectedFile.size,
          nomeUsuario: this.nomeUsuario,
          serviceOrigem: this.serviceOrigem,
          
        }); // Salva a descrição junto com o URL e o nome do arquivo,
        this.uploadForm.get("description").setValue("");
        alert("PDF ANEXADO COM SUCESSO!!!");
      });
    });
  }

  get description() {
    return this.uploadForm.get("description").value;
  }

  get nome() {
    return this.uploadForm.get("nome").value;
  }

  get serviceOrigem() {
    return this.uploadForm.get("serviceOrigem").value;
  }

  openPdf(url: string) {
    window.open(url, "_blank", "height=600,width=800");
  }

  openModal() {
    this.dialog.open(ModalServicesComponent, { width: "1200px"});
  }
  
  onInputKeyUp(event: any) {
    const inputValue = event.target.value.trim(); // Remove os espaços extras
    event.target.value = inputValue; // Atualiza o valor do input sem os espaços extras
  }
 
  
}
