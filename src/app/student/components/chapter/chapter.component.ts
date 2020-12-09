import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { DownloadService } from '@sharedServices/download/download.service';
import { StudentChapterService } from '@studentServices/chapter/chapter.service';

@Component({
  	selector: 'app-student-chapter',
  	templateUrl: './chapter.component.html',
  	styleUrls: ['./chapter.component.scss']
})
export class StudentChapterComponent implements OnChanges {

	@Input() subjectId: any;
	@Input() subjectDetails: any;
	chaptersDataStatus : number = 2;
	chapters : any = [];

  	constructor(public constants : Constants,
	private loader: LoaderService,
	public router: Router,
	private downloadService : DownloadService,
	private studentChapterService : StudentChapterService) {}
	  
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
		this.studentChapterService.getChaptersList(this.subjectId)
		.then((response:any) => {
			this.loader.hideLoader();
			this.chaptersDataStatus = 1;
			this.chapters = response;
		}, () => {
			this.loader.hideLoader();
			this.chaptersDataStatus = 0;
		});
	};

	navigateToTopics(chapter) {
		this.router.navigate(['student/topics', chapter.id]);
	};

	downloadFile(path, event) {
		event.stopPropagation();
		this.downloadService.download(path);
	};
	
	changeImageSource(event) {
		event.target.src = "assets/images/default_thumb.jpg";
	}
}
