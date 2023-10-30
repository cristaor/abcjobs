import { inject, async,TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClientModule } from '@angular/common/http';
describe('ClientService', () => {
  let service: ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
         imports:[HttpClientTestingModule,HttpClientModule],
        providers:[ClientService]
        });
    //service = TestBed.inject(CandidateService);
  });

  it('should ...', inject([ClientService], (service: ClientService) => {
    expect(service).toBeTruthy();
  }));
});
