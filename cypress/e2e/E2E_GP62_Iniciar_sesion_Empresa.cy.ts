import { faker } from '@faker-js/faker';
import { Utilities } from "./utilities/utilities"


describe('Iniciar Sesion Empresa', () => {

    let utility = new Utilities();
   
    beforeEach('Create a candidate', ()=>{
        utility.goHome();

    })

   it('1. Prueba Positiva: Desplegar la opción de ingresar, validar que se \
    muestra el formulario, ingresar datos aleatorios, pulsar Aceptar. Luego validar que se genere el mensaje de exito y se encuentre en el home', () => {

       utility.showCreateCompany();
        //validar que se despliegue el componente crear
        cy.get('app-client-data');
        
        //Search for Title
        utility.getMessage('Datos Básicos', 'h2');
        utility.getMessage('Datos Contacto', 'h5');
        //genera datos para el formulario
        let username = faker.internet.email();
        let password = faker.internet.password({ length: 15});
         password = password + "Aa&.";
        let taxPayerId = faker.string.numeric({ length: 10, exclude: ['0'] })
        let name = faker.company.name();
        let years = faker.number.int({ min: 1, max: 100 })
        let phoneNumber = faker.random.numeric(10);
        let address = faker.location.streetAddress({ useFullAddress: true })
        let city = faker.location.city();
       
        let document = faker.string.numeric({ length: 9, exclude: ['0'] })
        let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();
        let profile =faker.person.jobType();
        let position = faker.person.jobTitle();

        //busca campos del formulario 
        cy.get("input[formcontrolname='Username']").type(username,{force: true});
        cy.get("input[formcontrolname='Password']").type(password,{force: true});
        cy.get("input[formcontrolname='TaxPayerId']").type(taxPayerId,{force: true});
        cy.get("input[formcontrolname='Name']").type(name,{force: true});
        cy.get("input[formcontrolname='Years']").type(years.toString(),{force: true});
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
        cy.wait(100);
        cy.get('button[type="submit"]').contains('Crear').click({force: true});    
        
        cy.wait(6000);
        cy.get('app-client-home');
        
        cy.visit('/login-client')
        cy.wait(3000) 
        //Search for Title
        utility.getMessage('Ingrese su usuario y clave', 'div');
        //busca campos del formulario 
        cy.get("input[formcontrolname='user']").type(username,{force: true});
        cy.get("input[formcontrolname='password']").type(password,{force: true});
        
        //pulsar Ingresar
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});    
        
        //espera 4 seg para iniciar sesion
        cy.wait(4000);
        cy.get('app-client-home'); 
    });
    
    
    it('2. Prueba Negtiva: Desplegar la opción de ingresar, validar que se \
    muestra el formulario, ingresar datos aleatorios, pulsar Aceptar. Luego validar que se genere el mensaje de error y no cambie de pantalla', () => {

        cy.visit('/login-client')
        cy.wait(3000) 
        //Search for Title
        utility.getMessage('Ingrese su usuario y clave', 'div');
        //genera datos para el formulario
        let username = faker.internet.email();
        let password = faker.internet.password({ length: 20});
        cy.get("input[formcontrolname='user']").type(username,{force: true});
        cy.get("input[formcontrolname='password']").type(password,{force: true});
        
        //pulsar Ingresar
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});    
        
        //espera 4 seg para iniciar sesion
        cy.wait(4000);
        cy.get('app-client-login'); 
    });
     
});