/* ========================================
   CREAM CHERRY — Formulários via JS
   Sem backend Python necessário!

   ESCOLHA UM SERVIÇO:
   ──────────────────
   Opção A: FormSubmit  → zero cadastro, só confirmar e-mail 1x
   Opção B: EmailJS     → cadastro gratuito, templates HTML bonitos
   Opção C: Web3Forms   → cadastro gratuito, simples

   Como ativar: veja as instruções em cada seção abaixo
   ======================================== */

/* ════════════════════════════════════════
   CONFIGURAÇÃO — altere aqui
════════════════════════════════════════ */
const FORM_CONFIG = {

  // ── OPÇÃO A: FormSubmit ──────────────
  // 1. Não precisa de cadastro
  // 2. Coloque seu e-mail abaixo
  // 3. Na PRIMEIRA submissão, você receberá um e-mail de confirmação
  //    Clique no link de confirmação — depois funciona automaticamente
  formsubmit: {
    active: true,                              // ← mude para false para desativar
    email: 'Comercial@creamcherry.com.br',     // ← SEU E-MAIL AQUI
  },

  // ── OPÇÃO B: EmailJS ─────────────────
  // 1. Cadastre-se em https://emailjs.com (gratuito)
  // 2. Crie um "Email Service" conectando seu Outlook
  // 3. Crie um "Email Template" para cada formulário
  // 4. Preencha os IDs abaixo
  emailjs: {
    active: false,                             // ← mude para true para ativar
    publicKey:         'SUA_PUBLIC_KEY',       // ← Account > API Keys
    serviceId:         'SEU_SERVICE_ID',       // ← Email Services > Service ID
    templateContato:   'template_contato',     // ← Email Templates > Template ID
    templateFranquia:  'template_franquia',
    templateAtacado:   'template_atacado',
    templateNewsletter:'template_newsletter',
  },

  // ── OPÇÃO C: Web3Forms ───────────────
  // 1. Cadastre-se em https://web3forms.com (gratuito)
  // 2. Informe seu e-mail e copie a Access Key gerada
  web3forms: {
    active: false,                             // ← mude para true para ativar
    accessKey: 'SUA_ACCESS_KEY',              // ← dashboard web3forms.com
  },

};


/* ════════════════════════════════════════
   FORMULÁRIO — CONTATO / SUPORTE
   Arquivo: pages/suporte.html
════════════════════════════════════════ */
async function submitForm() {
  const name    = document.getElementById('formName')?.value.trim();
  const email   = document.getElementById('formEmail')?.value.trim();
  const subject = document.getElementById('formSubject')?.value;
  const message = document.getElementById('formMessage')?.value.trim();

  if (!name || !email || !subject || !message) {
    showToast('⚠️ Preencha todos os campos!');
    return;
  }

  const data = { name, email, subject, message,
    _subject: `[CreamCherry] Contato via site — ${subject}`,
    _replyto: email,
  };

  const ok = await sendEmail('contato', data);
  if (ok) {
    showToast('✅ Mensagem enviada! Responderemos em breve.');
    ['formName','formEmail','formSubject','formMessage'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  }
}


/* ════════════════════════════════════════
   FORMULÁRIO — FRANQUIAS
   Arquivo: pages/franquias.html
════════════════════════════════════════ */
async function submitFranquia() {
  const fields = ['fName','fEmail','fPhone','fCity','fCapital','fMessage'];
  const data   = {};
  for (const f of fields) {
    const val = document.getElementById(f)?.value.trim();
    if (!val) { showToast('⚠️ Preencha todos os campos!'); return; }
    data[f] = val;
  }

  data._subject = `[CreamCherry] Proposta de Franquia — ${data.fCity}`;
  data._replyto = data.fEmail;

  const ok = await sendEmail('franquia', data);
  if (ok) {
    showToast('✅ Proposta enviada! Retornaremos em breve.');
    fields.forEach(f => { const el = document.getElementById(f); if (el) el.value = ''; });
  }
}


/* ════════════════════════════════════════
   FORMULÁRIO — ATACADO
   Arquivo: pages/atacado.html
   (chamado de dentro do submitAtacado() já existente)
════════════════════════════════════════ */
async function enviarAtacado(payload) {
  payload._subject = `[CreamCherry Atacado] Pedido — ${payload.nome} / ${payload.cidade}`;
  payload._replyto = payload.email;
  return await sendEmail('atacado', payload);
}


/* ════════════════════════════════════════
   NEWSLETTER
════════════════════════════════════════ */
async function subscribeNewsletter() {
  const input = document.getElementById('newsletterEmail');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) { showToast('Digite um e-mail válido.'); return; }

  const ok = await sendEmail('newsletter', {
    email,
    _subject: '[CreamCherry] Nova inscrição na newsletter',
  });

  if (ok) {
    input.value = '';
    showToast('✅ Inscrição realizada com sucesso!');
  }
}


