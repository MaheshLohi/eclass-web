import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var $: any; 

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { AdminDepartmentService } from '@adminServices/department/department.service';
import { DownloadService } from '@sharedServices/download/download.service';
import { AdminStudentsService } from '@adminServices/students/students.service';

@Component({
  	selector: 'app-admin-students',
  	templateUrl: './students.component.html',
  	styleUrls: ['./students.component.scss']
})
export class AdminStudentsComponent implements OnInit {

	students : any = [];
	studentsDataStatus : number = 2;
	showAddFeature : boolean = false;
	departments : any = [];
	semesters : any = [];
	filterDataStatus = 2;
	filterForm : FormGroup;
	addDataForm : FormGroup;
  
	constructor(public _constants : Constants,
	public _download : DownloadService,
	private _translate: TranslateService,
	private _toaster: ToasterService,
	private _loader: LoaderService,
	private _students : AdminStudentsService,
	private _department : AdminDepartmentService) {
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, []),
			'inst_class_id' : new FormControl(null, [])
		});
		this.addDataForm = new FormGroup({
			'students' : new FormControl("", [Validators.required])
		});
	};

	validateAddFormValue(formName) {
		return this.addDataForm.get(formName); 
	};

	ngOnInit() {
		this.getDepartmentsAndSectionsList();
	};

	resetDepartmentsAndSections() {
		this.filterDataStatus = 2;
		this.departments = [];
		this.semesters = [];
		this._loader.showLoader();
	};

	getDepartmentsAndSectionsList() {
		this.resetDepartmentsAndSections();
		this._department.getDepartmentsAndSections()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.filterDataStatus = 1;
			this.departments = response.departments;
			this.semesters = response.inst_class;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.filterDataStatus = errorCode;
		});
	};

	getStudentsData() {
		let data = this.filterForm.value;
		if(data.department_id && data.inst_class_id) {
			this.getStudents(data)
		}
	};

	resetStudents() {
		this.studentsDataStatus = 2;
		this.students = [];
		this._loader.showLoader();
	};

	getStudents(data) {
		this.resetStudents();
		this._students.getStudents(data.department_id, data.inst_class_id)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.studentsDataStatus = 1;
			this.students = response;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.studentsDataStatus = errorCode;
		});
	};

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			$('#addDataForm')[0].reset();
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

	addStudents() {
		this._loader.showLoader();
		this._students.addStudents(this.filterForm.value)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.showAddFeatureView(false);
			this._download.downloadAsCsv(response.data,this._constants.STUDENT_CSV_CONTENTS,'students_list.csv');
			this.getStudents(this.filterForm.value);
			this._toaster.showSuccess(this._translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this._translate.instant("STUDENTS")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};
}
