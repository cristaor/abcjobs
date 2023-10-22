import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTechnicalRoleComponent } from './candidate-technical_role.component';

describe('CandidateTechnicalComponent', () => {
  let component: CandidateTechnicalRoleComponent;
  let fixture: ComponentFixture<CandidateTechnicalRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateTechnicalRoleComponent]
    });
    fixture = TestBed.createComponent(CandidateTechnicalRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