/* ════════════════════════════════════════
   MOTOR DE ENVIO — detecta serviço ativo
════════════════════════════════════════ */
async function sendEmail(type, data) {
  try {
    if (FORM_CONFIG.formsubmit.active)  return await _sendFormSubmit(data);
    if (FORM_CONFIG.emailjs.active)     return await _sendEmailJS(type, data);
    if (FORM_CONFIG.web3forms.active)   return await _sendWeb3Forms(data);
    // Nenhum ativo — modo dev
    console.log('[DEV] Dados do formulário:', data);
    return true;
  } catch (err) {
    console.error('Erro ao enviar formulário:', err);
    showToast('❌ Erro ao enviar. Tente pelo WhatsApp.');
    return false;
  }
}


/* ──────────────────────────────────────
   OPÇÃO A: FormSubmit
   https://formsubmit.co
────────────────────────────────────── */
async function _sendFormSubmit(data) {
  const email = FORM_CONFIG.formsubmit.email;
  const formData = new FormData();

  // Campos especiais FormSubmit
  formData.append('_subject',     data._subject || 'Formulário CreamCherry');
  formData.append('_replyto',     data._replyto || '');
  formData.append('_captcha',     'false');  // desativa captcha
  formData.append('_template',    'table'); // e-mail em formato tabela

  // Dados do formulário
  for (const [key, val] of Object.entries(data)) {
    if (!key.startsWith('_')) formData.append(key, val);
  }

  const res = await fetch(`https://formsubmit.co/${email}`, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' },
  });

  const json = await res.json();
  return json.success === 'true' || json.success === true;
}


/* ──────────────────────────────────────
   OPÇÃO B: EmailJS
   https://emailjs.com
────────────────────────────────────── */
async function _sendEmailJS(type, data) {
  const cfg = FORM_CONFIG.emailjs;

  // Carrega SDK se não estiver carregado
  if (!window.emailjs) {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      s.onload  = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
    emailjs.init({ publicKey: cfg.publicKey });
  }

  const templateMap = {
    contato:   cfg.templateContato,
    franquia:  cfg.templateFranquia,
    atacado:   cfg.templateAtacado,
    newsletter:cfg.templateNewsletter,
  };

  const res = await emailjs.send(cfg.serviceId, templateMap[type] || cfg.templateContato, data);
  return res.status === 200;
}


/* ──────────────────────────────────────
   OPÇÃO C: Web3Forms
   https://web3forms.com
────────────────────────────────────── */
async function _sendWeb3Forms(data) {
  const payload = {
    access_key: FORM_CONFIG.web3forms.accessKey,
    subject:    data._subject || 'Formulário CreamCherry',
    ...data,
  };

  const res = await fetch('https://api.web3forms.com/submit', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body:    JSON.stringify(payload),
  });

  const json = await res.json();
  return json.success === true;
}
