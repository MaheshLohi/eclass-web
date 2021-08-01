import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@app/constants';
import { StorageService } from '@sharedServices/storage/storage.service';
import { AlertService } from '@sharedServices/alert/alert.service';

@Injectable({
    providedIn: 'root'
})
export class SessionHandlerService {

	constructor(private _router: Router,
	private _alert : AlertService,
	private _translate : TranslateService,
	private _storage : StorageService,
	private _constants: Constants,
	private _http: HttpClient) { }

	handleLogout() {
		this._http.post(this._constants.LOGOUT_URL, {})
		.subscribe(() => {
			this.navigateToLogin();
		}, () => {
			this.navigateToLogin();
		});
	};

	navigateToLogin() {
		let userDetails = this._storage.getData("userDetails");
		this._storage.clear();
		if(userDetails.type === 2) {
			this._router.navigate(['/']);
		}
		else {
			this._router.navigate(['/school/login']);
		}
	};

	showLogoutPopup() {
		this._alert.showWarning(this._translate.instant('LOGOUT_MESSAGE2'),
		this._translate.instant('LOGOUT_MESSAGE1'))
		.then((response) => {
			if (response.isConfirmed) {
				this.handleLogout();
			}
		});
	};

}
