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