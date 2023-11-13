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
export class CandidateFullInfo {
    info: PersonInfo
    professional_data: ProfessionalData;
    
    constructor(
        professional_data: ProfessionalData,
        info: PersonInfo
    ){
        this.professional_data=professional_data;
        this.info = info;
    }

}

export class CandidateAcademicInfoReadModel {
    title: string;
    institution: string;
    country: string;
    start_date: string;
    end_date: string;
    description: string;
    
    constructor(
        title: string,
        institution: string,
        country: string,
        start_date: string,
        end_date: string,
        description: string,
    ) {
       this.title=title;
        this.institution=institution;
        this.country=country;
        this.start_date=start_date
        this.end_date=end_date;
        this.description=description;
    }
}

export class CandidateLaboralInfoReadModel {
    company_address: string;
    company_country: string;
    company_name: string;
    company_phone: string;
    description: string;
    start_date: string;
    end_date: string;
    position: string;
    
    constructor(
        company_address: string,
        company_country: string,
        company_name: string,
        company_phone: string,
        description: string,
        start_date: string,
        end_date: string,
        position: string
    ) {
        this.company_address = company_address;
        this.company_country = company_country;
        this.company_name = company_name;
        this.company_phone = company_phone;
        this.description = description;
        this.start_date = start_date;
        this.end_date = end_date;
        this.position = position;
    }
}

export class CandidateBasicInfo {
    address: string;
    age: number;
    birth_date: string;
    origin_country: string;
    residence_country: string;
    residence_city: string;
    
    constructor(
        address: string,
        age: number,
        birth_date: string,
        origin_country: string,
        residence_country: string,
        residence_city: string
       
    ) {
       this.address=address;
        this.age=age;
        this.birth_date=birth_date;
        this.origin_country=origin_country;
        this.residence_country=residence_country;
        this.residence_city=residence_city;
    }
}

export class ProfessionalData {
    basic_info : CandidateBasicInfo
    academic_info: CandidateAcademicInfoReadModel[]
    laboral_info: CandidateLaboralInfoReadModel[]
    technology_info: CandidateTechnologyInfo[]
    

    constructor(
        basic_info: CandidateBasicInfo,
        academic_info: CandidateAcademicInfoReadModel[],
        laboral_info: CandidateLaboralInfoReadModel[],
        technology_info: CandidateTechnologyInfo[]
    ){

            this.academic_info = academic_info
            this.basic_info = basic_info
            this.laboral_info = laboral_info
            this.technology_info = technology_info

    }
}

export class PersonInfo{
    document: string
    document_type: string
    first_name: string
    last_name: string
    phone_number: string

    constructor(
        document: string,
        document_type: string,
        first_name: string,
        last_name: string,
        phone_number: string
    ){
        this.document = document;
        this.document_type = document_type;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone_number = phone_number
        
    }

}
