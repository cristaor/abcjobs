import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InterviewService } from "../interview.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";
import { InterviewResult} from '../interview';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-find-schedule-interview',
  templateUrl: './find-interview.component.html'
})
export class FindInterviewComponent implements OnInit {
  loginForm!: FormGroup;

  interview_results:  InterviewResult[]=[];
  interview_result!:  InterviewResult;
  select_result(result:any){
    console.info(result);

    this.interviewService.get_interview_result(result).subscribe(result =>{

      this.interview_result = result;

    });
  }


  ngOnInit() {

    this.interviewService.get_interview_results().subscribe(result =>{

      if (result.length>0){
        this.interview_results = result;
      }else{

        this.translateService.get('INTERVIEW.LIST.TOAST.INTERVIEWS_NOT_FOUND')
        .subscribe((res: string) => {
          this.toastr.error(res,"Error" );
      });
      //setTimeout(() => this.router.navigate([`/home-candidate`]), 5000);
      }

    });

    this.loginForm = this.formBuilder.group({
      interview_result_id:["", [Validators.required]],
      profile_id:["", [Validators.required]]
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private interviewService:InterviewService,
    private toastr: ToastrService,
    private router: Router,
    private translateService:TranslateService
  ) {
  }

  cancelCreation():void{this.router.navigate([`/home-candidate`])}
}



