import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class SuperAdminAdminsService {

	constructor(private _constants: Constants,
	private _http: HttpClient) { };

	getAdmins(): Observable<any> {
		return this._http.get<any>(this._constants.ADMINS_LIST_URL)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response.data; 
				}
				throw 0;
			})
		)
  	};
  
  	addAdmin(data): Observable<any> {
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('email', data.email);
		formData.append('password', data.password);
		formData.append('inst_id', data.inst_id);
		return this._http.post<any>(this._constants.ADD_ADMIN_URL, formData);
	};
	  
	updateAdmin(data): Observable<any> {
		const formData = new FormData();
		formData.append('id', data.id);
		formData.append('name', data.name);
		formData.append('email', data.email);
		if(data.password) { formData.append('password', data.password); }
		return this._http.post<any>(this._constants.ADMIN_UPDATE_URL, formData);
	};

	updateStatus(data): Observable<any> {
		const formData = new FormData();
		formData.append('id', data.id);
		return this._http.post<any>(this._constants.ADMIN_STATUS_UPDATE_URL, formData);
	};
}