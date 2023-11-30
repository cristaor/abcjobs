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
        
        cy.visit('/test')
        cy.wait(1000) 
        //Search for Title
        utility.getMessage('Crear Prueba', 'h2');
        
        let testName= "Prueba "+ faker.commerce.productName()
        let technology = faker.number.int({ min: 0, max: 4 })
        let day = faker.number.int({ min: 10, max: 30 })
        let month = faker.number.int({ min: 10, max: 12 })
        let year = "2024"
        let year2 = "2025"
        let duration = faker.number.int({ min: 60, max: 120 })
        let details = faker.lorem.lines({ min: 2, max: 3 })
        
        cy.get("input[formcontrolname='name']").type(testName,{force: true});
        cy.get("select[formcontrolname='technology']").select(technology);
        cy.get("textarea[formcontrolname='description']").type(details,{force: true});
        cy.get("input[formcontrolname='duration_minutes']").type(duration.toString(),{force: true});
        cy.get("select[formcontrolname='status']").select(0);
        cy.get("input[formcontrolname='start_date']").type(`${year}-${month}-${day}`,{force: true});
        cy.get("input[formcontrolname='end_date']").type(`${year2}-${month}-${day}`,{force: true});
         
        //pulsar crear
        cy.get('button[type="submit"]').contains('Aceptar').trigger('mouseover')
        cy.wait(1000);
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});    
        
        cy.wait(3000);
        cy.get('app-create-test');
    });
    
     
});