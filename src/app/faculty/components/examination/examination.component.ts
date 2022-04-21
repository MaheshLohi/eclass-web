import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var $: any; 

import { DownloadService } from '@sharedServices/download/download.service';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { AdminDepartmentService } from '@adminServices/department/department.service';
import { AdminSubjectsService } from '@adminServices/subjects/subjects.service';
import { AdminExaminationService } from '@adminServices/examination/examination.service';
 
@Component({
  selector: 'app-faculty-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.scss']
})
export class FacultyExaminationComponent implements OnInit {

	departments : any = [];
	semesters : any = [];
	subjects : any = [];
	examsList : any = [];
	filterDataStatus : number = 2;
	subjectsDataStatus : number = 2;
	examDataStatus : number = 2;
	showAddFeature : boolean = false;
	filterForm : FormGroup;
	addDataForm : FormGroup;
	years = [2020,2019,2018,2017,2016,2015];

	constructor(public _download : DownloadService,
	private _translate: TranslateService,
	private _toaster: ToasterService,
	private _loader: LoaderService,
	private _department : AdminDepartmentService,
	private _examination : AdminExaminationService,
	private _subjects : AdminSubjectsService) { 
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, []),
			'inst_class_id' : new FormControl(null, []),
			'subject_id' : new FormControl(null, [])
		});
		this.addDataForm = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'year' : new FormControl(null, []),
			'paper' : new FormControl("", [Validators.required])
		});
	}

	validateAddFormValue(formName) {
		return this.addDataForm.get(formName); 
	};

	resetFormValue(formName, key) {
		this[formName].get(key).patchValue(null);
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

	getSubjectsData() {
		this.resetExamsList();
		let data = this.filterForm.value;
		if(data.department_id && data.inst_class_id) {
			this.getSubjects(data);
		}
	};
	
	resetSubjects() {
		this.subjectsDataStatus = 2;
		this.subjects = [];
		this._loader.showLoader();
		this.resetFormValue('filterForm','subject_id');
	};

	getSubjects(data) {
		this.resetSubjects();
		this._subjects.getSubjects(data.department_id, data.inst_class_id)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.subjectsDataStatus = 1;
			this.subjects = response;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.subjectsDataStatus = errorCode;
		});
	};

	resetExamsList() {
		this.examDataStatus = 2;
		this.examsList = [];
	};

	getExamsList() {
		this.resetExamsList();
		this._loader.showLoader();
		this._examination.getExamsList(this.filterForm.value)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.examDataStatus = 1;
			this.examsList = response;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.examDataStatus = errorCode;
		});
	};


	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			$('#addDataForm')[0].reset();
			this.addDataForm.reset();
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

	addExam() {
		this._loader.showLoader();
		this._examination.addExamination(this.filterForm.value, this.addDataForm.value)
		.subscribe(() => {
			this._loader.hideLoader();
			this.showAddFeatureView(false);
			this.getExamsList();
			this._toaster.showSuccess(this._translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this._translate.instant("EXAMINATION")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

	deletePaper(paper) {
		this._loader.showLoader();
		this._examination.deleteExamPaper(paper)
		.subscribe(() => {
			this._loader.hideLoader();
			this.getExamsList();
			this._toaster.showSuccess(this._translate.instant("FEATURE_DELETED_SUCCESSFULLY",{ value : this._translate.instant("EXAMINATION")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};
}
