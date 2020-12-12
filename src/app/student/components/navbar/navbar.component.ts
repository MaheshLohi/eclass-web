import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from "lodash";

import { Constants } from '@app/constants';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { SessionHandlerService } from '@sharedServices/sessionHandler/sessionHandler.service';
import { StorageService } from '@sharedServices/storage/storage.service';
import { StudentSemisterService } from '@studentServices/semister/semister.service';

@Component({
	selector: 'app-student-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class StudentNavbarComponent implements OnInit {

	userDetails : any = {};
	loginType : number;
	semisters : any = [];
	semistersDataStatus : number = 2;
	selectSemisterId : number;
	showSemisterDropdown : Boolean = false;
	showSearhBar : Boolean = true;
	@Output() public semisterChanged = new EventEmitter();
	searchString : string;

	constructor(public constants : Constants,
	private loader: LoaderService,
	public router: Router,
	private studentSemisterService : StudentSemisterService,
	private sessionHandler : SessionHandlerService,
	private storageService: StorageService) { }

	ngOnInit() {
		this.userDetails = this.storageService.getData("User_Information");
		this.loginType = this.userDetails.type;
		this.searchString = '';
		if(this.semistersDataStatus != 1) {
			this.getSemistersList();
		}
		this.toggleSemistersListSelector();
		this.toggleSearchBar();
	};

	toggleSearchBar() {
		this.showSearhBar = true;
		if (this.router.url.split('?')[0] === "/student/search") {
			this.showSearhBar = false;
		}
	}

	toggleSemistersListSelector() {
		this.showSemisterDropdown = false;
		if (this.router.url === "/student/home" || this.router.url === "/student/examination") {
			this.showSemisterDropdown = true;
		}
	};

	resetSemistersList() {
		this.semistersDataStatus = 2;
		this.semisters = [];
		this.loader.showLoader();
	};

	getSemistersList() {
		this.resetSemistersList();
		this.studentSemisterService.getSemistersList()
		.then((response:any) => {
			this.loader.hideLoader();
			this.semistersDataStatus = 1;
			this.semisters = response.inst_class;
			this.renderSemistersList();
		}, () => {
			this.loader.hideLoader();
			this.semistersDataStatus = 0;
		});
	};

	renderSemistersList() {
		if(this.storageService.getData("selected_semister")) {
			let semister= this.storageService.getData("selected_semister");
			this.selectSemisterId = semister.id;
		}
		else {
			this.selectSemisterId = this.userDetails.inst_class_id;
		}
		this.emitSelectionEvent();
	};

	onSemisterSelection(semisterId) {
		this.selectSemisterId = parseInt(semisterId);
		this.emitSelectionEvent();
	};

	emitSelectionEvent() {
		let index = _.findIndex(this.semisters, { id: this.selectSemisterId});
		this.storageService.setData("selected_semister",this.semisters[index]);
		this.semisterChanged.emit(this.semisters[index]);
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
}
