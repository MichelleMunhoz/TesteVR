Feature: Validar as informacoes de onde posso utilizar meu cartao beneficio

    Scenario: Visualizar o mapa do google na opcao "Onde usar meu cartao VR"
        Given que eu acesse o site 
        When clicar em Pra voce 
        And em seguida, Onde usar o meu cartao VR
        Then devo visualizar o mapa do google com as localidades aceitas

