export class TestRequest {
  name:string;
  technology:string;
  description:string;
  duration_minutes:BigInteger;
  status:string;
  start_date:Date;
  end_date:Date;

  constructor(  name:string,
    technology:string,
    description:string,
    duration_minutes:BigInteger,
    status:string,
    start_date:Date,
    end_date:Date){
    this.name=name;
    this.technology=technology;
    this.description=description;
    this.duration_minutes=duration_minutes;
    this.status=status;
    this.start_date=start_date;
    this.end_date=end_date;
  }
}

export class TestResponse{
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
  
export class TestItemResponse {
  name:string;
  technology:string;
  description:string;
  duration_minutes:BigInteger;
  status:string;
  start_date:Date;
  end_date:Date;

  constructor(  name:string,
    technology:string,
    description:string,
    duration_minutes:BigInteger,
    status:string,
    start_date:Date,
    end_date:Date){
    this.name=name;
    this.technology=technology;
    this.description=description;
    this.duration_minutes=duration_minutes;
    this.status=status;
    this.start_date=start_date;
    this.end_date=end_date;
  }
}

export class TestResultRequest {
  test_name:string;
  candidate_document:string;
  observation:string;
  points:number;

  constructor(  
    test_name:string,
    candidate_document:string,
    observation:string,
    points:number){
    this.test_name=test_name;
    this.candidate_document=candidate_document;
    this.observation=observation;
    this.points=points;
  }
}


