import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { DebugElement } from '@angular/core';
import { HeaderCandidateComponent } from '../../header-candidate/header/header.component';
import { RouterTestingModule } from "@angular/router/testing";
import { CandidateTechnologyComponent } from './candidate-technology.component';

//IMportar para pruebas exitosas
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CandidateService } from '../candidate.service';
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

describe('CandidateTechnology-Component', () => {
  let component: CandidateTechnologyComponent;
  let fixture: ComponentFixture<CandidateTechnologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,ReactiveFormsModule, ToastrModule.forRoot(), 
      HttpClientModule, BrowserAnimationsModule
      ,I18nModule,
           TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: createTranslateLoader,
              deps: [HttpClient]
            }
          })],
      declarations: [CandidateTechnologyComponent,HeaderCandidateComponent]
    });
    fixture = TestBed.createComponent(CandidateTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
