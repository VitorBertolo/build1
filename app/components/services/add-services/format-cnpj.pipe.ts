import { Pipe, PipeTransform } from '@angular/core';
import { Directive, HostListener } from '@angular/core';
@Pipe({
  name: 'formatCnpj'
})
export class FormatCnpjPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const cnpj = event.target.value.replace(/\D/g, '');
    if (cnpj.length === 14) {
      event.target.value = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    } else {
      event.target.value = cnpj;
    }
  }

}
