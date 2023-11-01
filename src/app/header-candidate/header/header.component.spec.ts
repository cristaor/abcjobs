import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCandidateComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import {I18nModule} from '../../i18n/i18n.module'
import { TranslateService } from '@ngx-translate/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

describe('HeaderCandidateComponent', () => {
  let component: HeaderCandidateComponent;
  let fixture: ComponentFixture<HeaderCandidateComponent>;

 beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule, HttpClientModule
      ,I18nModule,
           TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: createTranslateLoader,
              deps: [HttpClient]
            }
          })],
      declarations: [HeaderCandidateComponent]
    })
      .compileComponents();
  }));
  
   beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
