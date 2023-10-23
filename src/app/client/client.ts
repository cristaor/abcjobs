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