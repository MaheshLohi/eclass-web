import { Component, Input } from '@angular/core';

@Component({
  	selector: 'app-sAdmin-list-error',
  	templateUrl: './list-error.component.html',
  	styleUrls: ['./list-error.component.scss']
})
export class SuperAdminListErrorComponent {

	@Input() errorId: number;
	@Input() errorCode: number;
	
}
