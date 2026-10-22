# Teste Econverse – Vaga Desenvolvedor Front-End

Projeto desenvolvido como parte do processo seletivo para a vaga de **Desenvolvedor Front-End** na Econverse.

## 🚀 Tecnologias Utilizadas

- **React 18** + **TypeScript**
- **Vite** (bundler)
- **SASS** (pré-processador CSS)
- HTML semântico
- Fetch API (consumo de JSON)

## 📋 Funcionalidades

- ✅ Vitrine de produtos consumindo API JSON
- ✅ Modal com detalhes do produto ao clicar
- ✅ Banner hero com countdown em tempo real
- ✅ Navegação por categorias
- ✅ Layout responsivo (mobile, tablet, desktop)
- ✅ Boas práticas de SEO (meta tags, OG tags, HTML semântico)
- ✅ Acessibilidade (ARIA labels, navegação por teclado)
- ✅ Animações CSS suaves

## 🛠️ Como Rodar o Projeto

### Pré-requisitos
- Node.js >= 18
- npm >= 9

### Instalação e execução

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Pré-visualizar o build
npm run preview
```

O app estará disponível em `http://localhost:5173`

## 🗂️ Estrutura do Projeto

```
src/
├── components/
│   ├── Banner/          # Hero banner com countdown
│   ├── Footer/          # Rodapé do site
│   ├── Header/          # Cabeçalho com navegação
│   ├── ProductCard/     # Card individual de produto
│   ├── ProductModal/    # Modal com detalhes do produto
│   ├── ProductShowcase/ # Vitrine/grid de produtos
│   └── PromoBanner/     # Banners promocionais secundários
├── hooks/
│   └── useProducts.ts   # Hook para buscar produtos da API
├── services/
│   └── api.ts           # Serviço de chamada à API
├── styles/
│   ├── global.scss      # Reset e estilos globais
│   └── variables.scss   # Variáveis SASS (cores, fontes, breakpoints)
├── types/
│   └── product.ts       # Tipos TypeScript (interfaces)
├── App.tsx
└── main.tsx
```

## 🎨 Decisões de Design

- Paleta de cores baseada no layout Figma (roxo primário `#5c2d91`, dourado `#ffd700`)
- Tema Black Friday no banner hero (fundo escuro com detalhes dourados)
- Grid responsivo com 5 colunas no desktop, 2 no mobile
- Modal com dois painéis: imagem à esquerda, informações à direita

## 📦 API Utilizada

```
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```
