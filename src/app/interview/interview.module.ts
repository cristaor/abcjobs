import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderRecruiterModule} from '../header-recruiter/header-recruiter.module'
import {I18nModule} from '../i18n/i18n.module'
import {ScheduleInterviewComponent} from './schedule-interview/schedule-interview.component'
import {ListScheduledInterviewComponent} from './list-scheduled-interview/list-scheduled-interview.component'
import {FindInterviewComponent} from './find-interview/find-interview.component'



import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ScheduleInterviewComponent,
    ListScheduledInterviewComponent,
    FindInterviewComponent
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
    ScheduleInterviewComponent,
    ListScheduledInterviewComponent,
    FindInterviewComponent
  ]
})
export class InterviewModule { }
