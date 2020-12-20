import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
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
	constructor(private storageService: StorageService,
	private miscellaneous : MiscellaneousService) { }
	
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let Authorization = this.storageService.getData("Authorization");
		let userDetails = this.storageService.getData("User_Information");
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
				this.miscellaneous.handle(error);
				return throwError(3);
			})
		);
    }
}
