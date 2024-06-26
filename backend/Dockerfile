# Use uma imagem base oficial do Python
FROM python:3.10-slim

# Defina o diretório de trabalho
WORKDIR /app

# Instale as dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copie o código-fonte do projeto
COPY . .

# Comando para manter o container em execução
CMD ["tail", "-f", "/dev/null"]
