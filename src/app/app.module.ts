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
import { StudentNavbarComponent } from '@studentComponents/navbar/navbar.component';
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
import { AdminChapterComponent } from '@adminComponents/chapter/chapter.component';
import { StudentSidebarComponent } from '@studentComponents/sidebar/sidebar.component';
import { StudentChapterComponent } from '@studentComponents/chapter/chapter.component';
import { StudentTopicComponent } from '@studentComponents/topic/topic.component';
import { StudentSubjectComponent } from '@studentComponents/subject/subject.component';
import { StudentExaminationComponent } from '@studentComponents/examination/examination.component';
import { AdminExaminationComponent } from '@adminComponents/examination/examination.component';
import { PrepareObjectPipe } from './shared/pipes/prepareObject/prepare-object.pipe';
import { StudentQuestionsComponent } from '@studentComponents/questions/questions.component';
import { StudentWishlistComponent } from '@studentComponents/wishlist/wishlist.component';
import { StudentFeedbackComponent } from '@studentComponents/feedback/feedback.component';
import { StudentFaqComponent } from '@studentComponents/faq/faq.component';
import { StudentHelpComponent } from '@studentComponents/help/help.component';
import { StudentContentComponent } from '@studentComponents/content/content.component';
import { AdminFaqComponent } from '@adminComponents/faq/faq.component';
import { AdminTopicComponent } from '@adminComponents/topic/topic.component';
import { StudentSearchComponent } from '@studentComponents/search/search.component';
import { StudentProfileComponent } from '@studentComponents/profile/profile.component';

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
		VerifyDataPipe,
		AdminChapterComponent,
		StudentChapterComponent,
		StudentTopicComponent,
		StudentSubjectComponent,
		StudentExaminationComponent,
		AdminExaminationComponent,
		PrepareObjectPipe,
		StudentQuestionsComponent,
		StudentWishlistComponent,
		StudentFeedbackComponent,
		StudentNavbarComponent,
		StudentFaqComponent,
		StudentHelpComponent,
		StudentSidebarComponent,
		StudentContentComponent,
		AdminFaqComponent,
		AdminTopicComponent,
		StudentSearchComponent,
		StudentProfileComponent
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
