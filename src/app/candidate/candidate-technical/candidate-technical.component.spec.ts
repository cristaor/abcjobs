import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTechnicalComponent } from './candidate-technical.component';

describe('CandidateTechnicalComponent', () => {
  let component: CandidateTechnicalComponent;
  let fixture: ComponentFixture<CandidateTechnicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateTechnicalComponent]
    });
    fixture = TestBed.createComponent(CandidateTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
