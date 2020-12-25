import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { StorageService } from '@sharedServices/storage/storage.service';
import { MiscellaneousService } from '@sharedServices/miscellaneous/miscellaneous.service';

@Injectable({
  	providedIn: 'root'
})
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

	constructor(private _storage: StorageService,
	private _miscellaneous : MiscellaneousService) { }
	
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let Authorization = this._storage.getData("Authorization");
		let userDetails = this._storage.getData("userDetails");
      	if (Authorization) {
          	request = request.clone({ headers: request.headers.set('Authorization',  "Bearer " + Authorization.token) });
		}
		if(!(request.body instanceof FormData)) {
			request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
		}
		if(userDetails) { 
			request = request.clone({ headers: request.headers.set('user-id',  userDetails.id.toString()) });
		}
		return next.handle(request).pipe(
			map((event: HttpEvent<any>) => {
				return event;
			}),
			catchError((error: HttpErrorResponse) => {
				this._miscellaneous.handle(error);
				return throwError(3);
			})
		);
    }
}
