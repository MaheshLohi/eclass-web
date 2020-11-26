import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { SuperAdminInstitutesService } from '@superAdminServices/institutes/institutes.service';

@Component({
  	selector: 'app-super-admin-institutes',
  	templateUrl: './institutes.component.html',
  	styleUrls: ['./institutes.component.scss']
})
export class SuperAdminInstitutesComponent implements OnInit {

	institutes : any = [];
	instituteDataStatus : number = 2;
	showAddFeature : boolean = false;
	addInstituteForm : any;

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private instituteService : SuperAdminInstitutesService) {
		this.addInstituteForm = new FormGroup({
			'name' : new FormControl("", [
				Validators.minLength(3),
				Validators.required
			]),
			'address' : new FormControl("", [
				Validators.required
			]),
			'phone' : new FormControl("", [
				Validators.required
			]),
			'institute_logo' : new FormControl("", [])
		});
	};

	get name() { 
		return this.addInstituteForm.get('name'); 
	};

	get address() { 
		return this.addInstituteForm.get('address'); 
	};
	
	get phone() { 
		return this.addInstituteForm.get('phone'); 
	};

	get institute_logo() { 
		return this.addInstituteForm.get('institute_logo'); 
	};

	ngOnInit() {
		this.getInstitutes();
	};

	resetInstitutes() {
		this.instituteDataStatus = 2;
		this.institutes = [];
		this.loader.showLoader();
	};

	getInstitutes() {
		this.resetInstitutes();
		this.instituteService.getInstitutes()
		.then((response:any) => {
			this.loader.hideLoader();
			this.instituteDataStatus = 1;
			this.institutes = response;
		}, () => {
			this.loader.hideLoader();
			this.instituteDataStatus = 0;
		});
	};

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			this.addInstituteForm.reset();
		}
	};

	disableAddFeatureForm() {
		return this.addInstituteForm.valid ? false : true;
	};

	onFileChange(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.addInstituteForm.patchValue({
				institute_logo: file
			});
		}
	};

	addInstitute() {
		this.loader.showLoader();
		this.instituteService.addInstitute(this.addInstituteForm.value)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getInstitutes();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("INSTITUTE")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};
}
