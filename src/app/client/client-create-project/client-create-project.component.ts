import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { valHooks } from 'cypress/types/jquery';
import { ToastrService } from 'ngx-toastr';
import { ClientProject } from '../client';
import { ClientService } from '../client.service'
import { ClientLoginService } from '../../client/client-login.service'

@Component({
  selector: 'app-client-create-project',
  templateUrl: './client-create-project.component.html',
  styleUrls: ['./client-create-project.component.css']
})
export class ClientCreateProjectComponent implements OnInit{
    projectDataForm!: FormGroup;
    
    newProject!: ClientProject;
    
     constructor(
        private clientService: ClientService,
        private formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private routerPath: Router,
        private toastr: ToastrService,
        private clientLoginService: ClientLoginService
      ) { }
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
                    this.showError("Credenciales invalidas");
                    this.routerPath.navigate(['/login-client'])
                }
            }, error => {
                this.showError("Credenciales invalidas. Inicie sesión nuevamente");
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
                                                 this.routerPath.navigate([`/login-client`])
                                                 this.showSuccess(newProject.project_name)
                    },
                    error => {
                      //console.log(error);  
                      this.showError(`Ha ocurrido un error: ${error.status} - ${error.statusText}`)
                    })
                }
                else{
                    this.showError("Credenciales invalidas");
                    this.routerPath.navigate(['/login-client'])
                }
            }, error => {
                this.showError("Credenciales invalidas. Inicie sesión nuevamente");
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
            this.toastr.success(`El proyecto ${client} fue creado`, "Creación exitosa");
        }
        
        cancelCreation():void{this.projectDataForm.reset();this.routerPath.navigate([`/login-client`])}
}
