import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCandidateComponent } from './header.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('HeaderCandidateComponent', () => {
  let component: HeaderCandidateComponent;
  let fixture: ComponentFixture<HeaderCandidateComponent>;

 beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [HeaderCandidateComponent]
    })
      .compileComponents();
  }));
  
   beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
