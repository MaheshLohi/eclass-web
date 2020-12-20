import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class FacultyQuestionsService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getQuestionsList(subjectId) : Observable<any> {
		return this.http.get<any>(this.constants.FACULTY_QUESTIONS_LIST_URL + subjectId)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
					return response.data;
				} else {
					throw throwError(0);
				}
			})
		)
	};

	submitReplay(question) {
		const formData = new FormData();
		formData.append('id', question.id);
		formData.append('answer', question.replay);
		return this.http.post<any>(this.constants.FACULTY_SUBMIT_REPLAY_URL, formData);
	};

}
