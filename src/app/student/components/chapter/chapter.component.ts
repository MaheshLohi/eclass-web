import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { StudentChapterService } from '@studentServices/chapter/chapter.service';

@Component({
  	selector: 'app-student-chapter',
  	templateUrl: './chapter.component.html',
  	styleUrls: ['./chapter.component.scss']
})
export class StudentChapterComponent implements OnInit {

	subjectId : any = '';
	chaptersDataStatus : number = 2;
	chapters : any = [];
	selectedChapter : any = {};
	classNames = ['card-primary','card-secondary','card-success','card-info','card-warning','card-danger','card-dark'];

  	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private route: ActivatedRoute,
	public router: Router,
	private studentChapterService : StudentChapterService) {
    	this.route.params.subscribe((params: Params) => {
			this.subjectId = params['subjectId'];
		});
  	}

	ngOnInit() {
		this.getChaptersList();
	};

	getColor() {
		return this.classNames[
			Math.floor(Math.random()*7)
		]
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
		this.selectedChapter = chapter;
		this.router.navigate(['student/topics', this.selectedChapter.id]);
	};

}
