import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from '../candidate.service';
import { CandidateLoginService } from "../candidate-login.service";
import { CandidateLogin} from 'src/app/candidate/candidate-login';
import { ToastrService } from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.css']
})
export class CandidateLoginComponent implements OnInit {
         loginForm!: FormGroup;
   title = 'angular-i18n-ngx-translate';
  selectedLanguage = 'es';
  
  ngOnInit() {
  this.loginForm = this.formBuilder.group({
    user:["", [Validators.required, Validators.minLength(2)]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });
  }

  constructor(
    private formBuilder: FormBuilder,
    private candidateLoginService:CandidateLoginService,
    private toastr: ToastrService,
    private router: Router,
    private translateService: TranslateService
  ) {this.translateService.setDefaultLang(this.selectedLanguage);
       this.translateService.use(this.selectedLanguage);
       }

  selectLanguage(lang: string) {
      this.translateService.use(lang);
      console.log(lang)
  }
  
  login(value:any) {

    this.candidateLoginService.login(new CandidateLogin(value.user,value.password)).subscribe(result =>{
      console.info(result)
      if (!result){
        this.toastr.error(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS')}`,"Error" );
        return;
      }
      this.candidateLoginService.who_i_am().subscribe(res =>{
        console.warn(res);
        if(res.is_authenticated){
          this.toastr.success("Login success","Confirmation" );
          this.router.navigate(['/home-candidate'])
        }else{
          this.toastr.error(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS')}`,"Error");
        }
      });
    });
    this.loginForm.reset();
  }
}
