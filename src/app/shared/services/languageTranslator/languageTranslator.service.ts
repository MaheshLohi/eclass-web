import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class LanguageTranslatorService {

	constructor(private _translate : TranslateService,
	private _constants : Constants) { };

	initiateLanguage() {
		this._translate.addLangs(this._constants.LANGUAGE_ARRAY);
		this._translate.setDefaultLang(this._constants.DEFAULT_LANGUAGE);
		this.setLanguage(this._constants.DEFAULT_LANGUAGE);
	};

	setLanguage(languageCode) {
		this._translate.use(languageCode);
	};
}
