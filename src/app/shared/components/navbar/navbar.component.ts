import { Component, OnInit } from '@angular/core';

import { Constants } from '@app/constants';
import { SessionHandlerService } from '@sharedServices/sessionHandler/sessionHandler.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';
import { StorageService } from '@sharedServices/storage/storage.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	userDetails : any = {};
	loginType : number;

	constructor(public constants : Constants,
	private sessionHandler : SessionHandlerService,
	public miscellaneousService : MiscellaneousService,
	private storageService: StorageService) { }

	ngOnInit() {
		this.userDetails = this.storageService.getData("userDetails");
		this.loginType = this.userDetails.type;
	}

	logout() {
		this.sessionHandler.handleLogout();
	}
}
