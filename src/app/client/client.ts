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

export class CandidateRequestSearch {
    roleFilter : string
    role: string
    roleExperience : string
    technologies : string
    abilities: string
    titleFilter : string
    title : string
    titleExperience : string
    
   
    
    constructor( roleFilter : string, role: string,roleExperience : string,
    technologies : string, abilities: string, titleFilter : string,title : string,
    titleExperience : string)
    {
            this.roleFilter =roleFilter ;
            this.role = role ;
            this.roleExperience =roleExperience ;
            this.technologies = technologies ;
            this.abilities = abilities ;
            this.titleFilter =titleFilter ;
            this.title =title ;
            this.titleExperience = titleExperience;
    }
    
}

export class TechnologyResponse {
    technologyId : string
    name: string
    category : string
    
    
    constructor(  technologyId : string, name: string,category : string)
    {
            this.technologyId = technologyId ;
            this.name = name ;
            this.category = category ;
            
    }
}   

export class AbilityResponse {
    abilityId : string
    name: string
    category : string
    
    
    constructor(  abilityId : string, name: string,category : string)
    {
            this.abilityId = abilityId ;
            this.name = name ;
            this.category = category ;
            
    }
}   


export class CandidateResponseSearch {
    person_id : string
    first_name: string
    last_name: string
    age : string
    roles : string
    technologies: string
    titles: string
    abilities : string
    score : string
    
    constructor( person_id : string,first_name: string,last_name: string, age : string,
    roles : string, technologies: string , titles: string, abilities : string,
    score : string)
    {
            this.person_id = person_id ;
            this.first_name = first_name ;
            this.last_name = last_name ;
            this.age = age ;
            this.roles = roles ;
            this.technologies = technologies;
            this.titles = titles ;
            this.abilities = abilities ;
            this.score = score;
    }
    
}
