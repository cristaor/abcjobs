import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { valHooks } from 'cypress/types/jquery';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../client';
import { ClientService } from '../client.service'
import { ClientLoginService } from '../../client/client-login.service'
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-client-edit-data',
  templateUrl: './client-edit-data.component.html',
  styleUrls: ['./client-edit-data.component.css']
})
export class ClientEditDataComponent implements OnInit{
    clientDataForm!: FormGroup;
    title = 'angular-i18n-ngx-translate';
    selectedLanguage = 'es';
    @Input() newClient!: Client;
    token!: any
    clients!: Array<Client>
     
    constructor(
        private clientService: ClientService,
        private formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private routerPath: Router,
        private toastr: ToastrService,
        private translateService: TranslateService,
        private clientLoginService: ClientLoginService
      ) {this.translateService.setDefaultLang(this.selectedLanguage);
       this.translateService.use(this.selectedLanguage); }
       
    ngOnInit() {
        
        this.clientLoginService.who_i_am().subscribe(res =>{
                if(res.is_authenticated){
                    this.token = res.auth_headers.get("Authorization") || "token"
                    this.getClientInfo(this.token)
                }
                else{ 
                    this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS')}`);
                    this.routerPath.navigate(['/login-client'])
                }
            }, error => {
                this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS2')}`);
                this.routerPath.navigate(['/login-client'])
              });
        
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
    
    getClientInfo(token: any): void {
    this.clientService.getClientInfo(token)
      .subscribe(clients => {
        console.log(JSON.stringify(clients,null,4))  
        this.newClient = clients[0]
        console.log(this.newClient.document)
        console.log(this.newClient.firstName)
        this.clientDataForm.controls["Username"].setValue(this.newClient.username)
        this.clientDataForm.controls["Password"].setValue(this.newClient.password)
        this.clientDataForm.controls["Document"].setValue(this.newClient.document)
        this.clientDataForm.controls["DocumentType"].setValue(this.newClient.documentType)
        this.clientDataForm.controls["FirstName"].setValue(this.newClient.firstName)
        this.clientDataForm.controls["LastName"].setValue(this.newClient.lastName)
        this.clientDataForm.controls["PhoneNumber"].setValue(this.newClient.phoneNumber)
        this.clientDataForm.controls["Years"].setValue(this.newClient.years)
        this.clientDataForm.controls["TaxPayerId"].setValue(this.newClient.taxpayerId)
        this.clientDataForm.controls["Name"].setValue(this.newClient.name)
        this.clientDataForm.controls["Country"].setValue(this.newClient.country)
        this.clientDataForm.controls["City"].setValue(this.newClient.city)
        this.clientDataForm.controls["Address"].setValue(this.newClient.address)
        this.clientDataForm.controls["Profile"].setValue(this.newClient.profile)
        this.clientDataForm.controls["Position"].setValue(this.newClient.position)
        
      },
      error => {
               //console.log(error);  
              this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText} - ${error.error.detail}`)
      })
    }
    updateClient(newClient: Client){}
    
     showError(error: string) {
    this.toastr.error(error, "Error")
    }
    showWarning(warning: string) {
    this.toastr.warning(warning, "Error de autenticación")
    }

  showSuccess(client: String) {
    this.toastr.success(`${this.translateService.instant('CLIENT_DATA.BACK_RESPONSES.SUCESS_1')} ${client} ${this.translateService.instant('CLIENT_DATA.BACK_RESPONSES.SUCESS_2')}`, `${this.translateService.instant('BACK_RESPONSES.SUCESSFULL_1')}`);
    }
}
