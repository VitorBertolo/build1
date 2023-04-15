import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/courses.service';
import { Courses } from '../shared/courses';
import { ToastrService } from 'ngx-toastr';
import { PDFDocument } from 'pdf-lib';
import jsPDF from 'jspdf';

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-print-list-courses',
  templateUrl: './print-list-courses.component.html',
  styleUrls: ['./print-list-courses.component.scss']
})
export class PrintListCoursesComponent implements OnInit {

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

  printStyle = {
    table: {'width': '100%'},
    td: {'border': '1px solid black'},
    th: {'border': '1px solid black'}
  };
  

}
