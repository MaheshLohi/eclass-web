import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class DownloadService {

  	constructor(private constants: Constants) { }

	download(file) {
		var aTag = document.createElement("a");
		aTag.setAttribute('href', this.constants.FILES_PATH + file);
		aTag.setAttribute('download', '');
		aTag.setAttribute('visibility', 'hidden');
		aTag.setAttribute('display', 'none');
		document.body.appendChild(aTag);
		aTag.click();
	};
}
