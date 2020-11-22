import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  	providedIn: 'root'
})
export class ToasterService {

	constructor(private toaster : ToastrService,
	public translate: TranslateService) { };

	showSuccess(message) {
		this.toaster.success(message, this.translate.instant('SUCCESS'));
	};

	showError(message) {
		this.toaster.error(message, this.translate.instant('ERROR'));
	};
}
