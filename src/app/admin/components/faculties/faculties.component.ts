import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { SlideInOutAnimation } from '@app/animations';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { AdminFacultiesService } from '@adminServices/faculties/faculties.service';
import { AdminDepartmentService } from '@adminServices/department/department.service';
import { DownloadService } from '@sharedServices/download/download.service';

@Component({
  	selector: 'app-admin-faculties',
  	templateUrl: './faculties.component.html',
  	styleUrls: ['./faculties.component.scss'],
  	animations: [SlideInOutAnimation]
})
export class AdminFacultiesComponent implements OnInit {

	faculties : any = [];
	facultiesDataStatus : number = 2;
	showAddFeature : boolean = false;
	departments : any = [];
	sections : any = [];
	departmentAndSectionDataStatus = 2;
	facultiesFilterForm : any;
	addFacultiesForm : any;
  
	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private facultyService : AdminFacultiesService,
	private departmentService : AdminDepartmentService,
	private downloadService : DownloadService) {
		this.facultiesFilterForm = new FormGroup({
			'department_id' : new FormControl(null, [
				Validators.required
			]),
			'inst_class_id' : new FormControl(null, [
				Validators.required
			])
		});
		this.addFacultiesForm = new FormGroup({
			'faculties_file' : new FormControl("", [])
		});
	};

	get department_id() { 
		return this.facultiesFilterForm.get('department_id'); 
	};

	get inst_class_id() { 
		return this.facultiesFilterForm.get('inst_class_id'); 
	};

	ngOnInit() {
		this.getDepartmentsAndSectionsList();
	};

	resetDepartmentsAndSections() {
		this.departmentAndSectionDataStatus = 2;
		this.departments = [];
		this.sections = [];
		this.loader.showLoader();
	};

	getDepartmentsAndSectionsList() {
		this.resetDepartmentsAndSections();
		this.departmentService.getDepartmentsAndSections()
		.then((response:any) => {
			this.loader.hideLoader();
			this.departmentAndSectionDataStatus = 1;
			this.departments = response.departments;
			this.sections = response.inst_class;
		}, () => {
			this.loader.hideLoader();
			this.departmentAndSectionDataStatus = 0;
		});
	};

	getFacultiesData() {
		let data = this.facultiesFilterForm.value;
		if(data.department_id && data.inst_class_id) {
			this.getFaculties(data)
		}
	};

	resetFaculties() {
		this.facultiesDataStatus = 2;
		this.faculties = [];
		this.loader.showLoader();
	};

	getFaculties(data) {
		this.resetFaculties();
		this.facultyService.getFaculties(data.department_id, data.inst_class_id)
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
			this.addFacultiesForm.reset();
		}
	};

	disableAddFeatureForm() {
		return (this.addFacultiesForm.valid && this.facultiesFilterForm.valid) ? false : true;
	};

	onFileChange(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.addFacultiesForm.patchValue({
				faculties_file: file
			});
		}
	};

	addFaculties() {
		this.loader.showLoader();
		this.facultyService.addFaculties(this.addFacultiesForm.value,this.facultiesFilterForm.value)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getFaculties(this.facultiesFilterForm.value);
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("FACULTIES")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	downloadFile() {
		this.downloadService.download('subjects.csv');
	};
}
