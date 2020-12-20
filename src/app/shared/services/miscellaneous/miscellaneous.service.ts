import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from '@sharedServices/storage/storage.service';
import { TranslateService } from '@ngx-translate/core';

import { ToasterService } from '@sharedServices/toaster/toaster.service';

@Injectable({
  	providedIn: 'root'
})
export class MiscellaneousService {

	toasterStatus : boolean = false;

	constructor(private storageService: StorageService,
	private toaster: ToasterService,
	private translate: TranslateService) { };

	getHttpOptionsWithContentType(params?:any) {
		let headerData = { 'Content-Type': 'application/json' }
		let Authorization = this.storageService.getData("Authorization");
		let userDetails = this.storageService.getData("User_Information");
		if(Authorization && Authorization.token) {
			headerData['Authorization'] = "Bearer " + Authorization.token;
		}
		if(userDetails) { headerData['user-id'] = userDetails.id.toString();}
		return {
			headers : new HttpHeaders(headerData),
			params : params
		}
	};

	getHttpOptions(params?:any) {
		let Authorization = this.storageService.getData("Authorization");
		let headerData = { 'Authorization': "Bearer " + Authorization.token }
		return {
			headers : new HttpHeaders(headerData),
			params : params
		}
	};

	setDefaultStudentLogo(event) {
		event.target.src = "assets/images/default_usericon.png";
	};

	setDefaultAdminLogo(event) {
		event.target.src = "assets/images/default_usericon.png";
	};

	setDefaultInstituteLogo(event) {
		event.target.src = "assets/images/default_usericon.png";
	};

	setDefaultThumbnailImage(event) {
		event.target.src = "assets/images/default_thumb.jpg";
	};

	handle(error, toasterStatus?: boolean) {
		this.toasterStatus = toasterStatus ? toasterStatus : false;
		if(error && error.error && error.error.message) {
			this.toaster.showError(error.error.message);
		}
		else {
			this.toaster.showError(this.translate.instant("STANDARD_ERROR"));
		}
	};
}
