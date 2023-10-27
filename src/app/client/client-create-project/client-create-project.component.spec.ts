import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { DebugElement } from '@angular/core';
import { HeaderComponent } from '../../header-client/header/header.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Client, ClientProject} from '../client'
import { ClientCreateProjectComponent } from './client-create-project.component';

//IMportar para pruebas exitosas
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from '../client.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { faker } from '@faker-js/faker';


const projectName= faker.commerce.productName();
   const year = faker.number.int({ min: 2024, max: 2026 });
   const month = faker.number.int({ min: 1, max: 12 });
   const day= faker.number.int({ min: 0, max: 30 });
   const active= faker.number.int({ min: 0, max: 1 }).toString();
   const details= faker.commerce.productDescription();
   const start_date = `${year}-${month}-${day}`
   const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVjbm9zb2Z0QGdtYWlsLmNvbSIsInJvbGUiOiJDTElFTlQiLCJwZXJzb25faWQiOiIzNTM0NjM0NjQzIiwiZXhwIjoxNjk4MzEwNTczfQ._0ZZbsRb11C_q-I8YaTaETqztemHh2WD-i2GHcJZuig"
   
describe('ClientCreateProjectComponent', () => {
  let component: ClientCreateProjectComponent;
  let fixture: ComponentFixture<ClientCreateProjectComponent>;
  let debug: DebugElement;
  let clientService: jasmine.SpyObj<ClientService>;
  const newProject: ClientProject = new ClientProject(1, projectName, start_date, active, "2023-01-01 00:00:01", details, "1");
   

   const setup = async (
          clientServiceReturnValues?: jasmine.SpyObjMethodNames<ClientService>,
        ) => {
          clientService = jasmine.createSpyObj<ClientService>('ClientService', {
            // Successful responses per default
            projectCreate: of({ status: 200, statusText: 'Project Created' })
          }
          );
        
        await TestBed.configureTestingModule({
            imports:[RouterTestingModule,ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, BrowserAnimationsModule],
            declarations: [ClientCreateProjectComponent, HeaderComponent],
            providers:[
                  {provide: ClientService, useValue: ClientService}
                ]
        }).compileComponents();
    
 
        fixture = TestBed.createComponent(ClientCreateProjectComponent);
        //component = fixture.debugElement.componentInstance;
        //component.ngOnInit();
        //tick();
        fixture.detectChanges();
    };
    
    const fillForm = () => {
      component.projectDataForm.setValue({
            ProjectName: projectName,
            Year: year,
            Month: month,
            Day: day,
            Active: active,
            Details: details
      });
    };

    

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
  /*it('Debe tener un campo de nombre de Proyecto', fakeAsync(async () => {
      await setup();
   //expect(debug.query(By.css('div')).attributes['class']).toEqual('card-body');
    //const element = debug.query(By.css("input[id='name']")).nativeElement;
    const element = fixture.debugElement.query(By.css("input[id='ProjectName']")).attributes['formControlName'];
    expect(element).toEqual('ProjectName');
     }));
  
  it('Validar cantidad de elementos input de formulario', fakeAsync(async () => {
      await setup();
   //expect(debug.query(By.css('div')).attributes['class']).toEqual('card-body');
    //const element = debug.query(By.css("input[id='name']")).nativeElement;
    const element = fixture.debugElement.query(By.css("input")).queryAll;
    expect(element.length).toEqual(1);
     }));
  
  it('Validar cantidad de elementos select de formulario', fakeAsync(async () => {
      await setup();
   //expect(debug.query(By.css('div')).attributes['class']).toEqual('card-body');
    //const element = debug.query(By.css("input[id='name']")).nativeElement;
    const element = fixture.debugElement.query(By.css("select")).queryAll;
    expect(element.length).toEqual(4);
     }));*/
  
 /* it('submits the form successfully', fakeAsync(async () => {
    await setup();

    fillForm();
    //fixture.detectChanges();
    // Wait for async validators
    //tick(2000);
    let button = fixture.debugElement.query(By.css("submit"));
    //button.triggerEventHandler('submit', {});
    let form = fixture.debugElement.query(By.css("form"));
    //form.triggerEventHandler('submit', {});
   //component.createClient(newClient);
    //fixture.detectChanges();
    //expect(clientService.projectCreate).toHaveBeenCalledWith(newProject, token);
   }));*/
});
