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
export class AdminFacultiesService {

	userDetails : any = {};

	constructor(private constants: Constants,
	private http: HttpClient,
	private storageService : StorageService,
	private miscellaneous : MiscellaneousService) { }

	getFaculties(filterData) : Observable<any> {
		this.userDetails = this.storageService.getData("User_Information");
		const httpOptions = this.miscellaneous.getHttpOptionsWithContentType();
		return this.http.get<any>(this.constants.FACULTIES_LIST_URL + this.userDetails.inst_id + '/' + filterData.department_id, httpOptions)
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
	  
	addFaculties(filterData, faculties) : Observable<any>  {
		this.userDetails = this.storageService.getData("User_Information");
		const formData = new FormData();
		formData.append('faculties', faculties);
		formData.append('department_id', filterData.department_id);
		formData.append('inst_id', this.userDetails.inst_id);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADD_FACULTIES_URL, formData, httpOptions)
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

	deleteFaculty(facultyData): Observable<any> {
		const httpOptions = this.miscellaneous.getHttpOptionsWithContentType();
		return this.http.delete<any>(this.constants.FACULTY_DELETE_URL + facultyData.id, httpOptions)
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
