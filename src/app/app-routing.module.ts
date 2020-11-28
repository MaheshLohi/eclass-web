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
import { StudentHomeComponent } from '@studentComponents/home/home.component';
import { StudentChapterComponent } from '@studentComponents/chapter/chapter.component';
import { StudentTopicComponent } from '@studentComponents/topic/topic.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
	{ path: 'superAdmin/login', component: LoginComponent },
	{ path: 'superAdmin/dashboard', component: SuperAdminDashboardComponent, canActivate: [AuthGuard]},
	{ path: 'superAdmin/institutes', component: SuperAdminInstitutesComponent, canActivate: [AuthGuard]},
	{ path: 'superAdmin/admins', component: SuperAdminAdminsComponent, canActivate: [AuthGuard]},
	{ path: 'admin/login', component: LoginComponent },
	{ path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard]},
	{ path: 'admin/faculties', component: AdminFacultiesComponent, canActivate: [AuthGuard]},
	{ path: 'admin/students', component: AdminStudentsComponent, canActivate: [AuthGuard]},
	{ path: 'admin/departments', component: AdminDepartmentComponent, canActivate: [AuthGuard]},
	{ path: 'admin/subjects', component: AdminSubjectsComponent, canActivate: [AuthGuard]},
	{ path: 'admin/chapters', component: AdminChapterComponent, canActivate: [AuthGuard]},
	{ path: 'student/home', component: StudentHomeComponent, canActivate: [AuthGuard]},
	{ path: 'student/chapters/:subjectId', component: StudentChapterComponent, canActivate: [AuthGuard]},
	{ path: 'student/topics/:chapterId', component: StudentTopicComponent, canActivate: [AuthGuard]},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  	imports: [RouterModule.forRoot(routes, {useHash: true})],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
