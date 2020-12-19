import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var $: any; 

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { LoginService } from '@sharedServices/login/login.service';
import { StudentProfileService } from '@app/student/services/profile/profile.service';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';


@Component({
  	selector: 'app-profile',
  	templateUrl: './profile.component.html',
  	styleUrls: ['./profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

	profileDetailsStatus : number = 2;
	profileDetails : any = {};
	editProfileForm : FormGroup;
	profile_pic : File;

	constructor(public constants : Constants,
	private loginService: LoginService,
	private studentProfileService : StudentProfileService,
	private loader: LoaderService,
	private translate: TranslateService,
	public miscellaneousService : MiscellaneousService,
	private toaster: ToasterService) { 
		this.editProfileForm = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'phone_number' : new FormControl("", []),
			'email' : new FormControl("", []),
			'profile_pic' : new FormControl("", []),
			'password' : new FormControl("", [])
		});
	}

  	ngOnInit() {
		this.getProfileDetails();
	}

	validateProfileEditFormValue(formName) {
		return this.editProfileForm.get(formName); 
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

	initiateEditModal() {
		this.profile_pic = null;
		this.editProfileForm.reset();
		this["editProfileForm"].get('name').patchValue(this.profileDetails.name);
		this["editProfileForm"].get('phone_number').patchValue(this.profileDetails.phone_number);
		this["editProfileForm"].get('email').patchValue(this.profileDetails.email);
	};

	onFileChange(event, fileTarget) {
		this[fileTarget] = null;
		if (event.target.files.length > 0) {
			this[fileTarget] = event.target.files[0];
		}
	};

	updateProfile() {
		this.loader.showLoader();
		this.studentProfileService.updateProfile(this.editProfileForm.value, this.profile_pic)
		.subscribe(() => {
			$('#update-profile').modal('hide');
			this.getProfileDetails();
			this.loader.hideLoader();
			this.toaster.showSuccess(this.translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this.translate.instant("PROFILE")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

}
