import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { AdminFacultiesService } from '@adminServices/faculties/faculties.service';
import { AdminDepartmentService } from '@adminServices/department/department.service';
import { DownloadService } from '@sharedServices/download/download.service';

@Component({
  	selector: 'app-admin-faculties',
  	templateUrl: './faculties.component.html',
  	styleUrls: ['./faculties.component.scss']
})
export class AdminFacultiesComponent implements OnInit {

	faculties : any = [];
	facultiesDataStatus : number = 2;
	showAddFeature : boolean = false;
	departments : any = [];
	filterDataStatus = 2;
	filterForm : any;
	addFacultiesForm : any;
  
	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private facultyService : AdminFacultiesService,
	private departmentService : AdminDepartmentService,
	private downloadService : DownloadService) {
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, [
				Validators.required
			])
		});
		this.addFacultiesForm = new FormGroup({
			'faculties_file' : new FormControl("", [
				Validators.required
			])
		});
	};

	get department_id() { 
		return this.filterForm.get('department_id'); 
	};

	ngOnInit() {
		this.getDepartmentsList();
	};

	resetDepartmentsDetails() {
		this.filterDataStatus = 2;
		this.departments = [];
		this.loader.showLoader();
	};

	getDepartmentsList() {
		this.resetDepartmentsDetails();
		this.departmentService.getDepartmentsAndSections()
		.then((response:any) => {
			this.loader.hideLoader();
			this.filterDataStatus = 1;
			this.departments = response.departments;
		}, () => {
			this.loader.hideLoader();
			this.filterDataStatus = 0;
		});
	};

	resetFaculties() {
		this.facultiesDataStatus = 2;
		this.faculties = [];
		this.loader.showLoader();
	};

	getFaculties() {
		this.resetFaculties();
		let data = this.filterForm.value;
		this.facultyService.getFaculties(data)
		.then((response:any) => {
			this.loader.hideLoader();
			this.facultiesDataStatus = 1;
			this.faculties = response;
		}, () => {
			this.loader.hideLoader();
			this.facultiesDataStatus = 0;
		});
	};

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			this.addFacultiesForm.reset();
		}
	};

	disableAddFeatureForm() {
		return (this.addFacultiesForm.valid && this.filterForm.valid) ? false : true;
	};

	onFileChange(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.addFacultiesForm.patchValue({
				faculties_file: file
			});
		}
	};

	addFaculties() {
		this.loader.showLoader();
		this.facultyService.addFaculties(this.addFacultiesForm.value,this.filterForm.value)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getFaculties();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("FACULTIES")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	downloadFile() {
		this.downloadService.download('faculties.csv');
	};
}
