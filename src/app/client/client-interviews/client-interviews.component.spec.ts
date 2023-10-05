import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInterviewsComponent } from './client-interviews.component';

describe('ClientInterviewsComponent', () => {
  let component: ClientInterviewsComponent;
  let fixture: ComponentFixture<ClientInterviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientInterviewsComponent]
    });
    fixture = TestBed.createComponent(ClientInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
