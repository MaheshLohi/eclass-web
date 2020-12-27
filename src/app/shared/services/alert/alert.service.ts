import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  	providedIn: 'root'
})
export class AlertService {

   constructor(public _translate: TranslateService) { };

	showWarning(alertMessage, title?: string) {
		return swal.fire({
			title: title ? title : this._translate.instant('WARNING'),
			text: alertMessage,
			icon: 'warning',
			confirmButtonColor: '#7d4acb',
			confirmButtonText: this._translate.instant('YES'),
			showConfirmButton: true,
			showCancelButton: true,
            allowOutsideClick: true
		});
	};
}
