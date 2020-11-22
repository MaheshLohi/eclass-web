import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

import { Constants } from 'src/app/constants';

@Injectable({
	providedIn: 'root'
})
export class StorageService {

	constructor(private constants: Constants) { }

	setData(key, value) {
		if (this.constants.ENABLE_ENCRYPTION) {
			sessionStorage.setItem(key, CryptoJS.AES.encrypt(JSON.stringify(value), this.constants.ENCRYPTION_KEY));
		} else {
			sessionStorage.setItem(key, JSON.stringify(value));
		}
	};

	getData(key) {
		if(sessionStorage.getItem(key)) {
			let value = sessionStorage.getItem(key);
			if (this.constants.ENABLE_ENCRYPTION) {
				let bytes = CryptoJS.AES.decrypt(value, this.constants.ENCRYPTION_KEY);
				return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
			} 
			else {
				return JSON.parse(value);
			}
		}
		else{
			return false;
		}
	};

	deleteData(key) {
		if(sessionStorage.getItem(key)) {
			sessionStorage.removeItem(key);
		}
	};

	clear() {
		sessionStorage.clear();
	};
}