
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class StudentProfileService {

	userDetails: any;

	constructor(private constants: Constants,
	private http: HttpClient) { }

	sendOTP(profileForm2): Observable<any> {
		const formData = new FormData();
		formData.append('phone_number', profileForm2.phone_number);
		return this.http.post<any>(this.constants.SEND_OTP_URL, formData);
	};

	verifyOTP(profileForm2): Observable<any> {
		const formData = new FormData();
		formData.append('phone_number', profileForm2.phone_number);
		formData.append('otp', profileForm2.otp);
		return this.http.post<any>(this.constants.VERIFY_OTP_URL, formData);
	};

	createProfile(profileForm1, profileForm2): Observable<any> {
		const formData = new FormData();
		if(profileForm1.profile_pic) { formData.append('profile_pic', profileForm1.profile_pic); }
		if(profileForm2.password) { formData.append('password', profileForm2.password); }
		formData.append('name', profileForm1.name);
		formData.append('phone_number', profileForm2.phone_number);
		formData.append('email', profileForm1.email);
		return this.http.post<any>(this.constants.STUDENT_PROFILE_UPDATE_URL, formData);
	};

	updateProfile(profileFormValue): Observable<any> {
		const formData = new FormData();
		if(profileFormValue.profile_pic) { formData.append('profile_pic', profileFormValue.profile_pic); }
		if(profileFormValue.password) { formData.append('password', profileFormValue.password); }
		formData.append('name', profileFormValue.name);
		formData.append('phone_number', profileFormValue.phone_number);
		formData.append('email', profileFormValue.email);
		return this.http.post<any>(this.constants.STUDENT_PROFILE_UPDATE_URL, formData);
	};
}
