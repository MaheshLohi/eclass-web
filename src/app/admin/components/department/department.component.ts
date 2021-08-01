import { Component, OnInit } from '@angular/core';

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
  
	constructor(private _loader: LoaderService,
	private _department : AdminDepartmentService) { };

	ngOnInit() {
		this.getDepartments();
	};

	resetDepartmentsAndSections() {
		this.departmentDataStatus = 2;
		this.departments = [];
		this._loader.showLoader();
	};

	getDepartments() {
		this.resetDepartmentsAndSections();
		this._department.getDepartmentsAndSections()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.departmentDataStatus = 1;
			this.departments = response.departments;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.departmentDataStatus = errorCode;
		});
	};
}
