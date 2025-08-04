

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
