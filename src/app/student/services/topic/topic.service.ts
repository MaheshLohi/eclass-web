import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


import { Constants } from '@app/constants';

@Injectable({
    providedIn: 'root'
})
export class StudentTopicService {

	constructor(private constants: Constants,
	private http: HttpClient) { }

	getTopicsList(chapterId): Observable<any> {
		return this.http.get<any>(this.constants.STUDENT_TOPICS_LIST_URL + chapterId)
		.pipe(
			map(response => { 
				if(response && response.data && response.data.length) {
					let result = response.data[0];
					if(result.chapter_details && result.chapter_details.data && result.chapter_details.data.length) {
						return result; 
						  
					}
					throw 0;
				}
				throw 0;
			})
		)
	}
}
