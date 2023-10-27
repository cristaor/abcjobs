import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCandidateComponent } from './header/header.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HeaderCandidateComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [HeaderCandidateComponent]
})
export class HeaderCandidateModule { }
