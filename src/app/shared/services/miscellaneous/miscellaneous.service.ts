import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
  	providedIn: 'root'
})
export class MiscellaneousService {

	constructor(private storageService: StorageService) { }
	  
	changeImageSource(event) {
		event.target.src = "assets/images/default_thumb.jpg";
	};

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

	changeStudentProfileSource(event) {
		event.target.src = "assets/images/default_usericon.png";
	};

	changeAdminProfileSource(event) {
		event.target.src = "assets/images/default_usericon.png";
	}

	setDefaultSchoolLogo(event) {
		event.target.src = "assets/images/default_usericon.png";
	}
}
