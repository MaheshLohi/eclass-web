import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  	name: 'verifyData'
})
export class VerifyDataPipe implements PipeTransform {

	constructor(private _translate: TranslateService) { };

  	transform(value: any, type?: string): any {
		if(value !== null && value !== '' && typeof value !== "undefined") {
			return value;
		}
		else {
			if(type === 'number') {
				return 0;
			}
			else {
				return this._translate.instant("NA");
			}
		}
  	}

}
