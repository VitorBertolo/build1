import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss'],
})
export class AddCoursesComponent implements OnInit {
  public courseForm!: FormGroup;

  constructor(
    public coursesApi: CoursesService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.coursesApi.GetCoursesList();
    this.coursForm();
  }

  coursForm() {
    this.courseForm = this.fb.group({
      nome_curso: [''],
      categoria1: [''],
      categoria2: [''],
      categoria3: [''],
      categoria4: [''],
      categoria5: [''],
      price: [''],
      carga_horaria_online: [''],
      carga_horaria_presencial: [''],
      carga_horaria_total: [''],
      cont_prog1: [''],
      cont_prog2: [''],
      cont_prog3: [''],
      cont_prog4: [''],
      cont_prog5: [''],
      cont_prog6: [''],
      cont_prog7: [''],
      cont_prog8: [''],
      cont_prog9: [''],
      cont_prog10: [''],
      cont_prog11: [''],
      cont_prog12: [''],
      cont_prog13: [''],
      cont_prog14: [''],
      cont_prog15: [''],
      cont_prog16: [''],
      cont_prog17: [''],
      cont_prog18: [''],
      cont_prog19: [''],
      cont_prog20: [''],
      cont_prog21: [''],
      cont_prog22: [''],
      cont_prog23: [''],
      cont_prog24: [''],
      cont_prog25: [''],
      cont_prog26: [''],
      cont_prog27: [''],
      cont_prog28: [''],
      cont_prog29: [''],
      cont_prog30: [''],
      cont_prog31: [''],
      cont_prog32: [''],
      cont_prog33: [''],
      cont_prog34: [''],
      cont_prog35: [''],
      cont_prog36: [''],
      cont_prog37: [''],
      cont_prog38: [''],
      cont_prog39: [''],
      cont_prog40: [''],
      cont_prog41: [''],
      cont_prog42: [''],
      cont_prog43: [''],
      cont_prog44: [''],
      cont_prog45: [''],
      cont_prog46: [''],
      cont_prog47: [''],
      cont_prog48: [''],
      cont_prog49: [''],
      cont_prog50: [''],
      cont_prog51: [''],
      cont_prog52: [''],
      cont_prog53: [''],
      cont_prog54: [''],
      cont_prog55: [''],
      cont_prog56: [''],
      cont_prog57: [''],
      cont_prog58: [''],
      cont_prog59: [''],
      cont_prog60: [''],
    });
  }

  get nome() {
    return this.courseForm.get('nome_curso');
  }

  get categoria() {
    return this.courseForm.get('categoria');
  }

  get price() {
    return this.courseForm.get('price');
  }

  get carga_horaria_online() {
    return this.courseForm.get('carga_horaria_online');
  }

  get carga_horaria_presencial() {
    return this.courseForm.get('carga_horaria_presencial');
  }

  get carga_horaria_total() {
    return this.courseForm.get('carga_horaria_total');
  }

  get cont_prog1() {
    return this.courseForm.get('cont_prog1');
  }

  get cont_prog2() {
    return this.courseForm.get('cont_prog2');
  }

  get cont_prog3() {
    return this.courseForm.get('cont_prog3');
  }

  get cont_prog4() {
    return this.courseForm.get('cont_prog4');
  }

  get cont_prog5() {
    return this.courseForm.get('cont_prog5');
  }

  get cont_prog6() {
    return this.courseForm.get('cont_prog6');
  }

  get cont_prog7() {
    return this.courseForm.get('cont_prog7');
  }

  get cont_prog8() {
    return this.courseForm.get('cont_prog8');
  }

  get cont_prog9() {
    return this.courseForm.get('cont_prog9');
  }

  get cont_prog10() {
    return this.courseForm.get('cont_prog10');
  }

  get cont_prog11() {
    return this.courseForm.get('cont_prog11');
  }

  get cont_prog12() {
    return this.courseForm.get('cont_prog12');
  }

  get cont_prog13() {
    return this.courseForm.get('cont_prog13');
  }

  get cont_prog14() {
    return this.courseForm.get('cont_prog14');
  }

