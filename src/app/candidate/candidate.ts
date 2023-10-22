export class Candidate {
    document: number;
    documentType: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    username: string;
    password: string;
    role: string;
    birthDate: string;
    age: number;
    originCountry: string;
    residenceCountry: string;
    residenceCity: string;
    address: string;


    constructor(
        document: number,
    documentType: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    username: string,
    password: string,
    role: string,
    birthDate: string,
    age: number,
    originCountry: string,
    residenceCountry: string,
    residenceCity: string,
    address: string
       
    ) {
       this.document=document;
        this.documentType=documentType;
        this.firstName=firstName;
        this.lastName=lastName;
        this.phoneNumber=phoneNumber;
        this.username=username;
        this.password=password;
        this.role=role;
        this.birthDate=birthDate;
        this.age=age;
        this.originCountry=originCountry;
        this.residenceCountry=residenceCountry;
        this.residenceCity=residenceCity;
        this.address=address;
    }
}


export class CandidateAcademicInfo {
    title: string;
    institution: string;
    country: string;
    start_date_month: string;
    start_date_year: string;
    end_date_month: string;
    end_date_year: string;
    current: string;
    description: string;
    
    constructor(
        title: string,
        institution: string,
        country: string,
        start_date_month: string,
        start_date_year: string,
        end_date_month: string,
        end_date_year: string,
        current: string,
        description: string,
    ) {
       this.title=title;
        this.institution=institution;
        this.country=country;
        this.start_date_month=start_date_month;
        this.start_date_year=start_date_year;
        this.end_date_month=end_date_month;
        this.end_date_year=end_date_year;
        this.current=current;
        this.description=description;
    }

    isValid():boolean{
        
        return this.title !== "" 
        && this.institution !== ""
        && this.country !== ""
        && this.start_date_month !== ""
        && this.start_date_year !== ""
        && this.end_date_month !== ""
        && this.description !== ""
    }
}

export class CandidateTechnicalRoleInfo {
    name: string;
    experience_years: number;
    description: string;
    
    constructor(
        name: string,
        experience_years: number,
        description: string
    ) {
       this.name=name;
        this.experience_years = experience_years;
        this.description=description;
    }

    isValid():boolean{
        
        return this.name !== "" 
        && this.description !== ""
    }
}

export class CandidateTechnologyInfo {
    name: string;
    experience_years: number;
    level: number;
    description: string;

    constructor(
        name: string,
        experience_years: number,
        level: number,
        description: string
    ){
        this.name=name;
        this.experience_years = experience_years;
        this.level = level;
        this.description=description;
    }

    isValid():boolean{
        
        return this.name !== "" 
        && this.description !== ""
    }
}