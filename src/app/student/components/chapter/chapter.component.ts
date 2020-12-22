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

	constructor(public constants: Constants,
	public download: DownloadService,
	public miscellaneous: MiscellaneousService,
	private loader: LoaderService,
	private router: Router,
	private chapterService: StudentChapterService) { };
	  
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
		this.loader.showLoader();
	};

	getChaptersList() {
		this.resetChaptersList();
		this.chapterService.getChaptersList(this.subjectId)
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.chaptersDataStatus = 1;
			this.chapters = response;
		}, (errorCode) => {
			this.loader.hideLoader();
			this.chaptersDataStatus = errorCode;
		});
	};

	navigateToTopics(chapter) {
		this.router.navigate(['student/topics', chapter.id]);
	};
}
