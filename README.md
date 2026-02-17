# 🛍️ B7Store - Plataforma de E-commerce Fullstack

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-5167FC?style=for-the-badge&logo=stripe&logoColor=white)

> **B7Store** é uma plataforma de e-commerce completa e moderna, desenvolvida com Next.js 15, React 19, Node.js e PostgreSQL. Oferece uma experiência de compra excepcional com integração Stripe, autenticação JWT e arquitetura escalável.

## 📋 Descrição

O **B7Store** é uma solução fullstack de e-commerce que resolve a necessidade de uma plataforma de vendas online robusta, rápida e fácil de usar. O projeto combina as melhores tecnologias frontend e backend para oferecer uma experiência de usuário excepcional.

**Principais características:**
- 🚀 **Frontend moderno** com Next.js 15 e React 19
- 🔐 **Backend robusto** com Node.js, Express e TypeScript
- 💳 **Integração Stripe** para pagamentos seguros
- 🗄️ **Banco PostgreSQL** com Prisma ORM
- 📱 **Interface responsiva** para todos os dispositivos
- 🛒 **Sistema de carrinho** com cálculo de frete
- 📦 **Gestão de pedidos** com webhooks automáticos

**Público-alvo:** Desenvolvedores, empresas de e-commerce, estudantes e profissionais buscando referências de código fullstack.

## 📚 Tabela de Conteúdo

- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Uso Local](#-uso-local)
- [Frontend](#-frontend)
- [Backend](#-backend)
- [Boas Práticas e Padrões](#-boas-práticas-e-padrões)
- [Contribuição](#-contribuição)
- [Contato](#-contato)

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **Next.js 15.4.6** - Framework React com App Router
- **React 19.1.0** - Biblioteca de interface do usuário
- **TypeScript 5.0** - Tipagem estática para JavaScript
- **Tailwind CSS 4.0** - Framework CSS utilitário
- **Zustand 5.0.7** - Gerenciamento de estado
- **Axios 1.11.0** - Cliente HTTP para requisições
- **Zod 4.0.17** - Validação de esquemas

### **Backend**
- **Node.js 18+** - Runtime JavaScript
- **Express.js 5.1.0** - Framework web para Node.js
- **TypeScript 5.9.2** - Linguagem de programação tipada
- **PostgreSQL** - Banco de dados relacional
- **Prisma 6.13.0** - ORM moderno e type-safe
- **Stripe 18.4.0** - Plataforma de pagamentos
- **bcryptjs 3.0.2** - Hash de senhas seguro
- **JWT** - Autenticação stateless

### **Ferramentas de Desenvolvimento**
- **TSX** - Executor TypeScript para desenvolvimento
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Git** - Controle de versão

## 🏗️ Arquitetura do Projeto

### **Visão Geral da Arquitetura**
```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend                            │
│                    (Next.js + React)                       │
├─────────────────────────────────────────────────────────────┤
│                        Backend                             │
│                   (Node.js + Express)                      │
├─────────────────────────────────────────────────────────────┤
│                    Banco de Dados                          │
│                    (PostgreSQL)                            │
└─────────────────────────────────────────────────────────────┘
```

### **Estrutura de Pastas**
```
projeto-store/
├── frontend/                 # Aplicação Next.js
│   ├── src/
│   │   ├── app/             # App Router do Next.js
│   │   ├── components/      # Componentes React
│   │   ├── types/          # Tipos TypeScript
│   │   └── store/          # Estado global (Zustand)
│   └── public/              # Assets estáticos
├── backend/                  # API Node.js
│   ├── src/
│   │   ├── controllers/     # Controladores das rotas
│   │   ├── services/        # Lógica de negócio
│   │   ├── middleware/      # Middlewares (auth, validação)
│   │   ├── routes/          # Definição das rotas
│   │   ├── schema/          # Schemas de validação Zod
│   │   └── libs/            # Configurações (Prisma, Stripe)
│   └── prisma/              # Schema e migrations do banco
└── README.md                 # Este arquivo
```

### **Padrão Arquitetural Backend**
```
Request → Route → Controller → Service → Database
   ↑                                                    ↓
Response ← Controller ← Service ← Database ← Query
```

### **Fluxo de Dados Frontend-Backend**
```
┌─────────────┐    HTTP/HTTPS    ┌─────────────┐
│   Frontend  │ ←──────────────→ │   Backend   │
│  (Next.js)  │                  │ (Express)   │
└─────────────┘                  └─────────────┘
       │                                │
       │                                ▼
       │                         ┌─────────────┐
       │                         │ PostgreSQL  │
       │                         │   + Prisma  │
       │                         └─────────────┘
       │                                │
       ▼                                ▼
┌─────────────┐                  ┌─────────────┐
│   Stripe    │                  │  Webhooks  │
│ (Pagamentos)│                  │ (Eventos)   │
└─────────────┘                  └─────────────┘
```

## 🚀 Instalação e Configuração

### **Pré-requisitos**
- **Node.js 18.0** ou superior
- **PostgreSQL 12** ou superior
- **npm, yarn, pnpm** ou **bun**
- **Git**

### **1. Clone o Repositório**
```bash
git clone <url-do-repositorio>
cd projeto-store
```

### **2. Configuração do Backend**
```bash
cd backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
```

**Arquivo `.env` do Backend:**
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
BASE_URL=http://localhost:4000
```

**Configure o Banco de Dados:**
```bash
# Crie um banco PostgreSQL
createdb b7store

# Execute as migrations
npx prisma migrate dev

# Popule com dados iniciais
npm run db:seed
```

### **3. Configuração do Frontend**
```bash
cd ../frontend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

**Arquivo `.env.local` do Frontend:**
```env
# Configurações da API
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Configurações de Analytics (opcional)
NEXT_PUBLIC_GA_TRACKING_ID=GA_MEASUREMENT_ID

# Configurações de Pagamento
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## 🎯 Uso Local

### **Scripts Disponíveis**

**Backend:**
```bash
cd backend

npm run dev          # Inicia servidor com hot-reload (porta 4000)
npm run db:seed      # Popula banco com dados de teste
npm run db:reset     # Reseta banco e executa migrations
```

**Frontend:**
```bash
cd frontend

npm run dev          # Inicia servidor de desenvolvimento (porta 3000)
npm run build        # Build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa linting
```

### **Executando o Projeto**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

**Acesse:**
- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:4000
- **API Docs:** http://localhost:4000/ping (health check)

### **Exemplos de Navegação e Endpoints**

**Teste da API:**
```bash
# Health check
curl http://localhost:4000/ping

# Listar produtos
curl "http://localhost:4000/products?limit=5"

# Registrar usuário
curl -X POST http://localhost:4000/user/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "senha123"
  }'
```

## 🎨 Frontend

### **Estrutura de Pastas e Componentes**
```
src/
├── app/                    # App Router do Next.js
│   ├── (site)/            # Grupo de rotas do site
│   │   ├── layout.tsx     # Layout principal do site
│   │   └── page.tsx       # Página inicial
│   ├── globals.css        # Estilos globais
│   └── layout.tsx         # Layout raiz
├── components/             # Componentes reutilizáveis
│   ├── home/              # Componentes específicos da home
│   │   ├── banners.tsx    # Carrossel de banners
│   │   ├── most-sold-products.tsx
│   │   └── most-viewed-products.tsx
│   ├── layout/            # Componentes de layout
│   │   ├── header.tsx     # Cabeçalho
│   │   ├── footer.tsx     # Rodapé
│   │   └── header-search.tsx
│   ├── product-item.tsx   # Card de produto individual
│   └── product-list.tsx   # Lista de produtos
├── types/                  # Definições de tipos TypeScript
│   ├── banner.ts          # Tipo para banners
│   ├── product.ts         # Tipo para produtos
│   └── menu-item.ts       # Tipo para itens de menu
└── store/                  # Gerenciamento de estado (Zustand)
```

### **Funcionalidades Principais**
- ✅ **Página Inicial** com banners e produtos em destaque
- ✅ **Sistema de Produtos** com cards responsivos
- ✅ **Layout Responsivo** para mobile e desktop
- ✅ **Sistema de Likes** com estado local
- ✅ **Navegação** entre páginas
- ✅ **Componentes Reutilizáveis** modulares
- ✅ **Meus Pedidos** com histórico e cancelamento
- ✅ **Central de Ajuda** com FAQ e suporte

### **Integração com Backend**
```typescript
// Exemplo de requisição para API
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Buscar produtos
const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data.products;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
};

// Buscar banners
const getBanners = async () => {
  try {
    const response = await axios.get(`${API_URL}/banners`);
    return response.data.banners;
  } catch (error) {
    console.error('Erro ao buscar banners:', error);
    return [];
  }
};
```

### **Padrões de UI/UX e Responsividade**
- **Mobile First** approach com Tailwind CSS
- **Breakpoints** padronizados: sm(640px), md(768px), lg(1024px), xl(1280px)
- **Grid System** flexível e adaptativo
- **Touch Friendly** para dispositivos móveis
- **Hover Effects** e transições suaves
- **Loading States** e skeletons para melhor UX

## 🔧 Backend

### **Estrutura de Pastas, Rotas, Controllers, Services e Middlewares**
```
src/
├── controllers/             # Controladores das rotas
│   ├── banner.ts           # Lógica de banners
│   ├── cart.ts             # Lógica do carrinho
│   ├── category.ts         # Lógica de categorias
│   ├── order.ts            # Lógica de pedidos
│   ├── product.ts          # Lógica de produtos
│   ├── user.ts             # Lógica de usuários
│   └── webhook.ts          # Lógica de webhooks Stripe
├── services/                # Lógica de negócio
│   ├── banner.ts           # Serviços de banner
│   ├── category.ts         # Serviços de categoria
│   ├── order.ts            # Serviços de pedido
│   ├── payment.ts          # Serviços de pagamento
│   ├── product.ts          # Serviços de produto
│   └── user.ts             # Serviços de usuário
├── middleware/              # Middlewares
│   └── auth.ts             # Autenticação JWT
├── routes/                  # Definição das rotas
│   └── main.ts             # Todas as rotas da aplicação
├── schema/                  # Schemas de validação Zod
│   ├── login-schema.ts     # Validação de login
│   ├── register-schema.ts  # Validação de registro
│   └── cart-schema.ts      # Validação de carrinho
├── libs/                    # Configurações
│   ├── prisma.ts           # Cliente Prisma
│   └── stripe.ts           # Configuração Stripe
└── utils/                   # Funções utilitárias
    ├── get-base-url.ts     # URL base da aplicação
    └── get-frontend-url.ts # URL do frontend
```

### **Endpoints da API**

#### **Autenticação**
| Método | Endpoint | Descrição | Auth | Request/Response |
|--------|----------|-----------|------|------------------|
| `POST` | `/user/register` | Registra novo usuário | ❌ | [Ver exemplo](#exemplo-registro) |
| `POST` | `/user/login` | Login e gera token | ❌ | [Ver exemplo](#exemplo-login) |

#### **Produtos**
| Método | Endpoint | Descrição | Auth | Request/Response |
|--------|----------|-----------|------|------------------|
| `GET` | `/products` | Lista produtos com filtros | ❌ | [Ver exemplo](#exemplo-produtos) |
| `GET` | `/product/:id` | Detalhes de um produto | ❌ | [Ver exemplo](#exemplo-produto) |
| `GET` | `/product/:id/related` | Produtos relacionados | ❌ | [Ver exemplo](#exemplo-relacionados) |

#### **Carrinho**
| Método | Endpoint | Descrição | Auth | Request/Response |
|--------|----------|-----------|------|------------------|
| `POST` | `/cart/mount` | Monta carrinho | ❌ | [Ver exemplo](#exemplo-carrinho) |
| `GET` | `/cart/shipping` | Calcula frete | ❌ | [Ver exemplo](#exemplo-frete) |
| `POST` | `/cart/finish` | Finaliza compra | ✅ | [Ver exemplo](#exemplo-finalizar) |

#### **Pedidos**
| Método | Endpoint | Descrição | Auth | Request/Response |
|--------|----------|-----------|------|------------------|
| `GET` | `/orders` | Lista pedidos do usuário | ✅ | [Ver exemplo](#exemplo-pedidos) |
| `GET` | `/orders/:id` | Detalhes de um pedido | ✅ | [Ver exemplo](#exemplo-pedido) |

### **Exemplos de Requests/Responses**

#### **Exemplo: Registro**
```bash
# Request
POST /user/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123"
}

# Response
{
  "error": null,
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com"
  }
}
```

#### **Exemplo: Login**
```bash
# Request
POST /user/login
Content-Type: application/json

{
  "email": "joao@email.com",
  "password": "senha123"
}

# Response
{
  "error": null,
  "token": "uuid-gerado-automaticamente"
}
```

#### **Exemplo: Produtos**
```bash
# Request
GET /products?limit=10&orderBy=price

# Response
{
  "error": null,
  "products": [
    {
      "id": 1,
      "label": "Camiseta React",
      "price": 89.99,
      "image": "media/products/camiseta-react.jpg",
      "liked": false
    }
  ]
}
```

### **Banco de Dados, Tabelas, Relacionamentos e Migrations**

#### **Tecnologia**
- **PostgreSQL** - Banco relacional robusto
- **Prisma ORM** - Type-safe database client
- **Migrations** - Controle de versão do schema

#### **Modelos Principais**
```prisma
model User {
  id        Int           @id @default(autoincrement())
  name      String
  email     String        @unique
  password  String
  token     String?
  createAt  DateTime      @default(now())
  updatedAt DateTime      @default(now()) @updatedAt
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
  createAt    DateTime          @default(now())
  updatedAt   DateTime          @default(now()) @updatedAt
  images      ProductImage[]
  metadata    ProductMetadata[]
  category    Category          @relation(fields: [categoryId], references: [id])
  orders      OrderProduct[]
}

model Order {
  id                 Int            @id @default(autoincrement())
  userId             Int
  status             String         @default("pending")
  total              Float
  shippingCost       Float          @default(0)
  shippingDays       Int            @default(0)
  shippingZipcode    String?
  shippingStreet     String?
  shippingNumber     String?
  shippingCity       String?
  shippingState      String?
  shippingCountry    String?
  shippingComplement String?
  createAt           DateTime       @default(now())
  updatedAt          DateTime       @default(now()) @updatedAt
  orderItems         OrderProduct[]
  user               User           @relation(fields: [userId], references: [id])
}
```

#### **Relacionamentos**
- **User** ↔ **UserAddress** (1:N)
- **User** ↔ **Order** (1:N)
- **Product** ↔ **ProductImage** (1:N)
- **Product** ↔ **Category** (N:1)
- **Order** ↔ **OrderProduct** (1:N)
- **Product** ↔ **OrderProduct** (1:N)

#### **Migrations Disponíveis**
```bash
# Ver migrations disponíveis
npx prisma migrate status

# Executar migrations pendentes
npx prisma migrate deploy

# Criar nova migration
npx prisma migrate dev --name nome_da_migration
```

### **Autenticação, Autorização e Regras de Negócio**

#### **Sistema de Autenticação**
- **JWT (JSON Web Tokens)** para autenticação stateless
- **Middleware de autenticação** em rotas protegidas
- **Hash de senhas** com bcryptjs
- **Tokens únicos** por usuário

#### **Middleware de Autenticação**
```typescript
export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization']
  if(!authHeader) {
    res.status(401).json({ erro: 'acesso negado' })
    return
  }

  const tokenSplit = authHeader.split('Bearer ')
  if(!tokenSplit[1]) {
    res.status(401).json({ erro: 'acesso negado' })
    return
  }

  const token = tokenSplit[1]
  const userId = await getUserIdByToken(token)
  
  if(!userId) {
    res.status(401).json({ erro: 'acesso negado' })
    return
  }

  (req as any).userId = userId
  next()
}
```

#### **Regras de Negócio**
- **Usuários** podem ter múltiplos endereços
- **Produtos** pertencem a categorias específicas
- **Pedidos** são vinculados a usuários autenticados
- **Pagamentos** são processados via Stripe
- **Webhooks** atualizam status dos pedidos automaticamente

## 📋 Boas Práticas e Padrões

### **Convenções de Código**
- **TypeScript** para type safety e melhor DX
- **ESLint** para qualidade de código
- **Prettier** para formatação consistente
- **Conventional Commits** para commits padronizados

### **Arquitetura e Padrões**
- **Separation of Concerns** - Cada camada tem responsabilidade específica
- **Dependency Injection** - Inversão de dependências
- **Repository Pattern** - Abstração do acesso a dados
- **Service Layer** - Lógica de negócio isolada
- **Middleware Pattern** - Processamento de requisições

### **Segurança**
- **JWT** para autenticação stateless
- **bcrypt** para hash de senhas
- **CORS** configurado adequadamente
- **Validação de entrada** com Zod
- **Sanitização** de dados de entrada

### **Performance**
- **Connection pooling** com Prisma
- **Indexes** otimizados no banco
- **Compression** de respostas
- **Caching** para dados estáticos
- **Lazy loading** de componentes

### **Naming Conventions**
- **Variáveis**: camelCase (`userName`, `productList`)
- **Componentes**: PascalCase (`ProductItem`, `UserProfile`)
- **Arquivos**: kebab-case (`product-item.tsx`, `user-service.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`, `MAX_RETRIES`)
- **Interfaces**: PascalCase com prefixo I (`IProduct`, `IUser`)

## 🤝 Contribuição

### **Como Contribuir**
1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. **Commit** suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. **Abra** um Pull Request

### **Padrões de Contribuição**
- Use **Conventional Commits**
- Siga o **style guide** do projeto
- Adicione **testes** para novas funcionalidades
- Atualize a **documentação** quando necessário
- Teste **responsividade** em diferentes dispositivos

### **Desenvolvimento Local**
```bash
# Clone o fork
git clone https://github.com/seu-usuario/projeto-store.git
cd projeto-store

# Configure o ambiente
cd backend && npm install
cd ../frontend && npm install

# Configure as variáveis de ambiente
# Execute as migrations
cd ../backend && npx prisma migrate dev

# Inicie os servidores
cd ../backend && npm run dev
cd ../frontend && npm run dev
```

### **Checklist para PRs**
- [ ] Código segue padrões do projeto
- [ ] Testes passam localmente
- [ ] Documentação atualizada
- [ ] Responsividade testada
- [ ] TypeScript sem erros
- [ ] Backend e frontend funcionando juntos

## 📞 Contato

### **Desenvolvedor**
- **Nome**: Micael Abud
- **GitHub**: [@micas-tsx](https://github.com/micas-tsx)
- **LinkedIn**: [micael-abud](https://linkedin.com/in/micael-abud)
- **Instagram**: [@micas.tsx](https://instagram.com/micas.tsx)
- **Portfolio**: [micastsx.netlify.app](https://micastsx.netlify.app/)
- **Email**: micaelabud21@gmail.com
- **WhatsApp**: (61) 9406-0294

### **Redes Sociais**
- [GitHub](https://github.com/micas-tsx)
- [LinkedIn](https://linkedin.com/in/micael-abud)
- [Instagram](https://instagram.com/micas.tsx)

---

<div align="center">
  <p>Feito com ❤️ para a comunidade de desenvolvedores</p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>

*Desenvolvido com ❤️ por Micael Abud*
