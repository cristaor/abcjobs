import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClientLoginService } from "../client-login.service";
import {ClientLogin} from 'src/app/client/client-login';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  loginForm!: FormGroup;

  ngOnInit() {
  this.loginForm = this.formBuilder.group({
    user:["", [Validators.required, Validators.minLength(2)]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });
  }

  constructor(
    private formBuilder: FormBuilder,
    private clientLoginService:ClientLoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  login(value:any) {

    this.clientLoginService.login(new ClientLogin(value.user,value.password)).subscribe(result =>{
      console.info(result)
      if (!result){
        this.toastr.error("Credenciales invalidas","Error" );
        return;
      }
      this.clientLoginService.who_i_am().subscribe(res =>{
        console.warn(res);
        if(res.is_authenticated){
          this.toastr.success("Login success","Confirmation" );
          this.router.navigate(['/'])
        }else{
          this.toastr.error("Credenciales invalidas","Error");
        }
      });
    });
    this.loginForm.reset();
  }
}
