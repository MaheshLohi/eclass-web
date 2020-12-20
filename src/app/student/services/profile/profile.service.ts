import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class StudentProfileService {

	userDetails: any;

	constructor(private constants: Constants,
	private http: HttpClient) { }

	updateProfile(profileFormValue, profile_pic) {
		const formData = new FormData();
		if(profile_pic) { formData.append('profile_pic', profile_pic); }
		if(profileFormValue.password) { formData.append('password', profileFormValue.password); }
		formData.append('name', profileFormValue.name);
		formData.append('phone_number', profileFormValue.phone_number);
		formData.append('email', profileFormValue.email);
		return this.http.post<any>(this.constants.STUDENT_PROFILE_UPDATE_URL, formData);
	};
}
