# Título do projeto

Avaliação Técnica - Paciente 360

## 🚀 Começando

Aqui vai a explicação do projeto e de como você pode rodar igual na minha máquina (pois na minha máquina funciona) e com isso poder ter os parâmetros necessários para me aprovar nesse processo seletivo!

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
