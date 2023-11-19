import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderClientModule} from '../header-client/header-client.module'
import {I18nModule} from '../i18n/i18n.module'
import {CreateTestComponent} from './create-test/create-test.component'
import {RegisterResultTestComponent} from './register-result-test/register-result-test.component'
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    CreateTestComponent,
    RegisterResultTestComponent
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
    CreateTestComponent
  ]
})
export class TestModule { }
