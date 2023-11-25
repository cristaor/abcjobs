export class ScheduleInterviewRequest {
  project_id:string;
  meet_url:string;
  candidate_document:string;
  start_timestamp:Date;
  duration_minutes:BigInteger;
  status:string;

  constructor(
    project_id:string,
    meet_url:string,
    candidate_document:string,
    start_timestamp:Date,
    duration_minutes:BigInteger){
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
