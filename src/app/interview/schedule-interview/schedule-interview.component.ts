import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { InterviewService } from "../interview.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"
import { ScheduleInterviewRequest,ProjectMemberResponse,ProjectMember} from '../interview';
import {TranslateService} from '@ngx-translate/core';
import { ProfileListDetail } from './../../client/project'
@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html'
})
export class ScheduleInterviewComponent implements OnInit {
  loginForm!: FormGroup;
  minDate :any;
  projects!:ProfileListDetail[];
  profiles!:string[];
  candidates!:Array<ProjectMember>;
  isDisabled: boolean = false;

  select_test(test_name:any){
    console.info(test_name);
    this.profiles=this.projects.filter(x=>x.projectId==test_name)[0].profiles;
    console.info(this.profiles);
    this.getMembers(test_name,this.profiles[0]);
  }

  getMembers(project_id:string,profile:string){
    console.info(project_id);
    console.info(profile);
    this.interviewService.getMembers(project_id).subscribe(result =>{

      this.interviewService.get_all_interviews().subscribe(res =>{

        var inter = res.filter(x=>x.profile_id==profile && x.project_id ==project_id).map(y=>y.candidate_document);
        console.info(result);
        this.candidates=[];
        var members = result.filter(x=>x.profile==profile);
        members.forEach((element)=>{
          if (!(inter.includes(element.person_id) )){
            this.candidates.push(new ProjectMember(element, element.person_id in inter));
          }
        });


        if (this.candidates.length==0){
          this.translateService.get("INTERVIEW.SCHEDULE.TOAST.DOES_NOT_EXIST_CANDIDATES_TO_SCHEDULED").subscribe(result2=>{
            this.toastr.error(result2,"Error");
          });
        }else{
          this.loginForm.controls["candidate"].setValue(this.candidates[0].project_member_response.person_id);
        }
      });
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
        });
      }
      });
  }

  ngOnInit() {

    this.interviewService.get_projects().subscribe(result =>{

      if (result.length>0){
        this.projects = result;
      }else{
        this.toastr.error("No se encontraron pruebas","Error" );
        setTimeout(() => this.router.navigate([`/home-recruiter`]), 5000);
      }

    });

  this.loginForm = this.formBuilder.group({
    project_id:["", [Validators.required]],
    profile_id:["", [Validators.required]],
    meet_url: ["", [Validators.required]],
    candidate: ["", [Validators.required]],
    date: ["", [Validators.required]],
    time: ["", [Validators.required]],
    duration_minutes: ["", [Validators.required]]
  });
  this.minDate = new Date(Date.now()).toISOString().substring(0,16);
  console.log(this.minDate);
  }


  constructor(
    private formBuilder: FormBuilder,
    private interviewService:InterviewService,
    private toastr: ToastrService,
    private router: Router,
    private translateService:TranslateService
  ) {
  }

  schedule_interview(value:any) {
    console.log(value);
    if(!this.loginForm.valid){
      console.log("no valid");
      console.log(this.loginForm.errors)
      return;
    }

    this.interviewService.schedule_interview(
      new ScheduleInterviewRequest(value.project_id,value.profile_id, value.meet_url,
        value.candidate,value.date+"T"+value.time,value.duration_minutes)).subscribe(result =>{
      console.info(result)
      if (!result){
        this.translateService.get('INTERVIEW.SCHEDULE.UI.ERROR')
        .subscribe((res: string) => {

          this.toastr.error(res,"Error" );
      });
      }else{
        this.translateService.get('INTERVIEW.SCHEDULE.UI.CREATED').subscribe((res: string) => {
          this.toastr.success(res,"Confirmation" );
          this.router.navigate([`/home-recruiter`])
      });
    }});


  }

  cancelCreation():void{this.loginForm.reset();this.router.navigate([`/home-recruiter`])}
}



