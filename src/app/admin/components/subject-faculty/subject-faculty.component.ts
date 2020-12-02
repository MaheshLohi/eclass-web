import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { AdminDepartmentService } from '@adminServices/department/department.service';
import { AdminSubjectsService } from '@adminServices/subjects/subjects.service';
import { AdminFacultiesService } from '@adminServices/faculties/faculties.service';
import { AdminSubjectFacultyService } from '@adminServices/subject-faculty/subject-faculty.service';

@Component({
  	selector: 'app-admin-subject-faculty',
  	templateUrl: './subject-faculty.component.html',
  	styleUrls: ['./subject-faculty.component.scss']
})
export class AdminSubjectFacultyComponent implements OnInit {

	subjectFaculties : any = [];
	subjectFacultiesDataStatus : number = 2;
	showAddFeature : boolean = false;
	departments : any = [];
	semisters : any = [];
	departmentAndSemisterDataStatus = 2;
	filterForm : any;
	addDataForm : any;
	subjects : any = [];
	subjectsDataStatus : number = 2;
	faculties : any = [];
	facultiesDataStatus : number = 2;

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private adminSubjectFacultyService : AdminSubjectFacultyService,
	private departmentService : AdminDepartmentService,
	private facultyService : AdminFacultiesService,
	private subjectsService : AdminSubjectsService) {
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, [
				Validators.required
			]),
			'inst_class_id' : new FormControl(null, [
				Validators.required
			]),
			'subject_id' : new FormControl(null, [
				Validators.required
			])
		});
		this.addDataForm = new FormGroup({
			'faculty_id' : new FormControl(null, [
				Validators.required
			])
		});
	};

	validateAddFormValue(formName) {
		return this.addDataForm.get(formName); 
	};

	ngOnInit() {
		this.getDepartmentsAndSectionsList();
	}

	resetDepartmentsAndSections() {
		this.departmentAndSemisterDataStatus = 2;
		this.departments = [];
		this.semisters = [];
		this.loader.showLoader();
	};

	getDepartmentsAndSectionsList() {
		this.resetDepartmentsAndSections();
		this.departmentService.getDepartmentsAndSections()
		.then((response:any) => {
			this.loader.hideLoader();
			this.departmentAndSemisterDataStatus = 1;
			this.departments = response.departments;
			this.semisters = response.inst_class;
		}, () => {
			this.loader.hideLoader();
			this.departmentAndSemisterDataStatus = 0;
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

	resetSubjectFaculties() {
		this.subjectFacultiesDataStatus = 2;
		this.subjectFaculties = [];
		this.loader.showLoader();
	};

	getSubjectFaculties() {
		this.resetSubjectFaculties();
		this.adminSubjectFacultyService.getSubjectFaculties(this.filterForm.value)
		.then((response:any) => {
			this.loader.hideLoader();
			this.subjectFacultiesDataStatus = 1;
			this.subjectFaculties = response;
		}, () => {
			this.loader.hideLoader();
			this.subjectFacultiesDataStatus = 0;
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
			this.addDataForm.reset();
			this.getFaculties();
		}
	};

	disableAddFeatureForm() {
		return (this.addDataForm.valid && this.filterForm.valid) ? false : true;
	};

	addSubjectFaculties() {
		this.loader.showLoader();
		this.adminSubjectFacultyService.addSubjectFaculties(this.filterForm.value, this.addDataForm.value)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getSubjectFaculties();
			this.toaster.showSuccess(this.translate.instant("FACULTY_ASSIGNED_TO_SUBJECT_SUCCESSFULLY"));
		}, () => {
			this.loader.hideLoader();
		});
	};

}
