import { Component, OnInit } from '@angular/core';
import { SuperAdminDashboardService } from '@superAdminServices/dashboard/dashboard.service';
import { LoaderService } from '@sharedServices/loader/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {

  constructor(private _loader: LoaderService,
    private _dashboard : SuperAdminDashboardService,private _router: Router) { }

    ngOnInit() {
      this._loader.showLoader();
      this.getDirectLoginUrl();
    }

    getDirectLoginUrl() {
      this._dashboard.getDirectLoginUrl()
      .subscribe((response:any) => {
        this._router.navigate(['superAdmin/dashboard']);
        if(response && response.mcq_url){
          window.open(response.mcq_url, '_blank');
        }
        this._loader.hideLoader();
      }, (errorCode) => {
        this._loader.hideLoader();
      });
    };
}
