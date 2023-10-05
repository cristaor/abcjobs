import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientDataComponent } from './client-data/client-data.component';
import { ClientCreateProjectComponent } from './client-create-project/client-create-project.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientEvaluateComponent } from './client-evaluate/client-evaluate.component';
import { ClientInterviewsComponent } from './client-interviews/client-interviews.component';



@NgModule({
  declarations: [
    ClientLoginComponent,
    ClientDataComponent,
    ClientCreateProjectComponent,
    ClientSearchComponent,
    ClientEvaluateComponent,
    ClientInterviewsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
