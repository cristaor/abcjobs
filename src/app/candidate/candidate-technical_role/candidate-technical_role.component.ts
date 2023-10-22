import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateTechnicalRoleInfo } from '../candidate';
import { CandidateService } from '../candidate.service';
import {ClientLoginService} from '../../client/client-login.service'
@Component({
  selector: 'app-candidate-technical',
  templateUrl: './candidate-technical_role.component.html',
  styleUrls: ['./candidate-technical_role.component.css']
})
export class CandidateTechnicalRoleComponent implements OnInit{

  candidateTechnicalRoleForm!: FormGroup;

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
    this.candidateTechnicalRoleForm = this.formBuilder.group({
      name: ["",[Validators.required, Validators.maxLength(60), Validators.minLength(6)]],
      experience_years: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      description:  ["", [Validators.required]],
    })
  }

  cancelCreation():void{
    this.candidateTechnicalRoleForm.reset();
    this.routerPath.navigate([`/login-candidate`])
  }

  createTechnicalRoleInfo(technical_role: CandidateTechnicalRoleInfo) {
      
    this.clientLoginService.who_i_am().subscribe(res =>{
      
      if(res.is_authenticated){
        let token = res.auth_headers.get("Authorization") || "token"
        this.candidateService.addTechnicalRoleInfo(technical_role,token).subscribe(candidate => {
          this.routerPath.navigate([`/login-candidate`])
          this.showSuccess(candidate)
          technical_role.name = ""
          
        },
        error => {
          this.showError(`${this.candidateService.get_error_message(error.error.detail.error_code)}`)
        })
        
      }else{
        this.toastr.error("Credenciales invalidas","Error");
        this.routerPath.navigate(['/'])
        
      }
    }, error => {
      this.toastr.error("Credenciales invalidas. Inicie sesión nuevamente","Error");
      this.routerPath.navigate(['/'])
    });

  }

  showSuccess(technical_role_info: CandidateTechnicalRoleInfo) {
    this.toastr.success(`Información técnica añadida`, "Creación exitosa");
  }

  showError(error_code: string) {
    this.toastr.error(error_code, "Error")
  }

}