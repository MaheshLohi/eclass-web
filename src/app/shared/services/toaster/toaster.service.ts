import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  	providedIn: 'root'
})
export class ToasterService {

	constructor(private _toaster : ToastrService,
	public _translate: TranslateService) { };

	showSuccess(message) {
		this._toaster.success(message, this._translate.instant('SUCCESS'));
	};

	showError(message) {
		this._toaster.error(message, this._translate.instant('ERROR'));
	};
}
