

var dialogo ={
    primeiro: '{{}"intent": "intent.appv-customer-retention.handover"{}}',
    segundo:'Falar com atendente',
    terceiro:'cancelamento'
}

   
//cts
Given(/^que o cliente é identificado com segmento "([^"]*)" está na Aura$/, (segmento) => {
	switch (segmento) {
        case "Platinum ":
            cy.visit('https:svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=d8e54df5-94a8-4012-bb6b-95f07f86351d&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
    
            case "sem segmento":
                cy.visit('')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click() 
        default:
            break;
    }	
    });
    
    
        

    Then(/^é direcionado para Handover da retenção$/, (segmento) => {
        switch (segmento) {
            case "Platinum":   
                cy.wait(2000)
                cy.screenshot('evidencia2',{overwrite:true})
                cy.get('#__next > div > form > input').type(dialogo.segundo)
                cy.get('#__next > div > form > button > svg').click()
        
                 cy.wait(2000)
                 cy.screenshot('evidencia4',{overwrite:true})
                    break;
            case "V":
                cy.wait(2000)
                cy.screenshot('evidencia2',{overwrite:true})
                cy.get('#__next > div > form > input').type(dialogo.segundo)
                cy.get('#__next > div > form > button > svg').click()
        
                cy.wait(2000)
                cy.screenshot('evidencia4',{overwrite:true})
                case"Gold":
                cy.screenshot('evidencia2',{overwrite:true})
                cy.get('#__next > div > form > input').type(dialogo.segundo)
                cy.get('#__next > div > form > button > svg').click()
        
                cy.wait(2000)
                cy.screenshot('evidencia4',{overwrite:true})
                default:
                    break;
            }
        }); 



    //ct3

    
Given(/^que o cliente  é identificado com  segmento "([^"]*)" está na Aura$/, (segmento) => {
	switch (segmento) {
        case "Platinum ":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=c5046142-4710-4684-b4b2-f24b26a18901&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
    
            case "sem segmento":
                cy.visit('')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click() 
        default:
            break;
    }	
	
});


Then(/^é direcionado para Handover da retenção$/, (segmento) => {
    switch (segmento) {
        case "Platinum":   
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
    
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
    
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
    
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            default:
                break;
        }
});
//ct4
Given(/^que o cliente  é identificado com  segmento "([^"]*)" está na Aura$/, (args1) => {
	switch (segmento) {
        case "Platinum ":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=c5046142-4710-4684-b4b2-f24b26a18901&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
    
            case "sem segmento":
                cy.visit('')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click() 
        default:
            break;
    }	
	
});


When(/^não pode ir pra Handover$/, () => {
	return true;
});

Then(/^é direcionado com uma mensagem para atendimento site telefone$/, () => {
	return true;
});


    //ct5
    
Given(/^que o cliente é identificado com o segmento "([^"]*)"$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=c5046142-4710-4684-b4b2-f24b26a18901&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
    
            case "sem segmento":
                cy.visit('')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click() 
        default:
            break;
    }	

});

When(/^não tem ilha para esse segmento$/, () => {
    cy.wait(4000)
	cy.get('#__next > div > form > input').type(dialogo.primeiro)
    cy.get('#__next > div > form > button > svg').click()
    cy.wait(10000)
  //  cy.contains('Olá! Eu sou a Aura')
});


Then(/^recebi uma mensagem HO_cancelamento_msg1$/, () => {
	//cy.contains('Olá! Eu sou a Aura, a inteligência artificial da Vivo.')
return true;
});


//
When(/^não está dentro do horário da ilha$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()   
  //  cy.get('#answerContainer > div > span.mistica-10-26-0_0_answerText-0-3-16 > p').should('have.text', 'Olá! Eu sou a Aura, a inteligência artificial . Como posso te ajudar? É só digitar em poucas palavras o que precisa.')

            break;
        case"V":
            cy.wait(2000)
            cy.screenshot('evidencia',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()   
  //  cy.get('#answerContainer > div > span.mistica-10-26-0_0_answerText-0-3-16 > p').should('have.text', 'Olá! Eu sou a Aura, a inteligência artificial . Como posso te ajudar? É só digitar em poucas palavras o que precisa.')

            break;
    }
});


