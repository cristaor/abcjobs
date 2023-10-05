import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterLoadInterviewComponent } from './recruiter-load-interview.component';

describe('RecruiterLoadInterviewComponent', () => {
  let component: RecruiterLoadInterviewComponent;
  let fixture: ComponentFixture<RecruiterLoadInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterLoadInterviewComponent]
    });
    fixture = TestBed.createComponent(RecruiterLoadInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
