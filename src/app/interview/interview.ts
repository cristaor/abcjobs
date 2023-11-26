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

export class InterviewResultAbility {
  ability_id:BigInteger
  qualification:BigInteger

  constructor(  ability_id:BigInteger,
    qualification:BigInteger){
      this.ability_id=ability_id;
      this.qualification=qualification;
    }
  }
export class InterviewResult {
  id:BigInteger
  project_id:string
  profile_id:string
  candidate_document:string
  date:Date
  recording_file:string
  test_file:string
  observation:string
  qualification:number
  abilities:Array<InterviewResultAbility>
  constructor(
    id:BigInteger,
    project_id:string,
    profile_id:string,
    candidate_document:string,
    date:Date,
    test_file:string,
    observation:string,
    qualification:number,
    recording_file:string,
    abilities:Array<InterviewResultAbility>
    ){

    this.profile_id=profile_id;
    this.test_file=test_file;
    this.project_id=project_id;
    this.id=id;
    this.date=date;
    this.recording_file=recording_file;
    this.candidate_document=candidate_document;
    this.observation=observation;
    this.qualification=qualification;
    this.abilities=abilities;
  }
}
