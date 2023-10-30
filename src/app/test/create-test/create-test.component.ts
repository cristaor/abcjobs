import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { TestService } from "../test.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"
import { TestRequest } from '../test';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  loginForm!: FormGroup;

  ngOnInit() {

  this.loginForm = this.formBuilder.group({
    name:["", [Validators.required, Validators.minLength(2)]],
    technology: ["", [Validators.required]],
    description: ["", [Validators.required, Validators.minLength(5)]],
    duration_minutes: ["", [Validators.required]],
    status: ["", [Validators.required]],
    start_date: ["", [Validators.required]],
    end_date: ["", [Validators.required]],
  });
  }
  constructor(
    private formBuilder: FormBuilder,
    private testService:TestService,
    private toastr: ToastrService,
    private router: Router,

  ) {}

  create_test(value:any,formDirective:FormGroupDirective) {
    console.log(value);
    if(!this.loginForm.valid){
      console.log("no valid");
      console.log(this.loginForm.errors)
      return;
    }
    console.log(value.start_date)
    if (new Date(value.start_date).getTime() >new Date(value.end_date).getTime()){
      this.toastr.error("Fecha inicio es posterior a la inicial","Error" );
      return;
    }
    this.testService.create_test(
      new TestRequest(value.name,value.technology,
        value.description,value.duration_minutes,value.status,value.start_date,
        value.end_date
      )).subscribe(result =>{
      console.info(result)
      if (!result){
        this.toastr.error("Creando la prueba","Error" );

      }else{
        //this.translate.get('TEST.CREATE.UI', {value: 'world'}).subscribe((res: string) => {
          this.toastr.success("Creado correctamente","Confirmation" );
      //});


    }});


  }

  cancelCreation():void{this.loginForm.reset();this.router.navigate([`/home-client`])}
}



