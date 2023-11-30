import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {I18nModule} from '../i18n/i18n.module'
import { TranslateModule } from '@ngx-translate/core';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { RecruiterDataComponent } from './recruiter-data/recruiter-data.component';
//import { RecruiterLoadInterviewComponent } from './recruiter-load-interview/recruiter-load-interview.component';
import { RecruiterInterviewsComponent } from './recruiter-interviews/recruiter-interviews.component';
import { HeaderRecruiterModule} from '../header-recruiter/header-recruiter.module';
import { RecruiterHomeComponent } from './recruiter-home/recruiter-home.component'


@NgModule({
  declarations: [
    RecruiterLoginComponent,
    RecruiterDataComponent,
    //RecruiterLoadInterviewComponent,
    RecruiterInterviewsComponent,
    RecruiterHomeComponent
  ],
  imports: [
    CommonModule,
    HeaderRecruiterModule,
    I18nModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
  ],
  exports:[
    RecruiterLoginComponent,
    RecruiterDataComponent,
    //RecruiterLoadInterviewComponent,
    RecruiterInterviewsComponent,
    RecruiterHomeComponent
  ]
})
export class RecruiterModule { }
