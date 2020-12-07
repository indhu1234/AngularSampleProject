import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value, search): any[] {
    if (!value || !search) {
      return value;
    } else {
      return value.filter(list => list.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
  }
}
