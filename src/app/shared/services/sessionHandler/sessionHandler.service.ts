import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Constants } from '@app/constants';
import { AlertService } from '@sharedServices/alert/alert.service';
import { StorageService } from '@sharedServices/storage/storage.service';
import { HttpClientService } from '@sharedServices/httpClient/httpClient.service';

@Injectable({
    providedIn: 'root'
})
export class SessionHandlerService {

	constructor(private router: Router,
	private alert : AlertService,
	public translate : TranslateService,
	private storage : StorageService,
	private constants: Constants,
	private httpService: HttpClientService) { }

	handleLogout() {
		this.httpService.post(this.constants.LOGOUT_URL, {})
		.subscribe(() => {
			this.storage.clear();
			this.router.navigate(['/login']);
		}, () => {
			this.storage.clear();
			this.router.navigate(['/login']);
		});
	};
	
	showSessionExpiredAlert() {
		this.alert.showError(this.translate.instant('SESSION_EXPIRED_MESSAGE'),
		this.translate.instant('SESSION_EXPIRED'))
		.then(() => {
			this.handleLogout();
		});
	};

}
