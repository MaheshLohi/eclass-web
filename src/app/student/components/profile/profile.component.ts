import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare var $: any; 

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentProfileService } from '@app/student/services/profile/profile.service';


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
	private studentProfileService : StudentProfileService,
	private loader: LoaderService,
	private translate: TranslateService,
	private toaster: ToasterService) { 
		this.editProfileForm = new FormGroup({
			'name' : new FormControl("", [
				Validators.minLength(3),
				Validators.required
			]),
			'phone_number' : new FormControl("", [
				Validators.required
			]),
			'email' : new FormControl("", [
				Validators.required
			]),
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
		this.studentProfileService.getProfileDetails()
		.subscribe((response) => {
			this.loader.hideLoader();
			this.profileDetailsStatus = 1;
			this.profileDetails = response.data;
		}, () => {
			this.loader.hideLoader();
			this.profileDetailsStatus = 0;
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
			this.loader.hideLoader();
			$('#update-profile').modal('hide');
			this.getProfileDetails();
			this.toaster.showSuccess(this.translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this.translate.instant("PROFILE")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	changeImageSource(event) {
		event.target.src = "assets/images/default_usericon.png";
	};

}
