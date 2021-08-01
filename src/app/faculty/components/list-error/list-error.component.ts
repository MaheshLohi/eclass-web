import { Component, Input } from '@angular/core';

@Component({
  	selector: 'app-faculty-list-error',
  	templateUrl: './list-error.component.html',
  	styleUrls: ['./list-error.component.scss']
})
export class FacultyListErrorComponent {

	@Input() errorId: number;
	@Input() errorCode: number;
	
}
