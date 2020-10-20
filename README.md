<h1 align="center">
    <img alt="Plathanus" title="#Plathanus" src="https://plathanus.com.br/img/website/logo.png" />
</h1>

<h4 align="center">
	🚀 Desafio React Native plathanus(backend)
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/guivalerioS/challengePlathanusBackend?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/guivalerioS/challengePlathanusBackend">

</p>

## 🛠 Tecnologias

Principais ferramentas utilizadas na construção do backend:

- Docker
- NodeJS
- Axios
- Express
- Sequelize(migrations)
- JWT
- MariaDB
- Node JS
- Twilio
- Yup


## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- NodeJS
- Docker
- Yarn

Agora para iniciarmos o projeto, siga os seguintes passos:

```bash
# Clone este repositório
$ git clone https://github.com/guivalerioS/challengePlathanusBackend.git

# Entre na pasta do projeto e instale as dependências
$ yarn

# Inicie um novo container docker do banco mariaDB 
$ docker run --name plathanusDB -e MYSQL_ROOT_PASSWORD=examplepass -e MYSQL_DATABASE=db -p 3306:3306 -d mariadb:latest

#Renomeie o arquivo .env.example para .env
Substitua as variáveis com as suas credenciais.

# Rode as Migrations
$ yarn sequelize db:migrate

# e para executar:
$ yarn dev

```

Feito com ❤️ por Guilherme Valerio 👋🏽 [Entre em contato!](https://www.linkedin.com/in/guilherme-valerio-399718143/)
