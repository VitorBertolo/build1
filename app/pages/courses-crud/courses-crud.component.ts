import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses-crud',
  templateUrl: './courses-crud.component.html',
  styleUrls: ['./courses-crud.component.scss']
})
export class CoursesCrudComponent implements OnInit {
  
  constructor(public toastr: ToastrService){}

  ngOnInit(): void {
    this.toastr.info("Treinamentos de Acordo com as Normas Vigentes.");
  }

}
