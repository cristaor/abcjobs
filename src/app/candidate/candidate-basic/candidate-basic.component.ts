import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { valHooks } from 'cypress/types/jquery';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-basic',
  templateUrl: './candidate-basic.component.html',
  styleUrls: ['./candidate-basic.component.css']
})
export class CandidateBasicComponent implements OnInit{

    candidateBasicForm!: FormGroup;

    newCandidate!: Candidate;

    constructor(
        private candidateService: CandidateService,
        private formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private routerPath: Router,
        private toastr: ToastrService
      ) { }
  
    ngOnInit() {
          //myObj.checkForm();
          this.candidateBasicForm = this.formBuilder.group({
            Username: ["", [Validators.required, Validators.maxLength(60), Validators.email ]],
            Password: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
            Document:  ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(20), Validators.minLength(4)]],
            DocumentType:  ["", [Validators.required]],
            FirstName:  ["", [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
            LastName:  ["", [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
            PhoneNumber:  ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(20), Validators.minLength(6)]],
            Age:  ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
            OriginCountry: ["", [Validators.required]],
            ResidenceCountry: ["", [Validators.required]],
            ResidenceCity: ["", [Validators.required]],
            Address: ["", [Validators.required]],
            Policy: ["", [Validators.required]]
            /*
            acceptTerms: [false, Validators.requiredTrue]
            confirmPassword: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
            documento:  ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(20), Validators.minLength(4)]],
            nombre:  ["", [Validators.required, Validators.maxLength(80), Validators.minLength(4)]],
            tarjeta: ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(20), Validators.minLength(12)]],
            fecha_nacimiento: ["", [Validators.required, Validators.minLength(10)]]*/
    })
    }
    
    cancelCreation():void{this.candidateBasicForm.reset();this.routerPath.navigate([`/login-candidate`])}
    
    createCandidate(newCandidate: Candidate) {
        newCandidate.username=this.candidateBasicForm.get('Username')?.value;
        newCandidate.username=this.candidateBasicForm.get('Password')?.value;
        
        
        console.log(`${this.candidateBasicForm.get('Username')?.value}-
${this.candidateBasicForm.get('Password')?.value}-
${this.candidateBasicForm.get('Document')?.value}-
${this.candidateBasicForm.get('DocumentType')?.value}-
${this.candidateBasicForm.get('FirstName')?.value}-
${this.candidateBasicForm.get('LastName')?.value}-
${this.candidateBasicForm.get('PhoneNumber')?.value}-
${this.candidateBasicForm.get('Age')?.value}-
${this.candidateBasicForm.get('OriginCountry')?.value}-
${this.candidateBasicForm.get('ResidenceCountry')?.value}-
${this.candidateBasicForm.get('ResidenceCity')?.value}-
${this.candidateBasicForm.get('Address')?.value}
        `)
        this.candidateService.candidateCreate(this.candidateBasicForm.get('Username')?.value,
                                        this.candidateBasicForm.get('Password')?.value,
                                        this.candidateBasicForm.get('Document')?.value,
                                        this.candidateBasicForm.get('DocumentType')?.value,
                                        this.candidateBasicForm.get('FirstName')?.value,
                                        this.candidateBasicForm.get('LastName')?.value,
                                        this.candidateBasicForm.get('PhoneNumber')?.value,
                                        this.candidateBasicForm.get('Age')?.value,
                                        this.candidateBasicForm.get('OriginCountry')?.value,
                                        this.candidateBasicForm.get('ResidenceCountry')?.value,
                                        this.candidateBasicForm.get('ResidenceCity')?.value,
                                        this.candidateBasicForm.get('Address')?.value)
                                        .subscribe(candidate => {
                                            this.routerPath.navigate([`/login-candidate`])
      this.showSuccess(candidate)
      },
        error => {
          this.showError(`Ha ocurrido un error: ${error.error}`)
        })
    }
     
    
    showError(error: string) {
    this.toastr.error(error, "Error")
  }

  showWarning(warning: string) {
    this.toastr.warning(warning, "Error de autenticación")
  }

  showSuccess(candidate: Candidate) {
    this.toastr.success(`El usuario candidato ${candidate.username} fue creado`, "Creación exitosa");
  }
}
