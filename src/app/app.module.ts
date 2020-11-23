import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

export function HttpLoaderFactory(http: HttpClient) {
  	return new TranslateHttpLoader(http);
}

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { Constants } from '@app/constants';

//Component declaration
import { LoginComponent } from '@sharedComponents/login/login.component';
import { FooterComponent } from '@sharedComponents/footer/footer.component';
import { BreadcrumbComponent } from '@sharedComponents/breadcrumb/breadcrumb.component';
import { NavbarComponent } from '@sharedComponents/navbar/navbar.component';
import { SuperAdminSidebarComponent } from '@superAdminComponents/sidebar/sidebar.component';
import { AdminSidebarComponent } from '@adminComponents/sidebar/sidebar.component';
import { ListErrorHandlerComponent } from '@sharedComponents/listErrorHandler/listErrorHandler.component';
import { PageNotFoundComponent } from '@sharedComponents/pageNotFound/pageNotFound.component';
import { FormValidatorComponent } from '@sharedComponents/formValidator/formValidator.component';
import { SuperAdminDashboardComponent } from '@superAdminComponents/dashboard/dashboard.component';
import { SuperAdminInstitutesComponent } from '@superAdminComponents/institutes/institutes.component';
import { AdminDashboardComponent } from '@adminComponents/dashboard/dashboard.component';
import { AdminFacultiesComponent } from '@adminComponents/faculties/faculties.component';
import { AdminStudentsComponent } from '@adminComponents/students/students.component';
import { SuperAdminAdminsComponent } from '@superAdminComponents/admins/admins.component';
import { AdminDepartmentComponent } from '@adminComponents/department/department.component';
import { AdminSubjectsComponent } from '@adminComponents/subjects/subjects.component';
import { VerifyDataPipe } from './shared/pipes/verifyData/verify-data.pipe';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		FooterComponent,
		BreadcrumbComponent,
		SuperAdminDashboardComponent,
		NavbarComponent,
		SuperAdminSidebarComponent,
		AdminSidebarComponent,
		SuperAdminInstitutesComponent,
		ListErrorHandlerComponent,
		PageNotFoundComponent,
		FormValidatorComponent,
		AdminDashboardComponent,
		AdminFacultiesComponent,
		AdminStudentsComponent,
		SuperAdminAdminsComponent,
		AdminDepartmentComponent,
		AdminSubjectsComponent,
		VerifyDataPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxSpinnerModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		HttpClientModule,
		ToastrModule.forRoot(),
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		NgxPaginationModule
	],
	providers: [
		NgxSpinnerService,
		Constants
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	bootstrap: [AppComponent]
})
export class AppModule { }
