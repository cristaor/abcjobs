import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { valHooks } from 'cypress/types/jquery';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../client';
import { ClientService } from '../client.service'

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.css']
})
export class ClientDataComponent implements OnInit{
    clientDataForm!: FormGroup;

    newClient!: Client;

    constructor(
        private clientService: ClientService,
        private formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private routerPath: Router,
        private toastr: ToastrService
      ) { }
       ngOnInit() {
           this.clientDataForm = this.formBuilder.group({
            Username: ["", [Validators.required, Validators.maxLength(60), Validators.email ]],
            Password: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
            Document:  ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(20), Validators.minLength(4)]],
            DocumentType:  ["", [Validators.required]],
            FirstName:  ["", [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
            LastName:  ["", [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
            PhoneNumber:  ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(20), Validators.minLength(6)]],
            Years:  ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
            TaxPayerId :  ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(20), Validators.minLength(4)]],
            Name:  ["", [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
            Country: ["", [Validators.required]],
            City: ["", [Validators.required]],
            Address: ["", [Validators.required]],
            Profile: ["", [Validators.required]],
            Position: ["", [Validators.required]],
            Policy: ["", [Validators.required]]
            
    })
       }
       
    createClient(newClient: Client) {
           
        
        console.log(`${this.clientDataForm.get('Document')?.value}-
                    ${this.clientDataForm.get('DocumentType')?.value}-
                     ${this.clientDataForm.get('FirstName')?.value}-
                    ${this.clientDataForm.get('LastName')?.value}-
                    ${this.clientDataForm.get('Username')?.value}-
                    ${this.clientDataForm.get('Password')?.value}-
                    ${this.clientDataForm.get('TaxPayerId')?.value}-
                    ${this.clientDataForm.get('Name')?.value} -
                    ${this.clientDataForm.get('Country')?.value}-
                    ${this.clientDataForm.get('City')?.value}-
                    ${this.clientDataForm.get('Years')?.value}-
                    ${this.clientDataForm.get('Address')?.value}-
                    ${this.clientDataForm.get('PhoneNumber')?.value}-
                    ${this.clientDataForm.get('Profile')?.value}-
                    ${this.clientDataForm.get('Position')?.value}-
                    
                    
                    
                    
        `)
       
         this.clientService.clientCreate(this.clientDataForm.get('Document')?.value,
                                        this.clientDataForm.get('DocumentType')?.value,
                                        this.clientDataForm.get('FirstName')?.value,
                                        this.clientDataForm.get('LastName')?.value,
                                        this.clientDataForm.get('Username')?.value,
                                        this.clientDataForm.get('Password')?.value,
                                        this.clientDataForm.get('TaxPayerId')?.value,
                                        this.clientDataForm.get('Name')?.value,
                                        this.clientDataForm.get('Country')?.value,
                                        this.clientDataForm.get('City')?.value,
                                        this.clientDataForm.get('Years')?.value.toString(),
                                        this.clientDataForm.get('Address')?.value,
                                        this.clientDataForm.get('PhoneNumber')?.value,
                                        this.clientDataForm.get('Profile')?.value,
                                        this.clientDataForm.get('Position')?.value)
                                        .subscribe(client => {
                                            this.routerPath.navigate([`/login-client`])
      this.showSuccess(this.clientDataForm.get('Name')?.value)
      },
        error => {
          //console.log(error);  
          this.showError(`Ha ocurrido un error: ${error.status} - ${error.statusText}`)
        })
    }
     showError(error: string) {
    this.toastr.error(error, "Error")
    }
    showWarning(warning: string) {
    this.toastr.warning(warning, "Error de autenticación")
    }

  showSuccess(client: String) {
    this.toastr.success(`la Compañia  ${client} fue creada`, "Creación exitosa");
    }
    cancelCreation():void{this.clientDataForm.reset();this.routerPath.navigate([`/login-client`])}
}
