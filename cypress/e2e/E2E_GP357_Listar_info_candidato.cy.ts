import { faker } from '@faker-js/faker';
import { Utilities } from "./utilities/utilities"


describe('MOstrar informacion Candidato', () => {

    let utility = new Utilities();
   
    beforeEach('Ir al Inicio', ()=>{
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
        let username2 = faker.internet.email();
        let password2 = faker.internet.password({ length: 15});
         password2 = password2 + "Aa&.";
        let document2 = faker.string.numeric({ length: 9, exclude: ['0'] })
        let firstName2 = faker.person.firstName();
        let lastName2 = faker.person.lastName();
        let age2 = faker.number.int({ min: 1, max: 47 })
        let phoneNumber2 = faker.random.numeric(10);
        let address2 = faker.location.streetAddress({ useFullAddress: true })
        let city2 = faker.location.city();
        
       
        //busca campos del formulario 
        cy.get("input[formcontrolname='Username']").type(username2,{force: true});
        cy.get("input[formcontrolname='Password']").type(password2,{force: true});
        cy.get("select[formcontrolname='DocumentType']").select('ID Nacional').should('have.value', 'NI')
        cy.get("input[formcontrolname='Document']").type(document2,{force: true});
        cy.get("input[formcontrolname='FirstName']").type(firstName2,{force: true});
        cy.get("input[formcontrolname='LastName']").type(lastName2,{force: true});
        cy.get("select[formcontrolname='Age']").select(age2);
        cy.get("input[formcontrolname='PhoneNumber']").type(phoneNumber2,{force: true});
        cy.get("input[formcontrolname='Address']").type(address2,{force: true});  
        cy.get("select[formcontrolname='OriginCountry']").select('Colombia').should('have.value', 'CO')
        cy.get("input[formcontrolname='ResidenceCity']").type(city2,{force: true});
        cy.get("select[formcontrolname='ResidenceCountry']").select('Estados Unidos').should('have.value', 'US')
        cy.get("input[formcontrolname='Policy']").check();
        
        //pulsar crear
        cy.get('button[type="submit"]').contains('Crear').trigger('mouseover')
        cy.wait(100);
        cy.get('button[type="submit"]').contains('Crear').click({force: true});    
        
        cy.wait(3000);
        cy.get('app-candidate-home');

        cy.visit('/login-candidate')
        cy.wait(3000) 
        //Search for Title
        utility.getMessage('Ingrese su usuario y clave', 'div');
        //busca campos del formulario 
        cy.get("input[formcontrolname='user']").type(username2,{force: true});
        cy.get("input[formcontrolname='password']").type(password2,{force: true});
        
        //pulsar Ingresar
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});    
        
        //espera 4 seg para iniciar sesion
        cy.wait(3000);
        cy.get('app-candidate-home'); 
        
        
        cy.visit('/technical-role-candidate')
        cy.wait(3000) 
        //Search for Title
        utility.getMessage('Información Técnica de roles', 'h2');
        
        let role_name2 = faker.person.jobType()
        let experience_years2 = faker.number.int({ min: 1, max: 2 })
        let description2 = faker.lorem.lines({ min: 2, max: 3 })
        
        cy.get("input[formcontrolname='name']").type(role_name2,{force: true});
        cy.get("select[formcontrolname='experience_years']").select(experience_years2)
        cy.get("textarea[formcontrolname='description']").type(description2,{force: true});
        
        //pulsar crear
        cy.get('button[type="submit"]').contains('Aceptar').trigger('mouseover')
        cy.wait(100);
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true}); 
        
        //espera 4 seg para iniciar sesion
        cy.wait(3000);
        cy.get('app-candidate-home');
        
        
        utility.goHome();
        
        
        cy.visit('/candidate-full-info')
        cy.wait(3000) 
        //Search for Title
        utility.getMessage('Información básica', 'h2');
        utility.getMessage('Información académica', 'h2');
        utility.getMessage('Información Laboral', 'h2');
        utility.getMessage('Información de tecnologías', 'h2');
        
        cy.get("th").contains("Documento");
        cy.get("td").contains(document2);
        
    });

     
});