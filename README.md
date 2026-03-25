# 🚀 TaskFlow - Backend

Este é o backend do **TaskFlow**, um sistema de gerenciamento de tarefas profissional. Desenvolvido para ser seguro, escalável e de fácil manutenção.

## 🛠️ Tecnologias Utilizadas

* **[NestJS](https://nestjs.com/):** Framework Node.js para construção de APIs eficientes e escaláveis.
* **[Prisma ORM](https://www.prisma.io/):** ORM moderno para comunicação com o banco de dados.
* **[SQLite](https://www.sqlite.org/):** Banco de dados relacional leve e rápido.
* **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para JavaScript, garantindo mais segurança no código.
* **Bcrypt & Class-Validator:** Segurança de senhas (Hash) e validação rigorosa de dados de entrada.

## ✨ Funcionalidades Implementadas

- [x] Arquitetura base do NestJS.
- [x] Configuração do Prisma ORM e Banco de Dados (SQLite).
- [x] Cadastro de Usuários.
- [x] Criptografia de senhas (Hash) nativa.
- [x] Validação de dados (DTOs) impedindo e-mails inválidos ou senhas curtas.
- [ ] Autenticação (Login com JWT) - *Em breve*.
- [ ] CRUD de Tarefas - *Em breve*.

## ⚙️ Como rodar o projeto localmente

**1. Instale as dependências:**
\`\`\`bash
npm install
\`\`\`

**2. Configure o Banco de Dados (Prisma):**
\`\`\`bash
npx prisma generate
npx prisma migrate dev --name init
\`\`\`

**3. Inicie o servidor (Modo Desenvolvimento):**
\`\`\`bash
npm run start:dev
\`\`\`

O servidor estará rodando em `http://localhost:3009`.

## 📡 Rotas da API (Atuais)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/users` | Cria um novo usuário (Requer `name`, `email` e `password` no Body) |