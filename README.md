# Clone do Spotify em JS
Projeto criado durante a sexta semana JS Expert do Erick Wendel.
O projeto mais dificil para entrar na minha cabeça até agora!
Não coloquei os dois áudios do desafio pois como eu disse, o projeto queimou meus neurônios!

Para ver o projeto no Heroku você precisa abrir 2 abas:
- https://jb-spotify-stream.herokuapp.com/home

- https://jb-spotify-stream.herokuapp.com/controller

No controller você precisa iniciar a stream, aí sim dar play e brincar.

![image](https://user-images.githubusercontent.com/73846881/159184121-9d728ba8-2caa-4734-a81f-91ce56ba46e2.png)

![image](https://user-images.githubusercontent.com/73846881/159184132-f33fa545-0331-4af8-8053-380a170cb9e5.png)


## Abrindo o projeto
Para rodar este projeto você precisa ter o node na versão 17.0.1, git e o npm.
```bash
npm install -g npm
```
[Download nodejs latest version](https://nodejs.org/en/)
Agora é só clonar usando este comando:
```git
git clone https://github.com/Jbnado/cloneSpotifyJS.git
```
Após clonar entre na pasta e dê um npm ci --silent:
```bash
 cd .\cloneSpotifyJS\
 npm ci --silent
```
Para poder navergar usando o vsCode e em seguida rodar o projeto em sua localhost use estes comandos:
```bash
code .
npm run live-reload
```
Só abrir sua http://localhost:3000 e curtir o projeto!

## Goals

- Web API
    - [X] Deve atingir 100% de cobertura de código em testes.
    - [X] Deve ter testes de integração validando todas as rotas da API.
    - [X] Deve entregar arquivos estáticos como Node.js Stream.
    - [X] Deve entregar arquivos de música como Node.js Stream.
    - [X] Dado um usuário desconectado não deve quebrar a API.
    - [X] Mesmo que vários comandos sejam disparados ao mesmo tempo não deve quebrar a API.
    - [X] Caso ocorra um erro inesperado a API deve continuar funcionando.
    - [X] O projeto precisa ter portabilidade entre ambientes como Linux, Mac e Windows.

- Web APP
    - Client
        - [X] Deve reproduzir a transmissão.
        - [X] Não deve pausar se algum efeito for adicionado.
    - Controller
        - [X] Deve atingir 100 % de cobertura de codigo em testes.
        - [X] Deve poder iniciar ou parar uma transmissão.
        - [X] Deve enviar comandos para adicionar áudio e efeitos à uma transmissão.

### Server
Esta pasta (server) contém nosso server, nossa API. Ela estará em node já a pasta public que é nosso front terá o js do browser. Por isso no jest.config.mjs temos duas configurações distintas.

#### Project Architecture
- Service conterá tudo que é regra de negócio ou processamento.
- Controller intermediará a camada de apresentação e a camada de negócio.
- Routes é a nossa camada de apresentação.
- Server será responsável por criar o servidor mas não de instanciá-lo.
- Index será responsável para instanciar nosso servidor e o expor para a WEB.
- Config conterá tudo que é sensível e estático do projeto.
