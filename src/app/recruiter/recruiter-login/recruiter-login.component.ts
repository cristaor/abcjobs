import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RecruiterLoginService } from "../recruiter-login.service";
import {ClientLogin} from 'src/app/client/client-login';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-recruiter-login',
  templateUrl: './recruiter-login.component.html',
  styleUrls: ['./recruiter-login.component.css']
})
export class RecruiterLoginComponent {
  title = 'ABC';
  selectedLanguage = 'es';
  loginForm!: FormGroup;

  ngOnInit() {
  this.loginForm = this.formBuilder.group({
    user:["", [Validators.required, Validators.minLength(2)]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });
  }

  constructor(
    private formBuilder: FormBuilder,
    private clientLoginService:RecruiterLoginService,
    private toastr: ToastrService,
    private router: Router,
    private translateService: TranslateService
  ) {
       this.translateService.setDefaultLang(this.selectedLanguage);
       this.translateService.use(this.selectedLanguage);
      }

  selectLanguage(lang: string) {
      this.translateService.use(lang);
      console.log(lang)
  }

  login(value:any) {

    this.clientLoginService.login(new ClientLogin(value.user,value.password)).subscribe(result =>{
      console.info(result)
      if (!result){
        this.toastr.error(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS')}`,"Error" );
        return;
      }
      this.clientLoginService.who_i_am().subscribe(res =>{
        console.warn(res);
        if(res.is_authenticated){
          this.toastr.success("Login success","Confirmation" );
          if(res.role == 'RECRUITER'){
            this.router.navigate(['/home-recruiter']);
          }else if (res.role == 'CANDIDATE'){
            this.router.navigate(['/home-candidate']);
          }
          else if (res.role == 'CLIENT'){
            this.router.navigate(['/home-client']);
          }

        }else{
          this.toastr.error(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS')}`,"Error");
        }
      });
    });
    this.loginForm.reset();
  }
}
