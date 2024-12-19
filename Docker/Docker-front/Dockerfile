# Use a imagem oficial do Node.js
FROM node:18-alpine

# Instale o git para clonar o repositório
RUN apk add --no-cache git

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Clona o repositório diretamente do GitHub
RUN git clone https://github.com/julianopita/paulaChocolat-front.git .

# Instala as dependências do projeto
RUN npm install

# Exponha a porta 80 para o servidor de desenvolvimento do Nuxt
EXPOSE 80

# Comando para iniciar o Nuxt em modo de desenvolvimento
CMD ["npm", "run", "dev", "--", "--port", "80"]
