# Introdução
A aplicação foi dividida em back-end e front-end. Você pode acessar o front-end
no seguinte repositório: (https://github.com/julianopita/paulaChocolat-front.git)

## Utilizando a aplicação (sem docker)
Com o terminal dentro do diretório **/paulaChocolat-back** você precisa instalar
todas as depêndencias com o comando ```npm install```
Depois precisa executar a API digitando ```node server.js```

Pronto, agora a API está rodando na URL http://localhost:3000/

## Utilizando a aplicação (com docker)
Caso você queira utilizar o docker, é necessário dentro do diretório
**/paulaChocolat-back/Docker** executar o comando ```docker-compose up```
Talvez seja necessário dar permissões ```sudo docker-compose up```

Um dos muitos benefícios do docker é que você não precisa executar a API
e depois o front-end com comandos diferentes, basta rodar o comando passado anteriormente que já vai 
ter as duas aplicações rodando juntas
back-end: http://localhost:3000
front-end http://localhost:80 (A porta pode ser omitida)

