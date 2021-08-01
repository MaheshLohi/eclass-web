import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;

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
  
	constructor(public _constants : Constants,
	public _download : DownloadService,
	private _translate: TranslateService,
	private _toaster: ToasterService,
	private _loader: LoaderService,
	private _faculty : AdminFacultiesService,
	private _department : AdminDepartmentService) {
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, [])
		});
		this.addDataForm = new FormGroup({
			'faculties' : new FormControl("", [Validators.required])
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
		this._loader.showLoader();
	};

	getDepartmentsList() {
		this.resetDepartmentsDetails();
		this._department.getDepartmentsAndSections()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.filterDataStatus = 1;
			this.departments = response.departments;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.filterDataStatus = errorCode;
		});
	};

	resetFaculties() {
		this.facultiesDataStatus = 2;
		this.faculties = [];
		this._loader.showLoader();
	};

	getFaculties() {
		this.resetFaculties();
		let data = this.filterForm.value;
		this._faculty.getFaculties(data)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.facultiesDataStatus = 1;
			this.faculties = response;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.facultiesDataStatus = errorCode;
		});
	};

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			$('#addDataForm')[0].reset();
			this.addDataForm.reset();
		}
		else {
			this.getFaculties();
		}
	};

	disableAddFeatureForm() {
		return (this.addDataForm.valid && this.filterForm.valid) ? false : true;
	};

	onFileChange(event, fileTarget) {
		this["addDataForm"].get(fileTarget).setValue(null);
		if (event.target.files.length > 0) {
			this["addDataForm"].get(fileTarget).setValue(event.target.files[0]);
		}
	};

	addFaculties() {
		this._loader.showLoader();
		this._faculty.addFaculties(this.filterForm.value, this.addDataForm.value)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this._download.downloadAsCsv(response.data,this._constants.FACULTY_CSV_CONTENTS,'faculties_list.csv');
			this.showAddFeatureView(false);
			this.getFaculties();
			this._toaster.showSuccess(this._translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this._translate.instant("FACULTIES")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

	deleteFaculty(faculty) {
		this._loader.showLoader();
		this._faculty.deleteFaculty(faculty)
		.subscribe(() => {
			this._loader.hideLoader();
			this.getFaculties();
			this._toaster.showSuccess(this._translate.instant("FEATURE_DELETED_SUCCESSFULLY",{ value : this._translate.instant("FACULTY")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};
}
