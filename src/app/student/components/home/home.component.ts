import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';

@Component({
  	selector: 'app-student-home',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.scss']
})
export class StudentHomeComponent {

	selectedSemister : any = {};
	isSemisterSelected : boolean = false;
	selectedSubject : any = {};
	isSubjectSelected : boolean = false;

    constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	public router: Router) { };

	onSemisterSelection(semister) {
		this.isSemisterSelected = true;
		this.selectedSemister = semister;
	};

	onSubjectSelection(subject) {
		this.isSubjectSelected = true;
		this.selectedSubject = subject;
		this.router.navigate(['student/chapters', this.selectedSubject.id]);
	};
}
