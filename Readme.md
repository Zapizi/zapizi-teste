# Informações sobre o teste e aplicação do teste.

## Aplicação

Este projeto representa uma estrutura básica de um projeto com backend e frontend, na raíz do projeto utilizamos um arquivo docker-compose.yml responsável por realizar a execução da aplicação, o mesmo irá criar 2 containers (Máquinas virtuais) os quais terão as aplicações de frontend e backend rodando. 

O frontend é um projeto React feito com o starter ViteJS em Typescript e já com bootstrap configurado.

O backend é um server ExpressJS simples, sem rotas configurados e um arquivo db.json para simular um banco de dados.

## Desafio

O desafio é consumir o arquivo db.json para simular um banco de dados e ofertar os dados nele inserido por meio de uma API utilizando o server ExpressJS, no react o usuário deve ser capaz de listar os usuários, criar (deve ser verificado se haverá duplicatas baseado em email, telefone e cpf e o usuário precisa ser maior de idade para ser cadastrado), editar (buscar um usuário específico no json e mostrar os dados em tela), listar os usuários do arquivo.

Segue endpoints aguardados:

- GET (Todos, por id)
- POST (Salvar)
- PUT (Editar)
- DELETE (Remover)

Desafio:

Utilizar a api "https://webmaniabr.com/api/" para consultar um CEP e cadastrar um endereço para o usuário, criando uma tabela no json de endereços e vinculando um usuario a um endereço. Consultar o site para documentação da API.

## Como rodar a aplicação
```
docker compose up    
```