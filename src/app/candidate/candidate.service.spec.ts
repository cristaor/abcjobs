import { inject, async,TestBed } from '@angular/core/testing';

import { CandidateService } from './candidate.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClientModule } from '@angular/common/http';

describe('CandidateService', () => {
  let service: CandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
         imports:[HttpClientTestingModule],
        providers:[CandidateService]
        });
    //service = TestBed.inject(CandidateService);
  });

  it('should ...', inject([CandidateService], (service: CandidateService) => {
    expect(service).toBeTruthy();
  }));
});
