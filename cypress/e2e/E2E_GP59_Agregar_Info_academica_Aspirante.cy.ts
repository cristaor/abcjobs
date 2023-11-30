import { faker } from '@faker-js/faker';
import { Utilities } from "./utilities/utilities"


describe('Agregra informacion Acdemica de Candidato/Aspirante', () => {

    let utility = new Utilities();
   
    beforeEach('Create a candidate', ()=>{
        utility.goHome();

    })

   it('1. Prueba Positiva: Desplegar la opción de ingresar, validar que se \
    muestra el formulario, ingresar datos aleatorios, pulsar Aceptar. Luego validar que se genere el mensaje de exito y se encuentre en el home', () => {

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

        cy.visit('/login-candidate')
        cy.wait(1000) 
        //Search for Title
        utility.getMessage('Ingrese su usuario y clave', 'div');
        //busca campos del formulario 
        cy.get("input[formcontrolname='user']").type(username,{force: true});
        cy.get("input[formcontrolname='password']").type(password,{force: true});
        
        //pulsar Ingresar
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});    
        
        //espera 4 seg para iniciar sesion
        cy.wait(3000);
        cy.get('app-candidate-home'); 
        
        
        cy.visit('/academic-candidate')
        cy.wait(1000) 
        //Search for Title
        utility.getMessage('Información Acádemica', 'h2');
        
        let title = faker.person.jobTitle()
        let insitution_name = faker.company.bs()
        let country_filter = faker.number.int({ min: 1, max: 2 })
        let description = faker.lorem.lines({ min: 2, max: 3 })
        
        cy.get("input[formcontrolname='title']").type(title,{force: true});
        cy.get("input[formcontrolname='institution']").type(insitution_name,{force: true});
        cy.get("select[formcontrolname='country']").select(country_filter)
        cy.get("select[formcontrolname='start_date_month']").select(1)
        cy.get("select[formcontrolname='start_date_year']").select(1)
        cy.get("select[formcontrolname='end_date_month']").select(8)
        cy.get("select[formcontrolname='end_date_year']").select(5)
        cy.get("textarea[formcontrolname='description']").type(description,{force: true});
        
        //pulsar crear
        cy.get('button[type="submit"]').contains('Aceptar').trigger('mouseover')
        cy.wait(100);
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true}); 
        
        //espera 4 seg para iniciar sesion
        cy.wait(3000);
        cy.get('app-candidate-home');
        
    });
     
});