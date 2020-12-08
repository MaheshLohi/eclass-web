import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { AdminDepartmentService } from '@adminServices/department/department.service';
import { AdminChapterService } from '@adminServices/chapter/chapter.service';
import { AdminSubjectsService } from '@adminServices/subjects/subjects.service';

@Component({
  	selector: 'app-admin-chapter',
  	templateUrl: './chapter.component.html',
  	styleUrls: ['./chapter.component.scss']
})
export class AdminChapterComponent implements OnInit {

	chapters : any = [];
	chaptersDataStatus : number = 2;
	showAddFeature : boolean = false;
	departments : any = [];
	semisters : any = [];
	departmentAndSemisterDataStatus = 2;
	filterForm : any;
	addChapterForm : any;
	selectedFile: File = null;
	subjects : any = [];
	subjectsDataStatus : number = 2;
	addTopicForm : any;
	videoFiles: File = null;
	thumbnailFile : File = null;
	  
	constructor(public constants : Constants,
	private translate: TranslateService,
	private toaster: ToasterService,
	private loader: LoaderService,
	private chapterService : AdminChapterService,
	private departmentService : AdminDepartmentService,
	private subjectsService : AdminSubjectsService) {
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, [
				Validators.required
			]),
			'inst_class_id' : new FormControl(null, [
				Validators.required
			]),
			'subject_id' : new FormControl(null, [
				Validators.required
			])
		});
		this.addChapterForm = new FormGroup({
			'name' : new FormControl("", [
				Validators.required
			]),
			'description' : new FormControl("", [
				Validators.required
			]),
			'notes_file' : new FormControl("", [
				Validators.required
			]),
			'thumbnail_file' : new FormControl("", [
				Validators.required
			])
		});
		this.addTopicForm = new FormGroup({
			'name' : new FormControl("", [
				Validators.required
			]),
			'chapter_id' : new FormControl(null, [
				Validators.required
			]),
			'video_file' : new FormControl("", [
				Validators.required
			]),
			'keywords' : new FormControl("", [
				Validators.required
			]),
			'related_videos' : new FormControl("", [
				Validators.required
			])
		});
	};

	validateFilterFormValue(formName) {
		return this.filterForm.get(formName); 
	};

	validateAddChapterFormValue(formName) {
		return this.addChapterForm.get(formName); 
	};

	validateAddTopicFormValue(formName) {
		return this.addTopicForm.get(formName); 
	};

	ngOnInit() {
		this.getDepartmentsAndSectionsList();
	}

	resetDepartmentsAndSections() {
		this.departmentAndSemisterDataStatus = 2;
		this.departments = [];
		this.semisters = [];
		this.loader.showLoader();
	};

	getDepartmentsAndSectionsList() {
		this.resetDepartmentsAndSections();
		this.departmentService.getDepartmentsAndSections()
		.then((response:any) => {
			this.loader.hideLoader();
			this.departmentAndSemisterDataStatus = 1;
			this.departments = response.departments;
			this.semisters = response.inst_class;
		}, () => {
			this.loader.hideLoader();
			this.departmentAndSemisterDataStatus = 0;
		});
	};

	getSubjectsData() {
		let data = this.filterForm.value;
		if(data.department_id && data.inst_class_id) {
			this.getSubjects(data)
		}
	};
	
	resetSubjects() {
		this.subjectsDataStatus = 2;
		this.subjects = [];
		this.loader.showLoader();
	};

	getSubjects(data) {
		this.resetSubjects();
		this.subjectsService.getSubjects(data.department_id, data.inst_class_id)
		.then((response:any) => {
			this.loader.hideLoader();
			this.subjectsDataStatus = 1;
			this.subjects = response;
		}, () => {
			this.loader.hideLoader();
			this.subjectsDataStatus = 0;
		});
	};

	resetChapters() {
		this.chaptersDataStatus = 2;
		this.chapters = [];
		this.loader.showLoader();
	};

	getChapters() {
		this.resetChapters();
		this.chapterService.getChapters(this.filterForm.value)
		.then((response:any) => {
			this.loader.hideLoader();
			this.chaptersDataStatus = 1;
			this.chapters = response;
		}, () => {
			this.loader.hideLoader();
			this.chaptersDataStatus = 0;
		});
	};

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			this.addChapterForm.reset();
			this.selectedFile = null;
			this.addTopicForm.reset();
			this.videoFiles = null;
		}
	};

	disableAddFeatureForm() {
		return (this.addChapterForm.valid && this.filterForm.valid && this.selectedFile && this.thumbnailFile) ? false : true;
	};

	disableAddTopicFeatureForm() {
		return (this.addTopicForm.valid && this.filterForm.valid && this.videoFiles) ? false : true;
	}

	onFileChange(event) {
		this.selectedFile = null;
		if (event.target.files.length > 0) {
			this.selectedFile = event.target.files[0];
		}
	};

	onThumbnailFileChange(event) {
		this.thumbnailFile = null;
		if (event.target.files.length > 0) {
			this.thumbnailFile = event.target.files[0];
		}
	};

	onVideoFileChange(event) {
		this.videoFiles = null;
		if (event.target.files.length > 0) {
			this.videoFiles = event.target.files;
		}
	};

	addChapter() {
		this.loader.showLoader();
		this.chapterService.addChapter(this.filterForm.value, this.addChapterForm.value, this.selectedFile, this.thumbnailFile)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getChapters();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("CHAPTERS")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};

	addTopic() {
		this.loader.showLoader();
		this.chapterService.addTopic(this.addTopicForm.value, this.videoFiles)
		.then(() => {
			this.loader.hideLoader();
			this.showAddFeatureView(false);
			this.getChapters();
			this.toaster.showSuccess(this.translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this.translate.instant("TOPIC")} ));
		}, () => {
			this.loader.hideLoader();
		});
	};
}
