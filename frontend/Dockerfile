# Use uma imagem base oficial do Node.js
FROM node:20-slim

# Defina o diretório de trabalho
WORKDIR /app

# Instale as dependências
COPY package.json .
RUN npm install

# Copie o código-fonte do projeto
COPY . .

# Comando para manter o container em execução
CMD ["tail", "-f", "/dev/null"]
