import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
 	providedIn: 'root'
})
export class SuperAdminInstitutesService {

	constructor(private _constants: Constants,
	private _http: HttpClient) { };

	getInstitutes(): Observable<any> {
		return this._http.get<any>(this._constants.INSTITUTES_LIST_URL)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response.data; 
				}
				throw 0;
			})
		)
	};
	
	addInstitute(data): Observable<any> {
		const formData = new FormData();
		formData.append('logo', data.logo);
		formData.append('name', data.name);
		formData.append('phone_number', data.phone_number);
		formData.append('address', data.address);
		return this._http.post<any>(this._constants.ADD_INSTITUTE_URL, formData);
	};

	updateStatus(data): Observable<any> {
		const formData = new FormData();
		formData.append('id', data.id);
		return this._http.post<any>(this._constants.INSTITUTE_STATUS_UPDATE_URL, formData);
	};

	updateInstitute(data): Observable<any> {
		const formData = new FormData();
		formData.append('id', data.id);
		formData.append('name', data.name);
		formData.append('phone_number', data.phone_number);
		formData.append('address', data.address);
		if(data.logo) { formData.append('logo', data.logo); }
		return this._http.post<any>(this._constants.INSTITUTE_UPDATE_URL, formData);
	};
  
}
