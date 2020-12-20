import { Component, Input } from '@angular/core';

@Component({
  	selector: 'app-student-list-error',
  	templateUrl: './list-error.component.html',
  	styleUrls: ['./list-error.component.scss']
})
export class StudentListErrorComponent {

	@Input() errorId: number;
	@Input() errorCode: number;
	
}
