import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Constants } from '@app/constants';
import { AlertService } from '@sharedServices/alert/alert.service';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
    providedIn: 'root'
})
export class SessionHandlerService {

	constructor(private router: Router,
	private alert : AlertService,
	private translate : TranslateService,
	private storageService : StorageService,
	private constants: Constants,
	private http: HttpClient) { }

	handleLogout() {
		this.http.post(this.constants.LOGOUT_URL, {})
		.subscribe(() => {
			this.navigateToLogin();
		}, () => {
			this.navigateToLogin();
		});
	};

	navigateToLogin() {
		let userDetails = this.storageService.getData("userDetails");
		this.storageService.clear();
		if(userDetails.type === 2) {
			this.router.navigate(['/']);
		}
		else {
			this.router.navigate(['/school/login']);
		}
	}
	
	showSessionExpiredAlert() {
		this.alert.showError(this.translate.instant('SESSION_EXPIRED_MESSAGE'),
		this.translate.instant('SESSION_EXPIRED'))
		.then(() => {
			this.handleLogout();
		});
	};

}
