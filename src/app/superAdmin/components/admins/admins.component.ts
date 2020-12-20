import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var $: any; 

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { SuperAdminInstitutesService } from '@app/superAdmin/services/institutes/institutes.service';
import { SuperAdminAdminsService } from '@app/superAdmin/services/admins/admins.service';

@Component({
	selector: 'app-super-admin-admins',
	templateUrl: './admins.component.html',
	styleUrls: ['./admins.component.scss']
})
export class SuperAdminAdminsComponent implements OnInit {

	institutes : any = [];
	instituteDataStatus : number = 2;
	showAddFeature : boolean = false;
	addAdminForm : FormGroup;
	editForm : FormGroup;
	admins : any = [];
	adminDataStatus : number = 2;

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private instituteService : SuperAdminInstitutesService,
	private adminService : SuperAdminAdminsService) { 
		this.addAdminForm = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'email' : new FormControl("", [Validators.email]),
			'password' : new FormControl("", [Validators.minLength(6)]),
			'inst_id' : new FormControl("", [])
		});
		this.editForm = new FormGroup({
			'id' : new FormControl("", []),
			'name' : new FormControl("", [Validators.minLength(3)]),
			'email' : new FormControl("", [Validators.email]),
			'password' : new FormControl("", [Validators.minLength(6)])
		});
	}

	validateAddAdminFormValue(formName) {
		return this.addAdminForm.get(formName); 
	};

	validateEditFormValue(formName) {
		return this.editForm.get(formName); 
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
		.subscribe((response:any) => {
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
		.subscribe((response:any) => {
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
		.subscribe(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getAdmins();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("ADMIN")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	initiateEditModal(admin) {
		this.editForm.reset();
		this["editForm"].get('name').patchValue(admin.name);
		this["editForm"].get('email').patchValue(admin.email);
		this["editForm"].get('id').patchValue(admin.id);
	};

	updateAdmin() {
		this.loader.showLoader();
		this.adminService.updateAdmin(this.editForm.value)
		.subscribe(() => {
			$('#update-admin').modal('hide');
			this.getAdmins();
			this.loader.hideLoader();
			this.toaster.showSuccess(this.translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this.translate.instant("ADMIN")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	updateStatus(admin) {
		this.loader.showLoader();
		this.adminService.updateStatus(admin)
		.subscribe(() => {
			this.loader.hideLoader();
			this.toaster.showSuccess(this.translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this.translate.instant("ADMIN_STATUS")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

}
