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

export class Data {
  full_name: string;
  qualification: string;
  date: string
  constructor(full_name: string, qualification: string, date: string) {
    this.full_name = full_name;
    this.qualification = qualification;
    this.date = date
  }
}

export class Interview {
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
    this.status=status;
    this.project_id=project_id;
    this.meet_url=meet_url;
    this.start_timestamp=start_timestamp;
    this.duration_minutes=duration_minutes;
    this.candidate_document=candidate_document;
  }
}

export class Project {
  projectId:string;
  name:string;
  constructor(
    projectId:string,
    name:string){
      this.projectId=projectId;
    this.name=name;
  }
}

export class InterviewResult {
  id: string;
  project_id:string;
  candidate_document:string;
  constructor(
    id:string,
    project_id:string, candidate_document: string){
      this.id=id;
    this.project_id=project_id;
    this.candidate_document = candidate_document
  }
}

export class InterviewResultDetail {
  id: string;
  project_id:string;
  candidate_document:string;
  qualification: string;
  date: string;
  constructor(
    id:string,
    project_id:string, candidate_document: string, qualification: string, date: string){
      this.id=id;
    this.project_id=project_id;
    this.candidate_document = candidate_document
    this.qualification= qualification
    this.date= date
  }
}

export class CandidateDetail {
  fullName: string;
  constructor(
    fullName:string){
      this.fullName=fullName;
  }
}

export class Company {
  taxpayerId: string;
  name: string
  constructor(
    taxpayerId:string,
    name:string){
      this.taxpayerId=taxpayerId;
    this.name=name;
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
