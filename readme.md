# Avaliação Técnica - Paciente 360


![image](https://github.com/RuanGabrieldev/teste-paciente-360/assets/41811305/7f21eda2-1f0e-4334-b5aa-45c2a0db1d56)
![image](https://github.com/RuanGabrieldev/teste-paciente-360/assets/41811305/b2b089a6-df49-4e7b-ac6e-351cf1d9abdf)
![image](https://github.com/RuanGabrieldev/teste-paciente-360/assets/41811305/84c3b883-9f18-4eed-bc2f-47fc45663dc2)


## 🚀 Começando

Aqui vai a explicação do projeto e de como você pode rodar igual na minha máquina (pois na minha máquina funciona) e com isso poder ter os parâmetros necessários para me aprovar nesse processo seletivo!

Com o intuito de apenas demonstrar o conhecimento da stack da vaga, desenvolvi este projeto se baseando no desafio técnico proposto pela Paciente 360. 
- No angularJS utilizei o Bootstrap para a estruturação e estilização do código html.
- Utilizei o SASS para o processamento  do meu CSS, criando 3 arquivos, sendo ele o mixin (Com "funções" pré prontas para meu scss), variables (com a paleta de cor da Paciente 360) e o style que define toda a estilização do projeto.
- A estruturação do projeto foi feito utilizando o Stereotyped Style pregado no livro "AngularJs Essentials" do Rodrigo Branas
- Utilizei a biblioteca Swal para fazer os alerts de forma mais simples e também utilizei a biblioteca Bower para gerenciar meus pacotes do Angular Ui Component
- Na API utilizeo o Node na versão 18 com o ORM Prisma
- Também utilizei o ZOD para a criação dos DTOs e validação desses valores.
- A estruturação de pasta foi seguindo o SOLID, inclusive o Design Pattern Adapter implementado é para que seja simples a troca do Express pelo Loopback
- Com o prisma implementei o Autoincremente para os IDs e também validações para que o CPF seja unico no banco
- Com o Docker, conseguimos subir o PGAdmin e o Postgress de forma simples e rápida. 

As tecnoologias usadas foram: 

AngularJs
Docker
Javascript
Typescript
Prisma ORM
Postgress
PGAdmin


### 📋 Pré-requisitos

- Café quentinho (Requisito principal)
- Docker
- Node v18.10


### 🔧 Instalação

Para iniciarmos a instalação desse projeto, precisamos que no seu ambiente, tenha instalado o Docker, assim ficará mais fácil 

Com isso, abra seu CMD navegue a té a pasta do projeto e utilize os seguinte comando:
-  docker compose -f "docker-compose.yml" up -d --build  

Com isso você terá o PGAdmin web e o Postgres rodando na sua máquina.

Para rodar a aplicação, precisamos subir nossa API, infelizmente não tive tempo este fim fim de semana, e não consegui contenizar tudo. Mas para subir, navegue até a pasta da api e rode os seguintes comandos:

- npm install
- npx prisma migrate dev

OBS: Isso deve ser feito após vc subir o banco de dados no passo anterior

com isso, poderá navegar para o index html e criar seus profissionais e profissões!
