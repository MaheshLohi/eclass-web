import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { DownloadService } from '@sharedServices/download/download.service';
import { StudentChapterService } from '@studentServices/chapter/chapter.service';
import { StudentSubjectService } from '@studentServices/subject/subject.service';

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
	subjectDetailsDataStatus : number = 2;
	subjectDetails : any = {};

  	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private route: ActivatedRoute,
	public router: Router,
	private downloadService : DownloadService,
	private studentChapterService : StudentChapterService,
	private studentSubjectService : StudentSubjectService) {
    	this.route.params.subscribe((params: Params) => {
			this.subjectId = params['subjectId'];
		});
  	}

	ngOnInit() {
		this.getChaptersList();
		this.getSubjectDetails();
	};

	getColor() {
		return this.classNames[
			Math.floor(Math.random()*7)
		]
	};

	resetSubjectDetailsList() {
		this.subjectDetailsDataStatus = 2;
		this.subjectDetails = {};
		this.loader.showLoader();
	};

	getSubjectDetails() {
		this.resetSubjectDetailsList();
		this.studentSubjectService.getSubjectDetails(this.subjectId)
		.then((response:any) => {
			this.loader.hideLoader();
			this.subjectDetailsDataStatus = 1;
			this.subjectDetails = response;
		}, () => {
			this.loader.hideLoader();
			this.subjectDetailsDataStatus = 0;
		});
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

	downloadFile(chapter) {
		this.downloadService.download(chapter.notes);
	};

	downloadSyllabus(subjectDetails) {
		this.downloadService.download(subjectDetails.syllabus);
	};

}
