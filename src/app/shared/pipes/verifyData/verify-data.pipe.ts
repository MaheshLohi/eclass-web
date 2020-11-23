import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verifyData'
})
export class VerifyDataPipe implements PipeTransform {

  transform(value: any, isDate?: boolean): any {
    if(value !== null && value !== '') {
      return value;
    }
    else {
      return 'N/A'
    }
  }

}
