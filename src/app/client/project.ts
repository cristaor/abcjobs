export class ProfileRequest {
  name:string;
  technology:string;
  description:string;
  experience_in_years:BigInteger;
  category:string;
  title:string;
  role:string;
  project_id:string;

  constructor(  name:string,
    technology:string,
    description:string,
    experience_in_years:BigInteger,
    category:string,
    title:string,
    role:string,
    project_id:string){
    this.name=name;
    this.technology=technology;
    this.description=description;
    this.experience_in_years=experience_in_years;
    this.category=category;
    this.title=title;
    this.role=role;
    this.project_id=project_id;
  }
}

export class ProfileResponse{
  detail:string;
  constructor(detail:string){
    this.detail=detail;
  }
}

export class ProfileListDetail{
  projectId:string;
  name:string;
  constructor(projectId:string,name:string){
    this.projectId=projectId;
    this.name=name;
  }
}
