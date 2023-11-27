import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { valHooks } from 'cypress/types/jquery';
import { ToastrService } from 'ngx-toastr';
import { ClientProject } from '../client';
import { ClientService } from '../client.service'
import { ClientLoginService } from '../../client/client-login.service'
import { TranslateService} from '@ngx-translate/core';
import { PerformanceEvaluationResponse } from '../performance-evaluation'
import { PerformanceEvaluationService } from '../performance-evaluation.service'
import { ProfileService } from '../project.service'

@Component({
  selector: 'app-client-evaluation-list',
  templateUrl: './client-evaluation-list.component.html',
  styleUrls: ['./client-evaluation-list.component.css']
})
export class ClientEvaluationListComponent implements OnInit{
     title = 'angular-i18n-ngx-translate';
    selectedLanguage = 'es';
    token!: any
    evaluations!: Array<PerformanceEvaluationResponse>
    projectId!: number;
    projects!: Array<ClientProject>
    projectName!: String
    
     constructor(
        private clientService: ClientService,
        private profileService: ProfileService,
        private formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private routerPath: Router,
        private toastr: ToastrService,
        private translateService: TranslateService,
        private clientLoginService: ClientLoginService,
        private evaluationService: PerformanceEvaluationService
      ) {this.translateService.setDefaultLang(this.selectedLanguage);
       this.translateService.use(this.selectedLanguage); }
       
       ngOnInit() {
            this.clientLoginService.who_i_am().subscribe(res =>{
                if(res.is_authenticated){
                    this.token = res.auth_headers.get("Authorization") || "token"
                    this.projectId = this.router.snapshot.params['projectId']
                    this.getProject(this.projectId, this.token)
                    this.getEvaluations(this.projectId, this.token)
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
        getEvaluations(projectId: number, token: any): void {
            this.evaluationService.getEvaluations(projectId.toString(), token)
              .subscribe(evaluations => {
                this.evaluations = evaluations
              },
              error => {
                       //console.log(error);
                      this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText} - ${error.error.detail}`)
              })
        }
        
        viewEvaluation(project_id: string, person_id: string):void {
            this.routerPath.navigate([`/client-evaluation-edit/${project_id}/${person_id}`])
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
