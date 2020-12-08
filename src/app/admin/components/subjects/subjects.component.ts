import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var $: any; 

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { AdminDepartmentService } from '@adminServices/department/department.service';
import { DownloadService } from '@sharedServices/download/download.service';
import { AdminSubjectsService } from '@adminServices/subjects/subjects.service';
import { AdminFacultiesService } from '@adminServices/faculties/faculties.service';

@Component({
  	selector: 'app-admin-subjects',
  	templateUrl: './subjects.component.html',
  	styleUrls: ['./subjects.component.scss']
})
export class AdminSubjectsComponent implements OnInit {

	subjects : any = [];
	subjectsDataStatus : number = 2;
	showAddFeature : boolean = false;
	departments : any = [];
	semisters : any = [];
	departmentAndSectionDataStatus = 2;
	filterForm : any;
	addSubjectsForm : any;
	selectedFile: File = null;
	attachmentFile : File = null;
	selectedSubjectId : number;
	fileType : number;
	assignFacultyForm : any;
	faculties : any = [];
	facultiesDataStatus : number = 2;
  
	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private subjectsService : AdminSubjectsService,
	private departmentService : AdminDepartmentService,
	private facultyService : AdminFacultiesService,
	private downloadService : DownloadService) {
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, [
				Validators.required
			]),
			'inst_class_id' : new FormControl(null, [
				Validators.required
			])
		});
		this.addSubjectsForm = new FormGroup({
			'subjects_file' : new FormControl("", [])
		});
		this.assignFacultyForm = new FormGroup({
			'faculty_id' : new FormControl(null, [
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

	get subjects_file() { 
		return this.addSubjectsForm.get('subjects_file'); 
	};

	validateAssignFacultyFormValue(formName) {
		return this.assignFacultyForm.get(formName); 
	};

	ngOnInit() {
		this.getDepartmentsAndSectionsList();
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

	resetDepartmentsAndSections() {
		this.departmentAndSectionDataStatus = 2;
		this.departments = [];
		this.semisters = [];
		this.loader.showLoader();
	};

	getDepartmentsAndSectionsList() {
		this.resetDepartmentsAndSections();
		this.departmentService.getDepartmentsAndSections()
		.then((response:any) => {
			this.loader.hideLoader();
			this.departmentAndSectionDataStatus = 1;
			this.departments = response.departments;
			this.semisters = response.inst_class;
		}, () => {
			this.loader.hideLoader();
			this.departmentAndSectionDataStatus = 0;
		});
	};

	getSubjectsData() {
		let data = this.filterForm.value;
		if(data.department_id && data.inst_class_id) {
			this.getSubjects(data);
			this.getFaculties();
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

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			this.addSubjectsForm.reset();
			this.selectedFile = null;
		}
	};

	disableAddFeatureForm() {
		return (this.addSubjectsForm.valid && this.filterForm.valid && this.selectedFile) ? false : true;
	};

	onFileChange(event) {
		this.selectedFile = null;
		if (event.target.files.length > 0) {
			this.selectedFile = event.target.files[0];
		}
	};

	onAttachmentChange(event) {
		this.attachmentFile = null;
		if (event.target.files.length > 0) {
			this.attachmentFile = event.target.files[0];
		}
	};

	addSubjects() {
		this.loader.showLoader();
		this.subjectsService.addSubjects(this.filterForm.value, this.selectedFile)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getSubjects(this.filterForm.value);
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("SUBJECTS")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	uploadSubjectAttachment() {
		this.loader.showLoader();
		this.subjectsService.uploadSubjectAttachment(this.selectedSubjectId, this.attachmentFile, this.fileType)
		.then(() => {
			this.loader.hideLoader();
			this.getSubjects(this.filterForm.value);
			$('#upload-files').modal('hide');
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("SYLLABUS")} ));
		}, () => {
			this.loader.hideLoader();
		});
	}

	downloadFile() {
		this.downloadService.download('public/subjects.csv');
	};

	downloadAttachment(filePath) {
		this.downloadService.download(filePath);
	}

	initialiseModal(fileType,subject) {
		this.fileType = fileType;
		this.selectedSubjectId = subject.id;
	}

	initialiseAssignModal(subject) {
		this.selectedSubjectId = subject.id;
	}

	assignFaculties() {
		this.loader.showLoader();
		this.subjectsService.assignFaculties(this.assignFacultyForm.value, this.selectedSubjectId)
		.then(() => {
			this.loader.hideLoader();
			this.getSubjects(this.filterForm.value);
			$('#assign-faculty').modal('hide');
			this.toaster.showSuccess(this.translate.instant("FACULTY_ASSIGNED_TO_SUBJECT_SUCCESSFULLY"));
		}, () => {
			this.loader.hideLoader();
		});
	};

}
