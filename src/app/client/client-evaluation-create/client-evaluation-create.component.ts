import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { valHooks } from 'cypress/types/jquery';
import { ToastrService } from 'ngx-toastr';
import { Client,ClientProject } from '../client';
import { ClientService } from '../client.service'
import { ClientLoginService } from '../../client/client-login.service'
import {TranslateService} from '@ngx-translate/core';
import { PerformanceEvaluation } from '../performance-evaluation'
import { ProjectMemberResponse } from '../project-member';
import { PerformanceEvaluationService } from '../performance-evaluation.service'

@Component({
  selector: 'app-client-evaluation-create',
  templateUrl: './client-evaluation-create.component.html',
  styleUrls: ['./client-evaluation-create.component.css']
})
export class ClientEvaluationCreateComponent implements OnInit {

    evaluationCreateForm!: FormGroup;
    title = 'angular-i18n-ngx-translate';
    selectedLanguage = 'es';
    newEvaluation!: PerformanceEvaluation;
    token!: any
    
    constructor(
        private clientService: ClientService,
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
    members!: Array<ProjectMemberResponse>
    
    ngOnInit() {
           this.evaluationCreateForm = this.formBuilder.group({
            Project:["", [Validators.required]],
            Member:["", [Validators.required]],
            Score:  ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2), Validators.minLength(1)]],
            Details: ["", [Validators.required, Validators.maxLength(500), Validators.minLength(10) ]] 
        })
        this.clientLoginService.who_i_am().subscribe(res =>{
                if(res.is_authenticated){
                    this.token = res.auth_headers.get("Authorization") || "token"
                    this.getProjects(this.token)
                    //this.getTechnologies(this.token)
                    
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
      },
      error => {
               //console.log(error);
              this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText} - ${error.error.detail}`)
      })
    }
    
    projectOnChange(e:any){
        console.log(`Seleccionado ${e.target.value}`)
        this.getMembers(e.target.value, this.token)
    }
    
    getMembers(project_id:string, token: any): void {
        this.evaluationService.getMembers(project_id, token)
        .subscribe(members => {
        this.members = members
      },
      error => {
               //console.log(error);
              this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText}- ${error.error.detail}`)
      })
        
        }
    
    createEvaluation(newEvaluation: PerformanceEvaluation){
        newEvaluation.score = `${this.evaluationCreateForm.get('Score')?.value}`;
        newEvaluation.details = `${this.evaluationCreateForm.get('Details')?.value}`;
        newEvaluation.project_id = `${this.evaluationCreateForm.get('Project')?.value}`;
        newEvaluation.person_id = `${this.evaluationCreateForm.get('Member')?.value}`;
        newEvaluation.member_id ="0";       
       
        //let evaluation!: ProjectMemberResponse
        
        for(let member of this.members)
        {
            //console.log(`Evaluation info ${member.id}-${member.name}-${member.person_id}`)
            if(newEvaluation.person_id == member.person_id)
            {newEvaluation.member_id = member.id}    
        }
        
         console.log('Values: ' + JSON.stringify(newEvaluation));
         
        this.clientLoginService.who_i_am().subscribe(res =>{
                
                if(res.is_authenticated){
                    let token = res.auth_headers.get("Authorization") || "token"
                    this.evaluationService.evaluationCreate(newEvaluation, token).subscribe(project => {
                                                 this.routerPath.navigate([`/home-client`])
                                                 this.showSuccess(`${this.translateService.instant('CREATE_EVALUATION.BACK_RESPONSES.SUCESS_1')} ${this.translateService.instant('CREATE_EVALUATION.BACK_RESPONSES.SUCESS_2')}`)
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
    
    cancelCreation():void{this.evaluationCreateForm.reset();this.routerPath.navigate([`/login-client`])}
    
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
