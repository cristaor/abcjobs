import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { DebugElement } from '@angular/core';
import { HeaderCandidateComponent } from '../../header-candidate/header/header.component';
import { CandidateAcademicComponent } from './candidate-academic.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Candidate } from '../candidate'

//IMportar para pruebas exitosas
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CandidateService } from '../candidate.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CandidateAcademicComponent', () => {
  let component: CandidateAcademicComponent;
  let fixture: ComponentFixture<CandidateAcademicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, BrowserAnimationsModule],
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
