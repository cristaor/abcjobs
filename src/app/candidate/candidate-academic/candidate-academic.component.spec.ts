import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateAcademicComponent } from './candidate-academic.component';

describe('CandidateAcademicComponent', () => {
  let component: CandidateAcademicComponent;
  let fixture: ComponentFixture<CandidateAcademicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateAcademicComponent]
    });
    fixture = TestBed.createComponent(CandidateAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
