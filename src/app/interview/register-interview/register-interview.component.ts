import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { InterviewService } from "../interview.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"
import {RegisterInterview,AbilityResult, ScheduleInterviewRequest,ProjectMemberResponse, PendingInterview,AbilityResponse} from '../interview';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-register-interview',
  templateUrl: './register-interview.component.html'
})
export class RegisterInterviewComponent implements OnInit {

  minDate :any;
  pending_interviews!:PendingInterview[];
  profiles!:string[];
  candidates!:Set<ProjectMemberResponse>;
  isDisabled: boolean = true;
  records = 0;
  all_abilities!:Array<AbilityResponse>;
  /*abilitiesForm=this.formBuilder.group({
    items: this.formBuilder.array([])
  });*/
  loginForm!: FormGroup;
  select_test(index:number){
    console.info(index);
    this.loginForm.controls["date"].setValue(this.pending_interviews[index].date);

  }

  getMembers(project_id:string,profile:string){
    console.info(project_id);
    console.info(profile);
    this.interviewService.getMembers(project_id).subscribe(result =>{
      console.info(result);
      this.candidates=new Set(result.filter(x=>x.profile==profile));
    });
  }


  get_candidate(id:string){
    this.interviewService.get_candidate_by_ids([id]).subscribe(result =>{
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

    this.interviewService.get_pending_interviews().subscribe(result =>{

      if (result.length>0){
        this.pending_interviews = result;
      }else{
        this.toastr.error("No existen entrevistas Pendientes","Error" );
        setTimeout(() => this.router.navigate([`/home-recruiter`]), 5000);
      }

    });
    this.interviewService.get_abilities().subscribe(result =>{
      this.all_abilities = result;

    });
  this.loginForm = this.formBuilder.group({
    index:["", [Validators.required]],
    essay_url: ["", [Validators.required]],
    record_url: ["", [Validators.required]],
    observations: ["", [Validators.required]],
    date: [""],
    items: this.formBuilder.array([])
  });
  this.loginForm.controls["date"].disable()

  }


  constructor(
    private formBuilder: FormBuilder,
    private interviewService:InterviewService,
    private toastr: ToastrService,
    private router: Router,
    private translateService:TranslateService
  ) {
  }

  register_interview(value:any) {
    console.log(value);
    if(!this.loginForm.valid){
      console.log("no valid");
      console.log(this.loginForm.errors)
      return;
    }

    var candidate_document = this.pending_interviews[value.index].candidate_document;
    var project_id = this.pending_interviews[value.index].project_id;
    var profile_id = this.pending_interviews[value.index].profile_id;
    var date =  this.pending_interviews[value.index].date.toString().split('T')[0];
    //const dateWithoutTime = date.toLocaleDateString();
    if (value.items.length==0){
        this.translateService.get('INTERVIEW.REGISTER.TOAST.REQUIRED_HABILITY').subscribe((res: string) => {
          this.toastr.error(res,"Error" );
      });
      return;
    }
    var abilities_string:Array<string>;
    if (value.items.length>0){
      abilities_string=value.items.map(function(val:any, index:number){
        // printing element
        return val.abilityId;
      });

      if(new Set(abilities_string).size<value.items.length){
        this.translateService.get('INTERVIEW.REGISTER.TOAST.DUPLICATED_HABILITY').subscribe((res: string) => {
          this.toastr.error(res,"Error" );
      });
      return;
      }
    }
    var abilities:Array<AbilityResult>=value.items.map(function(val:any, index:number){
      return new AbilityResult(val.abilityId,val.level);
    });


    this.interviewService.register_interview(
      new RegisterInterview(candidate_document,project_id, date,
        profile_id ,value.observations,value.essay_url,value.record_url,abilities)).subscribe(result =>{
      console.info(result);
      if (!result){
        this.translateService.get('INTERVIEW.SCHEDULE.UI.ERROR')
        .subscribe((res: string) => {

          this.toastr.error(res,"Error" );
      });
      }else{
        this.translateService.get('INTERVIEW.REGISTER.TOAST.INTERVIEWS_SUCCESSFULLY').subscribe((res: string) => {
          this.toastr.success(res,"Confirmation" );
          this.router.navigate([`/home-recruiter`])
      });
    }});
  }


  get items() : FormArray<FormGroup> {
    return this.loginForm.controls["items"] as FormArray<FormGroup>
  }

  add_item(){
    this.records++;
    const itemForm=this.formBuilder.group({
      abilityId :["",[Validators.required]],
      level : ["", [Validators.required]],
    });

    this.items.push(itemForm);
}

remove_item(index:number){
  this.items.removeAt(index);
}

  cancelCreation():void{this.loginForm.reset();this.router.navigate([`/home-recruiter`])}




}



