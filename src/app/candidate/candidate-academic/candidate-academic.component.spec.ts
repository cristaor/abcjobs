import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderCandidateComponent } from '../../header-candidate/header/header.component';
import { CandidateAcademicComponent } from './candidate-academic.component';
import { RouterTestingModule } from "@angular/router/testing";


describe('CandidateAcademicComponent', () => {
  let component: CandidateAcademicComponent;
  let fixture: ComponentFixture<CandidateAcademicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [CandidateAcademicComponent,HeaderCandidateComponent]
    });
    fixture = TestBed.createComponent(CandidateAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
