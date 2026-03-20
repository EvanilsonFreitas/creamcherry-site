/* ========================================
   CREAM CHERRY — Formulários
   Backend: Flask no Render
   ======================================== */

/* ════════════════════════════════════════
   MODAL DE SUCESSO
════════════════════════════════════════ */
function showSuccessModal(title, message) {
  // Remove modal anterior se existir
  const existing = document.getElementById('successModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'successModal';
  modal.innerHTML = `
    <div class="smodal-backdrop" onclick="closeSuccessModal()"></div>
    <div class="smodal-box">
      <div class="smodal-icon">
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="25" stroke="#2D8A4E" stroke-width="2"/>
          <circle cx="26" cy="26" r="25" fill="#F0FAF3" class="smodal-circle-fill"/>
          <path d="M14 26 L22 34 L38 18" stroke="#2D8A4E" stroke-width="3" 
                stroke-linecap="round" stroke-linejoin="round" class="smodal-check"/>
        </svg>
      </div>
      <h3 class="smodal-title">${title}</h3>
      <p class="smodal-msg">${message}</p>
      <button class="smodal-btn" onclick="closeSuccessModal()">
        <i class="fa-solid fa-check"></i> Entendido!
      </button>
    </div>
  `;

  // CSS inline para não depender de arquivo externo
  const style = document.createElement('style');
  style.textContent = `
    #successModal {
      position: fixed; inset: 0; z-index: 99999;
      display: flex; align-items: center; justify-content: center;
      padding: 1rem;
      animation: smodal-in 0.35s cubic-bezier(0.22,1,0.36,1);
    }
    @keyframes smodal-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    .smodal-backdrop {
      position: absolute; inset: 0;
      background: rgba(0,0,0,0.55);
      backdrop-filter: blur(4px);
    }
    .smodal-box {
      position: relative; z-index: 1;
      background: white;
      border-radius: 20px;
      padding: 2.5rem 2rem;
      max-width: 420px; width: 100%;
      text-align: center;
      box-shadow: 0 24px 64px rgba(0,0,0,0.2);
      animation: smodal-box-in 0.4s cubic-bezier(0.22,1,0.36,1);
    }
    @keyframes smodal-box-in {
      from { opacity: 0; transform: translateY(32px) scale(0.95); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    .smodal-icon {
      width: 80px; height: 80px;
      margin: 0 auto 1.5rem;
      position: relative;
    }
    .smodal-icon svg { width: 100%; height: 100%; }
    .smodal-circle-fill {
      animation: smodal-fill 0.4s ease 0.2s both;
    }
    @keyframes smodal-fill {
      from { fill: white; }
      to   { fill: #F0FAF3; }
    }
    .smodal-check {
      stroke-dasharray: 40;
      stroke-dashoffset: 40;
      animation: smodal-check 0.5s ease 0.35s forwards;
    }
    @keyframes smodal-check {
      to { stroke-dashoffset: 0; }
    }
    .smodal-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.5rem; font-weight: 900;
      color: #2E2420; margin-bottom: 0.75rem;
    }
    .smodal-msg {
      font-size: 0.95rem; color: #666;
      line-height: 1.7; margin-bottom: 1.75rem;
    }
    .smodal-btn {
      display: inline-flex; align-items: center; gap: 0.5rem;
      background: #C8102E; color: white;
      padding: 0.85rem 2rem;
      border-radius: 999px;
      font-size: 0.95rem; font-weight: 700;
      border: none; cursor: pointer;
      transition: background 0.2s, transform 0.2s;
      font-family: inherit;
    }
    .smodal-btn:hover { background: #9E0B23; transform: translateY(-2px); }
    @media (max-width: 480px) {
      .smodal-box { padding: 2rem 1.5rem; }
      .smodal-title { font-size: 1.3rem; }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
  const modal = document.getElementById('successModal');
  if (!modal) return;
  modal.style.animation = 'smodal-in 0.25s cubic-bezier(0.22,1,0.36,1) reverse';
  setTimeout(() => {
    modal.remove();
    document.body.style.overflow = '';
  }, 240);
}

/* ════════════════════════════════════════
   BOTÃO DE LOADING
════════════════════════════════════════ */
function setBtnLoading(btn, loading) {
  if (!btn) return;
  if (loading) {
    btn._originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...';
    btn.disabled = true;
    btn.style.opacity = '0.8';
  } else {
    btn.innerHTML = btn._originalText || 'Enviar';
    btn.disabled = false;
    btn.style.opacity = '';
  }
}

/* ════════════════════════════════════════
   MOTOR DE ENVIO — Flask Backend
════════════════════════════════════════ */
async function sendToAPI(endpoint, payload) {
  const url = `${window.CREAM_API}${endpoint}`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    return json.success === true || res.status === 201 || res.status === 200;
  } catch (err) {
    console.error('Erro ao enviar:', err);
    return false;
  }
}

/* ════════════════════════════════════════
   FORMULÁRIO — CONTATO / SUPORTE
════════════════════════════════════════ */
async function submitForm(btnEl) {
  const name    = document.getElementById('formName')?.value.trim();
  const email   = document.getElementById('formEmail')?.value.trim();
  const subject = document.getElementById('formSubject')?.value;
  const message = document.getElementById('formMessage')?.value.trim();

  if (!name || !email || !subject || !message) {
    showToast('⚠️ Preencha todos os campos!');
    return;
  }

  const btn = btnEl || document.querySelector('[onclick*="submitForm"]');
  setBtnLoading(btn, true);

  const ok = await sendToAPI('/api/contato', { name, email, subject, message });

  setBtnLoading(btn, false);

  if (ok) {
    // Limpa os campos
    ['formName','formEmail','formSubject','formMessage'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    showSuccessModal(
      'Mensagem enviada!',
      'Recebemos seu contato com sucesso. Nossa equipe responderá em breve. Você também receberá uma confirmação por e-mail.'
    );
  } else {
    showToast('❌ Erro ao enviar. Tente pelo WhatsApp: (11) 98958-2586');
  }
}

/* ════════════════════════════════════════
   FORMULÁRIO — FRANQUIAS
════════════════════════════════════════ */
async function submitFranquia(btnEl) {
  const fields = ['fName','fEmail','fPhone','fCity','fCapital','fMessage'];
  const data = {};
  for (const f of fields) {
    const val = document.getElementById(f)?.value.trim();
    if (!val) { showToast('⚠️ Preencha todos os campos!'); return; }
    data[f] = val;
  }

  const btn = btnEl || document.querySelector('[onclick*="submitFranquia"]');
  setBtnLoading(btn, true);

  const ok = await sendToAPI('/api/franquia', data);

  setBtnLoading(btn, false);

  if (ok) {
    fields.forEach(f => { const el = document.getElementById(f); if (el) el.value = ''; });
    showSuccessModal(
      'Proposta recebida!',
      'Recebemos seu interesse em franquia com sucesso. Nossa equipe comercial analisará seu perfil e entrará em contato em até 48 horas úteis. Você também receberá uma confirmação por e-mail.'
    );
  } else {
    showToast('❌ Erro ao enviar. Tente pelo WhatsApp: (11) 98958-2586');
  }
}

/* ════════════════════════════════════════
   FORMULÁRIO — ATACADO
════════════════════════════════════════ */
async function enviarAtacado(payload) {
  // Garante que produtos são strings legíveis no e-mail
  if (payload.produtos && Array.isArray(payload.produtos)) {
    payload.produtos = payload.produtos.map(p => ({
      produto:    typeof p === 'object' ? (p.produto || p.name || JSON.stringify(p)) : String(p),
      quantidade: typeof p === 'object' ? (p.quantidade || p.qty || 0) : 0,
    }));
  }

  const btn = document.querySelector('[onclick*="submitAtacado"]') ||
              document.querySelector('button[type="submit"]');
  setBtnLoading(btn, true);

  const ok = await sendToAPI('/api/atacado', payload);

  setBtnLoading(btn, false);

  if (ok) {
    showSuccessModal(
      'Solicitação enviada!',
      'Recebemos seu pedido no atacado com sucesso. Nossa equipe retornará em até 24 horas úteis com orçamento e confirmação. Você também receberá uma confirmação por e-mail.'
    );
    // Reset form
    setTimeout(() => {
      document.getElementById('formContent')?.style && (document.getElementById('formContent').style.display = '');
      document.getElementById('successMsg')?.style && (document.getElementById('successMsg').style.display = 'none');
    }, 300);
  } else {
    showToast('❌ Erro ao enviar. Tente pelo WhatsApp: (11) 98958-2586');
  }

  return ok;
}

/* ════════════════════════════════════════
   NEWSLETTER
════════════════════════════════════════ */
async function subscribeNewsletter() {
  const input = document.getElementById('newsletterEmail');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) { showToast('Digite um e-mail válido.'); return; }

  const ok = await sendToAPI('/api/newsletter', { email });

  if (ok) {
    input.value = '';
    showSuccessModal(
      'Inscrito com sucesso!',
      'Você receberá em primeira mão novos sabores, promoções exclusivas e novidades da CreamCherry. Bem-vindo(a)!'
    );
  } else {
    showToast('❌ Erro ao se inscrever. Tente novamente.');
  }
}
