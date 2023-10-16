import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderCandidateModule } from './header-candidate/header-candidate.module';
import { HeaderClientModule } from './header-client/header-client.module';
import { HeaderRecruiterModule } from './header-recruiter/header-recruiter.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CandidateModule } from './candidate/candidate.module';
import { ClientModule } from './client/client.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderCandidateModule,
    HeaderClientModule,
    HeaderRecruiterModule,
    CandidateModule,
    ClientModule,
    RecruiterModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
