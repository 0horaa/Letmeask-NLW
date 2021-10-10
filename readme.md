<h1 align="center">
	<img alt="Logo do Letmeask" title="Logo do Letmeask" src="./src/assets/logo.svg">
</h1>
<p align="center">
	<img src="./src/img/react-img.png">
</p>

<h1 align="center">Letmeask</h1>
<p align="center">Aplicação web desenvolvida em React com Create React App, durante uma edição da NLW realizada pela <a href="https://www.youtube.com/rocketseat">Rocketseat</a>. Contêm diversas funcionalidades e ferramentas que englobam o ecossistema React, ao mesmo tempo em que utiliza o Firebase como forma de realizar operações com bancos de dados.</p>
<h4>Projeto base finalizado 🚀</h4>
<hr>
<h3>Funcionalidades</h3>

- [x] Autenticação com conta Google.
- [x] Persistência de dados de autenticação.
- [x] Criação de salas com a conta Google.
- [x] Criação, leitura, atualização e exclusão de mensagens enviadas.
- [x] Comunicação em tempo real a partir do Firebase.
- [x] Listagem com filtros dos agendamentos feitos.
- [x] Possibilidade de dar like nas mensagens.
- [x] Possibilidade de marcar as mensagens como respondidas ou destacadas.
- [x] Página de admin para controles da sala.
- [ ] Responsividade.

<h2 align="center">Teste a aplicação hospedada na web</h2>
<p>A aplicação está hospedada e completamente funcional a partir do serviço de Hosting do Firebase, <a href="https://letmeask-aulas-9385a.web.app/">clique aqui</a> para acessar.</p>

<h2 align="center">Teste a aplicação instalando-a na sua máquina</h2>
<p>Primeiramente, você vai precisar ter o Node e o NPM instalados na sua máquina (<a href="https://nodejs.org/en/download/">você pode baixá-los aqui</a>) , assim como o Yarn. 

- Você pode instalar o <strong>yarn</strong> da seguinte forma: acesse o terminal do seu Sistema e execute o seguinte comando:

		npm install --global yarn
- Após isso você pode verificar se a instalação funcionou, executando
		
		yarn --version

Obs: um erro comum na instalação dessas ferramentas <strong>no Windows</strong> está relacionado à políticas de segurança do Windows Powershell. Caso enfrente esse erro, você pode ver formas de resolvê-lo <a href="https://pt.stackoverflow.com/questions/220078/o-que-significa-o-erro-execu%C3%A7%C3%A3o-de-scripts-foi-desabilitada-neste-sistema">aqui</a> 

<p>Após isso, acesse o terminal do seu sistema operacional, navegue até a pasta em que você quer testar a aplicação e dê o seguinte comando:</p>
		
	yarn create react-app letmeask --template typescript 

- O argumento "--template" define que o projeto será criado com TypeScript. Caso ele não fosse definido, o projeto seria criado com JavaScript.
- Então, espere até que o seu projeto seja criado, e então copie os arquivos desse repositório para dentro da pasta criada pelo Create React App, permitindo que os arquivos do repositório sobrescrevam os arquivos originais. 

- O projeto apresenta uma variada gama de bibliotecas e dependências, as quais você pode instalar usando o terminal. Todas são necessárias para o pleno funcionamento do app. Acesse a linha de comando de seu S.O, navegue até a pasta do Letmeask e instale as seguintes ferramentas:

		yarn add firebase
		yarn add node-sass@^5.0.0
		yarn add react-router-dom
		yarn add @types/react-router-dom -D
		yarn add classnames

- Lembre que você precisará criar um arquivo chamado "env.local" na raiz do seu projeto e então inserir as informações da sua conta do Firebase conforme o que é exemplificado no arquivo ".env.example", você pode ler mais sobre na <a>documentação</a>

- Após todo o processo de instalação, você pode executar o projeto via localhost utilizando o seguinte comando:

		yarn start

	Agora, apenas aguarde enquanto o Yarn abre a janela da aplicação para que você possa vê-la funcionando. 
	
<h2>🛠 Tecnologias</h2>

As ferramentas utilizadas para o desenvolvimento da aplicação foram:

- React com TypeScript
- SASS para estilização
- React Router Dom para roteamento
- Firebase como Back-end as a Service

### Autor
---

<a href="https://github.com/0horaa">
 <img style="border-radius: 50px" src="https://github.com/0horaa.png" width="110px;" height="100px" alt=""/>
 <br />
 <sub><b>Sérgio Gabriel</b></sub></a> 🚀<br>
<a href="https://twitter.com/0hora_">Twitter</a><br>