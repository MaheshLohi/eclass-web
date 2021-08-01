import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { DownloadService } from '@sharedServices/download/download.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentChapterService } from '@studentServices/chapter/chapter.service';

@Component({
  	selector: 'app-student-chapter',
  	templateUrl: './chapter.component.html',
  	styleUrls: ['./chapter.component.scss']
})
export class StudentChapterComponent implements OnChanges {

	@Input() subjectId: any;
	@Input() subjectDetails: any;
	chapters : any = [];
	chaptersDataStatus : number = 2;

	constructor(public _constants: Constants,
	public _download: DownloadService,
	public _miscellaneous: MiscellaneousService,
	private _loader: LoaderService,
	private _router: Router,
	private _chapter: StudentChapterService) { };
	  
	ngOnChanges(changes: SimpleChanges) {
		for (let propName in changes) { 
			let change = changes[propName];
			this[propName] = change.currentValue;
		}
		this.getChaptersList();
	};

	resetChaptersList() {
		this.chaptersDataStatus = 2;
		this.chapters = [];
		this._loader.showLoader();
	};

	getChaptersList() {
		this.resetChaptersList();
		this._chapter.getChaptersList(this.subjectId)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.chaptersDataStatus = 1;
			this.chapters = response;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.chaptersDataStatus = errorCode;
		});
	};

	navigateToTopics(chapter) {
		this._router.navigate(['student/topics', chapter.id]);
	};
}
