import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { valHooks } from 'cypress/types/jquery';
import { ToastrService } from 'ngx-toastr';
import { ClientProject } from '../client';
import { ClientService } from '../client.service'
import { ClientLoginService } from '../../client/client-login.service'
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-client-create-project',
  templateUrl: './client-create-project.component.html',
  styleUrls: ['./client-create-project.component.css']
})
export class ClientCreateProjectComponent implements OnInit{
    projectDataForm!: FormGroup;
    title = 'angular-i18n-ngx-translate';
    selectedLanguage = 'es';
    newProject!: ClientProject;
    
     constructor(
        private clientService: ClientService,
        private formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private routerPath: Router,
        private toastr: ToastrService,
        private clientLoginService: ClientLoginService,
        private translateService: TranslateService
      ) {this.translateService.setDefaultLang(this.selectedLanguage);
       this.translateService.use(this.selectedLanguage); }
       
       ngOnInit() {
            this.projectDataForm = this.formBuilder.group({
                     ProjectName: ["", [Validators.required, Validators.maxLength(60), Validators.minLength(6) ]],
                     Year: ["", [Validators.required]],
                     Month : ["", [Validators.required]],
                     Day: ["", [Validators.required]],
                     Active  : ["", [Validators.required]],
                     Details: ["", [Validators.required, Validators.maxLength(300), Validators.minLength(10) ]] 
                    })
            this.clientLoginService.who_i_am().subscribe(res =>{
                if(!res.is_authenticated){  
                    this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS')}`);
                    this.routerPath.navigate(['/login-client'])
                }
            }, error => {
                this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS2')}`);
                this.routerPath.navigate(['/login-client'])
              });
       }
       createProject(newProject: ClientProject)
       {
                newProject.project_name=`${this.projectDataForm.get('ProjectName')?.value}`;
                newProject.start_date=`${this.projectDataForm.get('Year')?.value}-${this.projectDataForm.get('Month')?.value}-${this.projectDataForm.get('Day')?.value}`
                newProject.active=`${this.projectDataForm.get('Active')?.value}`
                newProject.details=`${this.projectDataForm.get('Details')?.value}`   

            console.log('Values: ' + JSON.stringify(newProject));
            
            this.clientLoginService.who_i_am().subscribe(res =>{
                
                if(res.is_authenticated){
                    let token = res.auth_headers.get("Authorization") || "token"
                    this.clientService.projectCreate(newProject, token).subscribe(project => {
                                                 this.routerPath.navigate([`/home-client`])
                                                 this.showSuccess(newProject.project_name)
                    },
                    error => {
                      //console.log(error);  
                      this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText} - ${error.error.detail}`)
                    })
                }
                else{
                    this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS2')}`);
                    this.routerPath.navigate(['/login-client'])
                }
            }, error => {
                this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS2')}`);
                this.routerPath.navigate(['/login-client'])
              });
       
       }
       
       showError(error: string) {
            this.toastr.error(error, "Error")
        }
        
        showWarning(warning: string) {
            this.toastr.warning(warning, "Error de autenticación")
        }
        
       showSuccess(client: String) {
            //this.toastr.success(`El proyecto ${client} fue creado`, "Creación exitosa");
            this.toastr.success(`${this.translateService.instant('CREATE_PROJECT.BACK_RESPONSES.SUCESS_1')}  ${client} ${this.translateService.instant('CREATE_PROJECT.BACK_RESPONSES.SUCESS_2')}`, `${this.translateService.instant('BACK_RESPONSES.SUCESSFULL_1')}`);
            console.log('translation', );
        }
        
        cancelCreation():void{this.projectDataForm.reset();this.routerPath.navigate([`/login-client`])}
}