  get cont_prog15() {
    return this.courseForm.get('cont_prog15');
  }

  get cont_prog16() {
    return this.courseForm.get('cont_prog16');
  }

  get cont_prog17() {
    return this.courseForm.get('cont_prog17');
  }

  get cont_prog18() {
    return this.courseForm.get('cont_prog18');
  }

  get cont_prog19() {
    return this.courseForm.get('cont_prog19');
  }

  get cont_prog20() {
    return this.courseForm.get('cont_prog20');
  }

  get cont_prog21() {
    return this.courseForm.get('cont_prog21');
  }

  get cont_prog22() {
    return this.courseForm.get('cont_prog22');
  }

  get cont_prog23() {
    return this.courseForm.get('cont_prog23');
  }

  get cont_prog24() {
    return this.courseForm.get('cont_prog24');
  }

  get cont_prog25() {
    return this.courseForm.get('cont_prog25');
  }

  get cont_prog26() {
    return this.courseForm.get('cont_prog26');
  }

  get cont_prog27() {
    return this.courseForm.get('cont_prog27');
  }

  get cont_prog28() {
    return this.courseForm.get('cont_prog28');
  }

  get cont_prog29() {
    return this.courseForm.get('cont_prog29');
  }

  get cont_prog30() {
    return this.courseForm.get('cont_prog30');
  }

  get cont_prog31() {
    return this.courseForm.get('cont_prog31');
  }

  get cont_prog32() {
    return this.courseForm.get('cont_prog32');
  }

  get cont_prog33() {
    return this.courseForm.get('cont_prog33');
  }

  get cont_prog34() {
    return this.courseForm.get('cont_prog34');
  }

  get cont_prog35() {
    return this.courseForm.get('cont_prog35');
  }

  get cont_prog36() {
    return this.courseForm.get('cont_prog36');
  }

  get cont_prog37() {
    return this.courseForm.get('cont_prog37');
  }

  get cont_prog38() {
    return this.courseForm.get('cont_prog38');
  }

  get cont_prog39() {
    return this.courseForm.get('cont_prog39');
  }

  get cont_prog40() {
    return this.courseForm.get('cont_prog40');
  }

  get cont_prog41() {
    return this.courseForm.get('cont_prog41');
  }

  get cont_prog42() {
    return this.courseForm.get('cont_prog42');
  }

  get cont_prog43() {
    return this.courseForm.get('cont_prog43');
  }

  get cont_prog44() {
    return this.courseForm.get('cont_prog44');
  }

  get cont_prog45() {
    return this.courseForm.get('cont_prog45');
  }

  get cont_prog46() {
    return this.courseForm.get('cont_prog46');
  }

  get cont_prog47() {
    return this.courseForm.get('cont_prog47');
  }

  get cont_prog48() {
    return this.courseForm.get('cont_prog48');
  }

  get cont_prog49() {
    return this.courseForm.get('cont_prog49');
  }

  get cont_prog50() {
    return this.courseForm.get('cont_prog50');
  }

  get cont_prog51() {
    return this.courseForm.get('cont_prog51');
  }

  get cont_prog52() {
    return this.courseForm.get('cont_prog52');
  }

  get cont_prog53() {
    return this.courseForm.get('cont_prog53');
  }

  get cont_prog54() {
    return this.courseForm.get('cont_prog54');
  }

  get cont_prog55() {
    return this.courseForm.get('cont_prog55');
  }

  get cont_prog56() {
    return this.courseForm.get('cont_prog56');
  }

  get cont_prog57() {
    return this.courseForm.get('cont_prog57');
  }

  get cont_prog58() {
    return this.courseForm.get('cont_prog58');
  }

  get cont_prog59() {
    return this.courseForm.get('cont_prog59');
  }

  get cont_prog60() {
    return this.courseForm.get('cont_prog60');
  }

  resetForm() {
    this.courseForm.reset();
  }

  submitCoursesData() {
    this.coursesApi.AddCourses(this.courseForm.value);
    this.toastr.success('Treinamento criado com Sucesso!!!');
    this.resetForm();
    this.router.navigate(['/courses']);
  }
}