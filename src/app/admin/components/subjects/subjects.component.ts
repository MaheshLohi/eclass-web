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

	departments : any = [];
	semesters : any = [];
	subjects : any = [];
	faculties : any = [];
	departmentAndSectionDataStatus = 2;
	subjectsDataStatus : number = 2;
	facultiesDataStatus : number = 2;
	showAddFeature : boolean = false;
	filterForm : FormGroup;
	addSubjectsForm : FormGroup;
	assignFacultyForm : FormGroup;
	subjectsFile: File;
	attachmentFile : File;
	selectedSubjectId : number;
	fileType : number;
	assignFacultyType : number;
  
	constructor(public constants : Constants,
	public downloadService : DownloadService,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private subjectsService : AdminSubjectsService,
	private departmentService : AdminDepartmentService,
	private facultyService : AdminFacultiesService) {
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, []),
			'inst_class_id' : new FormControl(null, [])
		});
		this.addSubjectsForm = new FormGroup({
			'subjectsFile' : new FormControl("", [])
		});
		this.assignFacultyForm = new FormGroup({
			'faculty_id' : new FormControl(null, [])
		});
	};

	validateAddSubjectsFormValue(formName) {
		return this.addSubjectsForm.get(formName); 
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
		.subscribe((response:any) => {
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
		this.semesters = [];
		this.loader.showLoader();
	};

	getDepartmentsAndSectionsList() {
		this.resetDepartmentsAndSections();
		this.departmentService.getDepartmentsAndSections()
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.departmentAndSectionDataStatus = 1;
			this.departments = response.departments;
			this.semesters = response.inst_class;
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
		.subscribe((response:any) => {
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
			this.subjectsFile = null;
		}
	};

	disableAddFeatureForm() {
		return (this.addSubjectsForm.valid && this.subjectsFile) ? false : true;
	};

	onFileChange(event, fileTarget) {
		this[fileTarget] = null;
		if (event.target.files.length > 0) {
			this[fileTarget] = event.target.files[0];
		}
	};

	addSubjects() {
		this.loader.showLoader();
		this.subjectsService.addSubjects(this.subjectsFile)
		.subscribe(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			if(this.departmentAndSectionDataStatus === 1) {
				this.getSubjectsData();
			}
			else {
				this.getDepartmentsAndSectionsList();
			}
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("SUBJECTS")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	uploadSubjectAttachment() {
		this.loader.showLoader();
		this.subjectsService.uploadSubjectAttachment(this.selectedSubjectId, this.attachmentFile, this.fileType)
		.subscribe(() => {
			this.loader.hideLoader();
			this.getSubjects(this.filterForm.value);
			$('#upload-files').modal('hide');
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("SYLLABUS")} ));
		}, () => {
			this.loader.hideLoader();
		});
	}

	initialiseModal(fileType,subject) {
		this.fileType = fileType;
		this.selectedSubjectId = subject.id;
	}

	initialiseAssignModal(subject,type) {
		this.assignFacultyType = type;
		this.selectedSubjectId = subject.id;
		this.assignFacultyForm.get('faculty_id').patchValue(this.assignFacultyType ? subject.faculty_id : null);
	}

	assignFaculties() {
		this.loader.showLoader();
		this.subjectsService.assignFaculties(this.assignFacultyForm.value, this.selectedSubjectId)
		.subscribe(() => {
			this.loader.hideLoader();
			this.getSubjects(this.filterForm.value);
			$('#assign-faculty').modal('hide');
			this.toaster.showSuccess(this.translate.instant("FACULTY_ASSIGNED_TO_SUBJECT_SUCCESSFULLY"));
		}, () => {
			this.loader.hideLoader();
		});
	};

}
