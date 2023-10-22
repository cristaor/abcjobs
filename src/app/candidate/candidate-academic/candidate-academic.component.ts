import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateAcademicInfo } from '../candidate';
import { CandidateService } from '../candidate.service';
import {ClientLoginService} from '../../client/client-login.service'


@Component({
  selector: 'app-candidate-academic',
  templateUrl: './candidate-academic.component.html',
  styleUrls: ['./candidate-academic.component.css']
})



export class CandidateAcademicComponent implements OnInit{

  candidateAcademicForm!: FormGroup;

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
      this.candidateAcademicForm = this.formBuilder.group({
        title: ["",[Validators.required, Validators.maxLength(60), Validators.minLength(6)]],
        institution: ["", [Validators.required, Validators.maxLength(100), Validators.minLength(6)]],
        country:  ["", [Validators.required]],
        start_date_month:["", [Validators.required]],
        start_date_year: ["", [Validators.required]],
        end_date_month: ["", [Validators.required]],
        end_date_year: ["", [Validators.required]],
        current:["", ],
        description : ["", [Validators.required]],
      })
    }

    cancelCreation():void{this.candidateAcademicForm.reset();this.routerPath.navigate([`/login-candidate`])}

    createAcademicInfo(academicInfo: CandidateAcademicInfo) {
      
      this.clientLoginService.who_i_am().subscribe(res =>{
        
        if(res.is_authenticated){
          let token = res.auth_headers.get("Authorization") || "token"
          this.candidateService.addAcademicoInfo(academicInfo,token).subscribe(candidate => {
            this.routerPath.navigate([`/login-candidate`])
            this.showSuccess(candidate)
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

    showSuccess(academicInfo: CandidateAcademicInfo) {
      this.toastr.success(`Información académica añadida`, "Creación exitosa");
    }

    showError(error_code: string) {
      this.toastr.error(error_code, "Error")
    }


}
