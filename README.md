<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## SOBRE
Este é um site de adoção de animais, onde pessoas que desejam adotar um animal de estimação podem buscar informações sobre os animais disponíveis e procedimentos de adoção. O site também permite que usuários cadastrem animais para adoção


## Funcionalidades
Buscar todos os animais cadastrados;
Buscar um animal por ID;
Adicionar um novo animal;
Atualizar as informações de um animal existente por ID;
Deletar um animal existente por ID;
Essas funcionalidades estão implementadas como rotas HTTP na aplicação web, que podem ser acessadas através de requisições feitas por clientes que consomem a API; 
Além disso, a API também possui uma interface de usuário HTML com um formulário que permite interagir com a API de maneira mais amigável para usuários finais;
### Tecnologias Utilizadas


- Node.js
- Express.js
- Swagger
- Swagger UI Express
- Serviços de Informações da Internet (IIS)

### Instalação
Para instalar e executar a API de animais, siga os seguintes passos:
Certifique-se de que o Git e o Node.js estejam instalados em seu computador. Caso contrário, faça o download e a instalação a partir dos seguintes links:
Git: https://git-scm.com/downloads
Node.js: https://nodejs.org/en/download/
Abra o terminal ou prompt de comando em seu computador e clone este repositório executando o seguinte comando:
bash
Copy code
git clone https://github.com/jvxavier03/ado-odeanimais.git
Acesse a pasta raiz do projeto e instale as dependências da API executando o seguinte comando:
Copy code
npm install
Inicie o servidor da API executando o seguinte comando:
sql
Copy code
npm start
A API estará disponível em http://localhost:21262.

Para visualizar a documentação da API, acesse http://localhost:21262/docs.

Obs.: Certifique-se de que a porta 21262 esteja disponível em seu computador antes de executar a API. Caso contrário, altere a porta no arquivo index.js.
Acesse o Swagger UI 

## Equipe
Este projeto foi desenvolvido por:

João Victor Xavier








![download](https://user-images.githubusercontent.com/130186561/234615567-8c78bbae-9ed3-4f88-acd8-f8513521c4ac.jpg)


Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.
