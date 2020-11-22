import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  	providedIn: 'root'
})
export class AlertService {

   constructor(public translate: TranslateService) { };

   showSuccess(alertMessage, title?: string) {
		return swal.fire({
			title: title ? title : this.translate.instant('SUCCESS'),
			text: alertMessage,
			icon: 'success',
			confirmButtonText: this.translate.instant('OK'),
			showConfirmButton: true,
            showCancelButton: false,
            allowOutsideClick: false
		});
	};

	showError(alertMessage, title?: string) {
		return swal.fire({
			title: title ? title : this.translate.instant('ERROR'),
			text: alertMessage,
			icon: 'error',
			confirmButtonText: this.translate.instant('OK'),
			showConfirmButton: true,
            showCancelButton: false,
            allowOutsideClick: false
		});
	};

	showWarning(alertMessage, title?: string) {
		return swal.fire({
			title: title ? title : this.translate.instant('WARNING'),
			text: alertMessage,
			icon: 'info',
			confirmButtonText: this.translate.instant('OK'),
			showConfirmButton: true,
            showCancelButton: false,
            allowOutsideClick: false
		});
	};
}
