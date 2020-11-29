import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentSemisterService } from '@studentServices/semister/semister.service';

@Component({
  	selector: 'app-student-semister',
  	templateUrl: './semister.component.html',
  	styleUrls: ['./semister.component.scss']
})
export class StudentSemisterComponent implements OnInit {

  	semisters : any = [];
	semistersDataStatus : number = 2;
	@Output() public semisterSelected = new EventEmitter();

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	public router: Router,
	private studentSemisterService : StudentSemisterService) { };

	ngOnInit() {
		this.getSemistersList();
	}

	resetSemistersList() {
		this.semistersDataStatus = 2;
		this.semisters = [];
		this.loader.showLoader();
	};

	getSemistersList() {
		this.resetSemistersList();
		this.studentSemisterService.getSemistersList()
		.then((response:any) => {
			this.loader.hideLoader();
			this.semistersDataStatus = 1;
			this.semisters = response.inst_class;
		}, () => {
			this.loader.hideLoader();
			this.semistersDataStatus = 0;
		});
	};

	selectSemister(semister) {
		this.semisterSelected.emit(semister);
	};

}
