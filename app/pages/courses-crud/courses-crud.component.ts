import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-crud',
  templateUrl: './courses-crud.component.html',
  styleUrls: ['./courses-crud.component.scss']
})
export class CoursesCrudComponent implements OnInit {
  
  ngOnInit(): void {
    alert("Todos os Treinamentos Estão de Acordo com as NR's Vigentes");
  }

}
