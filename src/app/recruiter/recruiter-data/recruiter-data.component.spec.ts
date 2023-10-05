import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterDataComponent } from './recruiter-data.component';

describe('RecruiterDataComponent', () => {
  let component: RecruiterDataComponent;
  let fixture: ComponentFixture<RecruiterDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterDataComponent]
    });
    fixture = TestBed.createComponent(RecruiterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
