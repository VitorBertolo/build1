import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const datePipe = new DatePipe('');
      return datePipe.transform(value, 'dd/MM/yyyy');
    }
    return null;
  }
}
