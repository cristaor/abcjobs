import { Utilities } from "./utilities/utilities"
import { faker } from '@faker-js/faker';

describe('Ver info empresa', () => {

    let utility = new Utilities();
   
    beforeEach('Navigate to home', ()=>{
        utility.goHome();
         })
         
    it('1. Prueba Positiva: Desplegar la opción de registrarse, validar que se \
    muestra el formulario, ingresar datos aleatorios, pulsar crear. Luego validar que se genere el mensaje de exito', () => {
        utility.showCreateCompany();
        //validar que se despliegue el componente crear
        cy.get('app-client-data');
        
        //Search for Title
        utility.getMessage('Datos Básicos', 'h2');
        utility.getMessage('Datos Contacto', 'h5');
        //genera datos para el formulario
        let username = faker.internet.email();
        let password = faker.internet.password({ length: 15});
        let taxPayerId = faker.random.numeric(10);
        let name = faker.company.name();
        let years = faker.number.int({ min: 1, max: 100 })
        let phoneNumber = faker.random.numeric(10);
        let address = faker.location.streetAddress({ useFullAddress: true })
        let city = faker.location.city();
       
        let document = faker.random.numeric(9);
        let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();
        let profile =faker.person.jobType();
        let position = faker.person.jobTitle();

        //busca campos del formulario 
        cy.get("input[formcontrolname='Username']").type(username,{force: true});
        cy.get("input[formcontrolname='Password']").type(password,{force: true});
        cy.get("input[formcontrolname='TaxPayerId']").type(taxPayerId,{force: true});
        cy.get("input[formcontrolname='Name']").type(name,{force: true});
        cy.get("input[formcontrolname='Years']").type(years,{force: true});
        cy.get("input[formcontrolname='PhoneNumber']").type(phoneNumber,{force: true});
        cy.get("input[formcontrolname='Address']").type(address,{force: true});  
        cy.get("input[formcontrolname='City']").type(city,{force: true});
        cy.get("select[formcontrolname='Country']").select('Estados Unidos').should('have.value', 'US')
        cy.get("input[formcontrolname='Policy']").check();
        
        cy.get("select[formcontrolname='DocumentType']").select('ID Nacional').should('have.value', 'NI')
        cy.get("input[formcontrolname='Document']").type(document,{force: true});
        cy.get("input[formcontrolname='FirstName']").type(firstName,{force: true});
        cy.get("input[formcontrolname='LastName']").type(lastName,{force: true});
        cy.get("input[formcontrolname='Profile']").type(profile,{force: true});
        cy.get("input[formcontrolname='Position']").type(position,{force: true});
        
         
        
        
        //pulsar crear
        cy.get('button[type="submit"]').contains('Crear').trigger('mouseover')
        cy.wait(1000);
        cy.get('button[type="submit"]').contains('Crear').click({force: true});    
        
        cy.wait(6000);
        cy.get('app-client-home');
        
        
        cy.visit('/basic-client-edit')
        cy.wait(3000) 
        //Search for Title
        utility.getMessage('Datos Básicos', 'h2');
        utility.getMessage('Datos Contacto', 'h5');
        
        
        cy.get("input[formcontrolname='Username']").should('have.value',username)
        cy.get("input[formcontrolname='Password']").should('have.value',password);
        cy.get("input[formcontrolname='TaxPayerId']").should('have.value',taxPayerId)
        cy.get("input[formcontrolname='Name']").should('have.value',name);
        cy.get("input[formcontrolname='Years']").should('have.value',years);
        cy.get("input[formcontrolname='PhoneNumber']").should('have.value',phoneNumber);
        cy.get("input[formcontrolname='Address']").should('have.value',address);  
        cy.get("input[formcontrolname='City']").should('have.value',city);
        //cy.get("select[formcontrolname='Country']").should('have.value', 'US')
        
        cy.get("select[formcontrolname='DocumentType']").should('have.value', 'NI')
        cy.get("input[formcontrolname='Document']").should('have.value',document);
        cy.get("input[formcontrolname='FirstName']").should('have.value',firstName);
        cy.get("input[formcontrolname='LastName']").should('have.value',lastName);
        cy.get("input[formcontrolname='Profile']").should('have.value',profile);
        cy.get("input[formcontrolname='Position']").should('have.value',position);
                
       //espera 4 seg para cerrar sesion
       //cy.wait(4000);
       //pulsa en la lista para ver el detalle
       //cy.get("a[class='nav-link']").contains('Salir').click({force: true});
    });
    
    
});