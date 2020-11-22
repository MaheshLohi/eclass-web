import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { SlideInOutAnimation } from '@app/animations';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { SuperAdminInstitutesService } from '@app/superAdmin/services/institutes/institutes.service';
import { SuperAdminAdminsService } from '@app/superAdmin/services/admins/admins.service';

@Component({
	selector: 'app-super-admin-admins',
	templateUrl: './admins.component.html',
	styleUrls: ['./admins.component.scss'],
	animations: [SlideInOutAnimation]
})
export class SuperAdminAdminsComponent implements OnInit {

	institutes : any = [];
	instituteDataStatus : number = 2;
	showAddFeature : boolean = false;
	addAdminForm : any;
	admins : any = [];
	adminDataStatus : number = 2;

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private instituteService : SuperAdminInstitutesService,
	private adminService : SuperAdminAdminsService) { 
		this.addAdminForm = new FormGroup({
			'name' : new FormControl("", [
				Validators.minLength(3),
				Validators.required
			]),
			'email' : new FormControl("", [
				Validators.email,
				Validators.required
			]),
			'password' : new FormControl("", [
				Validators.minLength(6),
				Validators.required
			]),
			'inst_id' : new FormControl("", [
				Validators.required
			])
		});
	}

	get name() { 
		return this.addAdminForm.get('name'); 
	};

	get email() { 
		return this.addAdminForm.get('email'); 
	};
	
	get password() { 
		return this.addAdminForm.get('password'); 
	};

	get inst_id() { 
		return this.addAdminForm.get('inst_id'); 
	};

	ngOnInit() {
		this.getAdmins();
	}

	resetAdmins() {
		this.adminDataStatus = 2;
		this.admins = [];
		this.loader.showLoader();
	};

	getAdmins() {
		this.resetAdmins();
		this.adminService.getAdmins()
		.then((response:any) => {
			this.loader.hideLoader();
			this.adminDataStatus = 1;
			this.admins = response;
		}, () => {
			this.loader.hideLoader();
			this.adminDataStatus = 0;
		});
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
			this.addAdminForm.reset();
			this.getInstitutes();
		}
	};

	disableAddFeatureForm() {
		return this.addAdminForm.valid ? false : true;
	};


	addAdmin() {
		this.loader.showLoader();
		this.adminService.addAdmin(this.addAdminForm.value)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getAdmins();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("ADMIN")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

}
