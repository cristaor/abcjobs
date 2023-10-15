import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClientLoginService } from "../client-login.service";
import {ClientLogin} from 'src/app/client/client-login';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService
  ) {}

  login(value:any) {
    // Process checkout data here
    this.clientLoginService.login(new ClientLogin(value.user,value.password)).subscribe(result =>{

      //

      this.clientLoginService.who_i_am().subscribe(res =>{
        console.warn(res);
        if(res.is_authenticated){
          this.toastr.success("Confirmation", "Login success");
        }

      });
    });

    this.loginForm.reset();
  }
}
