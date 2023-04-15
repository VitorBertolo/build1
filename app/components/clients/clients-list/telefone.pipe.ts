import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    let telefone = value.replace(/\D/g, '');

    if (telefone.length === 10) {
      return `(${telefone.substring(0, 2)}) ${telefone.substring(2, 6)}-${telefone.substring(6, 10)}`;
    } else if (telefone.length === 11) {
      return `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7, 11)}`;
    } else {
      if (telefone.length === 8) {
        return `${telefone.substring(0, 4)}-${telefone.substring(4, 8)}`;
      } else {
        return telefone;
      }
    }
    
  }

}
