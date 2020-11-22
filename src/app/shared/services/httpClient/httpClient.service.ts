import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
	providedIn: 'root'
})
export class HttpClientService {
	
	constructor(private http: HttpClient, 
	private storageService: StorageService) { }

	getHttpOptions(params?:any) {
		let headerData = {
			'Content-Type': 'application/json',
		}
		let Authorization = this.storageService.getData("Authorization");
		if(Authorization && Authorization.token) {
			headerData['Authorization'] = "Bearer" + Authorization.token;
		}
		return {
			headers : new HttpHeaders(headerData),
			params : params
		}
	};

	get(url, params?:any): Observable<any> {
		const httpOptions = this.getHttpOptions(params);
		return this.http.get<any>(url, httpOptions);
	};

	post(url, dataToPost): Observable<any> {
		const httpOptions = this.getHttpOptions();
		return this.http.post<any>(url, dataToPost, httpOptions);
	};

	postWithFormData(url, formData, params?:any): Observable<any> {
		let Authorization = this.storageService.getData("Authorization");
		console.log(Authorization)
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type' : 'multipart/form-data',
				'Authorization': "Bearer" + Authorization.token
			}),
			params : params
		};
		return this.http.post<any>(url, formData, httpOptions);
	};
}
