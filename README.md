# Número Secreto - Curso Alura


Curso de JavaScript para Web com consumo da Web Speech API


## O jogo

Para jogar, basta ativar o microfone pelo browser assim que for solicitado

![image](https://user-images.githubusercontent.com/109925623/212203559-ebdee0be-ff97-4987-92fc-4b9825425508.png)


Após aceitar, basta começar a falar os números próximo ao microfone. Caso seja falado qualquer coisa que não seja um número válido, será dada mensagem de "Valor Inválido".

![image](https://user-images.githubusercontent.com/109925623/212203966-c51f3119-9052-4c32-a394-7e3ec3795f4e.png)


Se o número informado for menor que o número secreto, será dada a mensagem "O número secreto é maior" com uma seta para cima.

![image](https://user-images.githubusercontent.com/109925623/212202868-a939f479-20d5-4f1b-9a0e-9f32ce1a63b8.png)


Se o número informado for maior que o número secreto, será dada a mensagem "O número secreto é menor" com uma seta para baixo.

![image](https://user-images.githubusercontent.com/109925623/212203194-55e29eb6-95a3-4394-923e-fa3a63790b0f.png)


Se o número informado for o número secreto... Parabéns! Você acertou o número secreto!

![image](https://user-images.githubusercontent.com/109925623/212203401-772d3a13-9388-40a6-978e-99f60758c99f.png)


Caso queira jogar novamente, basta clicar no botão "Jogar novamente".


### O que eu aprendi


Neste curso pude aprender como consumir uma API de forma simples. Aprendi também a como manipular e acessar os dados que ela nos fornece, de modo que possamos utilizar a lógica necessária para criarmos o jogo de adivinhação.

Utilizando a API

``` javascript
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-Br'
    recognition.start()
```

Função para acessar a informação que queremos (voz)

``` javascript
    function onSpeak(e) {
        chute = e.results[0][0].transcript
        exibeChuteNaTela(chute)
        verificaChuteValido(chute)
    }
 ```
 
 Aprendi também a utilizar novos eventos com o addEventListener, como por exemplo:
 
 Result
 ``` javascript
    recognition.addEventListener('result', onSpeak)
 ```
 
 End
 ``` javascript
    recognition.addEventListener('end', () => recognition.start())
 ```
