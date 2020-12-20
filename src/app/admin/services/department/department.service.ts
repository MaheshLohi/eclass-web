import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminDepartmentService {

	userDetails : any = {};

	constructor(private constants: Constants,
	private http: HttpClient,
	private storageService : StorageService,
	private miscellaneous : MiscellaneousService) { }

	getDepartments() {
		const httpOptions = this.miscellaneous.getHttpOptionsWithContentType();
		return this.http.get<any>(this.constants.DEPARTMENTS_LIST_URL, httpOptions)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response; 
				} else {
					throw throwError(0);
				}
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
	};
	  
	getDepartmentsAndSections() {
		this.userDetails = this.storageService.getData("User_Information");
		const httpOptions = this.miscellaneous.getHttpOptionsWithContentType();
		return this.http.get<any>(this.constants.DEPARTMENTS_AND_SECTIONS_LIST_URL + this.userDetails.inst_id, httpOptions)
		.pipe(
			map(response => { 
				if(response && response.data) { 
					let result = response.data
					if(result.departments && result.inst_class && result.departments.length && result.inst_class.length) {
						return response.data;
					}
				}
				else {
					throw throwError(0);
				}
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
	};

	addDepartment(selectedFile) {
		const formData = new FormData();
		formData.append('departments', selectedFile);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADD_DEPARTMENT_URL, formData, httpOptions)
		.pipe(
			map(response => { 
				return response;
			}),
			catchError((error : HttpErrorResponse)=> {
				this.miscellaneous.handle(error);
				throw throwError(3);
			})
		)
	};
}