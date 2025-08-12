
---
## 🛠️ Configuração do Banco de Dados MySQL
Este projeto agora utiliza MySQL como banco de dados principal.

1️⃣ Instalar o MySQL
Certifique-se de ter o MySQL instalado na sua máquina.

2️⃣ Criar o Banco de Dados
O projeto efetua a criação automatica do banco de dados e a adição de um usuário administrador.

3️⃣ Configurar as Credenciais no .env
O projeto efetua automaticamente a criação do banco de dados (se não existir) e adiciona um usuário administrador padrão.

Usuário admin padrão criado automaticamente:

```json
email: admin@spsgroup.com.br
senha: 1234
```

3️⃣ Configurar as Credenciais no .env
Crie um arquivo .env na raiz do projeto com as credenciais do seu banco MySQL:
---

PORT=3000
JTW_SECRET='test-sps-server-main'
DB_HOST=localhost
DB_NAME=test_sps_db
DB_USER=root
DB_PASS=

---

---

---
=======

>>>>>>> d4707ec57d6059b61b63640763bbf56da2327654

## 🛡️ Autenticação

Todas as rotas, exceto `/login`, são protegidas. Para acessá-las, é necessário fornecer um token JWT no cabeçalho da requisição:

```
Authorization: Bearer SEU_TOKEN_AQUI
```



## 📌 Endpoints da API

### 🔐 POST `/login`

Autentica o usuário e retorna um token JWT.

**Body JSON:**

```json
{
  "email": "usuario@email.com",
  "senha": "123456"
}
```

**Resposta:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

---

### 📄 GET `/users`

Retorna a lista de todos os usuários (requer token JWT).

**Resposta:**

```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com"
  }
]
```

---

### 🔍 GET `/users/:id`

Retorna um usuário específico.

**Exemplo:** `GET /users/3`

**Resposta:**

```json
{
  "id": 3,
  "nome": "Maria Oliveira",
  "email": "maria@email.com"
}
```

---

### ➕ POST `/users`

Cadastra um novo usuário.

**Body JSON:**

```json
{
  "nome": "Novo Usuário",
  "email": "novo@email.com",
  "senha": "senha123"
}
```

**Resposta:**

```json
{
  "message": "Usuário cadastrado com sucesso"
}
```

---

### ✏️ PUT `/users/:id`

Atualiza os dados de um usuário existente.

**Body JSON:**

```json
{
  "nome": "Nome Atualizado",
  "email": "atualizado@email.com"
}
```

**Resposta:**

```json
{
  "message": "Usuário atualizado com sucesso"
}
```

---

### ❌ DELETE `/users/:id`

Remove um usuário.

**Resposta:**

```json
{
  "message": "Usuário removido com sucesso"
}
```

---

## ▶️ Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/sua-api.git
cd sua-api
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor:**

```bash
npm run dev
```

---

## ✅ Testando com Insomnia ou Postman

1. Faça um `POST /login` e copie o token da resposta.
2. Use esse token como **Bearer Token** nas próximas requisições.

---
