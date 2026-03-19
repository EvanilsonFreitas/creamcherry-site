# 🍒 CreamCherry — Guia de Personalização

Este arquivo explica **exatamente onde alterar** cada elemento do site.

---

## 📞 Contatos e Links

### Número de WhatsApp
Buscar e substituir em **todos os arquivos HTML**:
```
wa.me/5511989582586
```
Troque pelo seu número real (apenas dígitos, com código do país).

### E-mail comercial
Buscar e substituir:
```
Comercial@creamcherry.com.br
```

### Redes sociais (footer e mobile menu)
Em todos os `<a href="#">` com ícones de redes sociais, adicione os links reais.

---

## 🖼️ FOTOS DOS PRODUTOS (Cardápio e Formulário de Atacado)

### Cardápio (`pages/cardapio.html`)

No arquivo `pages/cardapio.html`, localize o array `CATALOGO` no `<script>`.
Cada produto tem um campo `photo:''` — substitua pela caminho da imagem:

```js
// ANTES (usa emoji como placeholder):
{ id:'baunilha', ..., photo:'' }

// DEPOIS (com foto real):
{ id:'baunilha', ..., photo:'../images/produtos/baunilha.jpg' }
```

**Formato recomendado:**
- Tamanho: 400×300px (proporção 4:3)
- Formato: `.jpg` ou `.webp`
- Pasta: `images/produtos/`

Lista de IDs de produtos para criar as fotos:
| ID             | Nome do Produto         |
|----------------|-------------------------|
| `baunilha`     | Baunilha Clássica       |
| `chocolate`    | Chocolate Belga         |
| `morango`      | Morango Fresco          |
| `amendoim`     | Crocante de Amendoim    |
| `limao`        | Limão Siciliano         |
| `cherry_cc`    | Cherry Cheesecake       |
| `pistache`     | Pistache Italiano       |
| `nutella`      | Nutella Trufado         |
| `tiramisu`     | Tiramisù                |
| `coco_mara`    | Coco & Maracujá         |
| `acai`         | Açaí Power              |
| `matcha`       | Matcha & Limão          |
| `gel_cereja`   | Gelatto Cereja          |
| `gel_pist`     | Gelatto Pistacchio      |
| `gel_ciocco`   | Gelatto Cioccolato Nero |
| `fiordi`       | Gelatto Fiordilatte     |

### Formulário de Atacado (`pages/atacado.html`)

No `<script>` do arquivo, localize `const PRODUTOS_ATACADO = [...]`.
Cada produto tem o campo `cat` — a ilustração SVG é gerada automaticamente por categoria (Tradicional, Especial, Vegano, Gelatto). Quando tiver fotos reais, adicione um campo `photo` e atualize a função `addProductCard()` para renderizá-la no thumbnail.

---

## 🎨 Cores e Identidade Visual

Arquivo: `css/variables.css`

```css
--red:       #C8102E;   /* Cor principal */
--red-dark:  #9E0B23;   /* Hover / fundo escuro */
--red-light: #E01535;   /* Versão mais vibrante */
```

---

## 📝 Textos e Conteúdo

### Home (`index.html`)
- **Hero title/desc**: linhas 120–130
- **Seção Diferenciais**: linha ~180
- **Depoimentos**: linha ~220

### Sobre Nós (`pages/sobre.html`)
- **Textos da história**: seção `#historia`
- **Fundadores**: seção `.founders-grid` — altere nome, cargo e bio
- **Timeline**: altere os anos e eventos na `.timeline`
- **Missão/Visão/Valores**: seção `.values-grid`

### Cardápio (`pages/cardapio.html`)
- **Dados dos produtos**: array `CATALOGO` no `<script>`
  - `name`: nome do sabor
  - `desc`: descrição completa (aparece no modal)
  - `price`: preço (ex: `'R$ 12,90'`)
  - `ingredientes`: array com lista de ingredientes
  - `alergenos`: array com alérgenos (ex: `['leite', 'ovos']`)
  - `nutricao`: array de arrays `[nome, quantidade, %VD]`

---

## 🐍 Backend (`.env`)

Arquivo: `backend/.env` (criar a partir do `backend/.env.example`)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seuemail@gmail.com       # E-mail que envia
SMTP_PASS=sua-senha-de-app          # Senha de app do Gmail
EMAIL_TO=Comercial@creamcherry.com.br  # Recebe formulários gerais
ATACADO_EMAIL=Comercial@creamcherry.com.br  # Recebe formulários de atacado (fixo, não exposto)
```

> **Nota de segurança:** O e-mail destinatário dos formulários de atacado (`ATACADO_EMAIL`) é definido apenas no `.env` do servidor — **nunca aparece no HTML** que o usuário vê.

---

## 🗂️ Estrutura de Pastas para Imagens

```
images/
├── logos/
│   ├── logo-original-transparent.png   ← Header (fundo transparente)
│   ├── logo-branco-transparent.png     ← Footer
│   ├── logo-principal-transparent.png  ← Ícone compacto (scroll)
│   └── logo-extenso-transparent.png    ← Uso alternativo
└── produtos/                           ← CRIAR ESTA PASTA
    ├── baunilha.jpg
    ├── chocolate.jpg
    ├── morango.jpg
    └── ... (um arquivo por produto)
```

---

## 🚀 Deploy

### Só o frontend (sem backend):
```bash
# Hospedar em Vercel, Netlify ou GitHub Pages
# Basta fazer upload da pasta cream-cherry/
```

### Com o backend Flask:
```bash
# Railway, Render ou Heroku
cd backend
pip install -r requirements.txt
cp .env.example .env   # Configure as variáveis
python app.py
```

---

*Dúvidas? Entre em contato: Comercial@creamcherry.com.br*
