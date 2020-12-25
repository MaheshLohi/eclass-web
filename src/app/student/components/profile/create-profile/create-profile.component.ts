import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var $: any; 

import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { LoginService } from '@sharedServices/login/login.service';
import { StudentProfileService } from '@app/student/services/profile/profile.service';
import { StudentSemesterService } from '@studentServices/semester/semester.service';

@Component({
  	selector: 'app-student-create-profile',
  	templateUrl: './create-profile.component.html',
  	styleUrls: ['./create-profile.component.scss']
})
export class StudentCreateProfileComponent implements OnInit {

	profileDetails : any = {};
	semesters : any = [];
	profileDetailsStatus : number = 2;
	semestersDataStatus : number = 2;
	showPassword : boolean = false;
	createProfileForm : FormGroup;

	constructor(private _login: LoginService,
	private _profile : StudentProfileService,
	private _loader: LoaderService,
	private _translate: TranslateService,
	private _semester : StudentSemesterService,
	private _toaster: ToasterService) { 
		this.createProfileForm = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'phone_number' : new FormControl("", []),
			'email' : new FormControl("", []),
			'profile_pic' : new FormControl("", [Validators.required]),
			'password' : new FormControl("", []),
			'otp' : new FormControl("", []),
			'semesterId' : new FormControl(null, [])
		});
	};

	ngOnInit() {
		this.getSemestersList();
		this.getProfileDetails();
	};

	validateCreateProfileForm(formName) {
		return this.createProfileForm.get(formName); 
	};

	togglePassword() {
		this.showPassword = !this.showPassword;
	};

	resetProfileDetails() {
		this.profileDetailsStatus = 2;
		this.profileDetails = {};
		this._loader.showLoader();
	};
	  
	getProfileDetails() {
		this.resetProfileDetails();
		this._login.getUserDetails()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.profileDetailsStatus = 1;
			this.profileDetails = response;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.profileDetailsStatus = errorCode;
		});
	};

	resetSemestersList() {
		this.semestersDataStatus = 2;
		this.semesters = [];
		this._loader.showLoader();
	};

	getSemestersList() {
		this.resetSemestersList();
		this._semester.getSemestersList()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.semestersDataStatus = 1;
			this.semesters = response.inst_class;
		}, () => {
			this._loader.hideLoader();
			this.semestersDataStatus = 0;
		});
	};

	initiateEditModal() {
		$('#createProfileForm')[0].reset();
		this["createProfileForm"].patchValue({
			name : this.profileDetails.name,
			phone_number : this.profileDetails.phone_number,
			email : this.profileDetails.email
		})
	};

	onFileChange(event, fileTarget) {
		this[fileTarget] = null;
		if (event.target.files.length > 0) {
			this[fileTarget] = event.target.files[0];
		}
	};

	updateProfile() {
		this._loader.showLoader();
		this._profile.updateProfile(this.createProfileForm.value)
		.subscribe(() => {
			this._loader.hideLoader();
			this._toaster.showSuccess(this._translate.instant("FEATURE_CREATED_SUCCESSFULLY",{ value : this._translate.instant("PROFILE")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};
}
