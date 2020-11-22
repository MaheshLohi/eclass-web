import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants';
import { TranslateService } from '@ngx-translate/core';

import { ToasterService } from '@sharedServices/toaster/toaster.service';
import { SessionHandlerService } from '@sharedServices/sessionHandler/sessionHandler.service';

@Injectable({
    providedIn: 'root'
})
export class HttpErrorHandlerService {

	toasterStatus : boolean = false;

	constructor(private constants: Constants,
	private toaster: ToasterService,
	private translate: TranslateService,
	private sessionHandler : SessionHandlerService) { }
	
	handle(error, toasterStatus?: boolean) {
		this.toasterStatus = toasterStatus ? toasterStatus : false
		if(error && error.status) {
			switch(error.status) {
				case this.constants.HTTP_SERVER_ERROR :
					this.handleServerError(error);
				  	break;
				case this.constants.UNAUTHORISED_ERROR :
					this.showUnAuthorizedError();
				  	break;
				default :
					this.showError();
			}
		}
	};

	showUnAuthorizedError() {
		this.sessionHandler.showSessionExpiredAlert();
	}

	handleServerError(error) {
		if(error.error && error.error.errors && error.error.errors.length && error.error.errors[0].message) {
			this.showError(error.error.errors[0].message);
		}
		else {
			this.showError();
		}
	};

	showError(message?:string) {
		if(this.toasterStatus) {
			if(message) {
				this.toaster.showError(message);
			}
			else {
				this.showError(this.translate.instant("STANDARD_ERROR"));
			}
		}
	};
}
