import { Component, OnInit } from '@angular/core';

import { Constants } from '@app/constants';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { AdminDepartmentService } from '@adminServices/department/department.service';

@Component({
  	selector: 'app-admin-department',
  	templateUrl: './department.component.html',
  	styleUrls: ['./department.component.scss']
})
export class AdminDepartmentComponent implements OnInit {

	departments : any = [];
	departmentDataStatus : number = 2;
  
	constructor(public constants : Constants,
	private loader: LoaderService,
	private departmentService : AdminDepartmentService) { };

	ngOnInit() {
		this.getDepartments();
	};

	resetDepartmentsAndSections() {
		this.departmentDataStatus = 2;
		this.departments = [];
		this.loader.showLoader();
	};

	getDepartments() {
		this.resetDepartmentsAndSections();
		this.departmentService.getDepartmentsAndSections()
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.departmentDataStatus = 1;
			this.departments = response.departments;
		}, (errorCode) => {
			this.loader.hideLoader();
			this.departmentDataStatus = errorCode;
		});
	};
}
