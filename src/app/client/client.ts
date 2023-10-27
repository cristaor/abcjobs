export class Client {
    document: number;
    documentType: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    taxpayerId: string;
    name: string;
    country: string;
    city: string;
    years: number
    address: string;
    phoneNumber: string;
    profile: string;
    position: string;
    
    constructor(
        document: number,
        documentType: string,
        firstName: string,
        lastName: string,
        username: string,
        password: string,
        taxpayerId: string,
        name: string,
        country: string,
        city: string,
        years: number,
        address: string,
        phoneNumber: string,
        profile: string,
        position: string
        )
     {
        this.document=document;
        this.documentType=documentType;
        this.firstName=firstName;
        this.lastName=lastName;
        this.username=username;
        this.password=password;
        this.taxpayerId=taxpayerId;
        this.name=name;
        this.country=country;
        this.city=city;
        this.years=years;
        this.address=address;
        this.phoneNumber=phoneNumber;
        this.profile=profile;
        this.position=position;
    }       
    
}

export class ClientProject {
    id : number
    project_name : string
    start_date : string
    active : string
    creation_time : string
    details : string
    company_id : string
    constructor( id : number, project_name : string, start_date : string, active : string
    ,creation_time : string, details : string, company_id : string)
    {
            this.id =id ;
            this.project_name =project_name ;
            this.start_date =start_date ;
            this.active =active ;
            this.creation_time =creation_time ;
            this.details =details ;
            this.company_id =company_id ;

    }
    
}