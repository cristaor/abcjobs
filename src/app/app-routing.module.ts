import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { CandidateAcademicComponent } from './candidate/candidate-academic/candidate-academic.component';
import { CandidateBasicComponent } from './candidate/candidate-basic/candidate-basic.component';
import { CandidateInterviewsComponent } from './candidate/candidate-interviews/candidate-interviews.component';
import { CandidateLaboralComponent } from './candidate/candidate-laboral/candidate-laboral.component';
import { CandidateLoginComponent } from './candidate/candidate-login/candidate-login.component';
import { CandidateResultsComponent } from './candidate/candidate-results/candidate-results.component';
import { CandidateTechnicalRoleComponent } from './candidate/candidate-technical_role/candidate-technical_role.component';
import { CandidateTechnologyComponent } from './candidate/candidate-technology/candidate-technology.component';
import { CandidateTestComponent } from './candidate/candidate-test/candidate-test.component';

import { ClientLoginComponent } from './client/client-login/client-login.component';
import { ClientDataComponent } from './client/client-data/client-data.component';
import { ClientCreateProjectComponent } from './client/client-create-project/client-create-project.component';

import { RecruiterLoginComponent } from './recruiter/recruiter-login/recruiter-login.component';

const routes: Routes = [
{
    path: '',
    component: HomeComponent,
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
    path: 'project-client',
    component: ClientCreateProjectComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
