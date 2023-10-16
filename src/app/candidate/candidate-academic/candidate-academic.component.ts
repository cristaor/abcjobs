import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateAcademicInfo } from '../candidate';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-academic',
  templateUrl: './candidate-academic.component.html',
  styleUrls: ['./candidate-academic.component.css']
})
export class CandidateAcademicComponent implements OnInit{

  candidateAcademicForm!: FormGroup;

  constructor(
      private candidateService: CandidateService,
      private formBuilder: FormBuilder,
      private router: ActivatedRoute,
      private routerPath: Router,
      private toastr: ToastrService
    ) { }

    ngOnInit() {
      //myObj.checkForm();
      this.candidateAcademicForm = this.formBuilder.group({
        title: ["", [Validators.required, Validators.maxLength(60)]],
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
      console.log(`${academicInfo.end_date_month}`)

      this.candidateService.add_academic_info(academicInfo=academicInfo).subscribe(candidate => {
          this.routerPath.navigate([`/login-candidate`])
          this.showSuccess(candidate)
        },
        error => {
          this.showError(`Ha ocurrido un error: ${error.error}`)
        })
      
      
      

    }

    showSuccess(academicInfo: CandidateAcademicInfo) {
      this.toastr.success(`Información académica añadida`, "Creación exitosa");
    }

    showError(error: string) {
      this.toastr.error(error, "Error")
    }


}
