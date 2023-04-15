import { Injectable } from '@angular/core';
import { Courses } from './courses';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  value(value: any) {
    throw new Error('Method not implemented.');
  }
  coursesRef!: AngularFireList<any>;
  courseRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  //add courses
  AddCourses(course: Courses) {
    this.coursesRef.push({
      nome_curso: course.nome_curso,
      categoria1: course.categoria1,
      categoria2: course.categoria2,
      categoria3: course.categoria3,
      categoria4: course.categoria4,
      categoria5: course.categoria5,
      price: course.price,
      carga_horaria_online: course.carga_horaria_online,
      carga_horaria_presencial: course.carga_horaria_presencial,
      carga_horaria_total: course.carga_horaria_total,
      cont_prog1: course.cont_prog1,
      cont_prog2: course.cont_prog2,
      cont_prog3: course.cont_prog3,
      cont_prog4: course.cont_prog4,
      cont_prog5: course.cont_prog5,
      cont_prog6: course.cont_prog6,
      cont_prog7: course.cont_prog7,
      cont_prog8: course.cont_prog8,
      cont_prog9: course.cont_prog9,
      cont_prog10: course.cont_prog10,
      cont_prog11: course.cont_prog11,
      cont_prog12: course.cont_prog12,
      cont_prog13: course.cont_prog13,
      cont_prog14: course.cont_prog14,
      cont_prog15: course.cont_prog15,
      cont_prog16: course.cont_prog16,
      cont_prog17: course.cont_prog17,
      cont_prog18: course.cont_prog18,
      cont_prog19: course.cont_prog19,
      cont_prog20: course.cont_prog20,
      cont_prog21: course.cont_prog21,
      cont_prog22: course.cont_prog22,
      cont_prog23: course.cont_prog23,
      cont_prog24: course.cont_prog24,
      cont_prog25: course.cont_prog25,
      cont_prog26: course.cont_prog26,
      cont_prog27: course.cont_prog27,
      cont_prog28: course.cont_prog28,
      cont_prog29: course.cont_prog29,
      cont_prog30: course.cont_prog30,
      cont_prog31: course.cont_prog31,
      cont_prog32: course.cont_prog32,
      cont_prog33: course.cont_prog33,
      cont_prog34: course.cont_prog34,
      cont_prog35: course.cont_prog35,
      cont_prog36: course.cont_prog36,
      cont_prog37: course.cont_prog37,
      cont_prog38: course.cont_prog38,
      cont_prog39: course.cont_prog39,
      cont_prog40: course.cont_prog40,
      cont_prog41: course.cont_prog41,
      cont_prog42: course.cont_prog42,
      cont_prog43: course.cont_prog43,
      cont_prog44: course.cont_prog44,
      cont_prog45: course.cont_prog45,
      cont_prog46: course.cont_prog46,
      cont_prog47: course.cont_prog47,
      cont_prog48: course.cont_prog48,
      cont_prog49: course.cont_prog49,
      cont_prog50: course.cont_prog50,
      cont_prog51: course.cont_prog51,
      cont_prog52: course.cont_prog52,
      cont_prog53: course.cont_prog53,
      cont_prog54: course.cont_prog54,
      cont_prog55: course.cont_prog55,
      cont_prog56: course.cont_prog56,
      cont_prog57: course.cont_prog57,
      cont_prog58: course.cont_prog58,
      cont_prog59: course.cont_prog59,
      cont_prog60: course.cont_prog60,
    });
  }

  // Fetch Single Courses Object
  getCourse(id: string) {
    this.courseRef = this.db.object('courses-list/' + id);
    return this.courseRef;
  }

  // Fetch Courses List
  GetCoursesList() {
    this.coursesRef = this.db.list('courses-list');
    return this.coursesRef;
  }

  // Update Courses Object
  UpdateCourse(course: Courses) {
    this.courseRef.update({
      nome_curso: course.nome_curso,
      categoria1: course.categoria1,
      categoria2: course.categoria2,
      categoria3: course.categoria3,
      categoria4: course.categoria4,
      categoria5: course.categoria5,
      price: course.price,
      carga_horaria_online: course.carga_horaria_online,
      carga_horaria_presencial: course.carga_horaria_presencial,
      carga_horaria_total: course.carga_horaria_total,
      cont_prog1: course.cont_prog1,
      cont_prog2: course.cont_prog2,
      cont_prog3: course.cont_prog3,
      cont_prog4: course.cont_prog4,
      cont_prog5: course.cont_prog5,
      cont_prog6: course.cont_prog6,
      cont_prog7: course.cont_prog7,
      cont_prog8: course.cont_prog8,
      cont_prog9: course.cont_prog9,
      cont_prog10: course.cont_prog10,
      cont_prog11: course.cont_prog11,
      cont_prog12: course.cont_prog12,
      cont_prog13: course.cont_prog13,
      cont_prog14: course.cont_prog14,
      cont_prog15: course.cont_prog15,
      cont_prog16: course.cont_prog16,
      cont_prog17: course.cont_prog17,
      cont_prog18: course.cont_prog18,
      cont_prog19: course.cont_prog19,
      cont_prog20: course.cont_prog20,
      cont_prog21: course.cont_prog21,
      cont_prog22: course.cont_prog22,
      cont_prog23: course.cont_prog23,
      cont_prog24: course.cont_prog24,
      cont_prog25: course.cont_prog25,
      cont_prog26: course.cont_prog26,
      cont_prog27: course.cont_prog27,
      cont_prog28: course.cont_prog28,
      cont_prog29: course.cont_prog29,
      cont_prog30: course.cont_prog30,
      cont_prog31: course.cont_prog31,
      cont_prog32: course.cont_prog32,
      cont_prog33: course.cont_prog33,
      cont_prog34: course.cont_prog34,
      cont_prog35: course.cont_prog35,
      cont_prog36: course.cont_prog36,
      cont_prog37: course.cont_prog37,
      cont_prog38: course.cont_prog38,
      cont_prog39: course.cont_prog39,
      cont_prog40: course.cont_prog40,
      cont_prog41: course.cont_prog41,
      cont_prog42: course.cont_prog42,
      cont_prog43: course.cont_prog43,
      cont_prog44: course.cont_prog44,
      cont_prog45: course.cont_prog45,
      cont_prog46: course.cont_prog46,
      cont_prog47: course.cont_prog47,
      cont_prog48: course.cont_prog48,
      cont_prog49: course.cont_prog49,
      cont_prog50: course.cont_prog50,
      cont_prog51: course.cont_prog51,
      cont_prog52: course.cont_prog52,
      cont_prog53: course.cont_prog53,
      cont_prog54: course.cont_prog54,
      cont_prog55: course.cont_prog55,
      cont_prog56: course.cont_prog56,
      cont_prog57: course.cont_prog57,
      cont_prog58: course.cont_prog58,
      cont_prog59: course.cont_prog59,
      cont_prog60: course.cont_prog60,
    });
  }

  //Delete Courses Object
  DeleteCourse(id: string) {
    this.courseRef = this.db.object('courses-list/' + id);
    this.courseRef.remove();
  }
}
