import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class StudentQuestionsService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getQuestionsList(topicId): Observable<any> {
		return this.http.get<any>(this.constants.STUDENT_QUESTIONS_LIST_URL + topicId)
		.pipe(
			map(response => { 
				if (response && response.data && response.data.length) {
				  	return response.data; 
				}
				throw 0;
			})
		)
	};

	addQuestion(addForm,topicId): Observable<any> {
		const formData = new FormData();
		formData.append('chapter_detail_id', topicId);
		formData.append('question', addForm.question);
		return this.http.post<any>(this.constants.STUDENT_ADD_QUESTION_URL, formData)
	};
}
