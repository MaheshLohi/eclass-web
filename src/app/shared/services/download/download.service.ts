import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class DownloadService {

  	constructor(private constants: Constants) { }

	download(file, event?:any) {
		if(event) { event.stopPropagation(); }
		var aTag = document.createElement("a");
		aTag.setAttribute('href', this.constants.DOMAIN_URL + file);
		aTag.setAttribute('download', '');
		aTag.setAttribute('visibility', 'hidden');
		aTag.setAttribute('display', 'none');
		document.body.appendChild(aTag);
		aTag.click();
	};
}
