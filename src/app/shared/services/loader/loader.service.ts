import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
   providedIn: 'root'
})
export class LoaderService {

   	constructor(private _spinner: NgxSpinnerService) { };

   	showLoader() {
		this._spinner.show();
	};
	   
	hideLoader() {
		this._spinner.hide();
	};
}
