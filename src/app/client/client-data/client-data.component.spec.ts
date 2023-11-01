import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { DebugElement } from '@angular/core';
import { HeaderComponent } from '../../header-client/header/header.component';
import { ClientDataComponent } from './client-data.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Client } from '../client'

//IMportar para pruebas exitosas
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from '../client.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateService} from '@ngx-translate/core';

describe('ClientDataComponent', () => {
  let component: ClientDataComponent;
  let fixture: ComponentFixture<ClientDataComponent>;
  let debug: DebugElement;
  let clientService: jasmine.SpyObj<ClientService>;
  let newClient: Client;

  const document="32534634";
  const documentType= "CC";
  const firstName = "German"
  const lastName = "Martinez"
  const username= "cmra@aol.co"
  const password = "HRerv3498&."
  const taxpayerId = "3645645"
  const name = "TECNISOFT"
  const country = "CO"
  const city = "CALI"
  const years = "3"
  const address = "Calle 1 No 2-35"
  const phoneNumber = "32899837"
  const profile = "OPERATIVO"
  const position = "LIDER TECNICO"
  const policy= true;

  const setup = async (
          clientServiceReturnValues?: jasmine.SpyObjMethodNames<ClientService>,
        ) => {
          clientService = jasmine.createSpyObj<ClientService>('ClientService', {
            // Successful responses per default
            clientCreate: of({ status: 200, statusText: 'Client Created' })
          }
          );

        await TestBed.configureTestingModule({
            imports:[RouterTestingModule,ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, BrowserAnimationsModule, TranslateService],
            declarations: [ClientDataComponent,HeaderComponent],
            providers:[
                  {provide: ClientService, userValue: ClientService}
                ]
        }).compileComponents();


        fixture = TestBed.createComponent(ClientDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
  };

  const fillForm = () => {
      component.clientDataForm.setValue({
          Username: username,
          Password: password,
            Document:  username,
            DocumentType: documentType,
            FirstName:  firstName,
            LastName:  lastName,
            PhoneNumber: phoneNumber,
            Years:  years,
            TaxPayerId :  taxpayerId,
            Name:  name,
            Country: country,
            City: city,
            Address: address,
            Profile: profile,
            Position: position,
            Policy: policy
      });
  };

  it('should create', () => {
    //expect(component).toBeTruthy();
  });

  /*it('Debe tener un campo de nombre de Organizacion', fakeAsync(async () => {
      await setup();
   //expect(debug.query(By.css('div')).attributes['class']).toEqual('card-body');
    //const element = debug.query(By.css("input[id='name']")).nativeElement;
    const element = fixture.debugElement.query(By.css("input[id='Name']")).attributes['formControlName'];
    expect(element).toEqual('Name');
     }));

  it('submits the form successfully', fakeAsync(async () => {
    await setup();

    fillForm();
    fixture.detectChanges();
    // Wait for async validators
    tick(2000);
    let button = fixture.debugElement.query(By.css("button[type='submit']"));
    button.triggerEventHandler('submit', {});

   //component.createClient(newClient);
    fixture.detectChanges();
    //expect(candidateService.candidateCreate).toHaveBeenCalledWith(Username,Password,Document,DocumentType,FirstName,LastName,PhoneNumber,Age,OriginCountry,ResidenceCountry,ResidenceCity,Address);
   }));*/

});
