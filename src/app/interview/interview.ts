export class ScheduleInterviewRequest {
  project_id:string;
  profile_id:string;
  meet_url:string;
  candidate_document:string;
  start_timestamp:Date;
  duration_minutes:BigInteger;
  status:string;

  constructor(
    project_id:string,
    profile_id:string,
    meet_url:string,
    candidate_document:string,
    start_timestamp:Date,
    duration_minutes:BigInteger){
      this.profile_id=profile_id;
    this.status='SCHEDULED';
    this.project_id=project_id;
    this.meet_url=meet_url;
    this.start_timestamp=start_timestamp;
    this.duration_minutes=duration_minutes;
    this.candidate_document=candidate_document;
  }
}


export class ScheduleInterviewResponse{
  detail:string;
  constructor(detail:string){
    this.detail=detail;
  }
}



export class CandidateResponse {
  fullName:string;
  document:string;

  constructor(  fullName:string,
    document:string){
    this.fullName=fullName;
    this.document=document;
  }
}



export class ProjectMemberResponse {
  name: string
  project : string
  person_id : string
  profile : string

  constructor(  name: string , project : string, person_id : string
  , profile : string)
  {

          this.name = name;
          this.project = project ;
          this.person_id= person_id ;

          this.profile = profile;

  }

}
