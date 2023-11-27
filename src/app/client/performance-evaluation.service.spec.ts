import { inject, async,TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClientModule } from '@angular/common/http';

import { PerformanceEvaluationService } from './performance-evaluation.service';

describe('PerformanceEvaluationService', () => {
  let service: PerformanceEvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientTestingModule,HttpClientModule],
        providers:[PerformanceEvaluationService]
        });
    //service = TestBed.inject(PerformanceEvaluationService);
  });

  it('should ...', inject([PerformanceEvaluationService], (service: PerformanceEvaluationService) => {
    expect(service).toBeTruthy();
  }));
});
