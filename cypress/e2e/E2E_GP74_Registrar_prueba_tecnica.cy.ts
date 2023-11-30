import { faker } from '@faker-js/faker';
import { Utilities } from "./utilities/utilities"


describe('Crear Proyecto', () => {

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
        
        cy.wait(4000);
        cy.get('app-candidate-home');
        
        
        //Registrarse como reclutador      
        cy.visit('/login-recruiter')
        cy.wait(1000) 
        //Search for Title
        let username2="cperez@aol.co"
        let password2="9876.."
        utility.getMessage('Ingrese su usuario y clave', 'div');
        //busca campos del formulario 
        cy.get("input[formcontrolname='user']").type(username2,{force: true});
        cy.get("input[formcontrolname='password']").type(password2,{force: true});
        
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
        
        
        cy.visit('/register-result-test')
        cy.wait(1000)
        utility.getMessage('Cargar Prueba', 'h2');
        
        let day2 = faker.number.int({ min: 10, max: 30 })
        let month2 = faker.number.int({ min: 10, max: 12 })
        let score = faker.number.int({ min: 10, max: 99 })
        let observation = faker.lorem.lines({ min: 2, max: 3 })
        
        cy.get("select[formcontrolname='name']").select(1)
        cy.get("input[formcontrolname='test_date']").type(`${year2}-${month2}-${day2}`,{force: true});
        cy.get("input[formcontrolname='points']").type(score.toString(),{force: true});
        cy.get("input[formcontrolname='candidate_document']").type(document.toString(),{force: true});
        cy.get('button[type="button"]').contains('Buscar').click({force: true});
        cy.wait(2000)
        
        //pulsar crear
        cy.get('button[type="submit"]').contains('Aceptar').trigger('mouseover')
        cy.wait(1000);
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});    
        
        cy.wait(3000);
        cy.get('app-client-home');
    });
    
     
});