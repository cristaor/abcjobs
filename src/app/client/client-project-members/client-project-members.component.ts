import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { valHooks } from 'cypress/types/jquery';
import { ToastrService } from 'ngx-toastr';
import { Client,ClientProject,CandidateRequestSearch, CandidateResponseSearch, TechnologyResponse,AbilityResponse } from '../client';
import { ClientService } from '../client.service'
import { ClientLoginService } from '../../client/client-login.service'
import {TranslateService} from '@ngx-translate/core';
import { ProfileListDetail } from '../project'
import {ProjectMember, ProjectMemberResponse} from 'src/app/client/project-member';
import { ProfileService } from '../project.service'

@Component({
  selector: 'app-client-project-members',
  templateUrl: './client-project-members.component.html',
  styleUrls: ['./client-project-members.component.css']
})
export class ClientProjectMembersComponent implements OnInit{
    title = 'angular-i18n-ngx-translate';
    selectedLanguage = 'es';
    token!: any
    members!: Array<ProjectMemberResponse>
    projectId!: number;
    projects!: Array<ClientProject>
    projectName!: String
    
     constructor(
        private clientService: ClientService,
        private profileService: ProfileService,
        private router: ActivatedRoute,
        private routerPath: Router,
        private toastr: ToastrService,
        private translateService: TranslateService,
        private clientLoginService: ClientLoginService,
      ) {this.translateService.setDefaultLang(this.selectedLanguage);
       this.translateService.use(this.selectedLanguage); }
       
       ngOnInit() {
            if (!parseInt(this.router.snapshot.params['projectId']))
            {
                this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_PROJECT')}`);
            }
          else{ 
            
                this.clientLoginService.who_i_am().subscribe(res =>{
                        if(res.is_authenticated){
                            this.token = res.auth_headers.get("Authorization") || "token"
                            this.projectId = this.router.snapshot.params['projectId']
                            this.getProject(this.projectId, this.token)
                            this.getMembers(this.projectId, this.token)
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
     }
     getProject(projectId: number,token: any): void {
    this.profileService.getProject(projectId, token)
      .subscribe(projects => {
        this.projects = projects
        this.projectName = this.projects[0].project_name
      },
      error => {
               //console.log(error);  
              this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText} - ${error.error.detail}`)
      })
    }
     getMembers(projectId: number, token: any): void {
        this.profileService.getMembers(projectId.toString(), token)
          .subscribe(members => {
            this.members = members
          },
          error => {
                   //console.log(error);
                  this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText} - ${error.error.detail}`)
          })
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
