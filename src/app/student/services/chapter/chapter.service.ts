import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class StudentChapterService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getChaptersList(subjectId): Observable<any>  {  
		return this.http.get<any>(this.constants.STUDENT_CHAPTERS_LIST_URL + subjectId + '/chapters')
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response.data; 
				} else {
					throw throwError(0);
				}
			})
		)
	}
}