When(/^não tem ilha para esse segmento$/, (segmento) => {
    switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()   
      //  cy.get('#answerContainer > div > span.mistica-10-26-0_0_answerText-0-3-16 > p').should('have.text', 'Olá! Eu sou a Aura, a inteligência artificial . Como posso te ajudar? É só digitar em poucas palavras o que precisa.')

                break;
        case"V":
            cy.wait(2000)
            cy.screenshot('evidencia',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()   
      //  cy.get('#answerContainer > div > span.mistica-10-26-0_0_answerText-0-3-16 > p').should('have.text', 'Olá! Eu sou a Aura, a inteligência artificial . Como posso te ajudar? É só digitar em poucas palavras o que precisa.')

                break;
        
            default:
                break;
        }
    });
    
Then(/^recebi uma mensagem$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }

});
//ct6

Given(/^que o cliente é identificado com o segmento "([^"]*)"$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=c5046142-4710-4684-b4b2-f24b26a18901&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            default:
            break;
    }
});

When(/^não tem ilha para esse segmento$/, () => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
         //   cy.get('#__next > div > form > button > svg').click()   
      //  cy.get('#answerContainer > div > span.mistica-10-26-0_0_answerText-0-3-16 > p').should('have.text', 'Olá! Eu sou a Aura, a inteligência artificial . Como posso te ajudar? É só digitar em poucas palavras o que precisa.')

                break;
        case"V":
            cy.wait(2000)
            cy.screenshot('evidencia',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()   
      //  cy.get('#answerContainer > div > span.mistica-10-26-0_0_answerText-0-3-16 > p').should('have.text', 'Olá! Eu sou a Aura, a inteligência artificial . Como posso te ajudar? É só digitar em poucas palavras o que precisa.')

               
                break;

        case "Gold":
            cy.wait(2000)
            cy.screenshot('evidencia',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()   
           // cy.get('#answerContainer > div > span.mistica-10-26-0_0_answerText-0-3-16 > p').should('have.text', 'Olá! Eu sou a Aura, a inteligência artificial . Como posso te ajudar? É só digitar em poucas palavras o que precisa.') 
                break;
                
            default:
                break;
        }
});

Then(/^recebi uma mensagem HO_cancelamento_msg1$/, () => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});
//ct7

Given(/^que o cliente é identificado com o segmento "([^"]*)"$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            default:
            break;
    }
	
});

When(/^está na ilha de segmento$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

When(/^não está dentro do horário da ilha$/, (segemnto) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});


Then(/^recebi uma mensagem HO_cancelamento_msg2$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});
//ct8

Given(/^que o cliente é identificado com o segmento "([^"]*)"$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            default:
            break;
    }
	
});

When(/^está na ilha de segmento$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

When(/^não está dentro do horário da ilha$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(8000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

Then(/^recebi uma mensagem HO_cancelamento_msg2$/, () => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(1000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});
//ct09

Given(/^que o cliente é identificado com o segmento "([^"]*)"$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            default:
            break;
    }
});

When(/^está dentro da ilha de segmento$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

When(/^está dentro do horário da ilha$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

Then(/^recebi uma mensagem HO_cancelamento_msg3$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(1000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});
//ct10

Given(/^que o cliente é identificado com o segmento "([^"]*)"$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            default:
            break;
    }

});

When(/^está dentro da ilha de segmento$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

When(/^está dentro do horário da ilha$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(10000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});


Then(/^recebi uma mensagem HO_cancelamento_msg3$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(1000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});


//ct11

Given(/^que o cliente é identificado com o segmento "([^"]*)"$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            default:
            break;
    }

});

When(/^não tem ilha de atendimento$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

Then(/^recebi uma mensagem HO_cancelamento_msg4$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(1000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});
//ct12

Given(/^que o cliente é identificado com o segmento "([^"]*)"$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            default:
            break;
    }
});

