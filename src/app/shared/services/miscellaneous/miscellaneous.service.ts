import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class MiscellaneousService {
	  
	changeImageSource(event) {
		event.target.src = "assets/images/default_thumb.jpg";
	};
}
