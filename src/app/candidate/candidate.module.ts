import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderCandidateModule } from '../header-candidate/header-candidate.module';
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';
import { CandidateBasicComponent } from './candidate-basic/candidate-basic.component';
import { CandidateAcademicComponent } from './candidate-academic/candidate-academic.component';
import { CandidateLaboralComponent } from './candidate-laboral/candidate-laboral.component';
import { CandidateTechnicalRoleComponent } from './candidate-technical_role/candidate-technical_role.component';
import { CandidateTechnologyComponent } from './candidate-technology/candidate-technology.component';
import { CandidateTestComponent } from './candidate-test/candidate-test.component';
import { CandidateResultsComponent } from './candidate-results/candidate-results.component';
import { CandidateInterviewsComponent } from './candidate-interviews/candidate-interviews.component';
import { CandidateHomeComponent } from './candidate-home/candidate-home.component';
import {I18nModule} from '../i18n/i18n.module';
import { TranslateModule } from '@ngx-translate/core';
import { CandidateFullInfoComponent } from './candidate-full-info/candidate-full-info.component';



@NgModule({
  declarations: [
    CandidateLoginComponent,
    CandidateBasicComponent,
    CandidateAcademicComponent,
    CandidateLaboralComponent,
    CandidateTechnicalRoleComponent,
    CandidateTechnologyComponent,
    CandidateTestComponent,
    CandidateResultsComponent,
    CandidateInterviewsComponent,
    CandidateHomeComponent,
    CandidateFullInfoComponent
  ],
  imports: [
    CommonModule, HeaderCandidateModule ,ReactiveFormsModule, FormsModule,  
    I18nModule, TranslateModule
  ],
  exports: [CandidateLoginComponent,
    CandidateBasicComponent,
    CandidateAcademicComponent,
    CandidateLaboralComponent,
    CandidateTechnicalRoleComponent,
    CandidateTechnologyComponent,
    CandidateTestComponent,
    CandidateResultsComponent,
    CandidateInterviewsComponent,
    CandidateHomeComponent,
    CandidateFullInfoComponent
    ]
})
export class CandidateModule { }
