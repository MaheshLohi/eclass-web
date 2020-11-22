import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class DownloadService {

  	constructor(private constants: Constants) { }

	download(filePath) {
		var aTag = document.createElement("a");
		aTag.setAttribute('href', this.constants.DOMAIN_URL + filePath);
		aTag.setAttribute('download', '');
		aTag.setAttribute('visibility', 'hidden');
		aTag.setAttribute('display', 'none');
		document.body.appendChild(aTag);
		aTag.click();
	};
}
