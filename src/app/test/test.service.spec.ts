/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestService } from './test.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClientModule } from '@angular/common/http';
describe('Service: Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule],
      providers: [TestService]
    });
  });

  it('should ...', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));
});
