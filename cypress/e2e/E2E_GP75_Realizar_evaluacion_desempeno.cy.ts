import { faker } from '@faker-js/faker';
import { Utilities } from "./utilities/utilities"


describe('Buscar Candidato', () => {

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
        let taxPayerId = faker.string.numeric({ length: 10, exclude: ['0'] })
        let name = faker.company.name();
        let years = faker.number.int({ min: 1, max: 100 })
        let phoneNumber = faker.random.numeric(10);
        let address = faker.location.streetAddress({ useFullAddress: true })
        let city = faker.location.city();
       
        let document = faker.string.numeric({ length: 9, exclude: ['0'] })
        let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();
        let profile =faker.person.jobType();
        let position = faker.person.jobTitle();

        //busca campos del formulario 
        cy.get("input[formcontrolname='Username']").type(username,{force: true});
        cy.get("input[formcontrolname='Password']").type(password,{force: true});
        cy.get("input[formcontrolname='TaxPayerId']").type(taxPayerId,{force: true});
        cy.get("input[formcontrolname='Name']").type(name,{force: true});
        cy.get("input[formcontrolname='Years']").type(years.toString(),{force: true});
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
        
        cy.wait(3000);
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
        cy.wait(3000);
        cy.get('app-client-home'); 
        
        
        //Proyectos
        
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
        
        cy.wait(3000);
        cy.get('app-client-home');
        
        
        
        
        
        //Perfiles
          
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
        
        cy.wait(3000); 
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
        
        cy.wait(3000);
        cy.get('app-client-home');
        
        cy.visit('/search-candidate');    
        cy.wait(3000);
         utility.getMessage('Buscar Candidatos', 'h2');
         
        let role_filter = faker.number.int({ min: 1, max: 2 })
        let year_role_filter = faker.number.int({ min: 1, max: 20 })
        let role_info = role_name2
        let title_filter = faker.number.int({ min: 1, max: 3 })
        let year_title_filter = faker.number.int({ min: 1, max: 20 })
        let title_info = ""
        
         cy.get("select[formcontrolname='Project']").select(1);
         cy.wait(3000);
         cy.get("select[formcontrolname='Profile']").select(1);
         cy.get("select[formcontrolname='RoleFilter']").select(role_filter);
         cy.get("input[formcontrolname='Role']").type(role_info ,{force: true});
         
         
         cy.get("input[formcontrolname='RoleYears']").type(experience_years2.toString() ,{force: true});
         cy.get("select[formcontrolname='TitleFilter']").select(title_filter);
         cy.get('button[type="submit"]').contains('Buscar').click({force: true});
         
         cy.wait(3000);
         
        cy.get("th").contains("Nombres");
        cy.get("th").contains("Puntaje");
        cy.get("th").contains("Puntaje");
        cy.get('button[type="button"]').contains("Y").click({force: true});

        
        cy.wait(3000);
        
        cy.get('app-client-search');
        
        //Crear una evaluacion
        cy.visit('/client-evaluation-create');
        cy.wait(3000);
        utility.getMessage('Crear Evaluación de Desempeño', 'h2');
        
        
        let score = faker.number.int({ min: 1, max: 10 })
        let evaluation_description = faker.lorem.lines({ min: 2, max: 3 })
        
        cy.get("select[formcontrolname='Project']").select(1);
        cy.wait(3000);
        cy.get("select[formcontrolname='Member']").select(1);
        cy.get("select[formcontrolname='Score']").select(score);
        cy.get("textarea[formcontrolname='Details']").type(evaluation_description ,{force: true}); 
        cy.get('button[type="submit"]').contains('Crear').click({force: true});
        
        cy.wait(4000);
        cy.get('app-client-home');
        
    });

     
});