# Desafio frontend

## Proposta e organização
O desafio consiste em criar duas páginas, a primeira é para realização de cadastros/login, na qual é realizada checagem para verificar de validação no sistema, e se os inputs estão preenchidos de forma correta. Os inputs são:
- Nome completo;
- CPF;
- Telefone;
- Email;

E a segunda tela conterá um header, um footer e todos os registros realizados na máquina(armazenado no `localstorage`), na qual o usúario só pode deletar seu próprio registro.

Caso tente acessar a página de resgistro sem ter feito login/cadastro, a página exibirá uma mensagem negando o acesso, e redirecionando 2 segundos depois para a página de cadastro.

#

## Como posso testar aplicação?
Tomei a liberdade de fazer o deploy da aplicação no Heroku, está disponivel aqui: 

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
- Context API;
- SCSS;
- Testes unitários com RTL;
- TDD;
- Deploy na plataforma **Heroku**;