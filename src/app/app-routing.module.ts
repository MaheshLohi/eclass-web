import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/auth.guard';
import { LoginComponent } from '@sharedComponents/login/login.component';
import { PageNotFoundComponent } from '@sharedComponents/pageNotFound/pageNotFound.component';

import { SuperAdminDashboardComponent } from '@superAdminComponents/dashboard/dashboard.component';
import { SuperAdminInstitutesComponent } from '@superAdminComponents/institutes/institutes.component';
import { SuperAdminAdminsComponent } from '@superAdminComponents/admins/admins.component';

import { AdminDashboardComponent } from '@adminComponents/dashboard/dashboard.component';
import { AdminFacultiesComponent } from '@adminComponents/faculties/faculties.component';
import { AdminStudentsComponent } from '@adminComponents/students/students.component';
import { AdminDepartmentComponent } from '@adminComponents/department/department.component';
import { AdminSubjectsComponent } from '@adminComponents/subjects/subjects.component';
import { AdminChapterComponent } from '@adminComponents/chapter/chapter.component';
import { AdminFaqComponent } from '@adminComponents/faq/faq.component';
import { AdminTopicComponent } from '@adminComponents/topic/topic.component';
import { AdminExaminationComponent } from '@adminComponents/examination/examination.component';

import { StudentSubjectComponent } from '@studentComponents/subject/subject.component';
import { StudentTopicComponent } from '@studentComponents/topic/topic.component';
import { StudentContentComponent } from '@studentComponents/content/content.component';
import { StudentWishlistComponent } from '@studentComponents/wishlist/wishlist.component';
import { StudentFeedbackComponent } from '@studentComponents/feedback/feedback.component';
import { StudentHelpComponent } from '@studentComponents/help/help.component';
import { StudentSearchComponent } from '@studentComponents/search/search.component';
import { StudentProfileComponent } from '@studentComponents/profile/profile.component';
import { StudentCreateProfileComponent } from '@app/student/components/profile/create-profile/create-profile.component';

import { FacultyDashboardComponent } from '@facultyComponents/dashboard/dashboard.component';
import { FacultySubjectsComponent } from '@facultyComponents/subjects/subjects.component';
import { FacultyQuestionsComponent } from '@facultyComponents/questions/questions.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
	{ path: 'school/login', component: LoginComponent },

	{ path: 'superAdmin/dashboard', component: SuperAdminDashboardComponent, canActivate: [AuthGuard]},
	{ path: 'superAdmin/institutes', component: SuperAdminInstitutesComponent, canActivate: [AuthGuard]},
	{ path: 'superAdmin/admins', component: SuperAdminAdminsComponent, canActivate: [AuthGuard]},

	{ path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard]},
	{ path: 'admin/faculties', component: AdminFacultiesComponent, canActivate: [AuthGuard]},
	{ path: 'admin/students', component: AdminStudentsComponent, canActivate: [AuthGuard]},
	{ path: 'admin/departments', component: AdminDepartmentComponent, canActivate: [AuthGuard]},
	{ path: 'admin/subjects', component: AdminSubjectsComponent, canActivate: [AuthGuard]},
	{ path: 'admin/chapters', component: AdminChapterComponent, canActivate: [AuthGuard]},
	{ path: 'admin/examination', component: AdminExaminationComponent, canActivate: [AuthGuard]},
	{ path: 'admin/faqs/:chapterId', component: AdminFaqComponent, canActivate: [AuthGuard]},
	{ path: 'admin/topics/:chapterId', component: AdminTopicComponent, canActivate: [AuthGuard]},

	{ path: 'student/home', component: StudentSubjectComponent, canActivate: [AuthGuard]},
	{ path: 'student/contents/:subjectId', component: StudentContentComponent, canActivate: [AuthGuard]},
	{ path: 'student/topics/:chapterId', component: StudentTopicComponent, canActivate: [AuthGuard]},
	{ path: 'student/examination', component: StudentSubjectComponent, canActivate: [AuthGuard]},
	{ path: 'student/wishlist', component: StudentWishlistComponent, canActivate: [AuthGuard]},
	{ path: 'student/feedback', component: StudentFeedbackComponent, canActivate: [AuthGuard]},
	{ path: 'student/help', component: StudentHelpComponent, canActivate: [AuthGuard]},
	{ path: 'student/search', component: StudentSearchComponent, canActivate: [AuthGuard]},
	{ path: 'student/profile', component: StudentProfileComponent, canActivate: [AuthGuard]},
	{ path: 'student/create-profile', component: StudentCreateProfileComponent, canActivate: [AuthGuard]},
	
	{ path: 'faculty/dashboard', component: FacultyDashboardComponent, canActivate: [AuthGuard]},
	{ path: 'faculty/subjects', component: FacultySubjectsComponent, canActivate: [AuthGuard]},
	{ path: 'faculty/questions/:subjectId', component: FacultyQuestionsComponent, canActivate: [AuthGuard]},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  	imports: [RouterModule.forRoot(routes, {useHash: true})],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
