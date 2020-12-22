import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from "lodash";

import { Constants } from '@app/constants';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { SessionHandlerService } from '@sharedServices/sessionHandler/sessionHandler.service';
import { StorageService } from '@sharedServices/storage/storage.service';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';
import { StudentSemesterService } from '@studentServices/semester/semester.service';

@Component({
	selector: 'app-student-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class StudentNavbarComponent implements OnInit {

	userDetails : any = {};
	loginType : number;
	semesters : any = [];
	semestersDataStatus : number = 2;
	selectSemesterId : number;
	showSemesterDropdown : Boolean = false;
	showSearhBar : Boolean = true;
	searchString : string;
	@Output() public semesterChanged = new EventEmitter();

	constructor(public constants : Constants,
	public miscellaneous : MiscellaneousService,
	private loader: LoaderService,
	private router: Router,
	private studentSemesterService : StudentSemesterService,
	private sessionHandler : SessionHandlerService,
	private storageService: StorageService) { }

	ngOnInit() {
		this.userDetails = this.storageService.getData("userDetails");
		this.loginType = this.userDetails.type;
		this.searchString = '';
		if(this.semestersDataStatus != 1) { this.getSemestersList(); };
		this.toggleSemestersListSelector();
		this.toggleSearchBar();
	};

	toggleSearchBar() {
		this.showSearhBar = true;
		if (this.router.url.split('?')[0] === "/student/search") {
			this.showSearhBar = false;
		}
	}

	toggleSemestersListSelector() {
		this.showSemesterDropdown = false;
		if (this.router.url === "/student/home" || this.router.url === "/student/examination") {
			this.showSemesterDropdown = true;
		}
	};

	resetSemestersList() {
		this.semestersDataStatus = 2;
		this.semesters = [];
		this.loader.showLoader();
	};

	getSemestersList() {
		this.resetSemestersList();
		this.studentSemesterService.getSemestersList()
		.subscribe((response:any) => {
			this.loader.hideLoader();
			this.semestersDataStatus = 1;
			this.semesters = response.inst_class;
			this.renderSemestersList();
		}, () => {
			this.loader.hideLoader();
			this.semestersDataStatus = 0;
		});
	};

	renderSemestersList() {
		if(this.storageService.getData("selected_semester")) {
			let semester= this.storageService.getData("selected_semester");
			this.selectSemesterId = semester.id;
		}
		else {
			this.selectSemesterId = this.userDetails.inst_class_id;
		}
		this.emitSelectionEvent();
	};

	onSemesterSelection(semesterId) {
		this.selectSemesterId = parseInt(semesterId);
		this.emitSelectionEvent();
	};

	emitSelectionEvent() {
		let index = _.findIndex(this.semesters, { id: this.selectSemesterId});
		this.storageService.setData("selected_semester",this.semesters[index]);
		this.semesterChanged.emit(this.semesters[index]);
	};

	logout() {
		this.sessionHandler.handleLogout();
	};

	navigateToSearch() {
		if(this.searchString) {
			let data = {};
			data['searchString'] = this.searchString;
			this.router.navigate(['student/search'],{ queryParams: data });
		}
		else {
			this.router.navigate(['student/search']);
		}
	};

	navigteToProfile() {
		this.router.navigate(['student/profile']);
	};
}
