import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
  	providedIn: 'root'
})
export class AdminStudentsService {

	userDetails : any = {};

	constructor(private constants: Constants,
	private http: HttpClient,
	private miscellaneous : MiscellaneousService,
	private storageService : StorageService) { }

	getStudents(selectedDepartmentId, selectedSectionId) : Observable<any> {
		this.userDetails = this.storageService.getData("User_Information");
		const httpOptions = this.miscellaneous.getHttpOptionsWithContentType();
		return this.http.get<any>(this.constants.STUDENTS_LIST_URL + this.userDetails.inst_id + '/' + selectedDepartmentId + '/' + selectedSectionId, httpOptions)
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
	  
	addStudents(filterData, selectedFile) : Observable<any> {
		this.userDetails = this.storageService.getData("User_Information");
		const formData = new FormData();
		formData.append('students', selectedFile);
		formData.append('department_id', filterData.department_id);
		formData.append('inst_class_id', filterData.inst_class_id);
		formData.append('inst_id', this.userDetails.inst_id);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADD_STUDENTS_URL, formData, httpOptions)
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
