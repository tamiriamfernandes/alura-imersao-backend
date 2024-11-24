# API com Node.js e Integração com o Google Gemini

Este é um projeto desenvolvido durante a Imersão de Back-end da Alura. O objetivo do projeto é criar uma API em Node.js integrada com o Google Gemini, explorando boas práticas de desenvolvimento e conceitos modernos de back-end.

## 📂 Estrutura do Projeto

A estrutura do projeto foi organizada para facilitar a manutenção e escalabilidade:

src/

├── controllers/  # Lógica de negócios e controle das rotas

├── models/       # Modelos e manipulação de dados

├── routes/       # Definição de rotas da API

└── server.js     # Ponto de entrada da aplicação

## 🚀 Tecnologias Utilizadas

- **Node.js**: Runtime JavaScript para construção da API.
- **Express**: Framework para criação de rotas e gerenciamento de requisições.
- **Google Gemini**: Serviço para integração de IA e geração de conteúdos avançados.
- **Dotenv**: Gerenciamento de variáveis de ambiente.

## 📚 Rotas da API

Abaixo estão as rotas disponíveis nesta API:

### **Posts**
- `GET /api/posts`  
  Retorna todos os posts cadastrados.  

- `POST /api/posts`  
  Cria um novo post.  

- `POST /api/posts/google-gemini`  
  Cria um post utilizando a integração com o Google Gemini.  
  **Parâmetro esperado**: Upload de uma imagem no campo `image`.

### **Upload**
- `POST /api/upload`  
  Realiza o upload de uma imagem.  
  **Parâmetro esperado**: Upload de uma imagem no campo `image`.
