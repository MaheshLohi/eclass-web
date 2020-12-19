import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { DownloadService } from '@sharedServices/download/download.service';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { AdminDepartmentService } from '@adminServices/department/department.service';
import { AdminSubjectsService } from '@adminServices/subjects/subjects.service';
import { AdminExaminationService } from '@adminServices/examination/examination.service';

@Component({
  selector: 'app-admin-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.scss']
})
export class AdminExaminationComponent implements OnInit {

	departments : any = [];
	semesters : any = [];
	subjects : any = [];
	examsList : any = [];
	departmentAndSemesterDataStatus : number = 2;
	subjectsDataStatus : number = 2;
	examDataStatus : number = 2;
	showAddFeature : boolean = false;
	filterForm : FormGroup;
	addDataForm : FormGroup;
	selectedFile: File;
	years = [2020,2019,2018,2017,2016,2015];

	constructor(public constants : Constants,
	public downloadService : DownloadService,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private departmentService : AdminDepartmentService,
	private adminExaminationService : AdminExaminationService,
	private subjectsService : AdminSubjectsService) { 
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, []),
			'inst_class_id' : new FormControl(null, []),
			'subject_id' : new FormControl(null, [])
		});
		this.addDataForm = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'year' : new FormControl("", []),
			'paper' : new FormControl("", [])
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
		this.departmentAndSemesterDataStatus = 2;
		this.departments = [];
		this.semesters = [];
		this.loader.showLoader();
	};

	getDepartmentsAndSectionsList() {
		this.resetDepartmentsAndSections();
		this.departmentService.getDepartmentsAndSections()
		.then((response:any) => {
			this.loader.hideLoader();
			this.departmentAndSemesterDataStatus = 1;
			this.departments = response.departments;
			this.semesters = response.inst_class;
		}, () => {
			this.loader.hideLoader();
			this.departmentAndSemesterDataStatus = 0;
		});
	};

	getSubjectsData() {
		let data = this.filterForm.value;
		if(data.department_id && data.inst_class_id) {
			this.getSubjects(data)
		}
	};
	
	resetSubjects() {
		this.subjectsDataStatus = 2;
		this.subjects = [];
		this.loader.showLoader();
		this.resetFormValue('filterForm','subject_id');
	};

	getSubjects(data) {
		this.resetSubjects();
		this.subjectsService.getSubjects(data.department_id, data.inst_class_id)
		.then((response:any) => {
			this.loader.hideLoader();
			this.subjectsDataStatus = 1;
			this.subjects = response;
		}, () => {
			this.loader.hideLoader();
			this.subjectsDataStatus = 0;
		});
	};

	resetExamsList() {
		this.examDataStatus = 2;
		this.examsList = [];
		this.loader.showLoader();
	};

	getExamsList() {
		this.resetExamsList();
		this.adminExaminationService.getExamsList(this.filterForm.value)
		.then((response:any) => {
			this.loader.hideLoader();
			this.examDataStatus = 1;
			this.examsList = response;
			console.log(JSON.stringify(this.examsList))
		}, () => {
			this.loader.hideLoader();
			this.examDataStatus = 0;
		});
	};


	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			this.addDataForm.reset();
			this.selectedFile = null;
		}
	};

	disableAddFeatureForm() {
		return (this.addDataForm.valid && this.filterForm.valid && this.selectedFile) ? false : true;
	};

	onFileChange(event) {
		this.selectedFile = null;
		if (event.target.files.length > 0) {
			this.selectedFile = event.target.files[0];
		}
	};

	addExam() {
		this.loader.showLoader();
		this.adminExaminationService.addExamination(this.filterForm.value, this.addDataForm.value, this.selectedFile)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getExamsList();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("EXAMINATION")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};
}
