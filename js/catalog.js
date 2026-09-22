
  const CAT_LABEL = {
    tradicionais: 'Tradicional',
    especiais:    'Especial',
    veganos:      'Vegano',
    gelattos:     'Gelatto',
  };

  const CAT_CSS = {
    tradicionais: '',
    especiais:    '',
    veganos:      'c-vegano',
    gelattos:     'c-gelatto',
  };

  const BG_CAT = {
    tradicionais: 'linear-gradient(135deg,#FFF5E4,#FFE8C8)',
    especiais:    'linear-gradient(135deg,#FFF0F2,#FFD0D8)',
    veganos:      'linear-gradient(135deg,#F0FAF3,#C8F5D0)',
    gelattos:     'linear-gradient(135deg,#EFF6FF,#BFDBFE)',
  };

  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const params = new URLSearchParams(location.search);
  let currentCat = CATALOG_CATEGORIES.some(c => c.id === params.get('cat')) ? params.get('cat') : 'todos';
  let currentSub = 'todos';
  let currentVolume = 'todos';
  const legacyLine = Object.hasOwn(CAT_LABEL, params.get('cat')) ? params.get('cat') : 'todos';
  document.getElementById('lineFilter').value = legacyLine;
  const imageMarkup = p => p.photo
    ? `<img src="../${escapeHTML(p.photo)}" alt="${escapeHTML(p.name)}, ${p.illustrative ? 'fotografia ilustrativa' : 'imagem do sabor'}" width="800" height="600" loading="lazy" decoding="async">${p.illustrative ? '<span class="photo-caption">Imagem ilustrativa</span>' : ''}`
    : '<span class="product-photo-pending"><i class="fa-solid fa-ice-cream" aria-hidden="true"></i>Fotografia em breve</span>';

  function renderNavigation() {
    const button = (id,name,active,attribute) => `<button type="button" class="cat-tab ${active === id ? 'active' : ''}" ${attribute}="${id}" aria-pressed="${active === id}">${name}</button>`;
    document.getElementById('catTabs').innerHTML = button('todos','Todos',currentCat,'data-category') + CATALOG_CATEGORIES.map(c=>button(c.id,c.name,currentCat,'data-category')).join('');
    const category = CATALOG_CATEGORIES.find(c=>c.id===currentCat);
    document.getElementById('subTabs').innerHTML = category ? button('todos','Todas as apresentações',currentSub,'data-subcategory') + category.subcategories.map(s=>button(s.id,s.name,currentSub,'data-subcategory')).join('') : '';
    const subcategory = category?.subcategories.find(s=>s.id===currentSub);
    document.getElementById('presentationTabs').innerHTML = subcategory?.presentations ? button('todos','Todos os volumes',currentVolume,'data-volume') + subcategory.presentations.map(v=>button(v,v,currentVolume,'data-volume')).join('') : '';
  }

  function applyFilters() {
    const q = normalize(document.getElementById('searchInput').value.trim());
    const line = document.getElementById('lineFilter').value;
    const list = CATALOGO.filter(p => p.availability !== 'oculto' &&
      (currentCat === 'todos' || p.category === currentCat) &&
      (currentSub === 'todos' || p.subcategory === currentSub) &&
      (currentVolume === 'todos' || `${p.volume} ${p.unit}` === currentVolume) &&
      (line === 'todos' || p.cat === line) &&
      (!q || normalize([p.name,p.flavor,p.desc,...(p.ingredientes || [])].join(' ')).includes(q))
    ).sort((a,b)=>a.order-b.order);
    document.getElementById('resultsInfo').textContent = `${list.length} produto${list.length === 1 ? '' : 's'} encontrado${list.length === 1 ? '' : 's'}. Consulte a disponibilidade com nossa equipe.`;
    const grid = document.getElementById('prodGrid');
    grid.innerHTML = list.length ? list.map(p=>`<article class="prod-card">
      <div class="prod-card__thumb">${imageMarkup(p)}</div>
      <div class="prod-card__body"><div class="prod-card__cat">${escapeHTML(CATALOG_CATEGORIES.find(c=>c.id===p.category)?.name)} · ${escapeHTML(CAT_LABEL[p.cat] || '')}</div>
      <h2 class="prod-card__name">${escapeHTML(p.name)}</h2><span class="product-volume">${p.subcategory === 'sabores' ? 'Porção' : escapeHTML(p.subcategory)} · ${escapeHTML(p.volume)} ${escapeHTML(p.unit)}</span>
      <p class="prod-card__desc">${escapeHTML(p.desc)}</p><div class="prod-card__footer"><button class="btn-saiba" type="button" data-product="${escapeHTML(p.id)}" aria-label="Ver detalhes de ${escapeHTML(p.name)}">Ver detalhes <span aria-hidden="true">↗</span></button><span class="product-availability">${({disponivel:'Disponível',indisponivel:'Indisponível',consultar:'Sob consulta'})[p.availability] || 'Sob consulta'}</span></div></div></article>`).join('')
      : '<div class="empty-state"><i class="fa-solid fa-ice-cream" aria-hidden="true"></i><h2>Nenhum produto nesta seleção</h2><p>Consulte nossa equipe sobre as apresentações disponíveis ou explore outros sabores.</p><button type="button" class="btn btn--outline" id="clearFilters">Limpar filtros</button><a class="btn btn--red" href="https://wa.me/5511989582586" target="_blank" rel="noopener noreferrer">Consultar atendimento</a></div>';
    grid.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.parentElement.innerHTML=imageMarkup({photo:''});},{once:true}));
  }
  document.getElementById('prodGrid').addEventListener('click', e=>{
    const product = e.target.closest('[data-product]');
    if (product) openModal(product.dataset.product);
    if (e.target.closest('#clearFilters')) { currentCat='todos'; currentSub='todos'; currentVolume='todos'; document.getElementById('lineFilter').value='todos'; document.getElementById('searchInput').value=''; renderNavigation(); applyFilters(); }
  });
  document.querySelector('.cardapio-page').addEventListener('click', e=>{
    const button=e.target.closest('[data-category], [data-subcategory], [data-volume]');
    if (!button) return;
    if (button.hasAttribute('data-category')) {currentCat=button.dataset.category;currentSub='todos';currentVolume='todos';document.getElementById('lineFilter').value='todos';}
    if (button.hasAttribute('data-subcategory')) {currentSub=button.dataset.subcategory;currentVolume='todos';}
    if (button.hasAttribute('data-volume')) currentVolume=button.dataset.volume;
    const attribute = button.getAttributeNames().find(a=>a.startsWith('data-'));
    const value = button.getAttribute(attribute);
    renderNavigation(); applyFilters();
    [...document.querySelectorAll(`[${attribute}]`)].find(el=>el.getAttribute(attribute)===value)?.focus();
  });
  document.getElementById('lineFilter').addEventListener('change',applyFilters);
  renderNavigation();
  applyFilters();

  /* ── Modal ── */
  function openModal(id) {
    const p = CATALOGO.find(x => x.id === id);
    if (!p) return;

    document.getElementById('modalHeader').style.background = BG_CAT[p.cat] || '#f5f5f5';
    const headerInner = document.getElementById('modalHeader');
    // Clear old emoji span if present
    headerInner.querySelectorAll('span').forEach(el => el.remove());
    headerInner.querySelectorAll('img:not(.modal__close img)').forEach(el => el.remove());
    if (p.photo) {
      const img = document.createElement('img');
      img.src = '../' + p.photo; img.alt = p.name;
      headerInner.insertBefore(img, headerInner.firstChild);
    } else {
      const sp = document.createElement('span');
      sp.textContent = 'Fotografia em breve';
      sp.style.cssText = 'font-size:1rem;position:relative;z-index:1;';
      headerInner.insertBefore(sp, headerInner.firstChild);
    }

    document.getElementById('modalCat').textContent    = CAT_LABEL[p.cat] || CATALOG_CATEGORIES.find(c => c.id === p.category)?.name || '';
    document.getElementById('modalCat').className      = 'modal__cat ' + (CAT_CSS[p.cat] || '');
    document.getElementById('modalName').textContent   = p.name;
    document.getElementById('modalDesc').textContent   = p.desc;
    // price removed — catalogue is informational only

    // Info grid
    document.getElementById('modalInfoGrid').innerHTML = `
      <div class="modal__info-item"><label>Apresentação</label><span>${escapeHTML(p.porcao || `${p.volume} ${p.unit}`)}</span></div>
      ${p.calorias ? `<div class="modal__info-item"><label>Calorias</label><span>${escapeHTML(p.calorias)}</span></div>` : ''}
    `;

    // Ingredients
    document.getElementById('modalIngredients').innerHTML = (p.ingredientes || []).map(i =>
      `<span class="ing-tag ${p.alergenos?.includes(i.toLowerCase().split(' ')[0]) ? 'allergen' : ''}">${i}</span>`
    ).join('');

    document.getElementById('modalAllergenNote').innerHTML = p.alergenos?.length
      ? `<i class="fa-solid fa-triangle-exclamation" style="color:#FFB300;margin-right:.4rem"></i><strong>Alergênicos:</strong> ${p.alergenos.join(', ')}. Pode conter traços de outros alérgenos. Consulte nosso atendimento se tiver restrições alimentares.`
      : 'Consulte nosso atendimento sobre alergênicos antes de consumir.';

    // Nutrition
    document.getElementById('modalNutritionBody').innerHTML = (p.nutricao || []).map(row =>
      `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`
    ).join('');
    const nutrition = document.getElementById('modalNutrition');
    nutrition.hidden = !p.nutricao?.length;
    nutrition.previousElementSibling.hidden = !p.nutricao?.length;
    const ingredients = document.getElementById('modalIngredients');
    ingredients.hidden = !p.ingredientes?.length;
    ingredients.previousElementSibling.hidden = !p.ingredientes?.length;
    if (p.illustrative) {
      const caption = document.createElement('span');
      caption.className = 'photo-caption';
      caption.textContent = 'Imagem ilustrativa';
      headerInner.append(caption);
    }

    // WhatsApp link
    document.getElementById('modalWhatsapp').href =
      `https://wa.me/5511989582586?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(p.name)}!`;

    modalTrigger = document.activeElement;
    document.getElementById('modalBackdrop').inert = false;
    document.getElementById('modalBackdrop').setAttribute('aria-hidden', 'false');
    document.getElementById('modalBackdrop').classList.add('open');
    document.querySelector('.modal__close').focus();
    document.body.style.overflow = 'hidden';
  }

  function closeModal(e) {
    // Close on: backdrop click, close button click, or no event (programmatic)
    if (e) {
      const backdrop = document.getElementById('modalBackdrop');
      const isBackdrop = e.target === backdrop;
      const isCloseBtn = e.target.closest('.modal__close');
      if (!isBackdrop && !isCloseBtn) return;
    }
    document.getElementById('modalBackdrop').classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('modalBackdrop').inert = true;
    document.getElementById('modalBackdrop').setAttribute('aria-hidden', 'true');
    modalTrigger?.focus();
  }

  let modalTrigger;
  document.addEventListener('keydown', e => {
    const backdrop = document.getElementById('modalBackdrop');
    if (!backdrop.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') {
      const nodes = [...backdrop.querySelectorAll('button, a[href]')];
      const first = nodes[0], last = nodes.at(-1);
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
