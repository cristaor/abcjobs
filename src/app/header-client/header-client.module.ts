import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {I18nModule} from '../i18n/i18n.module'
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
     I18nModule,
    TranslateModule
  ],
  exports: [HeaderComponent]
})
export class HeaderClientModule { }
