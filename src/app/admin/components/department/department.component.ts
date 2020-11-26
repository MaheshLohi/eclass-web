import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { DownloadService } from '@sharedServices/download/download.service';
import { AdminDepartmentService } from '@adminServices/department/department.service';

@Component({
  	selector: 'app-admin-department',
  	templateUrl: './department.component.html',
  	styleUrls: ['./department.component.scss']
})
export class AdminDepartmentComponent implements OnInit {

	departments : any = [];
	departmentDataStatus : number = 2;
	showAddFeature : boolean = false;
	addDepartmentForm : any;
  
	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private departmentService : AdminDepartmentService,
	private downloadService : DownloadService) { 
		this.addDepartmentForm = new FormGroup({
			'department_file' : new FormControl("", [])
		});
	};

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
		.then((response:any) => {
			this.loader.hideLoader();
			this.departmentDataStatus = 1;
			this.departments = response.departments;
		}, () => {
			this.loader.hideLoader();
			this.departmentDataStatus = 0;
		});
	};

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			this.addDepartmentForm.reset();
		}
	};

	disableAddFeatureForm() {
		return this.addDepartmentForm.valid ? false : true;
	};

	onFileChange(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.addDepartmentForm.patchValue({
				department_file: file
			});
		}
	};

	addDepartment() {
		this.loader.showLoader();
		this.departmentService.addDepartment(this.addDepartmentForm.value)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getDepartments();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("DEPARTMENTS")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	downloadFile() {
		this.downloadService.download('subjects.csv');
	}
}
