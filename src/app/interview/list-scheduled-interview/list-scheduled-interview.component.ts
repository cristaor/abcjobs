import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { InterviewService } from "../interview.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";
import { Interview} from '../interview';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-schedule-interview',
  templateUrl: './list-scheduled-interview.component.html'
})
export class ListScheduledInterviewComponent implements OnInit {
  loginForm!: FormGroup;

  interviews:Interview[]=[];


  ngOnInit() {

    this.interviewService.get_interviews().subscribe(result =>{

      if (result.length>0){
        this.interviews = result;
      }else{

        this.translateService.get('INTERVIEW.LIST.TOAST.INTERVIEWS_NOT_FOUND')
        .subscribe((res: string) => {
          this.toastr.error(res,"Error" );
      });
      //setTimeout(() => this.router.navigate([`/home-candidate`]), 5000);
      }

    });


  }


  constructor(
    private interviewService:InterviewService,
    private toastr: ToastrService,
    private router: Router,
    private translateService:TranslateService
  ) {
  }

  cancelCreation():void{this.router.navigate([`/home-candidate`])}
}



