import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { StorageService } from '@sharedServices/storage/storage.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, 
    private storageService: StorageService) { };

	canActivate(): boolean {
		return true;
		// if (!this.storageService.getData('Authorization')) {
		// 	this.router.navigate(['login']);
		// 	return false;
		// } else {
		// 	return true;
		// }
	};
}
