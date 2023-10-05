import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateResultsComponent } from './candidate-results.component';

describe('CandidateResultsComponent', () => {
  let component: CandidateResultsComponent;
  let fixture: ComponentFixture<CandidateResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateResultsComponent]
    });
    fixture = TestBed.createComponent(CandidateResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
