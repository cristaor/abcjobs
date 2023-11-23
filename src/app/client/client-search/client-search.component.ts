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
import {ProjectMember} from 'src/app/client/project-member';
import { ProfileService } from '../project.service'



export interface TableHead{
        key: string;
        index: number;
}

export interface DynamicTable{
        headers: TableHead[];
        data: any[];
}


@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit{
    candidateSearchForm!: FormGroup;
    title = 'angular-i18n-ngx-translate';
    selectedLanguage = 'es';
    newCandidate!: Client;
    token!: any
    showTable: boolean = false;
    newMember!: ProjectMember;

    constructor(
        private clientService: ClientService,
        private formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private routerPath: Router,
        private toastr: ToastrService,
        private translateService: TranslateService,
        private clientLoginService: ClientLoginService,
        private profileService: ProfileService
      ) {this.translateService.setDefaultLang(this.selectedLanguage);
       this.translateService.use(this.selectedLanguage); }

    projects!: Array<ClientProject>
    technologies!: Array<TechnologyResponse>
    abilities!: Array<AbilityResponse>
    profiles!: Array<ProfileListDetail>
    candidates!: Array<CandidateResponseSearch>
    allHeaders!: TableHead[]
    table!: DynamicTable


    ngOnInit() {
           this.candidateSearchForm = this.formBuilder.group({
            Project:["", [Validators.required]],
            Profile:["", [Validators.required]],
            RoleFilter: ["", [Validators.required]],
            Role:  ["", [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
            RoleYears:  ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2), Validators.minLength(1)]],
            Technologies:  ["", [Validators.required]],
            Abilities:  ["", [Validators.required]],
            TitleFilter: ["", [Validators.required]],
            Title:  ["", [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
            TitleYears:  ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2), Validators.minLength(1)]]
        })
        this.clientLoginService.who_i_am().subscribe(res =>{
                if(res.is_authenticated){
                    this.token = res.auth_headers.get("Authorization") || "token"
                    this.getProjects(this.token)
                    this.getTechnologies(this.token)
                    this.getAbilities(this.token)
                }
                else{
                    this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS')}`);
                    this.routerPath.navigate(['/login-client'])
                }
            }, error => {
                this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS2')}`);
                this.routerPath.navigate(['/login-client'])
              });


        this.table = { headers: [], data: []}
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

    getTechnologies(token: any): void {
    this.clientService.getTechnologies(token)
      .subscribe(technologies => {
        this.technologies = technologies
        //console.log(JSON.stringify(technologies,null,4))
      },
      error => {
               //console.log(error);
              this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText}`)
      })
    }

    getAbilities(token: any): void {
    this.clientService.getAbilities(token)
      .subscribe(abilities => {
        this.abilities = abilities
        //console.log(JSON.stringify(technologies,null,4))
      },
      error => {
               //console.log(error);
              this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText}- ${error.error.detail}`)
      })
    }

    projectOnChange(e:any){
        console.log(`Seleccionado ${e.target.value}`)
        this.getProfiles(e.target.value, this.token)
    }

    getProfiles(project_id:string, token: any): void {
    this.clientService.getProfiles(project_id, token)
      .subscribe(profiles => {
        this.profiles = profiles
      },
      error => {
               //console.log(error);
              this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText}- ${error.error.detail}`)
      })
    }

    toggleShowTable(): void {
    this.showTable = !this.showTable;
    }

    drawTable(headers: TableHead[], rows: any[]){
           this.table={
               headers: headers,
               data: rows
           };
           this.allHeaders = headers;

    }

    searchCandidate(request: CandidateRequestSearch)
    {
        request.roleFilter = `${this.candidateSearchForm.get('RoleFilter')?.value}`;
        request.role = `${this.candidateSearchForm.get('Role')?.value}`;
        request.roleExperience = `${this.candidateSearchForm.get('RoleYears')?.value}`;
        request.technologies = `${this.candidateSearchForm.get('Technologies')?.value}`;
        request.abilities = `${this.candidateSearchForm.get('Abilities')?.value}`;
        request.titleFilter = `${this.candidateSearchForm.get('TitleFilter')?.value}`;
        request.title = `${this.candidateSearchForm.get('Title')?.value}`;
        request.titleExperience = `${this.candidateSearchForm.get('TitleYears')?.value}`;

        console.log(JSON.stringify(request,null, 4));
        console.log(`Tecnologias: ${request.technologies}`)

        this.clientLoginService.who_i_am().subscribe(res =>{

                if(res.is_authenticated){
                    let token = res.auth_headers.get("Authorization") || "token"
                    this.clientService.searchCandidate(request, token).subscribe(candidates => {
                        this.showSuccess("Existen candidatos")

                        const headers=[
                            `${this.translateService.instant('CLIENT_SEARCH.TABLEHEADER.C1')}`,
                            `${this.translateService.instant('CLIENT_SEARCH.TABLEHEADER.C2')}`,
                            `${this.translateService.instant('CLIENT_SEARCH.TABLEHEADER.C3')}`,
                            `${this.translateService.instant('CLIENT_SEARCH.TABLEHEADER.C4')}`,
                            `${this.translateService.instant('CLIENT_SEARCH.TABLEHEADER.C5')}`,
                            `${this.translateService.instant('CLIENT_SEARCH.TABLEHEADER.C6')}`,
                            `${this.translateService.instant('CLIENT_SEARCH.TABLEHEADER.C7')}`,
                            `${this.translateService.instant('CLIENT_SEARCH.TABLEHEADER.C8')}`,
                            `${this.translateService.instant('CLIENT_SEARCH.TABLEHEADER.C9')}`,
                            `${this.translateService.instant('CLIENT_SEARCH.TABLEHEADER.C10')}`
        ].map((x, i) =>({key: x, index: i} as TableHead));

                        this.candidates = candidates
                        if (candidates.length > 0) {
                             this.drawTable(headers, this.candidates)
                             this.toggleShowTable()
                        }

                    },
                    error => {
                      //console.log(error);
                      this.showWarning(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText}`)
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

    cancelSearch():void{this.candidateSearchForm.reset();this.routerPath.navigate([`/home-client`])}

    assignCandidate(person_id: string, row: number):void{

            let projectId = `${this.candidateSearchForm.get('Project')?.value}`;
            let profileId = `${this.candidateSearchForm.get('Profile')?.value}`;
            let personId = person_id;

            console.log(`Enviando: ${projectId}: ${profileId} - ${personId}`);

            this.clientLoginService.who_i_am().subscribe(res =>{

                if(res.is_authenticated){
                    let token = res.auth_headers.get("Authorization") || "token"
                    this.profileService.memberCreate(personId, projectId, profileId , token).subscribe(project => {
                                                 this.showSuccess("Candidato Asignado")
                    },
                    error => {
                      console.log(error);
                      this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText}- ${error.error.detail}`)
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
            this.toastr.warning(warning, "Warning")
        }

       showSuccess(message: String) {
            //this.toastr.success(`El proyecto ${client} fue creado`, "Creación exitosa");
            this.toastr.success(`${message}`);
            console.log('translation', );
        }
}
