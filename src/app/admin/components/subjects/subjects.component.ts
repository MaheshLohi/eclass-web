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
	filterDataStatus = 2;
	subjectsDataStatus : number = 2;
	facultiesDataStatus : number = 2;
	showAddFeature : boolean = false;
	filterForm : FormGroup;
	addSubjectsForm : FormGroup;
	assignFacultyForm : FormGroup;
	addAttachmentForm : FormGroup;
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
			'subjects' : new FormControl("", [Validators.required])
		});
		this.addAttachmentForm = new FormGroup({
			'attachment' : new FormControl("", [Validators.required])
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
		}, (errorCode) => {
			this.loader.hideLoader();
			this.facultiesDataStatus = errorCode;
		});
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
		}, (errorCode) => {
			this.loader.hideLoader();
			this.subjectsDataStatus = errorCode;
		});
	};

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			this.addSubjectsForm.reset();
		}
	};

	disableAddFeatureForm() {
		return (this.addSubjectsForm.valid) ? false : true;
	};

	onFileChange(event, fileTarget, formType) {
		let formName = (formType === 1) ? 'addSubjectsForm' : 'addAttachmentForm';
		this[formName].get(fileTarget).setValue(null);
		if (event.target.files.length > 0) {
			this[formName].get(fileTarget).setValue(event.target.files[0]);
		}
	};

	addSubjects() {
		this.loader.showLoader();
		this.subjectsService.addSubjects(this.addSubjectsForm.value)
		.subscribe(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			if(this.filterDataStatus === 1) {
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
		this.subjectsService.uploadSubjectAttachment(this.selectedSubjectId, this.addAttachmentForm.value, this.fileType)
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
		$('#addAttachmentForm')[0].reset();
		this.addAttachmentForm.reset();
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
