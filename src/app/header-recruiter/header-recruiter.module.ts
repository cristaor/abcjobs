import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRecruiterComponent } from './header/header.component';
import {I18nModule} from '../i18n/i18n.module'
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HeaderRecruiterComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    TranslateModule
  ],
  exports: [HeaderRecruiterComponent]
})
export class HeaderRecruiterModule { }
