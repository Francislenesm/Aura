it('Perfil 1 quiz', () => {
    cy.visit ('https://svc-br-est.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=80f3e047-d64a-4f89-9dfc-bc14de24570d&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
   // cy.get('#header > h1').should('have.text','AURA')
    cy.get('#__next > div > form > input').click()
    cy.wait(2000)
    cy.get('.sc-b5ca8333-1').type('{{}"intent": "intent.quiz.appv"{}}')
    cy.get('.sc-3c1d364e-0').click()
    cy.wait(2000)
    cy.get('.sc-55175632-0 > :nth-child(1)').click()
    cy.wait(5000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(4) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(2) > .sc-67a05167-1').click()
    cy.wait(3000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(7) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(3)').click()
    cy.wait(3000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(10) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(2)').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(13) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(4)').click()
    cy.wait(3000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(16) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(4)').click()
    cy.wait(3000)
    cy.screenshot({ overwrite:false })
    
});

it('Perfil 2 quiz', () => {
    cy.visit ('https://svc-br-est.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=${auraId}&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
   // cy.get('#header > h1').should('have.text','AURA')
    cy.get('#__next > div > form > input').click()
    cy.wait(2000)
    cy.get('.sc-b5ca8333-1').type('{{}"intent": "intent.quiz.appv"{}}')
    cy.get('.sc-3c1d364e-0').click()
    cy.wait(2000)
    cy.get(':nth-child(1) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(3) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(7) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(1) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(10) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(2) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(13) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(4) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(16) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(4) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    
});

it('Perfil 3 quiz ', () => {
    cy.visit ('https://svc-br-est.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=${auraId}&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
  //  cy.get('#header > h1').should('have.text','AURA')
    cy.get('#__next > div > form > input').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get('.sc-b5ca8333-1').type('{{}"intent": "intent.quiz.appv"{}}')
    cy.get('.sc-3c1d364e-0').click()
    cy.wait(2000)
    cy.get(':nth-child(1) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(4) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(1) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(7) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(3) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(10) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(3) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(10) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(3) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(10) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(3) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(19) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(3) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
    cy.get(':nth-child(22) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(3) > .sc-67a05167-1').click()
    cy.wait(2000)
    cy.screenshot({ overwrite:false })
});

it('Perfil 4 quiz', () => {
       cy.visit ('https://svc-br-est.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=${auraId}&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
    //   cy.get('#header > h1').should('have.text','AURA')
       cy.get('#__next > div > form > input').click()
       cy.wait(2000)
       cy.screenshot({ overwrite:false })
       cy.get('.sc-b5ca8333-1').type('{{}"intent": "intent.quiz.appv"{}}')
       cy.get('.sc-3c1d364e-0').click()
       cy.wait(2000)
       cy.get(':nth-child(1) > .sc-67a05167-1').click()
       cy.wait(2000)
       cy.screenshot({ overwrite:false })
       cy.get(':nth-child(4) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(1) > .sc-67a05167-1').click()
       cy.wait(2000)
       cy.screenshot({ overwrite:false })
       cy.get(':nth-child(7) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(4) > .sc-67a05167-1').click()
       cy.wait(2000)
       cy.screenshot({ overwrite:false })
       cy.get(':nth-child(10) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(1) > .sc-67a05167-1').click()
       cy.wait(2000)
       cy.screenshot({ overwrite:false })
       cy.get(':nth-child(13) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(4) > .sc-67a05167-1').click()
       cy.wait(2000)
       cy.screenshot({ overwrite:false })
       cy.get(':nth-child(16) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(2) > .sc-67a05167-1').click()
       cy.wait(2000)
       cy.screenshot({ overwrite:false })
       cy.get(':nth-child(16) > .sc-fe2a337d-0 > :nth-child(2) > #attachmentsContainer > .sc-55175632-0 > :nth-child(4) > .sc-67a05167-1').click()
       cy.wait(2000)
       cy.screenshot({ overwrite:false })
    });