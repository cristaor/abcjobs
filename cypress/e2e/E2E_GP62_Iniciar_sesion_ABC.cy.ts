import { faker } from '@faker-js/faker';
import { Utilities } from "./utilities/utilities"


describe('Iniciar Sesion ABC', () => {

    let utility = new Utilities();

    beforeEach('Create a candidate', ()=>{
        utility.goHome();

    })

   it('1. Prueba Positiva: Desplegar la opción de ingresar, validar que se \
    muestra el formulario, ingresar datos aleatorios, pulsar Aceptar. Luego validar que se genere el mensaje de exito y se encuentre en el home', () => {

       utility.showCreateCompany();
        //validar que se despliegue el componente crear
        cy.get('app-client-data');


        cy.visit('/login-recruiter')
        cy.wait(1000)
        //Search for Title
        utility.getMessage('Ingrese su usuario y clave', 'div');
        //busca campos del formulario
        cy.get("input[formcontrolname='user']").type("cperez@aol.co",{force: true});
        cy.get("input[formcontrolname='password']").type("9876..",{force: true});

        //pulsar Ingresar
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});

        //espera 4 seg para iniciar sesion
        cy.wait(4000);
        cy.get('app-recruiter-home');
    });


    it('2. Prueba Negtiva: Desplegar la opción de ingresar, validar que se \
    muestra el formulario, ingresar datos aleatorios, pulsar Aceptar. Luego validar que se genere el mensaje de error y no cambie de pantalla', () => {

        cy.visit('/login-recruiter')
        cy.wait(1000)
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
        cy.get('app-recruiter-login');
    });

});
