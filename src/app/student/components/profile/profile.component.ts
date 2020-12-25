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
			'profile_pic' : new FormControl("", [Validators.required]),
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
		$('#editProfileForm')[0].reset();
		this["editProfileForm"].patchValue({
			name : this.profileDetails.name,
			phone_number : this.profileDetails.phone_number,
			email : this.profileDetails.email
		})
	};

	onFileChange(event, fileTarget) {
		this["editProfileForm"].get(fileTarget).setValue(null);
		if (event.target.files.length > 0) {
			this["editProfileForm"].get(fileTarget).setValue(event.target.files[0]);
		}
	};

	updateProfile() {
		this.loader.showLoader();
		this.studentProfileService.updateProfile(this.editProfileForm.value)
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
