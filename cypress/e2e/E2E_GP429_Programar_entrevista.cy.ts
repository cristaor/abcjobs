import { faker } from '@faker-js/faker';
import { Utilities } from "./utilities/utilities"


describe('Crear Proyecto', () => {

    let utility = new Utilities();
   
    beforeEach('Ir al Inicio', ()=>{
        utility.goHome();

    })

   it('1. Prueba Positiva: Desplegar la opción de ingresar, validar que se \
    muestra el formulario, ingresar datos aleatorios, pulsar Aceptar. Luego validar que se genere el mensaje de exito y se encuentre en el home', () => {

              
        cy.visit('/login-recruiter')
        cy.wait(3000) 
        //Search for Title
        let username="cperez@aol.co"
        let password="9876.."
        utility.getMessage('Ingrese su usuario y clave', 'div');
        //busca campos del formulario 
        cy.get("input[formcontrolname='user']").type(username,{force: true});
        cy.get("input[formcontrolname='password']").type(password,{force: true});
        
        //pulsar Ingresar
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});    
        
        //espera 4 seg para iniciar sesion
        cy.wait(4000);
        utility.getMessage('Menu de Reclutador', 'h2');
        
        cy.visit('/interview')
        cy.wait(1000) 
        //Search for Title
        utility.getMessage('Programar Entrevista', 'h2');
        
        let url= faker.internet.url()
        let day = faker.number.int({ min: 10, max: 30 })
        let month = faker.number.int({ min: 10, max: 12 })
        let year = "2024"
        let year2 = "2025"
        let duration = faker.number.int({ min: 0, max: 4 })
        
        
        cy.get("select[formcontrolname='project_id']").select(1)
        cy.wait(3000);
        cy.get("select[formcontrolname='profile_id']").select(0);
        cy.get("input[formcontrolname='meet_url']").type(url,{force: true});
        cy.get("select[formcontrolname='candidate']").select(0);
        cy.get("input[formcontrolname='start_timestamp']").type(`${year}-${month}-${day}T08:00`,{force: true});
        cy.get("select[formcontrolname='duration_minutes']").select(duration);
         
        //pulsar crear
        cy.get('button[type="submit"]').contains('Aceptar').trigger('mouseover')
        cy.wait(1000);
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});    
        
        cy.wait(3000);
        cy.get('app-schedule-interview');
    });
    
     
});