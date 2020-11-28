import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
	semisters : any = [];
	departmentAndSemisterDataStatus = 2;
	filterForm : any;
	addStudentsForm : any;
	selectedFile: File = null;
  
	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private studentService : AdminStudentsService,
	private departmentService : AdminDepartmentService,
	private downloadService : DownloadService) {
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, [
				Validators.required
			]),
			'inst_class_id' : new FormControl(null, [
				Validators.required
			])
		});
		this.addStudentsForm = new FormGroup({
			'students_file' : new FormControl("", [
				Validators.required
			])
		});
	};

	get department_id() { 
		return this.filterForm.get('department_id'); 
	};

	get inst_class_id() { 
		return this.filterForm.get('inst_class_id'); 
	};

	get students_file() { 
		return this.addStudentsForm.get('students_file'); 
	};

	ngOnInit() {
		this.getDepartmentsAndSectionsList();
	};

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
			this.addStudentsForm.reset();
			this.selectedFile = null;
		}
	};

	disableAddFeatureForm() {
		return (this.addStudentsForm.valid && this.filterForm.valid && this.selectedFile) ? false : true;
	};

	onFileChange(event) {
		this.selectedFile = null;
		if (event.target.files.length > 0) {
			this.selectedFile = event.target.files[0];
		}
	};

	addStudents() {
		this.loader.showLoader();
		this.studentService.addStudents(this.filterForm.value, this.selectedFile)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getStudents(this.filterForm.value);
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("STUDENTS")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	downloadFile() {
		this.downloadService.download('student.csv');
	};

}
