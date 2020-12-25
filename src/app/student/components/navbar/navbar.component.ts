import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from "lodash";

import { Constants } from '@app/constants';
import { MiscellaneousService } from '@app/shared/services/miscellaneous/miscellaneous.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { SessionHandlerService } from '@sharedServices/sessionHandler/sessionHandler.service';
import { StorageService } from '@sharedServices/storage/storage.service';
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

	constructor(public _constants : Constants,
	public _miscellaneous : MiscellaneousService,
	private _loader: LoaderService,
	private _router: Router,
	private _semester: StudentSemesterService,
	private _session: SessionHandlerService,
	private _storage: StorageService) { };

	ngOnInit() {
		this.userDetails = this._storage.getData("userDetails");
		this.loginType = this.userDetails.type;
		this.searchString = '';
		if(this.semestersDataStatus != 1) { this.getSemestersList(); };
		this.toggleSemestersListSelector();
		this.toggleSearchBar();
	};

	toggleSearchBar() {
		this.showSearhBar = true;
		if (this._router.url.split('?')[0] === "/student/search") {
			this.showSearhBar = false;
		}
	};

	toggleSemestersListSelector() {
		this.showSemesterDropdown = false;
		if (this._router.url === "/student/home" || this._router.url === "/student/examination") {
			this.showSemesterDropdown = true;
		}
	};

	resetSemestersList() {
		this.semestersDataStatus = 2;
		this.semesters = [];
		this._loader.showLoader();
	};

	getSemestersList() {
		this.resetSemestersList();
		this._semester.getSemestersList()
		.subscribe((response:any) => {
			this._loader.hideLoader();
			this.semestersDataStatus = 1;
			this.semesters = response.inst_class;
			this.renderSemestersList();
		}, () => {
			this._loader.hideLoader();
			this.semestersDataStatus = 0;
		});
	};

	renderSemestersList() {
		if(this._storage.getData("selected_semester")) {
			let semester= this._storage.getData("selected_semester");
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
		this._storage.setData("selected_semester",this.semesters[index]);
		this.semesterChanged.emit(this.semesters[index]);
	};

	logout() {
		this._session.handleLogout();
	};

	navigateToSearch() {
		if(this.searchString) {
			let data = {};
			data['searchString'] = this.searchString;
			this._router.navigate(['student/search'],{ queryParams: data });
		}
		else {
			this._router.navigate(['student/search']);
		}
	};

	navigteToProfile() {
		this._router.navigate(['student/profile']);
	};
}
