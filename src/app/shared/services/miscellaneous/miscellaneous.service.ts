import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ToasterService } from '@sharedServices/toaster/toaster.service';

@Injectable({
  	providedIn: 'root'
})
export class MiscellaneousService {

	toasterStatus : boolean = false;

	constructor(private _toaster: ToasterService,
	private _translate: TranslateService) { };

	setDefaultStudentLogo(event) {
		event.target.src = "assets/images/default_usericon.png";
	};

	setDefaultAdminLogo(event) {
		event.target.src = "assets/images/default_usericon.png";
	};

	setDefaultInstituteLogo(event) {
		event.target.src = "assets/images/default_usericon.png";
	};

	setDefaultThumbnailImage(event) {
		event.target.src = "assets/images/default_thumb.jpg";
	};

	handle(error, toasterStatus?: boolean) {
		this.toasterStatus = toasterStatus ? toasterStatus : false;
		if(error && error.error && error.error.message) {
			this._toaster.showError(error.error.message);
		} else if(error && error.error && error.error.error) {
			this._toaster.showError(error.error.error);
		}
		else {
			this._toaster.showError(this._translate.instant("STANDARD_ERROR"));
		}
	};
}
