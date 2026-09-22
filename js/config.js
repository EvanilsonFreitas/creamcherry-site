/* ================================================
   CreamCherry — Configuração da API
   ================================================
   
   LOCAL (desenvolvimento):
   Rode o backend com: python app.py
   e deixe API_URL como string vazia ''
   
   PRODUÇÃO (após deploy no Render):
   Substitua pela URL do seu serviço no Render:
   Exemplo: 'https://creamcherry-api.onrender.com'
   
   ================================================ */

const API_URL = 'https://creamcherry-api.onrender.com';

/* ── Não altere abaixo desta linha ── */
window.CREAM_API = API_URL;

// Preencher apenas com URLs HTTPS das lojas oficiais verificadas. Valores vazios não geram links.
window.CREAM_DELIVERY = {
  ifood: "https://www.ifood.com.br/delivery/sao-paulo-sp/creamcherry-sorvetes-e-acai-parque-novo-mundo/3dc7c888-4a47-4442-9e1e-10234b15e870?utm_medium=share",
  keeta: "https://url-eu.mykeeta.com/LlBEIz7z"
};
