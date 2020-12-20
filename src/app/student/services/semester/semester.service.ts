import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
    providedIn: 'root'
})
export class StudentSemesterService {

	userDetails : any = {};

	constructor(private constants: Constants,
	private http: HttpClient,
	private storageService : StorageService) { }

	getSemestersList(): Observable<any> {
		this.userDetails = this.storageService.getData("User_Information");
		return this.http.get<any>(this.constants.DEPARTMENTS_AND_SECTIONS_LIST_URL + this.userDetails.inst_id)
		.pipe(
			map(response => { 
				if (response && response.data) {
					let result = response.data;
					if(result.departments && result.inst_class && result.departments.length && result.inst_class.length) {
						return response.data; 
					}
					else {
						throw throwError(0);
					}
				  	
				} else {
					throw throwError(0);
				}
			})
		)
	};
}
