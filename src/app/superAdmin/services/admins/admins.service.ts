import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class SuperAdminAdminsService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getAdmins(): Observable<any> {
		return this.http.get<any>(this.constants.ADMINS_LIST_URL)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response.data; 
				} else {
					throw throwError(0);
				}
			})
		)
  	};
  
  	addAdmin(adminData): Observable<any> {
		const formData = new FormData();
		formData.append('name', adminData.name);
		formData.append('email', adminData.email);
		formData.append('password', adminData.password);
		formData.append('inst_id', adminData.inst_id);
		return this.http.post<any>(this.constants.ADD_ADMIN_URL, formData);
	};
	  
	updateAdmin(editFormValue): Observable<any> {
		const formData = new FormData();
		formData.append('id', editFormValue.id);
		formData.append('name', editFormValue.name);
		formData.append('email', editFormValue.email);
		if(editFormValue.password) {
			formData.append('password', editFormValue.password);
		}
		return this.http.post<any>(this.constants.ADMIN_UPDATE_URL, formData);
	};

	updateStatus(admin): Observable<any> {
		const formData = new FormData();
		formData.append('id', admin.id);
		return this.http.post<any>(this.constants.ADMIN_STATUS_UPDATE_URL, formData);
	};
}