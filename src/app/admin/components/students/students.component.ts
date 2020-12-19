import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

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
	departmentAndSemesterDataStatus = 2;
	filterForm : FormGroup;
	addDataForm : FormGroup;
	studentsFile: File;
  
	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private studentService : AdminStudentsService,
	private departmentService : AdminDepartmentService,
	public downloadService : DownloadService) {
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, []),
			'inst_class_id' : new FormControl(null, [])
		});
		this.addDataForm = new FormGroup({
			'studentsFile' : new FormControl("", [])
		});
	};

	validateAddFormValue(formName) {
		return this.addDataForm.get(formName); 
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

	getStudentsData() {
		let data = this.filterForm.value;
		if(data.department_id && data.inst_class_id) {
			this.getStudents(data)
		}
	};

	resetStudents() {
		this.studentsDataStatus = 2;
		this.students = [];
		this.loader.showLoader();
	};

	getStudents(data) {
		this.resetStudents();
		this.studentService.getStudents(data.department_id, data.inst_class_id)
		.then((response:any) => {
			this.loader.hideLoader();
			this.studentsDataStatus = 1;
			this.students = response;
		}, () => {
			this.loader.hideLoader();
			this.studentsDataStatus = 0;
		});
	};

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			this.addDataForm.reset();
			this.studentsFile = null;
		}
	};

	disableAddFeatureForm() {
		return (this.addDataForm.valid && this.filterForm.valid && this.studentsFile) ? false : true;
	};

	onFileChange(event, fileTarget) {
		this[fileTarget] = null;
		if (event.target.files.length > 0) {
			this[fileTarget] = event.target.files[0];
		}
	};

	addStudents() {
		this.loader.showLoader();
		this.studentService.addStudents(this.filterForm.value, this.studentsFile)
		.then((response:any) => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.downloadService.downloadAsCsv(response.data,this.constants.STUDENT_CSV_CONTENTS,'students_list.csv');
			this.getStudents(this.filterForm.value);
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("STUDENTS")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};
}