When(/^não tem ilha de atendimento$/, (segmento) => {
switch (segmento) {
    case "Platinum":
        cy.wait(2000)
        cy.screenshot('evidencia2',{overwrite:true})
        cy.get('#__next > div > form > input').type(dialogo.primeiro)
        cy.get('#__next > div > form > button > svg').click()

         cy.wait(2000)
         cy.screenshot('evidencia4',{overwrite:true})
            break;
    case "V":
        cy.wait(2000)
        cy.screenshot('evidencia2',{overwrite:true})
        cy.get('#__next > div > form > input').type(dialogo.primeiro)
        cy.get('#__next > div > form > button > svg').click()

        cy.wait(2000)
        cy.screenshot('evidencia4',{overwrite:true})
        case"Gold":
        cy.screenshot('evidencia2',{overwrite:true})
        cy.get('#__next > div > form > input').type(dialogo.primeiro)
        cy.get('#__next > div > form > button > svg').click()

        cy.wait(2000)
        cy.screenshot('evidencia4',{overwrite:true})
        break;

    default:
        break;
}
});
When(/^não está dentro do horário da ilha$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

Then(/^recebi uma mensagem HO_cancelamento_msg5$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(1000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});
//ct13

Given(/^que o cliente é identificado com o segmento "([^"]*)"$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            default:
            break;
    }
	
});

When(/^não tem ilha de atendimento$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

When(/^está dentro do horário da ilha$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

Then(/^recebi uma mensagem HO_cancelamento_msg6$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(1000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(10000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});
//ct14

Given(/^que o cliente não é identificado$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            case "sem segmento":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            default:
            break;
    }
});

When(/^não tem ilha de atendimento$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            case"sem segmento":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

Then(/^recebi a mensagem HO_cancelamneto_msg7$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(1000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
            case"sem segmento":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
        default:
            break;
    }
});
//ct15

Given(/^que o cliente não é identificado "([^"]*)"$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            case "sem segmento":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            default:
            break;
    }
});

When(/^não tem ilha de atendimento$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            case"sem segmento":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

When(/^está fora do horário de atendimento da ilha$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            case"sem segmento":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

Then(/^recebi a mensagem HO_cancelamento_msg8$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(1000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
            case"sem segmento":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
        default:
            break;
    }
});
//ct16

Given(/^que o cliente não é identificado "([^"]*)"$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
            cy.get('#header > h1').should('have.text','AURA')
            cy.get('#__next > div > form > input').click()
            
            break;
            case "V":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()
                break;
            case "Gold":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            case "sem segmento":
                cy.visit('https://svc-br-pre.auracognitive.com/aura-services/v1/aura-widget/web?locale=pt-BR&skin=vivo&auraId=0a763324-bb56-4759-9feb-137c4bbb3613&conversationId=&channelId=06320f84-a9a6-4112-bdb8-7bc5bc8e1f91&token=&apiKey=bbc71501a7228fe7c1cd6c7e72183a88f1e4333964b5aa60ab06ddc12bad29321dbed291cdc4e15cd2bc2d31fd807a65c62b10db6a22bc247e168799721ee34d77c057b58f4862b8aca9e06009f58fc7a697fddf9296b2f452c92fb2bc9270a8cdd95682e56c837cfff24a6ec7112449aebb0515674e6563f912f9d9e355102f3a32f0e6a397067e868c0854af20037fecc47afa71f95f0e1c84e340b8ade55c75c79cfbff398f8428fd1185ce72521eefd290b8c3091e53221a8b9275869d31445a725b66e84e0cbff0eb292c7b66b1')
                cy.get('#header > h1').should('have.text','AURA')
                cy.get('#__next > div > form > input').click()  
            break;
            default:
            break;
    }
});

When(/^não tem ilha de atendimento$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            case"sem segmento":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

When(/^está dentro do horário de atendimento da ilha$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
    
            case"sem segmento":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.primeiro)
            cy.get('#__next > div > form > button > svg').click()
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
        default:
            break;
    }
});

Then(/^recebi a mensagem HO_cancelamento_msg9$/, (segmento) => {
	switch (segmento) {
        case "Platinum":
            cy.wait(2000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
             cy.wait(2000)
             cy.screenshot('evidencia4',{overwrite:true})
                break;
        case "V":
            cy.wait(1000)
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            case"Gold":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
    
            case"sem segmento":
            cy.screenshot('evidencia2',{overwrite:true})
            cy.get('#__next > div > form > input').type(dialogo.segundo)
            cy.get('#__next > div > form > button > svg').click()
	
            cy.wait(2000)
            cy.screenshot('evidencia4',{overwrite:true})
            break;
        default:
            break;
    }
});




