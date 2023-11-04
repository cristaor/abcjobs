import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { DebugElement } from '@angular/core';
import { HeaderComponent } from '../../header-client/header/header.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Client,ClientProject,CandidateRequestSearch, CandidateResponseSearch, TechnologyResponse,AbilityResponse } from '../client'

import { ClientSearchComponent } from './client-search.component';


import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from '../client.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { faker } from '@faker-js/faker';

describe('ClientSearchComponent', () => {
  let component: ClientSearchComponent;
  let fixture: ComponentFixture<ClientSearchComponent>;
  let debug: DebugElement;
  let clientService: jasmine.SpyObj<ClientService>;
  
  const setup = async (
          clientServiceReturnValues?: jasmine.SpyObjMethodNames<ClientService>,
        ) => {
          clientService = jasmine.createSpyObj<ClientService>('ClientService', {
            // Successful responses per default
            projectCreate: of({ status: 200, statusText: 'Candidate results' })
          }
          );
        
        await TestBed.configureTestingModule({
            imports:[RouterTestingModule,ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, BrowserAnimationsModule],
            declarations: [ClientSearchComponent, HeaderComponent],
            providers:[
                  {provide: ClientService, useValue: ClientService}
                ]
        }).compileComponents();
    
 
        fixture = TestBed.createComponent(ClientSearchComponent);
        //component = fixture.debugElement.componentInstance;
        //component.ngOnInit();
        //tick();
        fixture.detectChanges();
    };

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
