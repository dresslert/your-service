# Use uma imagem oficial do PostgreSQL
FROM postgres:14

# Copie um script de inicialização do banco de dados, se necessário
# COPY init.sql /docker-entrypoint-initdb.d/

# Defina as variáveis de ambiente necessárias
ENV POSTGRES_USER=gabriel
ENV POSTGRES_PASSWORD=Lulu@1903
ENV POSTGRES_DB=dresslert

# Comando para iniciar o serviço do PostgreSQL
CMD ["postgres"]
