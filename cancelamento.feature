Feature:Retenção

Scenario: Ct01-Cliente Platinum direcionado para Handover
Given que o cliente é identificado com segmento "Platinum" está na Aura
When clica na opção cancelamento
Then é direcionado para Handover da retenção

Scenario: Ct04-Cliente Platinum dentro da ilha e dentro do Horário da ilha 
Given que o cliente é identificado com o segmento "Platinum"
When está dentro da ilha de segmento 
When está dentro do horário da ilha 
Then recebi uma mensagem HO_cancelamento_msg3

 Scenario: Ct02-Cliente Platinum sem ilha para o segmento
Given que o cliente é identificado com o segmento "Platinum"
When não tem ilha para esse segmento
Then recebi uma mensagem HO_cancelamento_msg1

Scenario: Ct03-Cliente Platinum dentro da ilha de segmento e fora do horário da ilha
Given que o cliente é identificado com o segmento "Platinum"
When está na ilha de segmento
When não está dentro do horário da ilha 
Then recebi uma mensagem HO_cancelamento_msg2

Scenario: Ct04-Cliente Platinum dentro da ilha e dentro do Horário da ilha 
Given que o cliente é identificado com o segmento "Platinum"
When está dentro da ilha de segmento 
When está dentro do horário da ilha 
Then recebi uma mensagem HO_cancelamento_msg3

Scenario: Ct05-Cliente V direcionado para Handover
Given que o cliente  é identificado com  segmento "V" está na Aura
When clica na opção cancelamento
Then é direcionado para Handover da retenção

Scenario: Ct06-Cliente V sem ilha para o segmento
Given que o cliente é identificado com o segmento "V"
When não tem ilha para esse segmento
Then recebi uma mensagem HO_cancelamento_msg1

Scenario: Ct07-Cliente V dentro da ilha de segmento e fora do horário da ilha
Given que o cliente é identificado com o segmento "V"
When está na ilha de segmento
When não está dentro do horário da ilha 
Then recebi uma mensagem HO_cancelamento_msg2

Scenario: Ct08-Cliente V dentro da ilha e dentro do Horário da ilha 
Given que o cliente é identificado com o segmento "V"
When está dentro da ilha de segmento 
When está dentro do horário da ilha 
Then recebi uma mensagem HO_cancelamento_msg3

Scenario: Ct09-Cliente Gold clica no botão
Given que o cliente  é identificado com  segmento "Gold" está na Aura
When clica na opção cancelamento
And  não pode ir pra Handover	
Then é direcionado com uma mensagem para atendimento site telefone

Scenario: Ct10-Cliente Gold sem ilha de atendimento
Given que o cliente é identificado com o segmento "Gold"
When não tem ilha de atendimento
Then recebi uma mensagem HO_cancelamento_msg4

Scenario: Ct11-Gold sem ilha e fora do horário da ilha 
Given que o cliente é identificado com o segmento "Gold"
When não tem ilha de atendimento 
When não está dentro do horário da ilha 
Then recebi uma mensagem HO_cancelamento_msg5

Scenario: Ct12-Cliente Gold sem ilha de atendimento e dentro do horário da ilha 
Given que o cliente é identificado com o segmento "Gold"
When não tem ilha de atendimento
When está dentro do horário da ilha 
Then recebi uma mensagem HO_cancelamento_msg6

Scenario: Ct13-Cliente sem segmento
Given que o cliente não é identificado "sem segmento"
When não tem ilha de atendimento
Then recebi a mensagem HO_cancelamneto_msg7

Scenario: Ct14-Cliente sem segmento e fora do horário ilha 
Given que o cliente não é identificado "sem segemento"
When não tem ilha de atendimento
When está fora do horário de atendimento da ilha 
Then recebi a mensagem HO_cancelamento_msg8

Scenario: Ct15- Cliente sem segmento e dentro do horário ilha 
Given que o cliente não é identificado "sem segmento"
When não tem ilha de atendimento
When está dentro do horário de atendimento da ilha 
Then recebi a mensagem HO_cancelamento_msg9


