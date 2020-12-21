import { Component, Input } from '@angular/core';

@Component({
  	selector: 'app-admin-list-error',
  	templateUrl: './list-error.component.html',
  	styleUrls: ['./list-error.component.scss']
})
export class AdminListErrorComponent {

	@Input() errorId: number;
	@Input() errorCode: number;
	
}
