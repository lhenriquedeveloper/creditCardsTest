<h1 align="center">Credit Card Test</h1> 
<p align="center">Sistema de Gerenciamento de Usuários com cartão de crédito</p> 


<h3 align="center">Sumário:</h3>
<p align="center">
 <a>Tecnologias Utilizadas</a> • 
 <a>Como Usar?</a> • 
 <a>Rotas</a> •
 <a>Imagens</a> • 
 <a>Autor</a>
</p>


## :construction_worker: Tecnologias Utilizadas:

### Back-End
<img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" />
<img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" />
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/Composer-885630?style=for-the-badge&logo=Composer&logoColor=white" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />

### Front-End
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />

## :thinking: **Como Usar?**

### Para rodar a API (Back-End) é importante ter os seguintes pré requisitos.

#### Apache Web Server
#### PHP 8.2+
#### Um servidor de banco de dados (MySQL, Maria DB etc.)
#### Composer

Tendo essas ferramentas instaladas, e os serviços rodando, siga os passos abaixo:

No arquivo .env configure seu banco de dados:

```bash
APP_NAME=Credit_Card_App
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_TIMEZONE=UTC
APP_URL=http://localhost

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
APP_MAINTENANCE_STORE=database

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=credit_card_app
# DB_USERNAME=root
# DB_PASSWORD=password

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
CACHE_PREFIX=

MEMCACHED_HOST=127.0.0.1

REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

VITE_APP_NAME="${APP_NAME}"


```

No terminal:

```bash
# Clone este repositório
$ git clone 

# Acesse a pasta do projeto no terminal/cmd
$ cd creditCardsTest/creditcard_project

# Instale as dependências
$ composer install

# Execute a migrate para criar as tabelas no banco
$ php artisan migrate

# Execute a aplicação
$ php artisan migrate

```

### Para rodar o Front-End é importante ter os seguintes pré requisitos.

#### Node 18+

Tendo essas ferramentas instaladas, e os serviços rodando, siga os passos abaixo:

No terminal:

```bash
# Clone este repositório
$ git clone 

# Acesse a pasta do projeto no terminal/cmd
$ cd creditCardsTest/credit_card_front

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run dev
```

## 🛣️ Rotas:

### Todas as rotas da API estão documentadas no POSTMAN e disponibilizadas em:
https://documenter.getpostman.com/view/27473425/2sA3Bt29GN 


## :framed_picture:	Imagens
![Captura de tela 2024-04-25 213650](https://github.com/lhenriquedeveloper/creditCardsTest/assets/62040725/0f6bbb3f-89c0-4ecd-99d2-72c2eacd5ef0)
![Captura de tela 2024-04-25 213715](https://github.com/lhenriquedeveloper/creditCardsTest/assets/62040725/58408133-bbf3-4722-9dc2-5caa7a7e4a04)
![Captura de tela 2024-04-25 213749](https://github.com/lhenriquedeveloper/creditCardsTest/assets/62040725/f6044c27-d17d-4538-8ffe-a628db1f337e)
![Captura de tela 2024-04-25 213818](https://github.com/lhenriquedeveloper/creditCardsTest/assets/62040725/d448b320-3c97-496d-be7e-0feadba36d03)
![Captura de tela 2024-04-25 213846](https://github.com/lhenriquedeveloper/creditCardsTest/assets/62040725/2977a0ff-9f67-479b-a9ce-c0c5ad13d14d)
![Captura de tela 2024-04-25 213909](https://github.com/lhenriquedeveloper/creditCardsTest/assets/62040725/fcf8d134-6ca1-41eb-b5f1-9d431bce417a)


## :art: Autor
 <sub><b>Desenvolvido por Luis Henrique</b></sub></a> <a href="https://github.com/lhenriquedeveloper"></a>
 
[![Linkedin Badge](https://img.shields.io/badge/-LuisHenrique-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lhenriquedev/)](https://www.linkedin.com/in/lhenriquedev/) 
[![Gmail Badge](https://img.shields.io/badge/-sousarodriguesluishenrique@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:sousarodriguesluishenrique@gmail.com)](mailto:sousarodriguesluishenrique@gmail)
</br>
[![Gitlab Badge](https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white)](https://gitlab.com/sousarodriguesluishenrique)
[![Github Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lhenriquedeveloper)

