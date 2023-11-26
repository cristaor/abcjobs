import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { valHooks } from 'cypress/types/jquery';
import { ToastrService } from 'ngx-toastr';
import { Client,ClientProject } from '../client';
import { ClientService } from '../client.service'
import { ClientLoginService } from '../../client/client-login.service'
import {TranslateService} from '@ngx-translate/core';
import { PerformanceEvaluation, PerformanceEvaluationResponse } from '../performance-evaluation'
import { ProjectMemberResponse } from '../project-member';
import { PerformanceEvaluationService } from '../performance-evaluation.service'
import { ProfileService } from '../project.service'

@Component({
  selector: 'app-client-evaluation-edit',
  templateUrl: './client-evaluation-edit.component.html',
  styleUrls: ['./client-evaluation-edit.component.css']
})
export class ClientEvaluationEditComponent implements OnInit {
    evaluationDataForm!: FormGroup;
    title = 'angular-i18n-ngx-translate';
    selectedLanguage = 'es';
    newEvaluation!: PerformanceEvaluationResponse;
    token!: any
    projectId!: number;
    memberId!: number;
    evaluations!: Array<PerformanceEvaluationResponse>
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
       
    projects!: Array<ClientProject>

    
    ngOnInit() {
        
        this.clientLoginService.who_i_am().subscribe(res =>{
                if(res.is_authenticated){
                    this.token = res.auth_headers.get("Authorization") || "token"
                    this.projectId = this.router.snapshot.params['projectId']
                    this.memberId = this.router.snapshot.params['personId']
                    this.getProject(this.projectId, this.token)
                    this.getEvaluationInfo(this.projectId.toString(), this.memberId.toString(), this.token)
                    
                }
                else{ 
                    this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS')}`);
                    this.routerPath.navigate(['/login-client'])
                }
            }, error => {
                this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS2')}`);
                this.routerPath.navigate(['/login-client'])
              });
        
        
           this.evaluationDataForm = this.formBuilder.group({
            Project:["", [Validators.required]],
            Member:["", [Validators.required]],
            Score:  ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2), Validators.minLength(1)]],
            Details: ["", [Validators.required, Validators.maxLength(500), Validators.minLength(10) ]] 
        })
        
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
    getEvaluationInfo(projectId: string, memberId: string, token: string):void
    {
        this.evaluationService.getEvaluation(projectId, memberId, token)
        .subscribe(evaluations => {
            
            this.newEvaluation = evaluations[0]
            console.log(JSON.stringify(this.newEvaluation,null,4))
            this.evaluationDataForm.controls["Project"].setValue(this.projectName)
            //this.evaluationDataForm.controls["Member"].setValue(this.newEvaluation.person_name)
            this.evaluationDataForm.controls["Score"].setValue(this.newEvaluation.score)
            this.evaluationDataForm.controls["Details"].setValue(this.newEvaluation.details)
        },
      error => {
               //console.log(error);  
              this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText} - ${error.error.detail}`)
      })
    }
    
    updateEvaluation(newEvaluation: PerformanceEvaluationResponse){}
    
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
