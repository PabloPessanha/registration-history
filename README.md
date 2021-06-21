# Desafio frontend

## Proposta e organização
O desafio consiste em criar duas páginas, a primeira é para realização de cadastros/login, na qual é realizada checagem para verificar de validação no sistema, e se os inputs estão preenchidos de forma correta. Os inputs são:
- Nome completo;
- CPF;
- Telefone;
- Email;

E a segunda tela conterá um header, um footer e todos os registros realizados na máquina(armazenado no `localstorage`), na qual o usuário só pode deletar seu próprio registro.

Caso tente acessar a página de resgistro sem ter feito login/cadastro, a página exibirá uma mensagem negando o acesso, e dando a possibilidade para retornar a página de cadastro.

Também foi incluido outras páginas extras, tais como a de login e página não encontrada, caso tente acessar uma URL que não existe.

- #### Página de cadastro:
  - [x] O botão só ativa quando todos os campos estão preenchidos corretamente, e então, altera a cor;
  - [x] Os campos **CPF** e **Telefone** são formatados com base na quantidade digitada;
  - [x] Não permite o uso de **Email** duplicado;
  - [x] Não permite o uso de **CPF** duplicado;
  - [x] Redireciona para página `users` quando é clicado no botão;
  - [x] Redireciona para página `login` quando é clicado no link;

- #### Página de login:
  - [x] O botão só ativa quando todos os campos estão preenchidos corretamente, e então, altera a cor;
  - [x] O campo **CPF** é formatados com base na quantidade digitada;
  - [x] Não permite o login se **Email** já não estiver cadastrado;
  - [x] Não permite o login se o **CPF** não for condizente com o **Email** registrado;
  - [x] Redireciona para página `users` quando é clicado no botão;
  - [x] Redireciona para página `/` quando é clicado no link;
- #### Página de usuários:
  - [x] A página possui um header, com um link na logo da empresa, o usuário que está logado e um botão sair;
  - [x] A página possui um footer, com um link para o meu GitHub;
  - [x] A página renderiza um card para todos os usuários já cadastrados no site;
  - [x] Cada card possui as informações dos usuários em si;
  - [x] O card do usuário logado em questão tem a opção de ser detelado, que, ao clicado, é deletado permanentemente da lista;

#

## Como posso testar aplicação?
Tomei a liberdade de fazer o deploy da aplicação no Heroku, [está disponivel aqui](https://pablo-challenge-lean.herokuapp.com/)

*A aplicação demora cerca de 30 segundos pra abrir quando ninguém acessa por 30min, então aguarde um pouco.*

Entretanto, caso prefira, existem 2 maneiras de rodar em sua máquina local.
- Primeiro, clone o repositório aqui do git, utilizado o link fornecido no botão `code`;
- Após clonado, entre na pasta raiz e siga os próximos passos:

### **Com docker:**

1. Execute o seguinte comando e aguarde terminar a instalação:
  
```
$ docker build -t regs-app .
```

2. Após finalizado a instalação, execute este comando:
  
```
$ docker run -d -p 8345:3000 --name new-regs-app regs-app
```

3. Agora, abra no seu navegador a seguinte URL:

```
localhost:8345
```

### **Com node:**
1. Execute o seguinte comando e aguarde terminar a instalação:

```
$ npm install
```

2. Após finalizado a instalação, execute este comando:

```
$ npm start
```

**OBS:** quando terminar de testar a aplicação, aperte `CTRL + C` no terminal para finalizar o processo.

#

## O que foi utilizado durante o desenvolvimento?
- React;
- React router dom;
- SCSS;
- Testes unitários com RTL;
- TDD;
- Deploy na plataforma **Heroku**;