import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  	selector: 'app-form-validator',
  	templateUrl: './formValidator.component.html',
  	styleUrls: ['./formValidator.component.scss']
})
export class FormValidatorComponent implements OnChanges {

	@Input() data: any;
	@Input() validateRequired? : boolean = true;
	@Input() validateEmail? : boolean = false;
	@Input() validateNameMinLength? : boolean = false;
	@Input() validatePasswordLength? : boolean = false;

  	ngOnChanges(changes: SimpleChanges) {
		for (let propName in changes) { 
			let change = changes[propName];
			this[propName] = change.currentValue;
		}
	};
}
