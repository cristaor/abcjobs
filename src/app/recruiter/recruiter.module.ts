import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { RecruiterDataComponent } from './recruiter-data/recruiter-data.component';
import { RecruiterLoadInterviewComponent } from './recruiter-load-interview/recruiter-load-interview.component';
import { RecruiterInterviewsComponent } from './recruiter-interviews/recruiter-interviews.component';



@NgModule({
  declarations: [
    RecruiterLoginComponent,
    RecruiterDataComponent,
    RecruiterLoadInterviewComponent,
    RecruiterInterviewsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecruiterModule { }
