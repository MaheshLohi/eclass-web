import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class FacultyQuestionsService {

	constructor(private _constants: Constants,
	private _http: HttpClient) { }

	getQuestionsList(subjectId) : Observable<any> {
		return this._http.get<any>(this._constants.FACULTY_QUESTIONS_LIST_URL + subjectId)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
					return response.data;
				}
				throw 0;
			})
		)
	};

	submitReplay(question) {
		const formData = new FormData();
		formData.append('id', question.id);
		formData.append('answer', question.replay);
		return this._http.post<any>(this._constants.FACULTY_SUBMIT_REPLAY_URL, formData);
	};

}
