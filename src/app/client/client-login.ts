export class ClientLogin {
  username:string;
  password:string;


  constructor(username:string,password:string){
    this.password=password;
    this.username=username;
  }
}


export class ClientLoginResponse {
  username:string;
  token:string;


  constructor(username:string,token:string){
    this.token=token;
    this.username=username;
  }
}


export class UserAuthenticated {
  is_authenticated:boolean;
  role:string;
  username:string;
  auth_headers:Map<string,string>;
  person_id:string;


  constructor(is_authenticated:boolean,role:string,username:string,auth_headers:Map<string,string>,person_id:string){
    this.is_authenticated=is_authenticated;
    this.role=role;
    this.username=username;
    this.auth_headers=auth_headers;
    this.person_id=person_id;
  }
}


export class MyselfResponse {
  new_token:string;
  role:string;
  username:string;
  exp:number;
  person_id:string;

  constructor(new_token:string,role:string,username:string,exp:number,person_id:string){
    this.new_token=new_token;
    this.role=role;
    this.username=username;
    this.exp=exp;
    this.person_id=person_id;
  }
}
