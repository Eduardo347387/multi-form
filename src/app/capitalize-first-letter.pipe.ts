import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

   transform(value: string | undefined): string {
     if (value !== undefined) {
        if (!value) {
          return '';
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
     } else {
       return 'N/A'
     }

  }

}
