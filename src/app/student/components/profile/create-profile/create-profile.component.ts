import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { LoginService } from '@sharedServices/login/login.service';
import { StudentProfileService } from '@app/student/services/profile/profile.service';
import { StudentSemesterService } from '@studentServices/semester/semester.service';
import { AlertService } from '@app/shared/services/alert/alert.service';

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
	createProfileIndex : number = 1;
	showPassword : boolean = false;
	showConfirmPassword : boolean = false;
	createProfileForm1 : FormGroup;
	createProfileForm2 : FormGroup;
	otpSent : boolean = false;

	constructor(private _router: Router,
	private _login: LoginService,
	private _profile : StudentProfileService,
	private _alert : AlertService,
	private _loader: LoaderService,
	private _translate: TranslateService,
	private _semester : StudentSemesterService,
	private _toaster: ToasterService,
	public _fb: FormBuilder) { 
		this.createProfileForm1 = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'profile_pic' : new FormControl("", []),
			'email' : new FormControl("", []),
			'semesterId' : new FormControl(null, [])			
		});
		this.createProfileForm2 = new FormGroup({
			'password' : new FormControl(),
			'confirmPassword' : new FormControl(),
			'phone_number' : new FormControl(),
			'otp' : new FormControl(),
		});
		this.createProfileForm2 = _fb.group({
			password : ['', Validators.compose([Validators.minLength(6)])],
			confirmPassword : ['', Validators.compose([Validators.minLength(6)])],
			phone_number : [],
			otp : []
		}, { validator: this.checkPasswords });
	};

	checkPasswords(group: FormGroup) {
		const password = group.controls.password.value;
		const confirmPassword = group.controls.confirmPassword.value;
		return password === confirmPassword ? null : { passwordNotSame: true };
 	};

	ngOnInit() {
		this.getSemestersList();
		this.getProfileDetails(0);
	};

	validateCreateProfileForm1(formName) {
		return this.createProfileForm1.get(formName); 
	};

	validateCreateProfileForm2(formName) {
		return this.createProfileForm2.get(formName); 
	};

	togglePassword() {
		this.showPassword = !this.showPassword;
	};

	toggleConfirmPassword() {
		this.showConfirmPassword = !this.showConfirmPassword;
	};

	navigate(index) {
		this.createProfileIndex = index;
	};

	resetProfileDetails() {
		this.profileDetailsStatus = 2;
		this.profileDetails = {};
		this._loader.showLoader();
	};
	  
	getProfileDetails(status) {
		this.resetProfileDetails();
		this._login.getUserDetails()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.profileDetailsStatus = 1;
			this.profileDetails = response;
			this.initiateProfileForm();
			if(status) { this._router.navigate(['/student/home']); }
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

	initiateProfileForm() {
		this.createProfileForm1.reset();
		this.createProfileForm2.reset();
		this.createProfileForm1.patchValue({
			name : this.profileDetails.name,
			email : this.profileDetails.email,
			semesterId : this.profileDetails.inst_class_id
		})
	};

	onFileChange(event, fileTarget) {
		this.createProfileForm1.get(fileTarget).setValue(null);
		if (event.target.files.length > 0) {
			this.createProfileForm1.get(fileTarget).setValue(event.target.files[0]);
		}
	};

	sendOTP() {
		this.otpSent = true;
		this._loader.showLoader();
		this._profile.sendOTP(this.createProfileForm2.value)
		.subscribe(() => {
			this._loader.hideLoader();
			this._toaster.showSuccess(this._translate.instant("OTP_SENT_SUCCESSFULLY"));
		}, () => {
			this._loader.hideLoader();
		});
	};

	verifyOTP() {
		this._loader.showLoader();
		this._profile.verifyOTP(this.createProfileForm2.value)
		.subscribe(() => {
			this._loader.hideLoader();
			this.createProfile();
		}, () => {
			this._loader.hideLoader();
		});
	};

	createProfile() {
		this._loader.showLoader();
		this._profile.createProfile(this.createProfileForm1.value, this.createProfileForm2.value)
		.subscribe(() => {
			this._loader.hideLoader();
			this._alert.showSuccess(this._translate.instant('PROFILE_CREATED_SUCCESSFULLY'),
			this._translate.instant('SUCCESS'))
			.then(() => {
				this.getProfileDetails(1);
			});
		}, () => {
			this._loader.hideLoader();
		});
	};
}
