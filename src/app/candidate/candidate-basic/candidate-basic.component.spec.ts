import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateBasicComponent } from './candidate-basic.component';

describe('CandidateBasicComponent', () => {
  let component: CandidateBasicComponent;
  let fixture: ComponentFixture<CandidateBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateBasicComponent]
    });
    fixture = TestBed.createComponent(CandidateBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
