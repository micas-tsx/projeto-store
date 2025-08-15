# 🛍️ B7Store - E-commerce Frontend

![Next.Js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![react](https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=white)
![Tailwind](https://img.shields.io/badge/tailwind_css-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

> **B7Store** é uma plataforma de e-commerce moderna e responsiva, desenvolvida com as melhores tecnologias frontend para oferecer uma experiência de compra excepcional.

## 📋 Tabela de Conteúdo

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Uso](#-uso)
- [Funcionalidades](#-funcionalidades)
- [Design e UI](#-design-e-ui)
- [Boas Práticas](#-boas-práticas)
- [Contribuição](#-contribuição)
- [Contato](#-contato)

## 🎯 Sobre o Projeto

### Propósito
O B7Store é uma solução completa de e-commerce que resolve a necessidade de uma plataforma de vendas online moderna, rápida e fácil de usar. O projeto foca em oferecer uma experiência de usuário excepcional com interface intuitiva e design responsivo.

### Problema que Resolve
- **Performance**: Carregamento rápido com Next.js 15 e React 19
- **Responsividade**: Interface adaptável para todos os dispositivos
- **Manutenibilidade**: Código limpo e bem estruturado com TypeScript
- **Escalabilidade**: Arquitetura modular para crescimento futuro

### Público-Alvo
- Desenvolvedores frontend
- Empresas de e-commerce
- Estudantes de desenvolvimento web
- Profissionais buscando referências de código

## 🚀 Tecnologias Utilizadas

### **Core Technologies**
- **Next.js 15.4.6** - Framework React com App Router
- **React 19.1.0** - Biblioteca de interface do usuário
- **TypeScript 5.0** - Tipagem estática para JavaScript

### **Styling & UI**
- **Tailwind CSS 4.0** - Framework CSS utilitário
- **PostCSS** - Processador CSS avançado

### **State Management & Data**
- **Zustand 5.0.7** - Gerenciamento de estado simples e eficiente
- **Axios 1.11.0** - Cliente HTTP para requisições
- **Zod 4.0.17** - Validação de esquemas TypeScript

### **Development Tools**
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **TypeScript** - Compilador e verificador de tipos

## 🏗️ Arquitetura

### **Estrutura de Pastas**
```
src/
├── app/                    # App Router do Next.js
│   ├── (site)/           # Grupo de rotas do site
│   │   ├── layout.tsx    # Layout principal do site
│   │   └── page.tsx      # Página inicial
│   ├── globals.css       # Estilos globais
│   └── layout.tsx        # Layout raiz
├── components/            # Componentes reutilizáveis
│   ├── home/             # Componentes específicos da home
│   │   ├── banners.tsx   # Carrossel de banners
│   │   ├── most-viewed-products.tsx
│   │   └── product-list-skeleton.tsx
│   ├── layout/           # Componentes de layout
│   │   ├── header.tsx    # Cabeçalho
│   │   ├── footer.tsx    # Rodapé
│   │   ├── header-icon.tsx
│   │   ├── header-search.tsx
│   │   └── footer-button.tsx
│   ├── product-item.tsx  # Card de produto individual
│   └── product-list.tsx  # Lista de produtos
├── types/                 # Definições de tipos TypeScript
│   ├── banner.ts         # Tipo para banners
│   ├── product.ts        # Tipo para produtos
│   └── menu-item.ts      # Tipo para itens de menu
├── data.ts               # Dados mockados para desenvolvimento
├── libs/                 # Bibliotecas e utilitários
└── store/                # Gerenciamento de estado (Zustand)
```

### **Padrão de Componentes**
- **Componentes Funcionais** com hooks React
- **Props tipadas** com TypeScript
- **Separação de responsabilidades** clara
- **Reutilização** máxima de código

### **Gerenciamento de Estado**
- **Zustand** para estado global da aplicação
- **useState** para estado local dos componentes
- **Context API** para temas e configurações (futuro)

## 💻 Instalação

### **Pré-requisitos**
- Node.js 18.0 ou superior
- npm, yarn, pnpm ou bun
- Git

### **Passo a Passo**

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/b7store-frontend.git
cd b7store-frontend
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. **Verifique a instalação**
```bash
npm run build
```

## ⚙️ Configuração

### **Variáveis de Ambiente**
Crie um arquivo `.env.local` na raiz do projeto:

```env
# Configurações da API
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Configurações de Analytics (opcional)
NEXT_PUBLIC_GA_TRACKING_ID=GA_MEASUREMENT_ID

# Configurações de Pagamento (futuro)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### **Configurações do TypeScript**
O projeto já está configurado com:
- **Paths mapping** (`@/*` → `./src/*`)
- **Strict mode** habilitado
- **JSX preserve** para Next.js
- **ESNext modules** para compatibilidade

## 🚀 Uso

### **Scripts Disponíveis**

```bash
# Desenvolvimento local
npm run dev          # Inicia servidor de desenvolvimento

```

### **Executando Localmente**

1. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

2. **Acesse no navegador**
```
http://localhost:3000
```

3. **Desenvolvimento com hot reload**
- Edite arquivos em `src/`
- As mudanças aparecem automaticamente no navegador
- Console mostra erros e warnings em tempo real

### **Exemplos de Navegação**

```typescript
// Navegação programática
import { useRouter } from 'next/navigation'

const router = useRouter()
router.push('/product/123')

// Links estáticos
import Link from 'next/link'

<Link href="/categories/camisas">Camisas</Link>
```

## ✨ Funcionalidades

### **Funcionalidades Implementadas**
- ✅ **Página Inicial** com banners e features
- ✅ **Sistema de Produtos** com cards responsivos
- ✅ **Layout Responsivo** para mobile e desktop
- ✅ **Sistema de Likes** com estado local
- ✅ **Navegação** entre páginas
- ✅ **Componentes Reutilizáveis** modulares

### **Funcionalidades em Desenvolvimento**
- 🔄 **Página de Produtos Mais Vistos**
- 🔄 **Sistema de Categorias**
- 🔄 **Página Individual de Produto**

### **Funcionalidades Futuras**
- 📋 **Sistema de Busca** com filtros
- 🛒 **Carrinho de Compras**
- 👤 **Autenticação de Usuários**
- 💳 **Checkout e Pagamentos**
- 📱 **PWA (Progressive Web App)**

## 🎨 Design e UI

### **Sistema de Design**
- **Tailwind CSS 4.0** para estilização utilitária
- **Design System** consistente com tokens de design
- **Componentes Atômicos** para reutilização máxima

### **Paleta de Cores**
```css
/* Cores principais */
--primary: #2563eb;      /* blue-600 */
--secondary: #6b7280;    /* gray-500 */
--success: #10b981;      /* emerald-500 */
--warning: #f59e0b;      /* amber-500 */
--error: #ef4444;        /* red-500 */

/* Cores neutras */
--white: #ffffff;
--gray-50: #f9fafb;
--gray-200: #e5e7eb;
--gray-700: #374151;
--black: #000000;
```

### **Responsividade**
- **Mobile First** approach
- **Breakpoints** padronizados do Tailwind
- **Grid System** flexível e adaptativo
- **Touch Friendly** para dispositivos móveis

### **Componentes de UI**
- **Cards de Produto** com hover effects
- **Banners** com carrossel responsivo
- **Botões** com estados visuais
- **Formulários** com validação visual

## 📚 Boas Práticas

### **Convenções de Código**
- **Naming**: camelCase para variáveis, PascalCase para componentes
- **Estrutura**: Um componente por arquivo
- **Imports**: Agrupados por tipo (React, Next.js, locais)
- **Exports**: Named exports para componentes

### **Padrões de Desenvolvimento**
```typescript
// ✅ Bom - Props tipadas
type Props = {
  data: Product
  onLike?: (id: number) => void
}

// ✅ Bom - Componente funcional
export const ProductItem = ({ data, onLike }: Props) => {
  // lógica do componente
}

// ❌ Evitar - Props any
export const ProductItem = (props: any) => {
  // código sem tipagem
}
```

### **Linting e Formatação**
- **ESLint** configurado para Next.js
- **TypeScript strict mode** habilitado
- **Prettier** para formatação automática (recomendado)

### **Estrutura de Pastas**
- **Componentes** organizados por funcionalidade
- **Types** centralizados em pasta dedicada
- **Utils** separados por domínio
- **Constants** para valores estáticos

## 🤝 Contribuição

### **Como Contribuir**

1. **Fork o projeto**
2. **Crie uma branch** para sua feature
```bash
git checkout -b feature/nova-funcionalidade
```

3. **Faça suas alterações** seguindo os padrões
4. **Teste localmente** antes de submeter
5. **Commit suas mudanças**
```bash
git commit -m "feat: adiciona nova funcionalidade"
```

6. **Push para sua branch**
```bash
git push origin feature/nova-funcionalidade
```

7. **Abra um Pull Request**

### **Padrões de Commit**
```
feat: nova funcionalidade
fix: correção de bug
docs: atualização de documentação
style: formatação de código
refactor: refatoração de código
test: adição de testes
chore: tarefas de manutenção
```

### **Checklist para PRs**
- [ ] Código segue padrões do projeto
- [ ] Testes passam localmente
- [ ] Documentação atualizada
- [ ] Responsividade testada
- [ ] TypeScript sem erros

## 📞 Contato

### **Desenvolvedor**
- **Nome**: Micael Abud
- **GitHub**: [@micas-tsx](https://github.com/micas-tsx)
- **LinkedIn**: [micael-abud](https://linkedin.com/in/micael-abud)
- **Instagram**: [@micas.tsx](https://instagram.com/micas.tsx)
- **Email**: micaelabud21@gmail.com
- **WhatsApp**: (61) 9406-0294

### **Redes Sociais**
- [GitHub](https://github.com/micas-tsx)
- [LinkedIn](https://linkedin.com/in/micael-abud)
- [Instagram](https://instagram.com/micas.tsx)

---


**⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!**

*Desenvolvido com ❤️ por Micael Abud*
