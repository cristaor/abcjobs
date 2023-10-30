export class TestRequest {
  name:string;
  technology:string;
  description:string;
  duration_minutes:BigInteger;
  status:boolean;
  start_date:Date;
  end_date:Date;

  constructor(  name:string,
    technology:string,
    description:string,
    duration_minutes:BigInteger,
    status:boolean,
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
