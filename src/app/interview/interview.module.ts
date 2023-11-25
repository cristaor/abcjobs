import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderClientModule} from '../header-client/header-client.module'
import {I18nModule} from '../i18n/i18n.module'
import {ScheduleInterviewComponent} from './schedule-interview/schedule-interview.component'
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ScheduleInterviewComponent
  ],
  imports: [
    CommonModule,
    HeaderClientModule,
    I18nModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
  ],
  exports:[
    ScheduleInterviewComponent
  ]
})
export class InterviewModule { }
