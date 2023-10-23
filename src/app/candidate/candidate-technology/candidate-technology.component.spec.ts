import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { DebugElement } from '@angular/core';
import { HeaderCandidateComponent } from '../../header-candidate/header/header.component';
import { RouterTestingModule } from "@angular/router/testing";
import { CandidateTechnologyComponent } from './candidate-technology.component';

//IMportar para pruebas exitosas
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CandidateService } from '../candidate.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CandidateTechnicalComponent', () => {
  let component: CandidateTechnologyComponent;
  let fixture: ComponentFixture<CandidateTechnologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, BrowserAnimationsModule],
      declarations: [CandidateTechnologyComponent,HeaderCandidateComponent]
    });
    fixture = TestBed.createComponent(CandidateTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
