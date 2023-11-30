import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { CandidateAcademicComponent } from './candidate/candidate-academic/candidate-academic.component';
import { CandidateBasicComponent } from './candidate/candidate-basic/candidate-basic.component';
import { CandidateInterviewsComponent } from './candidate/candidate-interviews/candidate-interviews.component';
import { CandidateFullInfoComponent } from './candidate/candidate-full-info/candidate-full-info.component';
import { CandidateLaboralComponent } from './candidate/candidate-laboral/candidate-laboral.component';
import { CandidateLoginComponent } from './candidate/candidate-login/candidate-login.component';
import { CandidateResultsComponent } from './candidate/candidate-results/candidate-results.component';
import { CandidateTechnicalRoleComponent } from './candidate/candidate-technical_role/candidate-technical_role.component';
import { CandidateTechnologyComponent } from './candidate/candidate-technology/candidate-technology.component';
import { CandidateTestComponent } from './candidate/candidate-test/candidate-test.component';
import { CandidateHomeComponent } from './candidate/candidate-home/candidate-home.component';
import { RecruiterHomeComponent } from './recruiter/recruiter-home/recruiter-home.component'
import { ClientLoginComponent } from './client/client-login/client-login.component';
import { ClientDataComponent } from './client/client-data/client-data.component';
import { ClientEditDataComponent } from './client/client-edit-data/client-edit-data.component';
import { CreateProfileComponent } from './client/create-profile/create-profile.component';
import { ClientCreateProjectComponent } from './client/client-create-project/client-create-project.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { ClientSearchComponent } from './client/client-search/client-search.component';
import { ClientProjectsListComponent } from './client/client-projects-list/client-projects-list.component';
import { ClientProjectMembersComponent } from './client/client-project-members/client-project-members.component';
import { ClientEvaluationCreateComponent } from './client/client-evaluation-create/client-evaluation-create.component';
import { ClientEvaluationListComponent } from './client/client-evaluation-list/client-evaluation-list.component';
import { ClientEvaluationEditComponent } from './client/client-evaluation-edit/client-evaluation-edit.component';

import { RecruiterLoginComponent } from './recruiter/recruiter-login/recruiter-login.component';
import { RecruiterInterviewsComponent } from './recruiter/recruiter-interviews/recruiter-interviews.component';
import { CreateTestComponent } from './test/create-test/create-test.component';

import { RegisterResultTestComponent } from './test/register-result-test/register-result-test.component';

import { ScheduleInterviewComponent } from './interview/schedule-interview/schedule-interview.component';
import {ListScheduledInterviewComponent} from './interview/list-scheduled-interview/list-scheduled-interview.component'
import {FindInterviewComponent} from './interview/find-interview/find-interview.component'
import {RegisterInterviewComponent} from './interview/register-interview/register-interview.component'
const routes: Routes = [
{
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home-candidate',
    component: CandidateHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home-recruiter',
    component: RecruiterHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home-client',
    component: ClientHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'register-result-test',
    component: RegisterResultTestComponent,
    pathMatch: 'full'
  },
  {
    path: 'register-interview',
    component: RegisterInterviewComponent,
    pathMatch: 'full'
  },

  {
    path: 'test',
    component: CreateTestComponent,
    pathMatch: 'full'
  },
  {
    path: 'interview',
    component: ScheduleInterviewComponent,
    pathMatch: 'full'
  },
  {
    path: 'list-interviews',
    component: ListScheduledInterviewComponent,
    pathMatch: 'full'
  },
  {
    path: 'find-interviews/:id',
    component: FindInterviewComponent,
    pathMatch: 'full'
  },

{
    path: 'login-candidate',
    component: CandidateLoginComponent,
    pathMatch: 'full'
  },
{
    path: 'login-client',
    component: ClientLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login-recruiter',
    component: RecruiterLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'basic-candidate',
    component: CandidateBasicComponent,
    pathMatch: 'full'
  },
  {
    path: 'academic-candidate',
    component: CandidateAcademicComponent,
    pathMatch: 'full'
  },
  {
    path: 'technical-role-candidate',
    component: CandidateTechnicalRoleComponent,
    pathMatch: 'full'
  },
  {
    path: 'technology-candidate',
    component: CandidateTechnologyComponent,
    pathMatch: 'full'
  },
  {
    path: 'basic-client',
    component: ClientDataComponent,
    pathMatch: 'full'
  },
  {
    path: 'basic-client-edit',
    component: ClientEditDataComponent,
    pathMatch: 'full'
  },
  {
    path: 'project-client',
    component: ClientCreateProjectComponent,
    pathMatch: 'full'
  },
  {
    path: 'project-client-list',
    component: ClientProjectsListComponent,
    pathMatch: 'full'
  },
  {
    path: 'project-profile',
    component: CreateProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'project-client-members/:projectId',
    component: ClientProjectMembersComponent
  },
  {
    path: 'search-candidate',
    component: ClientSearchComponent,
    pathMatch: 'full'
  },
  {
    path: 'candidate-full-info',
    component: CandidateFullInfoComponent,
    pathMatch: 'full'
  },
  {
    path: 'client-evaluation-create',
    component: ClientEvaluationCreateComponent,
    pathMatch: 'full'
  },
  {
    path: 'client-evaluation-edit/:projectId/:personId',
    component: ClientEvaluationEditComponent,
    pathMatch: 'full'
  },
  {
    path: 'client-evaluation-list/:projectId',
    component: ClientEvaluationListComponent,
    pathMatch: 'full'
  },
{
    path: 'interviews',
    component: RecruiterInterviewsComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
