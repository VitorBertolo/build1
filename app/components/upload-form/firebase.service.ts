import { Injectable, Input } from "@angular/core";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { getDatabase, ref as dbRef, set } from "@firebase/database";
import { AngularFireStorage } from "@angular/fire/compat/storage";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  @Input() pdfs: any[];
  constructor(private storage: AngularFireStorage) {}

  async uploadPdf(fileName: string, pdfDataUrl: string): Promise<string> {
    const pdfStorageRef = ref(this.storage.storage, `pdfs/${fileName}`);
    await uploadString(pdfStorageRef, pdfDataUrl, "data_url");
    const pdfDownloadUrl = await getDownloadURL(pdfStorageRef);
    const pdfDbRef = dbRef(getDatabase(), `pdfs/${fileName}`);
    set(pdfDbRef, { downloadUrl: pdfDownloadUrl });
    return pdfDownloadUrl;
  }
}
