import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  	name: 'prepareObject'
})
export class PrepareObjectPipe implements PipeTransform {

  	transform(value) : any {
		let array = [];
		for (let key in value) {
			array.push({key: key, value: value[key]});
		}
    	return array;
  	}

}
