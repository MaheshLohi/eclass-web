import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class StudentExaminationService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getExamsList(subjectId): Observable<any> {
		return this.http.get<any>(this.constants.STUDENT_EXAMS_LIST_URL + subjectId)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response.data; 
				}
				throw 0;
			})
		)
	};
}
