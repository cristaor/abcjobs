import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { TestService } from "../test.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"
import { TestRequest,TestItemResponse ,TestResultRequest} from '../test';
import {TranslateService} from '@ngx-translate/core';
import { Papa } from "ngx-papaparse";
@Component({
  selector: 'app-register-result-test',
  templateUrl: './register-result-test.component.html'
})
export class RegisterResultTestComponent implements OnInit {
  loginForm!: FormGroup;

  tests!:TestItemResponse[];

  test_item!:TestItemResponse;
  isDisabled: boolean = false; 

  select_test(test_name:any){
    console.info(test_name)
    this.test_item=this.tests.filter(x=>x.name==test_name)[0];
    console.info(this.test_item)
    this.loginForm.controls["technology"].setValue(this.test_item.technology)
  } 

  get_candidate(id:string){
    this.testService.get_candidate_by_ids([id]).subscribe(result =>{
      console.log(result)
      if(result.length==1)
       this.loginForm.controls["candidate_name"].setValue(result[0].fullName)
      else
      {
        this.translateService.get("TEST.REGISTER.TOAST.CANDIDATE_NOT_FOUND").subscribe(result=>{
          this.loginForm.controls["candidate_name"].setValue("")
          this.toastr.error((result+"").replace("{0}",id),"Error");
        })
      }
      });
  }

  ngOnInit() {
    this.testService.get_avalible_tests().subscribe(result =>{

      if (result.length>0){
        this.tests = result;
      }else{
        this.toastr.error("No se encontraron pruebas","Error" );
        setTimeout(() => this.router.navigate([`/home-client`]), 5000);
      }
      
    });

  this.loginForm = this.formBuilder.group({
    name:["", [Validators.required]],
    technology: ["", [Validators.required]],
    candidate_document: ["", [Validators.required]],
    candidate_name: ["", [Validators.required]],
    points: ["", [Validators.required]],
    test_date: ["", [Validators.required]],
    observation: [""],
  });
  this.loginForm.controls['technology'].disable();
  }
  constructor(
    private formBuilder: FormBuilder,
    private testService:TestService,
    private toastr: ToastrService,
    private router: Router,
    private translateService:TranslateService
  ) {}

  register_test(value:any) {
    console.log(value);
    if(!this.loginForm.valid){
      console.log("no valid");
      console.log(this.loginForm.errors)
      return;
    }

    this.testService.register_result_test([
      new TestResultRequest(value.name,value.candidate_document,
        value.observation,value.points)]).subscribe(result =>{
      console.info(result)
      if (!result){
        this.toastr.error("Registrando el resultado de la prueba","Error" );
      
      }else{
        //this.translate.get('TEST.CREATE.UI', {value: 'world'}).subscribe((res: string) => {
          this.toastr.success("Resultado creado correctamente","Confirmation" );
          this.router.navigate([`/home-client`])
      //});
    }});


  }

  cancelCreation():void{this.loginForm.reset();this.router.navigate([`/home-client`])}
}



