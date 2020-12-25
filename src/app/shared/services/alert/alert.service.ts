import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  	providedIn: 'root'
})
export class AlertService {

   constructor(public _translate: TranslateService) { };

   showSuccess(alertMessage, title?: string) {
		return swal.fire({
			title: title ? title : this._translate.instant('SUCCESS'),
			text: alertMessage,
			icon: 'success',
			confirmButtonText: this._translate.instant('OK'),
			showConfirmButton: true,
            showCancelButton: false,
            allowOutsideClick: false
		});
	};

	showError(alertMessage, title?: string) {
		return swal.fire({
			title: title ? title : this._translate.instant('ERROR'),
			text: alertMessage,
			icon: 'error',
			confirmButtonText: this._translate.instant('OK'),
			showConfirmButton: true,
            showCancelButton: false,
            allowOutsideClick: false
		});
	};

	showWarning(alertMessage, title?: string) {
		return swal.fire({
			title: title ? title : this._translate.instant('WARNING'),
			text: alertMessage,
			icon: 'info',
			confirmButtonText: this._translate.instant('OK'),
			showConfirmButton: true,
            showCancelButton: false,
            allowOutsideClick: false
		});
	};
}
