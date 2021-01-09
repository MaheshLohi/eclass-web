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
import { StudentSemesterService } from '@studentServices/semester/semester.service';
import { StorageService } from '@app/shared/services/storage/storage.service';

@Component({
  	selector: 'app-profile',
  	templateUrl: './profile.component.html',
  	styleUrls: ['./profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

	profileDetailsStatus : number = 2;
	profileDetails : any = {};
	editProfileForm : FormGroup;
	semesters : any = [];
	semestersDataStatus : number = 2;

	constructor(public constants : Constants,
	private loginService: LoginService,
	private studentProfileService : StudentProfileService,
	private loader: LoaderService,
	private translate: TranslateService,
	public miscellaneousService : MiscellaneousService,
	private _semester: StudentSemesterService,
	private toaster: ToasterService,
	private _storage: StorageService) { 
		this.editProfileForm = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'phone_number' : new FormControl("", []),
			'email' : new FormControl("", []),
			'profile_pic' : new FormControl("", []),
			'password' : new FormControl("", []),
			'semester_id' : new FormControl("", [])
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
		this.getSemestersList();
		this.editProfileForm.reset();
		this.editProfileForm.patchValue({
			name : this.profileDetails.name,
			phone_number : this.profileDetails.phone_number,
			email : this.profileDetails.email,
			semester_id : this.profileDetails.inst_class_id
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
			this._storage.deleteData("selected_semester");
			this.toaster.showSuccess(this.translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this.translate.instant("PROFILE")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	resetSemestersList() {
		this.semestersDataStatus = 2;
		this.semesters = [];
		this.loader.showLoader();
	};

	getSemestersList() {
		this.resetSemestersList();
		this._semester.getSemestersList()
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.semestersDataStatus = 1;
			this.semesters = response.inst_class;
		}, () => {
			this.loader.hideLoader();
			this.semestersDataStatus = 0;
		});
	};
}
