/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateTestComponent } from './create-test.component';

import { RouterTestingModule } from "@angular/router/testing";

import { TranslateTestingModule } from 'ngx-translate-testing';
//IMportar para pruebas exitosas
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {I18nModule} from '../../i18n/i18n.module'
import { TranslateService } from '@ngx-translate/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


describe('CreateTestComponent', () => {
  let component: CreateTestComponent;
  let fixture: ComponentFixture<CreateTestComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[ RouterTestingModule,ReactiveFormsModule,HttpClientTestingModule,
           ToastrModule.forRoot(), BrowserAnimationsModule,I18nModule,
           TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: createTranslateLoader,
              deps: [HttpClient]
            }
          })],
        declarations: [CreateTestComponent]
    });
    fixture = TestBed.createComponent(CreateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
