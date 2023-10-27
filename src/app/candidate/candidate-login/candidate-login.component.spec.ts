import { CandidateLoginComponent } from './candidate-login.component';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from "@angular/router/testing";

//IMportar para pruebas exitosas
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CandidateLoginComponent', () => {
  let component: CandidateLoginComponent;
  let fixture: ComponentFixture<CandidateLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports:[ RouterTestingModule,ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, BrowserAnimationsModule],  
      declarations: [CandidateLoginComponent]
    });
    fixture = TestBed.createComponent(CandidateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
