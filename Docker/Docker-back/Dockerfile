# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Instale o Git para clonar o repositório
RUN apk add --no-cache git

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Clone o repositório diretamente do GitHub
RUN git clone https://github.com/fael890/paulaChocolat-back.git .

# Instale as dependências do projeto
RUN npm install

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "server.js"]
