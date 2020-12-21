import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var $: any; 

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
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
	logo: File;
	addDataForm : FormGroup;
	editDataForm : FormGroup;

	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	public miscellaneousService : MiscellaneousService,
	private instituteService : SuperAdminInstitutesService) {
		this.addDataForm = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'address' : new FormControl("", []),
			'phone_number' : new FormControl("", []),
			'logo' : new FormControl("", [])
		});
		this.editDataForm = new FormGroup({
			'id' : new FormControl("", []),
			'name' : new FormControl("", [Validators.minLength(3)]),
			'address' : new FormControl("", []),
			'phone_number' : new FormControl("", []),
			'logo' : new FormControl("", [])
		});
	};

	validateAddDataFormValue(formName) {
		return this.addDataForm.get(formName); 
	};

	validateEditDataFormValue(formName) {
		return this.editDataForm.get(formName); 
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
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.instituteDataStatus = 1;
			this.institutes = response;
		}, (errorCode) => {
			this.loader.hideLoader();
			this.instituteDataStatus = errorCode;
		});
	};

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			this.addDataForm.reset();
			this.logo = null;
		}
	};

	disableAddFeatureForm() {
		return (this.addDataForm.valid && this.logo) ? false : true;
	};

	onFileChange(event, fileTarget) {
		this[fileTarget] = null;
		if (event.target.files.length > 0) {
			this[fileTarget] = event.target.files[0];
		}
	};

	addInstitute() {
		this.loader.showLoader();
		this.instituteService.addInstitute(this.addDataForm.value, this.logo)
		.subscribe(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getInstitutes();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("INSTITUTE")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	updateStatus(institute) {
		this.loader.showLoader();
		this.instituteService.updateStatus(institute)
		.subscribe(() => {
			this.loader.hideLoader();
			this.toaster.showSuccess(this.translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this.translate.instant("INSTITUTE_STATUS")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	initiateEditModal(institute) {
		this.logo = null;
		this.editDataForm.reset();
		this.editDataForm.get('id').patchValue(institute.id);
		this.editDataForm.get('name').patchValue(institute.name);
		this.editDataForm.get('phone_number').patchValue(institute.phone_number);
		this.editDataForm.get('address').patchValue(institute.address);
	};

	updateInstitute() {
		this.loader.showLoader();
		this.instituteService.updateInstitute(this.editDataForm.value, this.logo)
		.subscribe(() => {
			$('#update-institute').modal('hide');
			this.getInstitutes();
			this.loader.hideLoader();
			this.toaster.showSuccess(this.translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this.translate.instant("INSTITUTE")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};
}
