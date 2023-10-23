import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTechnologyComponent } from './candidate-technology.component';

describe('CandidateTechnicalComponent', () => {
  let component: CandidateTechnologyComponent;
  let fixture: ComponentFixture<CandidateTechnologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateTechnologyComponent]
    });
    fixture = TestBed.createComponent(CandidateTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
