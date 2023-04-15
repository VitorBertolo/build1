import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/courses.service';
import { Courses } from '../shared/courses';
import { ToastrService } from 'ngx-toastr';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  p: number = 1;
  Course!: Courses[];
  hideWhenNoUsers: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public courseApi: CoursesService, public toastr: ToastrService){}

  ngOnInit(){
    this.dataState();
    let s = this.courseApi.GetCoursesList();
    s.snapshotChanges().subscribe((data) => {
      this.Course = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Course.push(a as Courses);
      });
    });
  }

  dataState(){
    this.courseApi
    .GetCoursesList()
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
  
  deleteCourse(course){
    if (window.confirm('Você realmente deseja excluir este Treinamento?')) {
      this.courseApi.DeleteCourse(course.$key);
      this.toastr.success('Treinamento Deletado com Sucesso!!');
    }
  }

  generatePDF() {
    const documentDefinition = {
      pageOrientation: 'landscape',
      content: [
        {
          table: {
            fillPage: true,
            headerRows: 1,
            widths: ['auto', '*', '*', '*', '*', '*', '*'],
            body: [
              [
                'KEY/ID',
                'NOME DO TREINAMENTO',
                'CATEGORIA',
                'CARGA HORÁRIA ONLINE',
                'CARGA HORÁRIA PRESENCIAL',
                'CARGA HORÁRIA TOTAL',
                '(R$) PREÇO'
              ],
              ...this.Course.map(course => [
                course.$key,
                course.nome_curso,
                course.categoria1,
                `${course.carga_horaria_online} Hora(s)`,
                `${course.carga_horaria_presencial} Hora(s)`,
                `${course.carga_horaria_total} Hora(s)`,
                `R$ ${course.price}`
              ])
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }
  
}
