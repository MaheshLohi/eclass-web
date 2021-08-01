import { Injectable } from '@angular/core';

import { Constants } from '@app/constants';

@Injectable({
  	providedIn: 'root'
})
export class DownloadService {

  	constructor(private _constants: Constants) { }

	download(file, event?:any) {
		if(event) { event.stopPropagation(); }
		var aTag = document.createElement("a");
		aTag.setAttribute('href', this._constants.DOMAIN_URL + file);
		aTag.setAttribute('download', '');
		aTag.setAttribute('visibility', 'hidden');
		aTag.setAttribute('display', 'none');
		document.body.appendChild(aTag);
		aTag.click();
	};

	downloadAsCsv = function (objArray, headers, fileName) {
		var objectKeys = headers.map(header => header.toLowerCase());
        var strLine = headers + '\n';
        if (objArray.length > 0) {
            for (var i = 0; i < objArray.length; i++) {
                for (var key = 0; key < objectKeys.length; key++) {
                    var fields = objectKeys[key].split(",");
                    //logic to combine two keys under one header
                    if (fields !== undefined && fields.length > 1) {
                        strLine = strLine + objArray[i][fields[0]] + " " + objArray[i][fields[1]];
                    } else {
                        strLine = strLine + objArray[i][objectKeys[key]];
                    }
                    if (key < objectKeys.length) {
                        strLine = strLine + ",";
                    }
                }
                strLine = strLine + '\n';
            }
        }

		var aTag = document.createElement("a");
		aTag.setAttribute('href', "data:application/csv;charset=UTF-8," + encodeURIComponent(strLine));
		aTag.setAttribute('download', fileName);
		aTag.setAttribute('visibility', 'hidden');
		aTag.setAttribute('display', 'none');
		document.body.appendChild(aTag);
		aTag.click();
    };

}
