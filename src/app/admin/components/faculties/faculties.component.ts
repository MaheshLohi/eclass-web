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
	departments : any = [];
	facultiesDataStatus : number = 2;
	filterDataStatus : number = 2;
	showAddFeature : boolean = false;
	filterForm : FormGroup;
	addDataForm : FormGroup;
	facultiesFile: File;
  
	constructor(public constants : Constants,
	public downloadService : DownloadService,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private facultyService : AdminFacultiesService,
	private departmentService : AdminDepartmentService) {
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, [])
		});
		this.addDataForm = new FormGroup({
			'facultiesFile' : new FormControl("", [])
		});
	};

	validateAddFormValue(formName) {
		return this.addDataForm.get(formName); 
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
		.subscribe((response:any) => {
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
		.subscribe((response:any) => {
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
			this.addDataForm.reset();
			this.facultiesFile = null;
		}
		else {
			this.getFaculties();
		}
	};

	disableAddFeatureForm() {
		return (this.addDataForm.valid && this.filterForm.valid && this.facultiesFile) ? false : true;
	};

	onFileChange(event, fileTarget) {
		this[fileTarget] = null;
		if (event.target.files.length > 0) {
			this[fileTarget] = event.target.files[0];
		}
	};

	addFaculties() {
		this.loader.showLoader();
		this.facultyService.addFaculties(this.filterForm.value, this.facultiesFile)
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.downloadService.downloadAsCsv(response.data,this.constants.FACULTY_CSV_CONTENTS,'faculties_list.csv');
			this.showAddFeatureView(false);
			this.getFaculties();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("FACULTIES")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	deleteFaculty(faculty) {
		this.loader.showLoader();
		this.facultyService.deleteFaculty(faculty)
		.subscribe(() => {
			this.loader.hideLoader();
			this.getFaculties();
			this.toaster.showSuccess(this.translate.instant("FEATURE_DELETED_SUCCESSFULLY",{ value : this.translate.instant("FACULTY")} ));
		}, () => {
			this.loader.hideLoader();
		});
	}
}
