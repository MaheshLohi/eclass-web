import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
 	providedIn: 'root'
})
export class SuperAdminInstitutesService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getInstitutes(): Observable<any> {
		return this.http.get<any>(this.constants.INSTITUTES_LIST_URL)
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
	
	addInstitute(instituteData,logo): Observable<any> {
		const formData = new FormData();
		formData.append('logo', logo);
		formData.append('name', instituteData.name);
		formData.append('phone_number', instituteData.phone);
		formData.append('address', instituteData.address);
		return this.http.post<any>(this.constants.ADD_INSTITUTE_URL, formData);
	};

	updateStatus(institute): Observable<any> {
		const formData = new FormData();
		formData.append('id', institute.id);
		return this.http.post<any>(this.constants.INSTITUTE_STATUS_UPDATE_URL, formData);
	};

	updateInstitute(editFormValue, logo): Observable<any> {
		const formData = new FormData();
		formData.append('id', editFormValue.id);
		formData.append('name', editFormValue.name);
		formData.append('phone_number', editFormValue.phone_number);
		formData.append('address', editFormValue.address);
		if(logo) { formData.append('logo', logo);}
		return this.http.post<any>(this.constants.INSTITUTE_UPDATE_URL, formData);
	}
  
}
