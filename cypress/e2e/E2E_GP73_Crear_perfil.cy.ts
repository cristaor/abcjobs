import { Utilities } from "./utilities/utilities"
import { faker } from '@faker-js/faker';

describe('Crear Perfil', () => {

    let utility = new Utilities();
   
    beforeEach('Navigate to home', ()=>{
        utility.goHome();
    })

    it('1. Prueba Positiva: Desplegar la opción de registrarse, validar que se \
    muestra el formulario, ingresar datos aleatorios, pulsar crear. Luego validar que se genere el mensaje de exito', () => {

        /*
        cy.visit('/login-client')
        cy.wait(3000) 
        //Search for Title
        utility.getMessage('Ingrese su usuario y clave', 'div');
        //busca campos del formulario 
        cy.get("input[formcontrolname='user']").type("cperez@aol.co",{force: true});
        cy.get("input[formcontrolname='password']").type("HRerv3498&.",{force: true});
        
        //pulsar Ingresar
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});    
        
        //espera 4 seg para iniciar sesion
        cy.wait(4000);
        cy.get('app-client-home'); 
        */
        
        utility.showCreateCompany();
        //validar que se despliegue el componente crear
        cy.get('app-client-data');
        
        //Search for Title
        utility.getMessage('Datos Básicos', 'h2');
        utility.getMessage('Datos Contacto', 'h5');
        //genera datos para el formulario
        let username = faker.internet.email();
        let password = faker.internet.password({ length: 15});
         password = password + "Aa&.";
        let taxPayerId = faker.random.numeric(10);
        let name = faker.company.name();
        let years = faker.number.int({ min: 1, max: 100 })
        let phoneNumber = faker.random.numeric(10);
        let address = faker.location.streetAddress({ useFullAddress: true })
        let city = faker.location.city();
       
        let document = faker.random.numeric(9);
        let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();
        let profile =faker.person.jobType();
        let position = faker.person.jobTitle();

        //busca campos del formulario 
        cy.get("input[formcontrolname='Username']").type(username,{force: true});
        cy.get("input[formcontrolname='Password']").type(password,{force: true});
        cy.get("input[formcontrolname='TaxPayerId']").type(taxPayerId,{force: true});
        cy.get("input[formcontrolname='Name']").type(name,{force: true});
        cy.get("input[formcontrolname='Years']").type(years,{force: true});
        cy.get("input[formcontrolname='PhoneNumber']").type(phoneNumber,{force: true});
        cy.get("input[formcontrolname='Address']").type(address,{force: true});  
        cy.get("input[formcontrolname='City']").type(city,{force: true});
        cy.get("select[formcontrolname='Country']").select('Estados Unidos').should('have.value', 'US')
        cy.get("input[formcontrolname='Policy']").check();
        
        cy.get("select[formcontrolname='DocumentType']").select('ID Nacional').should('have.value', 'NI')
        cy.get("input[formcontrolname='Document']").type(document,{force: true});
        cy.get("input[formcontrolname='FirstName']").type(firstName,{force: true});
        cy.get("input[formcontrolname='LastName']").type(lastName,{force: true});
        cy.get("input[formcontrolname='Profile']").type(profile,{force: true});
        cy.get("input[formcontrolname='Position']").type(position,{force: true});
        
        //pulsar crear
        cy.get('button[type="submit"]').contains('Crear').trigger('mouseover')
        cy.wait(100);
        cy.get('button[type="submit"]').contains('Crear').click({force: true});    
        
        cy.wait(6000);
        cy.get('app-client-home');
        
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
        
        
        cy.visit('/project-client')
        cy.wait(3000) 
        //Search for Title
        utility.getMessage('Crear Proyecto', 'h2');
        
        let projectName= faker.commerce.productName()
        let day = faker.number.int({ min: 1, max: 30 })
        let month = faker.number.int({ min: 1, max: 12 })
        let year = faker.number.int({ min: 1, max: 2 })
        let active = faker.number.int({ min: 1, max: 2 })
        let details = faker.lorem.lines({ min: 2, max: 3 })
        
        cy.get("input[formcontrolname='ProjectName']").type(projectName,{force: true});
        cy.get("select[formcontrolname='Day']").select(day);
        cy.get("select[formcontrolname='Month']").select(month);
        cy.get("select[formcontrolname='Year']").select(year);
        cy.get("select[formcontrolname='Active']").select(active);
        cy.get("textarea[formcontrolname='Details']").type(details,{force: true});
         
        //pulsar crear
        cy.get('button[type="submit"]').contains('Crear').trigger('mouseover')
        cy.wait(1000);
        cy.get('button[type="submit"]').contains('Crear').click({force: true});    
        
        cy.wait(6000);
        cy.get('app-client-home');
        
          
        cy.visit('/project-profile');    
        cy.wait(3000); 
       
       //Search for Title
        utility.getMessage('Crear Perfil', 'h2');
       
        let profile_name = faker.person.jobType() + " " + faker.person.jobArea()
        let title = faker.person.jobTitle();
        let technology_select = faker.number.int({ min: 0, max: 6 })
        let role_select = faker.number.int({ min: 0, max: 5 })
        let category_select = faker.number.int({ min: 0, max: 2 })
        let description = faker.lorem.lines({ min: 2, max: 3 })
        
        cy.wait(5000); 
        //busca campos del formulario 
        cy.get("select[formcontrolname='project_id']").select(0);
        cy.get("input[formcontrolname='name']").type(profile_name,{force: true}); 
        cy.get("input[formcontrolname='title']").type(title,{force: true}); 
        cy.get("select[formcontrolname='technology']").select(technology_select);
        cy.get("select[formcontrolname='role']").select(role_select);
        cy.get("select[formcontrolname='category']").select(category_select);
        cy.get("textarea[formcontrolname='description']").type(description,{force: true}); 

        
        //pulsar crear
        cy.get('button[type="submit"]').contains('Aceptar').trigger('mouseover');
        cy.wait(200);
        cy.get('button[type="submit"]').contains('Aceptar').click({force: true});    
        
        cy.wait(4000);
        cy.get('app-client-home');
        
    
    });

});