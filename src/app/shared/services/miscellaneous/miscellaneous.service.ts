import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
  	providedIn: 'root'
})
export class MiscellaneousService {

	constructor(private storageService: StorageService) { };

	getHttpOptionsWithContentType(params?:any) {
		let headerData = { 'Content-Type': 'application/json' }
		let Authorization = this.storageService.getData("Authorization");
		if(Authorization && Authorization.token) {
			headerData['Authorization'] = "Bearer " + Authorization.token;
		}
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
}
