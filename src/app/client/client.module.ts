import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderClientModule} from '../header-client/header-client.module'
import {I18nModule} from '../i18n/i18n.module'
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientDataComponent } from './client-data/client-data.component';
import { ClientCreateProjectComponent } from './client-create-project/client-create-project.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientEvaluateComponent } from './client-evaluate/client-evaluate.component';
import { ClientInterviewsComponent } from './client-interviews/client-interviews.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { CreateProfileComponent  } from './create-profile/create-profile.component';
import { TranslateModule } from '@ngx-translate/core';
import { ClientEditDataComponent } from './client-edit-data/client-edit-data.component';


@NgModule({
  declarations: [
    ClientLoginComponent,
    ClientDataComponent,
    ClientCreateProjectComponent,
    ClientSearchComponent,
    ClientEvaluateComponent,
    ClientInterviewsComponent,
    ClientHomeComponent,
    CreateProfileComponent,
    ClientEditDataComponent
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
    ClientLoginComponent,
    ClientDataComponent,
    ClientCreateProjectComponent,
    ClientSearchComponent,
    ClientEvaluateComponent,
    ClientInterviewsComponent,
    ClientHomeComponent,
    CreateProfileComponent,
    ClientEditDataComponent
  ]
})
export class ClientModule { }
