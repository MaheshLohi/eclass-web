import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  	name: 'verifyData'
})
export class VerifyDataPipe implements PipeTransform {

  	transform(value: any, type?: string): any {
		if(value !== null && value !== '' && typeof value !== "undefined") {
			return value;
		}
		else {
			if(type === 'number') {
				return 0;
			}
			else {
				return 'N/A';
			}
		}
  	}

}
