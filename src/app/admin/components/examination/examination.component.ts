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
	filterDataStatus : number = 2;
	subjectsDataStatus : number = 2;
	examDataStatus : number = 2;
	showAddFeature : boolean = false;
	filterForm : FormGroup;
	addDataForm : FormGroup;
	selectedFile: File;
	years = [2020,2019,2018,2017,2016,2015];

	constructor(public constants : Constants,
	public download : DownloadService,
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
		this.filterDataStatus = 2;
		this.departments = [];
		this.semesters = [];
		this.loader.showLoader();
	};

	getDepartmentsAndSectionsList() {
		this.resetDepartmentsAndSections();
		this.departmentService.getDepartmentsAndSections()
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.filterDataStatus = 1;
			this.departments = response.departments;
			this.semesters = response.inst_class;
		}, (errorCode) => {
			this.loader.hideLoader();
			this.filterDataStatus = errorCode;
		});
	};

	getSubjectsData() {
		this.resetExamsList();
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
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.subjectsDataStatus = 1;
			this.subjects = response;
		}, (errorCode) => {
			this.loader.hideLoader();
			this.subjectsDataStatus = errorCode;
		});
	};

	resetExamsList() {
		this.examDataStatus = 2;
		this.examsList = [];
	};

	getExamsList() {
		this.resetExamsList();
		this.loader.showLoader();
		this.adminExaminationService.getExamsList(this.filterForm.value)
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.examDataStatus = 1;
			this.examsList = response;
		}, (errorCode) => {
			this.loader.hideLoader();
			this.examDataStatus = errorCode;
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
		.subscribe(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getExamsList();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("EXAMINATION")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	deletePaper(paper) {
		this.loader.showLoader();
		this.adminExaminationService.deleteExamPaper(paper)
		.subscribe(() => {
			this.loader.hideLoader();
			this.getExamsList();
			this.toaster.showSuccess(this.translate.instant("FEATURE_DELETED_SUCCESSFULLY",{ value : this.translate.instant("EXAMINATION")} ));
		}, () => {
			this.loader.hideLoader();
		});
	}
}
