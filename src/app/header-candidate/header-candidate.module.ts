import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCandidateComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderCandidateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderCandidateComponent]
})
export class HeaderCandidateModule { }
