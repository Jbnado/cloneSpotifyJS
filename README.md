# Clone do Spotify em JS
Projeto criado durante a sexta semana JS Expert do Erick Wendel.

<img src="./print/demo.png" />

## Abrindo o projeto
Para rodar este projeto você precisa ter o node na versão 17.0.1, git e o npm.
Agora é só clonar usando este comando:
```git
git clone https://github.com/Jbnado/cloneSpotifyJS.git
```
Após clonar entre na pasta e dê um npm install:
```bash
 cd .\cloneSpotifyJS\
 npm i
```
Para poder navergar usando o vsCode e em seguida rodar o projeto em sua localhost use estes comandos:
```bash
code .
npm run live-reload
```
Só abrir sua http://localhost:3000 e curtir o projeto!

## Sobre a estrutura de pastas

- Web API
    - [] Deve atingir 100% de cobertura de código em testes.
    - [] Deve ter testes de integração validando todas as rotas da API.
    - [] Deve entregar arquivos estáticos como Node.js Stream.
    - [] Deve entregar arquivos de música como Node.js Stream.
    - [] Dado um usuário desconectado não deve quebrar a API.
    - [] Mesmo que vários comandos sejam disparados ao mesmo tempo não deve quebrar a API.
    - [] Caso ocorra um erro inesperado a API deve continuar funcionando.
    - [] O projeto precisa ter portabilidade entre ambientes como Linux, Mac e Windows.

- Web APP
    - Client
        - [] Deve reproduzir a transmissão.
        - [] Não deve pausar se algum efeito for adicionado.
    - Controller
        - [] Deve atingir 100 % de cobertura de codigo em testes.
        - [] Deve poder iniciar ou parar uma transmissão.
        - [] Deve enviar comandos para adicionar áudio e efeitos à uma transmissão.

### Server
Esta pasta (server) contém nosso server, nossa API. Ela estará em node já a pasta public que é nosso front terá o js do browser. Por isso no jest.config.mjs temos duas configurações distintas.

#### Arquitetura
- Service conterá tudo que é regra de negócio ou processamento.
- Controller intermediará a camada de apresentação e a camada de negócio.
- Routes é a nossa camada de apresentação.
- Server será responsável por criar o servidor mas não de instanciá-lo.
- Index será responsável para instanciar nosso servidor e o expor para a WEB.
- Config conterá tudo que é sensível e estático do projeto.

#### Testes
Para que eu pudesse rodar os testes no windows precisei instalar globalmente o win-node-env 
```bash
npm install -g win-node-env
```