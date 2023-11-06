import { faker } from '@faker-js/faker';
import { Utilities } from "./utilities/utilities"


describe('Crear Proyecto', () => {

    let utility = new Utilities();
   
    beforeEach('Ir al Inicio', ()=>{
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
         let username = "nmas@aol.co";
        let password = "Nmas2023..";
        
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
        
        
        cy.visit('/search-candidate');    
        cy.wait(10000);
        
         cy.get("select[formcontrolname='Project']").select(0);
         cy.wait(5000);
         cy.get("select[formcontrolname='Profile']").select(0);
         cy.get("select[formcontrolname='RoleFilter']").select(0);
         cy.get("input[formcontrolname='Role']").type("PR",{force: true});
         cy.get("select[formcontrolname='TitleFilter']").select(0);
         cy.get('button[type="submit"]').contains('Buscar').click({force: true});
    });
    
     
});