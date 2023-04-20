import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/user.service';
import { User } from '../shared/user';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit  {
  p: number = 1;
  User!: User[];
  hideWhenNoUsers: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  private readonly collectionName = 'users-list';
  private readonly collection: AngularFirestoreCollection<User>;

  constructor(public userApi: UsersService, public toastr: ToastrService, private afDb: AngularFireDatabase){}

  ngOnInit(){
    this.dataState();
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

  dataState(){
    this.userApi
    .GetUsersList()
    .valueChanges()
    .subscribe((data) => {
      this.preLoader = false;
        if (data.length <= 0) {
          this.hideWhenNoUsers = false;
          this.noData = true;
        } else {
          this.hideWhenNoUsers = true;
          this.noData = false;
        }
    })
  }

  deleteUser(user){
    if (window.confirm('Você realmente deseja excluir este usuário?')) {
      this.userApi.DeleteUser(user.$key);
      this.toastr.success('Usuário Deletado com Sucesso!!');
    }
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Lista_Avulsa.pdf');
    });
  }

  generateReport() {
    this.afDb.list('/users-list').valueChanges().subscribe(data => {
      const header = ['nome', 'Idade', 'Endereço', 'E-mail'];
      const worksheet = this.createWorksheet(data, header);
      const excelBuffer: any = this.generateExcelBuffer(worksheet);
      const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      const filename = 'report.xlsx';
      saveAs(dataBlob, filename);
    });
  }

  createWorksheet(data: any[], header: string[]) {
    const worksheet = [];
    worksheet.push(header);
    data.forEach(row => {
      const rowValues = [];
      rowValues.push(row.nome);
      rowValues.push(row.idade);
      rowValues.push(row.endereco);
      rowValues.push(row.email);
      worksheet.push(rowValues);
    });
    return worksheet;
}


  generateExcelBuffer(worksheet: any[]) {
    const workbook = {
      Sheets: { 'data': worksheet },
      SheetNames: ['data']
    };
    const excelBuffer: any = this.writeExcel(workbook, { bookType: 'xlsx', type: 'array' });
    return excelBuffer;
  }

  writeExcel(workbook: any, options: any) {
    const fileType = options.bookType || 'xlsx';
    const mimeType = {
      'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'xls': 'application/vnd.ms-excel',
      'csv': 'text/csv'
    }[fileType];
    const fileExtension = '.' + fileType;
    const excelBuffer = XLSX.write(workbook, { bookType: fileType, type: 'array' });
    return excelBuffer;
  }

}

