import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderCandidateModule } from '../header-candidate/header-candidate.module';
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';
import { CandidateBasicComponent } from './candidate-basic/candidate-basic.component';
import { CandidateAcademicComponent } from './candidate-academic/candidate-academic.component';
import { CandidateLaboralComponent } from './candidate-laboral/candidate-laboral.component';
import { CandidateTechnicalComponent } from './candidate-technical/candidate-technical.component';
import { CandidateTestComponent } from './candidate-test/candidate-test.component';
import { CandidateResultsComponent } from './candidate-results/candidate-results.component';
import { CandidateInterviewsComponent } from './candidate-interviews/candidate-interviews.component';


@NgModule({
  declarations: [
    CandidateLoginComponent,
    CandidateBasicComponent,
    CandidateAcademicComponent,
    CandidateLaboralComponent,
    CandidateTechnicalComponent,
    CandidateTestComponent,
    CandidateResultsComponent,
    CandidateInterviewsComponent
  ],
  imports: [
    CommonModule, HeaderCandidateModule ,ReactiveFormsModule, FormsModule
  ],
  exports: [CandidateLoginComponent,
    CandidateBasicComponent,
    CandidateAcademicComponent,
    CandidateLaboralComponent,
    CandidateTechnicalComponent,
    CandidateTestComponent,
    CandidateResultsComponent,
    CandidateInterviewsComponent
    ]
})
export class CandidateModule { }
