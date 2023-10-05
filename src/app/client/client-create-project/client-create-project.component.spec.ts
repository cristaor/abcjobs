import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreateProjectComponent } from './client-create-project.component';

describe('ClientCreateProjectComponent', () => {
  let component: ClientCreateProjectComponent;
  let fixture: ComponentFixture<ClientCreateProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientCreateProjectComponent]
    });
    fixture = TestBed.createComponent(ClientCreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
