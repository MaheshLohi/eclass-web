import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ToasterService } from '@sharedServices/toaster/toaster.service';

@Injectable({
  	providedIn: 'root'
})
export class MiscellaneousService {

	toasterStatus : boolean = false;

	constructor(private toaster: ToasterService,
	private translate: TranslateService) { };

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
			this.toaster.showError(error.error.message);
		}
		else {
			this.toaster.showError(this.translate.instant("STANDARD_ERROR"));
		}
	};
}
