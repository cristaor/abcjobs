import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCandidateComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import {I18nModule} from '../i18n/i18n.module'
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderCandidateComponent
  ],
  imports: [
    CommonModule,RouterModule, I18nModule,
    TranslateModule
  ],
  exports: [HeaderCandidateComponent]
})
export class HeaderCandidateModule { }
