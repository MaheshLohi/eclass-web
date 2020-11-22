import { Component } from '@angular/core';

import { LanguageTranslatorService } from '@sharedServices/languageTranslator/languageTranslator.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	  
	constructor(public translateLanguage : LanguageTranslatorService) {
		this.translateLanguage.initiateLanguage();
	};
}
