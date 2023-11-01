import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { DebugElement } from '@angular/core';
import { HeaderCandidateComponent } from '../../header-candidate/header/header.component';
import { CandidateBasicComponent } from './candidate-basic.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Candidate } from '../candidate'

//IMportar para pruebas exitosas
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CandidateService } from '../candidate.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {I18nModule} from '../../i18n/i18n.module'
import { TranslateService } from '@ngx-translate/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

describe('CandidateBasicComponent', () => {
  let component: CandidateBasicComponent;
  let fixture: ComponentFixture<CandidateBasicComponent>;
  let debug: DebugElement;
  let candidateService: jasmine.SpyObj<CandidateService>;
  let newCandidate: Candidate;

  const Username='pperez@aol.co';
  const Password= 'Pe123..';
  const Document= '38246929';
  const DocumentType= 'ID NACIONAL';
  const FirstName= 'Pedro';
  const LastName= 'Paez';
  const PhoneNumber= '75352555';
  const Age= 30;
  const OriginCountry= 'Colombia';
  const ResidenceCountry= 'Peru';
  const ResidenceCity= 'Lima';
  const Address= 'Av Mraflores 123';
  const Policy= true;


        const setup = async (
          candidateServiceReturnValues?: jasmine.SpyObjMethodNames<CandidateService>,
        ) => {
          candidateService = jasmine.createSpyObj<CandidateService>('CandidateService', {
            // Successful responses per default
            candidateCreate: of({ status: 200, statusText: 'Candidate Created' })
          }
          );

        await TestBed.configureTestingModule({
            imports:[RouterTestingModule,ReactiveFormsModule, ToastrModule.forRoot(), 
            HttpClientModule, BrowserAnimationsModule,
            ,I18nModule,
           TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: createTranslateLoader,
              deps: [HttpClient]
            }
          })],
            declarations: [CandidateBasicComponent, HeaderCandidateComponent],
            providers:[
                  {provide: CandidateService, userValue: CandidateService}
                ]
        }).compileComponents();


        fixture = TestBed.createComponent(CandidateBasicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
  };

  const fillForm = () => {
      component.candidateBasicForm.setValue({
          Username: Username,
          Password: Password,
          Document: Document,
        DocumentType: DocumentType,
        FirstName: FirstName,
        LastName: LastName,
        PhoneNumber: PhoneNumber,
        Age: Age,
        OriginCountry: OriginCountry,
        ResidenceCountry: ResidenceCountry,
        ResidenceCity: ResidenceCity,
        Address: Address,
        Policy: Policy
      });
  };

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
/*
  it('Debe tener un campo de nombre de usuario', fakeAsync(async () => {
      await setup();
   //expect(debug.query(By.css('div')).attributes['class']).toEqual('card-body');
    //const element = debug.query(By.css("input[id='name']")).nativeElement;
    const element = fixture.debugElement.query(By.css("input[id='Username']")).attributes['formControlName'];
    expect(element).toEqual('Username');
     }));

  it('submits the form successfully', fakeAsync(async () => {
    await setup();

    fillForm();
    fixture.detectChanges();
    // Wait for async validators
    tick(2000);
    let button = fixture.debugElement.query(By.css("button[type='submit']"));
    button.triggerEventHandler('submit', {});

   //component.createCandidate(newCandidate);
    fixture.detectChanges();
    //expect(candidateService.candidateCreate).toHaveBeenCalledWith(Username,Password,Document,DocumentType,FirstName,LastName,PhoneNumber,Age,OriginCountry,ResidenceCountry,ResidenceCity,Address);
   }));

*/


});
