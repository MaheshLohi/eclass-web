import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
   	providedIn: 'root'
})
export class LoggerService {

  	error(message, messageDescription?: any) {
		if(!environment.production) {
			if(messageDescription) {
				console.error(message, JSON.stringify(messageDescription));
			}
			else {
				console.error(message);
			}
		}
	};

	info(message, messageDescription?: any) {
		if(messageDescription) {
			console.log(message, JSON.stringify(messageDescription));
		}
		else {
			console.log(message);
		}
	};

	debug(message, messageDescription?: any) {
		if(messageDescription) {
			console.debug(message, JSON.stringify(messageDescription));
		}
		else {
			console.debug(message);
		}
	};
	  
}
