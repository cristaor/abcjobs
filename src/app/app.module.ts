import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateModule } from './candidate/candidate.module';
import { ClientModule } from './client/client.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { HeaderCandidateModule } from './header-candidate/header-candidate.module';
import { HeaderClientModule } from './header-client/header-client.module';
import { HeaderRecruiterModule } from './header-recruiter/header-recruiter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CandidateModule,
    ClientModule,
    RecruiterModule,
    HeaderCandidateModule,
    HeaderClientModule,
    HeaderRecruiterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
