import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { valHooks } from 'cypress/types/jquery';
import { ToastrService } from 'ngx-toastr';
import { Client,ClientProject } from '../client';
import { ClientService } from '../client.service'
import { ClientLoginService } from '../../client/client-login.service'
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-client-projects-list',
  templateUrl: './client-projects-list.component.html',
  styleUrls: ['./client-projects-list.component.css']
})
export class ClientProjectsListComponent  implements OnInit{
    title = 'angular-i18n-ngx-translate';
    selectedLanguage = 'es';
    newCandidate!: Client;
    token!: any
    showTable: boolean = false
    projects!: Array<ClientProject>
    
    constructor(
        private clientService: ClientService,
        private formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private routerPath: Router,
        private toastr: ToastrService,
        private translateService: TranslateService,
        private clientLoginService: ClientLoginService,
      ) {this.translateService.setDefaultLang(this.selectedLanguage);
       this.translateService.use(this.selectedLanguage); }
       
        ngOnInit() {
        this.clientLoginService.who_i_am().subscribe(res =>{
                if(res.is_authenticated){
                    this.token = res.auth_headers.get("Authorization") || "token"
                    this.getProjects(this.token)
                }
                else{ 
                    this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS')}`);
                    this.routerPath.navigate(['/login-client'])
                }
            }, error => {
                this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS2')}`);
                this.routerPath.navigate(['/login-client'])
              });
    }
    
     
    getProjects(token: any): void {
    this.clientService.getProjects(token)
      .subscribe(projects => {
        this.projects = projects
        for(var obj in this.projects)
        {
            
        }
      },
      error => {
               //console.log(error);  
              this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText}`)
      })
    }
    viewMembers(project_id: number, token: any):void {
        this.routerPath.navigate([`/project-cliente-members/${project_id}`])
    }
      showError(error: string) {
            this.toastr.error(error, "Error")
        }
        
        showWarning(warning: string) {
            this.toastr.warning(warning, "Warning")
        }
        
       showSuccess(message: String) {
            //this.toastr.success(`El proyecto ${client} fue creado`, "Creación exitosa");
            this.toastr.success(`${message}`);
            console.log('translation', );
        } 
}
