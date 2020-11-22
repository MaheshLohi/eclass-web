import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class LanguageTranslatorService {

	constructor(public translate : TranslateService,
	private constants : Constants) { };

	initiateLanguage() {
		this.translate.addLangs(this.constants.LANGUAGE_ARRAY);
		this.translate.setDefaultLang(this.constants.DEFAULT_LANGUAGE);
		this.setLanguage(this.constants.DEFAULT_LANGUAGE);
	};

	setLanguage(languageCode) {
		this.translate.use(languageCode);
	};
}
