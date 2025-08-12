# 🛍️ B7Store Backend API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-5167FC?style=for-the-badge&logo=stripe&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

> **Backend robusto e escalável para e-commerce com integração completa ao Stripe, autenticação JWT e arquitetura modular.**

## 📋 Descrição

O **B7Store Backend** é uma API RESTful desenvolvida em Node.js que fornece todas as funcionalidades necessárias para uma loja online completa. O projeto resolve a necessidade de um backend robusto para e-commerce com sistema de pagamentos, gestão de usuários, carrinho de compras e integração com Stripe.

**Principais características:**
- 🚀 **API RESTful** com Express.js e TypeScript
- 🔐 **Autenticação JWT** para usuários
- 💳 **Integração Stripe** para pagamentos
- 🗄️ **Banco PostgreSQL** com Prisma ORM
- 📱 **Upload de mídia** para produtos e banners
- 🛒 **Sistema de carrinho** com cálculo de frete
- 📦 **Gestão de pedidos** com webhooks automáticos

## 📚 Tabela de Conteúdo

- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Uso](#-uso)
- [Rotas da API](#-rotas-da-api)
- [Banco de Dados](#-banco-de-dados)
- [Boas Práticas](#-boas-práticas-e-padrões)
- [Contribuição](#-contribuição)
- [Contato](#-contato)

## 🛠️ Tecnologias Utilizadas

### **Backend & Runtime**
- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação tipada
- **Express.js** - Framework web para Node.js
- **TSX** - Executor TypeScript para desenvolvimento

### **Banco de Dados & ORM**
- **PostgreSQL** - Banco de dados relacional
- **Prisma** - ORM moderno e type-safe
- **Prisma Client** - Cliente gerado automaticamente

### **Autenticação & Segurança**
- **JWT** - JSON Web Tokens para autenticação
- **bcryptjs** - Hash de senhas seguro
- **UUID** - Identificadores únicos

### **Pagamentos & Integração**
- **Stripe** - Plataforma de pagamentos
- **Webhooks** - Processamento assíncrono de eventos

### **Validação & Utilitários**
- **Zod** - Validação de schemas TypeScript
- **CORS** - Cross-Origin Resource Sharing

## 🏗️ Arquitetura

### **Estrutura de Pastas**
```
src/
├── controllers/     # Controladores das rotas
├── services/        # Lógica de negócio
├── middleware/      # Middlewares (auth, validação)
├── libs/           # Configurações (Prisma, Stripe)
├── routes/          # Definição das rotas
├── schema/         # Schemas de validação Zod
├── types/          # Interfaces TypeScript
├── utils/          # Funções utilitárias
└── generated/      # Código gerado pelo Prisma
```

### **Padrão Arquitetural**
O projeto segue uma arquitetura em **camadas** bem definidas:

```
┌─────────────────────────────────────┐
│           Routes Layer              │ ← Definição de endpoints
├─────────────────────────────────────┤
│        Controllers Layer            │ ← Lógica de requisições
├─────────────────────────────────────┤
│         Services Layer              │ ← Regras de negócio
├─────────────────────────────────────┤
│         Database Layer              │ ← Acesso aos dados
└─────────────────────────────────────┘
```

### **Fluxo de Dados**
```
Request → Route → Controller → Service → Database
   ↑                                                    ↓
Response ← Controller ← Service ← Database ← Query
```

## 🚀 Instalação

### **Pré-requisitos**
- Node.js 18+ 
- PostgreSQL 12+
- npm ou yarn

### **Passo a Passo**

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd backend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o banco de dados**
```bash
# Crie um banco PostgreSQL
createdb b7store

# Execute as migrations
npx prisma migrate dev

# Popule com dados iniciais
npm run db:seed
```


4. **Inicie o servidor**
```bash
npm run dev
```

## ⚙️ Configuração

### **Variáveis de Ambiente (.env)**

Crie um arquivo `.env` na raiz do projeto:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/b7store"

# Server
PORT=4000
NODE_ENV=development

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Frontend URLs
FRONTEND_URL=http://localhost:3000
```

### **Configuração do Banco**

O projeto usa **Prisma** como ORM. Para configurar:

```bash
# Gerar cliente Prisma
npx prisma generate

# Executar migrations
npx prisma migrate dev

# Visualizar dados (opcional)
npx prisma studio
```

### **Configuração Stripe**

1. Crie uma conta no [Stripe](https://stripe.com)
2. Obtenha suas chaves de API
3. Configure webhooks para `/webhook/stripe`
4. Adicione as chaves no `.env`

## 🎯 Uso

### **Comandos Disponíveis**

```bash
# Desenvolvimento
npm run dev          # Inicia servidor com hot-reload

# Banco de dados
npm run db:seed      # Popula banco com dados de teste
npm run db:reset     # Reseta banco e executa migrations

```

### **Endpoints Principais**

```bash
# Health check
GET http://localhost:4000/ping

# Produtos
GET http://localhost:4000/products
GET http://localhost:4000/product/1

# Carrinho
POST http://localhost:4000/cart/mount
GET http://localhost:4000/cart/shipping

# Usuários
POST http://localhost:4000/user/register
POST http://localhost:4000/user/login
```

## 🌐 Rotas da API

### **Autenticação**
| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| `POST` | `/user/register` | Registra novo usuário | ❌ |
| `POST` | `/user/login` | Login e gera token | ❌ |

### **Produtos**
| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| `GET` | `/products` | Lista produtos com filtros | ❌ |
| `GET` | `/product/:id` | Detalhes de um produto | ❌ |
| `GET` | `/product/:id/related` | Produtos relacionados | ❌ |

### **Carrinho**
| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| `POST` | `/cart/mount` | Monta carrinho | ❌ |
| `GET` | `/cart/shipping` | Calcula frete | ❌ |
| `POST` | `/cart/finish` | Finaliza compra | ✅ |

### **Pedidos**
| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| `GET` | `/orders` | Lista pedidos do usuário | ✅ |
| `GET` | `/orders/:id` | Detalhes de um pedido | ✅ |
| `GET` | `/orders/session` | Busca pedido por sessão | ❌ |

### **Exemplos de Uso**

#### **Registrar Usuário**
```bash
curl -X POST http://localhost:4000/user/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "senha123"
  }'
```

#### **Login**
```bash
curl -X POST http://localhost:4000/user/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joao@email.com",
    "password": "senha123"
  }'
```

#### **Listar Produtos**
```bash
curl "http://localhost:4000/products?limit=10&orderBy=price"
```

## 🗄️ Banco de Dados

### **Tecnologia**
- **PostgreSQL** - Banco relacional robusto
- **Prisma ORM** - Type-safe database client
- **Migrations** - Controle de versão do schema

### **Modelos Principais**

```prisma
model User {
  id        Int           @id @default(autoincrement())
  name      String
  email     String        @unique
  password  String
  token     String?
  addresses UserAddress[]
  orders    Order[]
}

model Product {
  id          Int               @id @default(autoincrement())
  label       String
  price       Float
  description String?
  categoryId  Int
  viewsCount  Int               @default(0)
  salesCount  Int               @default(0)
  images      ProductImage[]
  metadata    ProductMetadata[]
}

model Order {
  id             Int            @id @default(autoincrement())
  userId         Int
  status         String         @default("pending")
  total          Float
  shippingCost   Float          @default(0)
  orderItems     OrderProduct[]
}
```

### **Migrations**
```bash
# Ver migrations disponíveis
npx prisma migrate status

# Executar migrations pendentes
npx prisma migrate deploy

# Criar nova migration
npx prisma migrate dev --name nome_da_migration
```


## 📋 Boas Práticas e Padrões

### **Código**
- **TypeScript** para type safety
- **ESLint** para qualidade de código
- **Prettier** para formatação
- **Conventional Commits** para commits

### **Arquitetura**
- **Separation of Concerns** - Cada camada tem responsabilidade específica
- **Dependency Injection** - Inversão de dependências
- **Repository Pattern** - Abstração do acesso a dados
- **Service Layer** - Lógica de negócio isolada

### **Segurança**
- **JWT** para autenticação stateless
- **bcrypt** para hash de senhas
- **CORS** configurado adequadamente
- **Rate limiting** (implementar se necessário)

### **Performance**
- **Connection pooling** com Prisma
- **Indexes** otimizados no banco
- **Caching** para dados estáticos
- **Compression** de respostas

## 🤝 Contribuição

### **Como Contribuir**
1. **Fork** o projeto
2. **Crie** uma branch para sua feature
3. **Commit** suas mudanças
4. **Push** para a branch
5. **Abra** um Pull Request

### **Padrões de Contribuição**
- Use **Conventional Commits**
- Siga o **style guide** do projeto
- Adicione **testes** para novas funcionalidades
- Atualize a **documentação** quando necessário

### **Desenvolvimento Local**
```bash
# Clone o fork
git clone https://github.com/seu-usuario/backend.git

# Instale dependências
npm install

# Inicie o servidor
npm run dev
```

## 📞 Contato

- **GitHub**: [@micas-tsx](https://github.com/micas-tsx)
- **LinkedIn**: [Micael Abud](https://linkedin.com/in/micael-abud)
- **Portfolio**: [Meu portifolio](https://micastsx.netlify.app/)
- **Email**: micaelabu21@gmail.com

---

<div align="center">
  <p>Feito com ❤️ para a comunidade de desenvolvedores</p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>
