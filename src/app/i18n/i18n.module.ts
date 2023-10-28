import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nComponent } from './i18n.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    I18nComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [I18nComponent]
})
export class I18nModule { }
