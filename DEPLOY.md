# 🚀 Deploy — GitHub Pages + Render

## Estrutura final
```
GitHub Pages  → site (HTML/CSS/JS)
Render.com    → backend (Flask/Python)
```

---

## PARTE 1 — Backend no Render

### 1. Crie uma conta em render.com

### 2. Crie um repositório só para o backend
No GitHub, crie um repositório novo (ex: `creamcherry-api`) e suba apenas a pasta `backend/`:
```
creamcherry-api/
  app.py
  requirements.txt
  Procfile
  render.yaml
  .gitignore     ← garante que .env não vai para o GitHub
```

### 3. No Render, crie um novo Web Service
- Clique em **"New"** → **"Web Service"**
- Conecte o repositório `creamcherry-api`
- Render detecta automaticamente o Python
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `gunicorn app:app --bind 0.0.0.0:$PORT`

### 4. Configure as variáveis de ambiente no Render
Em **"Environment"**, adicione:

| Key | Value |
|-----|-------|
| `SMTP_HOST` | `smtp.office365.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `comercial@creamcherry.com.br` |
| `SMTP_PASS` | `sua-senha-de-app` |
| `EMAIL_FROM` | `comercial@creamcherry.com.br` |
| `EMAIL_TO` | `comercial@creamcherry.com.br` |
| `ATACADO_EMAIL` | `comercial@creamcherry.com.br` |

### 5. Copie a URL do seu serviço
Após o deploy, o Render fornece uma URL assim:
```
https://creamcherry-api.onrender.com
```

---

## PARTE 2 — Atualizar o front-end

Abra o arquivo `js/config.js` e substitua a URL:

```js
const API_URL = 'https://creamcherry-api.onrender.com';
```

---

## PARTE 3 — Front-end no GitHub Pages

### 1. Crie um repositório para o site
No GitHub, crie (ex: `creamcherry-site`) e suba toda a pasta `cream-cherry/` exceto a pasta `backend/`.

### 2. Ative o GitHub Pages
- No repositório → **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: **main** → pasta **/ (root)**
- Clique em **Save**

### 3. Seu site estará em:
```
https://SEU-USUARIO.github.io/creamcherry-site/
```

---

## Testando tudo junto

Acesse o site no GitHub Pages, preencha um formulário e verifique se chegou em `comercial@creamcherry.com.br`.

✅ Pronto! Site online e formulários funcionando gratuitamente.
