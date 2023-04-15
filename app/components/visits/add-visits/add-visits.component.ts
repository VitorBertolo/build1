import { VisitsService } from './../shared/visits.service';
import { Component } from '@angular/core';
import { Visits } from '../shared/visits';

@Component({
  selector: 'app-add-visits',
  templateUrl: './add-visits.component.html',
  styleUrls: ['./add-visits.component.scss']
})
export class AddVisitsComponent {

  constructor(private VisitsService: VisitsService) {}


}

