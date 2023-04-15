import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string, columnsToFilter: string[]): any[] {
    if (!items) return [];
    if (!searchTerm) return items;
    searchTerm = searchTerm.toLowerCase();
    return items.filter(item => {
      for (let column of columnsToFilter) {
        if (item[column] && item[column].toString().toLowerCase().includes(searchTerm)) {
          return true;
        }
      }
      return false;
    });
}


}
