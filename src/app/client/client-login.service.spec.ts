/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientLoginService } from './client-login.service';
import {I18nModule} from '../i18n/i18n.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";
describe('Service: ClientLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[I18nModule,TranslateModule,HttpClientTestingModule],
      providers: [ClientLoginService]
    });
  });

  it('should ...', inject([ClientLoginService], (service: ClientLoginService) => {
    expect(service).toBeTruthy();
  }));
});
