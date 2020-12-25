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
	addDataForm : FormGroup;
	editDataForm : FormGroup;

	constructor(public _constants: Constants,
	public _miscellaneous: MiscellaneousService,
	private _translate: TranslateService,
	private _toaster: ToasterService,
	private _loader: LoaderService,
	private _institute: SuperAdminInstitutesService) {
		this.addDataForm = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'address' : new FormControl("", []),
			'phone_number' : new FormControl("", []),
			'logo' : new FormControl("", [Validators.required])
		});
		this.editDataForm = new FormGroup({
			'id' : new FormControl("", []),
			'name' : new FormControl("", [Validators.minLength(3)]),
			'address' : new FormControl("", []),
			'phone_number' : new FormControl("", []),
			'logo' : new FormControl("", [Validators.required])
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
			$('#addDataForm')[0].reset();
		}
	};

	disableAddFeatureForm() {
		return (this.addDataForm.valid) ? false : true;
	};

	onFileChange(event, fileTarget, formType) {
		let formName = (formType === 1) ? "addDataForm" : "editDataForm";
		this[formName].get(fileTarget).setValue(null);
		if (event.target.files.length > 0) {
			this[formName].get(fileTarget).setValue(event.target.files[0]);
		}
	};

	addInstitute() {
		this._loader.showLoader();
		this._institute.addInstitute(this.addDataForm.value)
		.subscribe(() => {
			this._loader.hideLoader();
			this.showAddFeatureView(false);
			this.getInstitutes();
			this._toaster.showSuccess(this._translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this._translate.instant("INSTITUTE")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

	updateStatus(institute) {
		this._loader.showLoader();
		this._institute.updateStatus(institute)
		.subscribe(() => {
			this._loader.hideLoader();
			this._toaster.showSuccess(this._translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this._translate.instant("INSTITUTE_STATUS")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

	initiateEditModal(institute) {
		$('#editDataForm')[0].reset();
		this.editDataForm.patchValue({
			id : institute.id, name : institute.name, phone_number : institute.phone_number, address : institute.address
		})
	};

	updateInstitute() {
		this._loader.showLoader();
		this._institute.updateInstitute(this.editDataForm.value)
		.subscribe(() => {
			$('#update-institute').modal('hide');
			this.getInstitutes();
			this._loader.hideLoader();
			this._toaster.showSuccess(this._translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this._translate.instant("INSTITUTE")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};
}
