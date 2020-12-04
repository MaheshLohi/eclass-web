import { Component, OnInit } from '@angular/core';

import { SessionHandlerService } from '@sharedServices/sessionHandler/sessionHandler.service';
import { StorageService } from '@sharedServices/storage/storage.service';

@Component({
	selector: 'app-student-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class StudentNavbarComponent implements OnInit {

	userDetails : any = {};
	loginType : number;

	constructor(private sessionHandler : SessionHandlerService,
	private storageService: StorageService) { }

	ngOnInit() {
		this.userDetails = this.storageService.getData("User_Information");
		this.loginType = this.userDetails.type;
	}

	logout() {
		this.sessionHandler.handleLogout();
	}
}
