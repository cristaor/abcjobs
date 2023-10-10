import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderCandidateComponent } from '../../header-candidate/header/header.component';
import { CandidateBasicComponent } from './candidate-basic.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('CandidateBasicComponent', () => {
  let component: CandidateBasicComponent;
  let fixture: ComponentFixture<CandidateBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [CandidateBasicComponent,HeaderCandidateComponent]
    });
    fixture = TestBed.createComponent(CandidateBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
