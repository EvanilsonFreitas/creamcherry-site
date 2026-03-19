# 🍒 CreamCherry Sobremesas — Site Premium

Site completo para sorveteria artesanal premium.

---

## 📁 Estrutura de Pastas

```
cream-cherry/
├── index.html                    ← Página Home
├── css/
│   ├── variables.css             ← Tokens de design (cores, fontes, espaçamentos)
│   ├── reset.css                 ← Reset + utilitários globais + botões
│   ├── header.css                ← Header fixo + menu mobile
│   ├── hero.css                  ← Seção hero animada
│   ├── sections.css              ← Todas as seções internas
│   ├── footer.css                ← Rodapé completo estilo e-commerce
│   └── animations.css            ← Scroll reveal + microinterações
├── js/
│   ├── data.js                   ← Dados dos sabores/produtos (32 itens, 4 categorias)
│   └── main.js                   ← Menu, FAQ, tabs, carrinho, toast, scroll
├── images/
│   └── logos/
│       ├── logo-original-transparent.png   ← Header (fundo transparente)
│       ├── logo-branco-transparent.png     ← Footer (fundo transparente)
│       ├── logo-extenso-transparent.png    ← Uso alternativo
│       └── logo-principal-transparent.png  ← Ícone isolado
├── pages/
│   ├── cardapio.html             ← Cardápio completo com busca + filtros
│   ├── suporte.html              ← FAQ accordion + formulário de contato
│   ├── franquias.html            ← Modelo de negócio + formulário
│   └── atacado.html              ← Encomendas no atacado (formulário completo)
└── backend/
    ├── app.py                    ← API Flask
    ├── requirements.txt          ← Dependências Python
    └── .env.example              ← Template de variáveis de ambiente
```

---

## 🚀 Como rodar

### Frontend (estático)
Abra o `index.html` diretamente no navegador **ou** use um servidor local:

```bash
# Com Python
python -m http.server 8080

# Com Node.js
npx serve .
```

Acesse: `http://localhost:8080`

---

### Backend (Flask API)

```bash
cd backend

# 1. Ambiente virtual
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

# 2. Dependências
pip install -r requirements.txt

# 3. Configurar variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais SMTP

# 4. Rodar
python app.py
```

API disponível em: `http://localhost:5000`

---

## 📡 Endpoints da API

| Método | Endpoint                | Descrição                                        |
|--------|-------------------------|--------------------------------------------------|
| POST   | `/api/contato`          | Formulário de contato/suporte                    |
| POST   | `/api/newsletter`       | Inscrição na newsletter                          |
| POST   | `/api/franquia`         | Proposta de franquia                             |
| POST   | `/api/atacado`          | Solicitação de encomenda no atacado              |
| GET    | `/api/admin/contacts`   | Lista contatos (dev only)                        |

> **Segurança:** o e-mail destinatário do formulário de atacado é **fixo no backend**
> (`ATACADO_EMAIL` no `.env`) — nunca exposto ao front-end.

---

## 📞 Contato & Configurações

| Item                 | Valor                            |
|----------------------|----------------------------------|
| WhatsApp             | +55 11 98958-2586                |
| E-mail comercial     | Comercial@creamcherry.com.br     |
| Delivery             | 99Food + WhatsApp                |
| Área de atendimento  | São Paulo (atacado)              |

---

## 🎨 Identidade Visual

| Token             | Valor                  |
|-------------------|------------------------|
| Cor principal     | `#C8102E`              |
| Cor escura        | `#9E0B23`              |
| Fundo creme       | `#FFF8F0`              |
| Fonte display     | Playfair Display       |
| Fonte corpo       | DM Sans                |
| Fonte destaque    | Caveat                 |

---

## 📄 Páginas incluídas

- **Home** `index.html` — Hero, cardápio preview, diferenciais, delivery (99Food + WhatsApp), depoimentos, sustentabilidade, FAQ, newsletter, footer completo
- **Cardápio** `pages/cardapio.html` — 32 sabores com busca em tempo real e filtros por categoria
- **Suporte** `pages/suporte.html` — FAQ accordion + formulário integrado ao backend
- **Franquias** `pages/franquias.html` — Benefícios, modelo de negócio e formulário
- **Atacado** `pages/atacado.html` — Formulário completo com:
  - Validação de todos os campos
  - Máscara de telefone automática
  - Busca de CEP via ViaCEP API (auto-preenche logradouro e bairro)
  - Bloqueio de CEPs fora de São Paulo
  - Seletor dinâmico de produtos + quantidades
  - E-mail destinatário fixo no backend (não exposto ao usuário)

---

## 💡 Próximos passos sugeridos

- [ ] Adicionar banco de dados real (SQLite ou PostgreSQL) no backend
- [ ] Criar área admin com autenticação para visualizar pedidos
- [ ] Integrar pagamento (Stripe, Mercado Pago)
- [ ] Deploy: Vercel (frontend) + Railway/Render (backend Flask)
- [ ] Adicionar Google Analytics / Meta Pixel
