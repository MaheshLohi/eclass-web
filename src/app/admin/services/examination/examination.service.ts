import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Constants } from '@app/constants';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';

@Injectable({
    providedIn: 'root'
})
export class AdminExaminationService {

	constructor(private constants: Constants,
	private http: HttpClient,
	private miscellaneous : MiscellaneousService) { }

	getExamsList(data) : Observable<any> {
		const httpOptions = this.miscellaneous.getHttpOptionsWithContentType();
		return this.http.get<any>(this.constants.EXAMINATION_LIST_URL +  data.subject_id, httpOptions)
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
	  
	addExamination(filterData, addFormValue, selectedFile) : Observable<any> {
		const formData = new FormData();
		formData.append('name', addFormValue.name);
		formData.append('subject_id', filterData.subject_id);
		formData.append('year', addFormValue.year);
		formData.append('paper', selectedFile);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.ADD_EXAMINATION_URL, formData, httpOptions)
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
