import { Utilities } from "./utilities/utilities"
import { faker } from '@faker-js/faker';

describe('Crear Perfil', () => {

    let utility = new Utilities();
   
    beforeEach('Navigate to home', ()=>{
        utility.goHome();
    })

    it('1. Prueba Positiva: Desplegar la opción de registrarse, validar que se \
    muestra el formulario, ingresar datos aleatorios, pulsar crear. Luego validar que se genere el mensaje de exito', () => {

        cy.visit('/login-client')
        cy.wait(3000) 
        
        // datos para el formulario
        let username = "nmas@aol.co";
        let password = "Nmas2023..";
        let name = faker.company.name();
        let title = faker.person.jobTitle();
        let description = faker.person.jobDescriptor()

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
        
        cy.visit('/project-profile');    
        cy.wait(3000); 
       
        //busca campos del formulario 
        cy.get("select[formcontrolname='project_id']").select('Proyecto de API');
        cy.get("input[formcontrolname='name']").type(name,{force: true}); 
        cy.get("input[formcontrolname='title']").type(title,{force: true}); 
        cy.get("select[formcontrolname='technology']").select('JAVA');
        cy.get("select[formcontrolname='role']").select('TECHNICAL_LEADER');
        cy.get("select[formcontrolname='category']").select('WEB');
        cy.get("textarea[formcontrolname='description']").type(description,{force: true}); 

        
        //pulsar crear
        cy.get('button[type="submit"]').contains('Aceptar').trigger('mouseover');
        cy.wait(100);
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});    
        
        cy.wait(4000);
        cy.get('app-client-home');
        
    
    });

});