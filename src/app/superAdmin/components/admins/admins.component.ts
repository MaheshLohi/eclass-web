import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var $: any; 

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
	admins : any = [];
	instituteDataStatus : number = 2;
	adminDataStatus : number = 2;
	showAddFeature : boolean = false;
	addAdminForm : FormGroup;
	editForm : FormGroup;

	constructor(private _translate: TranslateService,
	private _toaster: ToasterService,
	private _loader: LoaderService,
	private _institute: SuperAdminInstitutesService,
	private _admin: SuperAdminAdminsService) { 
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
		this._loader.showLoader();
	};

	getAdmins() {
		this.resetAdmins();
		this._admin.getAdmins()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.adminDataStatus = 1;
			this.admins = response;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.adminDataStatus = errorCode;
		});
	};

	resetInstitutes() {
		this.instituteDataStatus = 2;
		this.institutes = [];
		this._loader.showLoader();
	};

	getInstitutes() {
		this.resetInstitutes();
		this._institute.getInstitutes()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.instituteDataStatus = 1;
			this.institutes = response;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.instituteDataStatus = errorCode;
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
		this._loader.showLoader();
		this._admin.addAdmin(this.addAdminForm.value)
		.subscribe(() => {
			this._loader.hideLoader();
			this.showAddFeatureView(false);
			this.getAdmins();
			this._toaster.showSuccess(this._translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this._translate.instant("ADMIN")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

	initiateEditModal(admin) {
		this.editForm.reset();
		this['editForm'].patchValue({
			name: admin.name, email: admin.email, id: admin.id
		})
	};

	updateAdmin() {
		this._loader.showLoader();
		this._admin.updateAdmin(this.editForm.value)
		.subscribe(() => {
			$('#update-admin').modal('hide');
			this.getAdmins();
			this._loader.hideLoader();
			this._toaster.showSuccess(this._translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this._translate.instant("ADMIN")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

	updateStatus(admin) {
		this._loader.showLoader();
		this._admin.updateStatus(admin)
		.subscribe(() => {
			this._loader.hideLoader();
			this._toaster.showSuccess(this._translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this._translate.instant("ADMIN_STATUS")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

}
