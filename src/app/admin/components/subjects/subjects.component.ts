import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { AdminDepartmentService } from '@adminServices/department/department.service';
import { DownloadService } from '@sharedServices/download/download.service';
import { AdminSubjectsService } from '@adminServices/subjects/subjects.service';

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
  
	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private subjectsService : AdminSubjectsService,
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
		this.addSubjectsForm = new FormGroup({
			'subjects_file' : new FormControl("", [])
		});
	};

	get department_id() { 
		return this.filterForm.get('department_id'); 
	};

	get inst_class_id() { 
		return this.filterForm.get('inst_class_id'); 
	};

	ngOnInit() {
		this.getDepartmentsAndSectionsList();
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

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			this.addSubjectsForm.reset();
		}
	};

	disableAddFeatureForm() {
		return (this.addSubjectsForm.valid && this.filterForm.valid) ? false : true;
	};

	onFileChange(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.addSubjectsForm.patchValue({
				subjects_file: file
			});
		}
	};

	addSubjects() {
		this.loader.showLoader();
		this.subjectsService.addSubjects(this.addSubjectsForm.value,this.filterForm.value)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getSubjects(this.filterForm.value);
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("SUBJECTS")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	downloadFile() {
		this.downloadService.download('subjects.csv');
	};

}
