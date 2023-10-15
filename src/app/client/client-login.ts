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


  constructor(is_authenticated:boolean,role:string,username:string,auth_headers:Map<string,string>){
    this.is_authenticated=is_authenticated;
    this.role=role;
    this.username=username;
    this.auth_headers=auth_headers;
  }
}


export class MyselfResponse {
  new_token:string;
  role:string;
  username:string;
  exp:number;


  constructor(new_token:string,role:string,username:string,exp:number){
    this.new_token=new_token;
    this.role=role;
    this.username=username;
    this.exp=exp;
  }
}
