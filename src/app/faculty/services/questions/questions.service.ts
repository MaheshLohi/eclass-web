import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';
import { HttpClient } from '@angular/common/http';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';

@Injectable({
  	providedIn: 'root'
})
export class FacultyQuestionsService {

	constructor(private constants: Constants,
	private miscellaneous : MiscellaneousService,
	private http: HttpClient) { }

	getQuestionsList(subjectId) {
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.get(this.constants.FACULTY_QUESTIONS_LIST_URL + subjectId, httpOptions);
	};

	submitReplay(question) {
		const formData = new FormData();
		formData.append('id', question.id);
		formData.append('answer', question.replay);
		const httpOptions = this.miscellaneous.getHttpOptions();
		return this.http.post<any>(this.constants.FACULTY_SUBMIT_REPLAY_URL, formData, httpOptions);
	};

}
