import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
declare var $: any; 

import { Constants } from '@app/constants';
import { DownloadService } from '@app/shared/services/download/download.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
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

	departments : any = [];
	semesters : any = [];
	chapters : any = [];
	subjects : any = [];
	availableForms = ["filterForm","addChapterForm","addTopicForm","editChapterForm"];
	filterDataStatus : number = 2;
	chaptersDataStatus : number = 2;
	subjectsDataStatus : number = 2;
	showAddFeature : boolean = false;
	filterForm : FormGroup;
	addChapterForm : FormGroup;
	addTopicForm : FormGroup;
	editChapterForm : FormGroup;
	  
	constructor(public _constants : Constants,
	public _download : DownloadService,
	public _miscellaneous : MiscellaneousService,
	private _translate: TranslateService,
	private _toaster: ToasterService,
	private _loader: LoaderService,
	private _router: Router,
	private _chapter : AdminChapterService,
	private _department : AdminDepartmentService,
	private _subjects : AdminSubjectsService) {
		this.filterForm = new FormGroup({
			'department_id' : new FormControl(null, []),
			'inst_class_id' : new FormControl(null, []),
			'subject_id' : new FormControl(null, [])
		});
		this.addChapterForm = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'description' : new FormControl("", []),
			'notes' : new FormControl("", [Validators.required]),
			'thumbnail' : new FormControl("", [Validators.required])
		});
		this.addTopicForm = new FormGroup({
			'name' : new FormControl("", [Validators.minLength(3)]),
			'chapter_id' : new FormControl(null, []),
			'video1' : new FormControl("", [Validators.required]),
			'video2' : new FormControl("", [Validators.required]),
			'keywords' : new FormControl("", []),
			'related_videos' : new FormControl("", [])
		});
		this.editChapterForm = new FormGroup({
			'chapter_id' : new FormControl("", []),
			'name' : new FormControl("", [Validators.minLength(3)]),
			'description' : new FormControl("", []),
			'notes' : new FormControl("", []),
			'thumbnail' : new FormControl("", [])
		});
	};

	validateForm(formName, formIndex) {
		return this[this.availableForms[formIndex]].get(formName);
	};

	ngOnInit() {
		this.getFiltersList();
	};

	resetFiltersList() {
		this.filterDataStatus = 2;
		this.departments = [];
		this.semesters = [];
		this._loader.showLoader();
	};

	getFiltersList() {
		this.resetFiltersList();
		this._department.getDepartmentsAndSections()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.filterDataStatus = 1;
			this.departments = response.departments;
			this.semesters = response.inst_class;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.filterDataStatus = errorCode;
		});
	};

	getSubjectsData() {
		this.resetChapters();
		let data = this.filterForm.value;
		if(data.department_id && data.inst_class_id) {
			this.getSubjects(data)
		}
	};

	resetFormValue(formIndex, key) {
		let formName = this.availableForms[formIndex];
		this[formName].get(key).patchValue(null);
	};
	
	resetSubjects() {
		this.subjectsDataStatus = 2;
		this.subjects = [];
		this._loader.showLoader();
		this.resetFormValue(0,'subject_id');
		this.resetFormValue(2,'chapter_id');
	};

	getSubjects(data) {
		this.resetSubjects();
		this._subjects.getSubjects(data.department_id, data.inst_class_id)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.subjectsDataStatus = 1;
			this.subjects = response;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.subjectsDataStatus = errorCode;
		});
	};

	resetChapters() {
		this.chaptersDataStatus = 2;
		this.chapters = [];
		this.resetFormValue(3,'chapter_id');
	};

	getChapters() {
		this.resetChapters();
		this._loader.showLoader();
		this._chapter.getChapters(this.filterForm.value)
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.chaptersDataStatus = 1;
			this.chapters = response;
		}, (errorCode) => {
			this._loader.hideLoader();
			this.chaptersDataStatus = errorCode;
		});
	};

	showAddFeatureView(status) {
		this.showAddFeature = status;
		if(status) {
			$('#'+this.availableForms[1])[0].reset();
			$('#'+this.availableForms[2])[0].reset();
		}
	};

	disableAddFeatureForm() {
		return (this.addChapterForm.valid && this.filterForm.valid) ? false : true;
	};

	disableAddTopicFeatureForm() {
		return (this.addTopicForm.valid && this.filterForm.valid) ? false : true;
	};

	onFileChange(event, fileTarget, formIndex) {
		let formName = this.availableForms[formIndex];
		this[formName].get(fileTarget).setValue(null);
		if (event.target.files.length > 0) {
			this[formName].get(fileTarget).setValue(event.target.files[0]);
		}
	};

	addChapter() {
		this._loader.showLoader();
		this._chapter.addChapter(this.filterForm.value, this.addChapterForm.value)
		.subscribe(() => {
			this._loader.hideLoader();
			this.showAddFeatureView(false);
			this.getChapters();
			this._toaster.showSuccess(this._translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this._translate.instant("CHAPTERS")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

	addTopic() {
		this._loader.showLoader();
		this._chapter.addTopic(this.addTopicForm.value)
		.subscribe(() => {
			this._loader.hideLoader();
			this.showAddFeatureView(false);
			this.getChapters();
			this._toaster.showSuccess(this._translate.instant("FEATURE_ADDED_SUCCESSFULLY",{ value : this._translate.instant("TOPIC")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};

	navigateToTopics(chapter) {
		this._router.navigate(['admin/topics', chapter.id]);
	};

	addTopics(chapter) {
		this.showAddFeatureView(true);
		this.addTopicForm.get('chapter_id').patchValue(chapter.id);
		$('#topic-tab').click();
	};

	editChapter(chapter) {
		$('#'+this.availableForms[3])[0].reset();
		this[this.availableForms[3]].patchValue({
			'name' : chapter.name, 'chapter_id' : chapter.id, 'description' : chapter.description
		})
	};
	
	updateChapter() {
		this._loader.showLoader();
		this._chapter.updateChapter(this.editChapterForm.value)
		.subscribe(() => {
			this._loader.hideLoader();
			$('#update-chapter').modal('hide');
			this.getChapters();
			this._toaster.showSuccess(this._translate.instant("FEATURE_UPDATED_SUCCESSFULLY",{ value : this._translate.instant("CHAPTER")} ));
		}, () => {
			this._loader.hideLoader();
		});
	};
}
