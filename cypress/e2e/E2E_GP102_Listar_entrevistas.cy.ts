import { faker } from '@faker-js/faker';
import { Utilities } from "./utilities/utilities"


describe('Listar Entrevistas', () => {

    let utility = new Utilities();

    beforeEach('Ir al Inicio', ()=>{
        utility.goHome();

    })

   it('1. Prueba Positiva: Desplegar la opción de ingresar, validar que se \
    muestra el formulario', () => {


      cy.visit('/login-client')
      cy.wait(3000)
      //Search for Title
      utility.getMessage('Ingrese su usuario y clave', 'div');
      //busca campos del formulario
      cy.get("input[formcontrolname='user']").type("jlopes23@gmail.com",{force: true});
      cy.get("input[formcontrolname='password']").type("DHSc532XSC..",{force: true});

        //pulsar Ingresar
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});
        cy.wait(2000)

        cy.visit('/list-interviews')
        cy.wait(4000)

        //Search for Title
        utility.getMessage('Listado de Entrevistas', 'h2');
        utility.getMessage('Perfil posición', 'th');
        utility.getMessage('Fecha entrevista', 'th');
        utility.getMessage('Duracion entrevista', 'th');
        utility.getMessage('URL entrevista', 'th');
        utility.getMessage('Estado entrevista', 'th');


        cy.get('button').contains("Cancelar").click({force: true});

        cy.wait(3000)

        cy.get('app-candidate-home');

    });


});
