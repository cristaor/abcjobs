import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEvaluateComponent } from './client-evaluate.component';

describe('ClientEvaluateComponent', () => {
  let component: ClientEvaluateComponent;
  let fixture: ComponentFixture<ClientEvaluateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientEvaluateComponent]
    });
    fixture = TestBed.createComponent(ClientEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
