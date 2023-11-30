import { Utilities } from "./utilities/utilities"
import { faker } from '@faker-js/faker';

describe('Crear Candidato', () => {

    let utility = new Utilities();
   
    beforeEach('Navigate to home', ()=>{
        utility.goHome();
    })

    it('1. Prueba Positiva: Desplegar la opción de registrarse, validar que se \
    muestra el formulario, ingresar datos aleatorios, pulsar crear. Luego validar que se genere el mensaje de exito', () => {

        utility.showCreateCandidate();
        //validar que se despliegue el componente crear
        cy.get('app-candidate-basic');
        
        //Search for Title
        utility.getMessage('Datos Básicos', 'h2');
        //genera datos para el formulario
        let username = faker.internet.email();
        let password = faker.internet.password({ length: 15});
        password = password + "Aa&.";
        let document = faker.string.numeric({ length: 9, exclude: ['0'] })
        let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();
        let age = faker.number.int({ min: 1, max: 47 })
        let phoneNumber = faker.random.numeric(10);
        let address = faker.location.streetAddress({ useFullAddress: true })
        let city = faker.location.city();
        
       
        //busca campos del formulario 
        cy.get("input[formcontrolname='Username']").type(username,{force: true});
        cy.get("input[formcontrolname='Password']").type(password,{force: true});
        cy.get("select[formcontrolname='DocumentType']").select('ID Nacional').should('have.value', 'NI')
        cy.get("input[formcontrolname='Document']").type(document,{force: true});
        cy.get("input[formcontrolname='FirstName']").type(firstName,{force: true});
        cy.get("input[formcontrolname='LastName']").type(lastName,{force: true});
        cy.get("select[formcontrolname='Age']").select(age);
        cy.get("input[formcontrolname='PhoneNumber']").type(phoneNumber,{force: true});
        cy.get("input[formcontrolname='Address']").type(address,{force: true});  
        cy.get("select[formcontrolname='OriginCountry']").select('Colombia').should('have.value', 'CO')
        cy.get("input[formcontrolname='ResidenceCity']").type(city,{force: true});
        cy.get("select[formcontrolname='ResidenceCountry']").select('Estados Unidos').should('have.value', 'US')
        cy.get("input[formcontrolname='Policy']").check();
        
        //pulsar crear
        cy.get('button[type="submit"]').contains('Crear').trigger('mouseover')
        cy.wait(100);
        cy.get('button[type="submit"]').contains('Crear').click({force: true});    
        
        cy.wait(3000);
        cy.get('app-candidate-home');
        
        
       //espera 4 seg para cerrar sesion
       //cy.wait(4000);
       //pulsa en la lista para ver el detalle
       //cy.get("a[class='nav-link']").contains('Salir').click({force: true});
    });

     it('2. Prueba Positiva: Desplegar la opción de registrarse, validar que se \
    muestra el formulario, ingresar datos aleatorios, pulsar Cancelar. Luego validar que se limpien campos y se vuelve a la pagina de logueo', () => {

        utility.showCreateCandidate();
        //validar que se despliegue el componente crear
        cy.get('app-candidate-basic');
        
        //Search for Title
        utility.getMessage('Datos Básicos', 'h2');
        //genera datos para el formulario
        let username = faker.internet.email();
        let password = faker.internet.password({ length: 15});
        let document = faker.random.numeric(9);
        let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();
        let age = faker.number.int({ min: 0, max: 47 })
        let phoneNumber = faker.random.numeric(10);
        let address = faker.location.streetAddress({ useFullAddress: true })
        let city = faker.location.city();
        
       
        //busca campos del formulario 
        cy.get("input[formcontrolname='Username']").type(username,{force: true});
        cy.get("input[formcontrolname='Password']").type(password,{force: true});
        cy.get("select[formcontrolname='DocumentType']").select('ID Nacional').should('have.value', 'NI')
        cy.get("input[formcontrolname='Document']").type(document,{force: true});
        cy.get("input[formcontrolname='FirstName']").type(firstName,{force: true});
        cy.get("input[formcontrolname='LastName']").type(lastName,{force: true});
        cy.get("select[formcontrolname='Age']").select(age);
        cy.get("input[formcontrolname='PhoneNumber']").type(phoneNumber,{force: true});
        cy.get("input[formcontrolname='Address']").type(address,{force: true});  
        cy.get("select[formcontrolname='OriginCountry']").select('Colombia').should('have.value', 'CO')
        cy.get("input[formcontrolname='ResidenceCity']").type(city,{force: true});
        cy.get("select[formcontrolname='ResidenceCountry']").select('Estados Unidos').should('have.value', 'US')
        cy.get("input[formcontrolname='Policy']").check();
        
        //pulsar crear
        cy.get('button[type="submit"]').contains('Crear').trigger('mouseover')
        cy.wait(100);
        cy.get('button[type="reset"]').contains('Cancelar').click({force: true});    
        
        cy.wait(3000);
        cy.get('app-candidate-login');
        
        
       //espera 4 seg para cerrar sesion
       //cy.wait(4000);
       //pulsa en la lista para ver el detalle
       //cy.get("a[class='nav-link']").contains('Salir').click({force: true});
    });
});