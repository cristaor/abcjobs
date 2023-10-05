import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLaboralComponent } from './candidate-laboral.component';

describe('CandidateLaboralComponent', () => {
  let component: CandidateLaboralComponent;
  let fixture: ComponentFixture<CandidateLaboralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateLaboralComponent]
    });
    fixture = TestBed.createComponent(CandidateLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
