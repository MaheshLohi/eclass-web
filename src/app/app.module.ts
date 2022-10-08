import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { HttpConfigInterceptor } from '@sharedServices/http-interceptor/http-interceptor.service';

//Component declaration
import { LoginComponent } from '@sharedComponents/login/login.component';
import { FooterComponent } from '@sharedComponents/footer/footer.component';
import { BreadcrumbComponent } from '@sharedComponents/breadcrumb/breadcrumb.component';
import { NavbarComponent } from '@sharedComponents/navbar/navbar.component';
import { StudentNavbarComponent } from '@studentComponents/navbar/navbar.component';
import { SuperAdminSidebarComponent } from '@superAdminComponents/sidebar/sidebar.component';
import { AdminSidebarComponent } from '@adminComponents/sidebar/sidebar.component';
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
import { FacultyDashboardComponent } from '@facultyComponents/dashboard/dashboard.component';
import { FacultySidebarComponent } from '@facultyComponents/sidebar/sidebar.component';
import { FacultySubjectsComponent } from '@facultyComponents/subjects/subjects.component';

import { FacultyChaptersComponent } from '@facultyComponents/chapter/chapter.component';

import { FacultyExaminationComponent } from '@facultyComponents/examination/examination.component';
import { FacultyTopicComponent } from '@facultyComponents/topic/topic.component';
import { FacultyFaqComponent } from '@facultyComponents/faq/faq.component';


import { FacultyQuestionsComponent } from '@facultyComponents/questions/questions.component';
import { StudentListErrorComponent } from '@studentComponents/list-error/list-error.component';
import { FacultyListErrorComponent } from '@facultyComponents/list-error/list-error.component';
import { SuperAdminListErrorComponent } from '@superAdminComponents/list-error/list-error.component';
import { AdminListErrorComponent } from '@adminComponents/list-error/list-error.component';
import { StudentCreateProfileComponent } from '@app/student/components/profile/create-profile/create-profile.component';
import { StudentRecentVideosComponent } from '@studentComponents/recent-videos/recent-videos.component';
import { McqComponent } from './superAdmin/components/mcq/mcq.component';
import { StudentMcqComponent } from '@studentComponents/mcq/mcq.component';
import { FacultyMcqComponent } from '@facultyComponents/mcq/mcq.component';
import { AdminMcqComponent } from '@adminComponents/mcq/mcq.component';

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
		StudentProfileComponent,
		FacultyDashboardComponent,
		FacultySidebarComponent,
		FacultySubjectsComponent,
		FacultyChaptersComponent,
		FacultyExaminationComponent,
		FacultyQuestionsComponent,
		FacultyTopicComponent,
		FacultyFaqComponent,
		StudentListErrorComponent,
		FacultyListErrorComponent,
		SuperAdminListErrorComponent,
		AdminListErrorComponent,
		StudentCreateProfileComponent,
		StudentRecentVideosComponent,
		McqComponent,
		StudentMcqComponent,
		FacultyMcqComponent,
		AdminMcqComponent
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
		Constants,
		{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	bootstrap: [AppComponent]
})
export class AppModule { }
