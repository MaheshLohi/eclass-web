import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
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

	profileDetailsStatus : number = 2;
	profileDetails : any = {};
	createProfile : any;
	profile_pic : File;
	semesters : any = [];
	semestersDataStatus : number = 2;
	showPassword : boolean = false;

	constructor(public constants : Constants,
	private loginService: LoginService,
	private studentProfileService : StudentProfileService,
	private loader: LoaderService,
	private translate: TranslateService,
	private studentSemesterService : StudentSemesterService,
	private toaster: ToasterService) { 
		this.createProfile = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'phone_number' : new FormControl("", []),
			'email' : new FormControl("", []),
			'profile_pic' : new FormControl("", []),
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
		return this.createProfile.get(formName); 
	};

	togglePassword() {
		this.showPassword = !this.showPassword;
	};

	resetProfileDetails() {
		this.profileDetailsStatus = 2;
		this.profileDetails = {};
		this.loader.showLoader();
	};
	  
	getProfileDetails() {
		this.resetProfileDetails();
		this.loginService.getUserDetails()
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.profileDetailsStatus = 1;
			this.profileDetails = response;
		}, (errorCode) => {
			this.loader.hideLoader();
			this.profileDetailsStatus = errorCode;
		});
	};

	resetSemestersList() {
		this.semestersDataStatus = 2;
		this.semesters = [];
		this.loader.showLoader();
	};

	getSemestersList() {
		this.resetSemestersList();
		this.studentSemesterService.getSemestersList()
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.semestersDataStatus = 1;
			this.semesters = response.inst_class;
		}, () => {
			this.loader.hideLoader();
			this.semestersDataStatus = 0;
		});
	};

	initiateEditModal() {
		this.profile_pic = null;
		this.createProfile.reset();
		this["createProfile"].get('name').patchValue(this.profileDetails.name);
		this["createProfile"].get('phone_number').patchValue(this.profileDetails.phone_number);
		this["createProfile"].get('email').patchValue(this.profileDetails.email);
	};

	onFileChange(event, fileTarget) {
		this[fileTarget] = null;
		if (event.target.files.length > 0) {
			this[fileTarget] = event.target.files[0];
		}
	};

	updateProfile() {
		this.loader.showLoader();
		this.studentProfileService.updateProfile(this.createProfile.value)
		.subscribe(() => {
			this.loader.hideLoader();
			this.toaster.showSuccess(this.translate.instant("FEATURE_CREATED_SUCCESSFULLY",{ value : this.translate.instant("PROFILE")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};
}
