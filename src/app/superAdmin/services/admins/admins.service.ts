import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constants } from '@app/constants';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';
import { LoggerService } from '@sharedServices/logger/logger.service';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';

@Injectable({
  	providedIn: 'root'
})
export class SuperAdminAdminsService {

	constructor(private httpService: HttpClientService,
	public loggerService: LoggerService,
	private constants: Constants,
	private miscellaneous : MiscellaneousService,
	private http: HttpClient) {}

	getAdmins() {
		return new Promise((resolve, reject) => {
		  	this.httpService.get(this.constants.ADMINS_LIST_URL)
		  	.subscribe((response) => {
			  	if(response && response.data && response.data.length) {
				  	resolve(response.data);
			  	}
			  	else {
				  	reject()
			  	}
		  	}, (error) => {
				reject(error);
		  	});
		});
  	};
  
  	addAdmin(adminData) {
		const formData = new FormData();
		formData.append('name', adminData.name);
		formData.append('email', adminData.email);
		formData.append('password', adminData.password);
		formData.append('inst_id', adminData.inst_id);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADD_ADMIN_URL, formData, httpOptions);
	};
	  
	updateAdmin(editFormValue) {
		const formData = new FormData();
		formData.append('id', editFormValue.id);
		formData.append('name', editFormValue.name);
		formData.append('email', editFormValue.email);
		if(editFormValue.password) {
			formData.append('password', editFormValue.password);
		}
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADMIN_UPDATE_URL, formData, httpOptions);
	};

	updateStatus(admin) {
		const formData = new FormData();
		formData.append('id', admin.id);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADMIN_STATUS_UPDATE_URL, formData, httpOptions);
	};
}