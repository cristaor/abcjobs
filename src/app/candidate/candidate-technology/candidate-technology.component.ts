



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateTechnologyInfo } from '../candidate';
import { CandidateService } from '../candidate.service';
import {ClientLoginService} from '../../client/client-login.service'
import { TechnologyResponse,AbilityResponse } from '../../client/client';

@Component({
  selector: 'app-candidate-technology',
  templateUrl: './candidate-technology.component.html',
  styleUrls: ['./candidate-technology.component.css']
})
export class CandidateTechnologyComponent implements OnInit{

  candidateTechnologyForm!: FormGroup;
  technologies!: Array<TechnologyResponse>
  token!: any
  constructor(
    private candidateService: CandidateService,
    private clientLoginService: ClientLoginService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    //myObj.checkForm();
    this.candidateTechnologyForm = this.formBuilder.group({
      name: ["",[Validators.required]],
      experience_years: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      level: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      description:  ["", [Validators.required]],
    })
    this.clientLoginService.who_i_am().subscribe(res =>{
                if(res.is_authenticated){
                    this.token = res.auth_headers.get("Authorization") || "token"
                    this.getTechnologies(this.token)
                }
                else{ 
                    this.showError("Credenciales Invalidas");
                    this.routerPath.navigate(['/login-client'])
                }
            }, error => {
                this.showError("Credenciales invalidas. Inicie sesión nuevamente");
                this.routerPath.navigate(['/login-client'])
              });
  }

  cancelCreation():void{
    this.candidateTechnologyForm.reset();
    this.routerPath.navigate([`/login-candidate`])
  }
    
  getTechnologies(token: any): void {
    this.candidateService.getTechnologies(token)
      .subscribe(technologies => {
        this.technologies = technologies
        //console.log(JSON.stringify(technologies,null,4))
      },
      error => {
               //console.log(error);  
              this.showError(`Error : ${error.status} - ${error.statusText}`)
      })
    }
  createTechnologyInfo(technology_info: CandidateTechnologyInfo) {
      
    this.clientLoginService.who_i_am().subscribe(res =>{
      
      if(res.is_authenticated){
        let token = res.auth_headers.get("Authorization") || "token"
        this.candidateService.addTechnologyInfo(technology_info,token).subscribe(candidate => {
          this.routerPath.navigate([`/home-candidate`])
          this.showSuccess(candidate)
          
        },
        error => {
          this.showError(`${this.candidateService.get_error_message(error.error.detail.error_code)}`)
        })
        
      }else{
        this.toastr.error("Credenciales invalidas","Error");
        this.routerPath.navigate(['/login-candidate'])
        
      }
    }, error => {
      this.toastr.error("Credenciales invalidas. Inicie sesión nuevamente","Error");
      this.routerPath.navigate(['/login-candidate'])
    });

  }

  showSuccess(technical_role_info: CandidateTechnologyInfo) {
    this.toastr.success(`Información de tecnología añadida`, "Creación exitosa");
  }

  showError(error_code: string) {
    this.toastr.error(error_code, "Error")
  }

}

