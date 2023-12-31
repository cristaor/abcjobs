import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InterviewService } from "../interview.service";
import { ToastrService } from 'ngx-toastr';
import {Router,ActivatedRoute} from "@angular/router";
import { InterviewResult,AbilityResponse,Ability,ClientProject,CandidateResponse} from '../interview';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-find-schedule-interview',
  templateUrl: './find-interview.component.html'
})
export class FindInterviewComponent implements OnInit {
  loginForm!: FormGroup;

  interview_results:  InterviewResult[]=[];
  interview_result!:  InterviewResult;
  project!:ClientProject;
  all_abilities!:Array<AbilityResponse>;
  abilities!:Array<Ability>;
  candidate!:CandidateResponse;

  select_result(result:any){


    this.interviewService.get_interview_result(result).subscribe(result =>{
      console.log(result);
      this.interview_result = result;
      this.abilities=new Array<Ability>();
      result.abilities.forEach((element) => {
        console.log(element);
        this.all_abilities.forEach((e)=>{
            if(e.abilityId==element.ability_id){
              this.abilities.push(new Ability(e,element.qualification))
            }
        })
      }
      );

      this.interviewService.getProject(result.project_id).subscribe(result =>{
        this.project=result[0];
      });

      this.get_candidate(result.candidate_document);
    });
  }


  get_candidate(id:string){
    this.interviewService.get_candidate_by_ids([id]).subscribe(result =>{
      console.log(result)
      if(result.length==1)
        this.candidate=result[0];
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



    this.select_result(this.active_router.snapshot.params['id']);


    this.interviewService.get_abilities().subscribe(result =>{
      this.all_abilities = result;

    });

    /*this.interviewService.get_interview_results().subscribe(result =>{
      console.info(result);
      console.info("--------------->");
      if (result.length>0){
        this.interview_results = result;
      }else{

        this.translateService.get('INTERVIEW.LIST.TOAST.INTERVIEWS_NOT_FOUND')
        .subscribe((res: string) => {
          this.toastr.error(res,"Error" );
      });
      //setTimeout(() => this.router.navigate([`/home-candidate`]), 5000);
      }
    });*/

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
    private active_router: ActivatedRoute,
    private translateService:TranslateService
  ) {
  }

  cancelCreation():void{this.router.navigate([`/interviews`])}
}



