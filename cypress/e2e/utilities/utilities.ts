import { faker } from '@faker-js/faker';

export class Utilities {

    goHome()
    {
        cy.visit('/')
        cy.contains('ABC Jobs')
        cy.wait(2000)
    }

    getMessage(error, selector)
    {
            var errorExists=0; var element2='';
            cy.get(selector).then(($elements)=>{
                for(var i=0;i < $elements.length; i++)
                {
                    element2 = $elements[i].innerText;
                    console.log(`Texto del selector ${element2} ---error ${error}`);
                    //await this.driver.writeSignal(page);
                    if(element2.toString().trim() === error.toString().trim())
                    {
                        console.log("Encontrado");
                        errorExists=1;
                        i=$elements.length
                        //expect(element2).to.equal(error)
                        //return true;
                        
                    }
                }
                console.log(`Valor de Error ${errorExists}`)
                if(!errorExists)
                    expect(element2).to.equal(false);
                else
                    expect(element2).to.equal(element2)
            }) ;
    }
    pushElementFromElements(selector, index)
    {
        cy.get(selector).then(($elements)=>{
                 $elements[index].click({force: true});
          });
    }
    showCreateCandidate()
    {
        //search for Candidate menu
        cy.get('button[type="button"]').contains('Candidato').click({force: true});
        cy.wait(200)
        cy.url().should('include', 'login-candidate');
        cy.get('a[href="/basic-candidate"]').click({force: true});
        cy.wait(1000)
        //Verify URL
        cy.url().should('include', 'basic-candidate');
    }
    showCreateCompany()
    {
        //search for Company menu
        cy.get('button[type="button"]').contains('Cliente').click({force: true});
        cy.wait(200)
        cy.url().should('include', 'login-client');
        cy.get('a[href="/basic-client"]').click({force: true});
        cy.wait(1000)
        //Verify URL
        cy.url().should('include', 'basic-client');
    }
   
}