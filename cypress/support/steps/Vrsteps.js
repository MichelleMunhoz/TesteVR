/* global Given, Then, When */

Given(/^que eu acesse o site$/, () => {
    //Solicito a visita do teste no seguinte site: https://www.vr.com.br
	cy.visit('https://www.vr.com.br')
     //Identifiquei um elemento na tela, para garantir que a aplicação realmente abriu com sucesso
    cy.get('small').should('have.text', 'Aproveite agora as mudanças da Lei do PAT e tenha mais vantagens para seus funcionários.')
    //Inspecionei o elemento para aceitar os cookies e solicitei o metodo clicar
    cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click()
});

When(/^clicar em Pra voce$/, () => {
    //Inspecionei o elemento "Pra você" e solicitei o metodo clicar
    cy.get(':nth-child(3) > .vr-quick-navigation__link').click()
});

And(/^em seguida, Onde usar o meu cartao VR$/, () => {
    //Inspecionei o elemento "Onde usar meu cartão VR?" e solicitei o metodo clicar
    cy.get('.vr-hero__actions > .vr-button--negative').click()
});

Then(/^devo visualizar o mapa do google com as localidades aceitas$/, () => {
    //Inspecionei o elemento "Digite o nome ou endereço de um lugar" e solicitei o metodo digitar
	cy.get('#endereco').type('Osasco, SP, Brasil')
    //Cliquei em cima da primeira opção de busca que disponibiliza ao fazer a digitação da cidade
    cy.get('[data-place-id="ChIJB_KeWwj_zpQRTkyCTH3iIQ8"]').click()
    //Inspecionei o elemento "Buscar" e solicitei o metodo clicar
    cy.get('.form-search-estab > :nth-child(3)').click()
});


