(() => {
  const text = (tag, value, className) => {
    const element = document.createElement(tag);
    element.textContent = value;
    if (className) element.className = className;
    return element;
  };
  document.querySelectorAll('[data-delivery]').forEach(container => {
    const inline = container.dataset.delivery === 'inline';
    if (!inline) container.append(text('h3', 'Mais formas de pedir'));
    const options = inline ? container : document.createElement('div');
    if (!inline) options.className = 'delivery-options__buttons';
    for (const [id,label] of [['ifood','Pedir pelo iFood'],['keeta','Pedir pela Keeta']]) {
      const url = window.CREAM_DELIVERY?.[id];
      let valid = false;
      try { valid = new URL(url).protocol === 'https:'; } catch { /* Canal sem URL oficial. */ }
      const button = text(valid ? 'a' : 'button', inline ? (id === 'ifood' ? 'iFood' : 'Keeta') : label, `delivery-platform delivery-platform--${id}`);
      button.setAttribute('aria-label', label);
      if (valid) { button.href=url; button.target='_blank'; button.rel='noopener noreferrer'; }
      else {button.type='button';button.disabled=true;button.append(text('small','Canal ainda não habilitado'));}
      options.append(button);
    }
    if (!inline) container.append(options);
  });
  const track = document.getElementById('reviewsTrack');
  if (!track || typeof REVIEWS === 'undefined') return;
  REVIEWS.forEach(review => {
    const card = document.createElement('article');
    card.className='review-card reveal';
    if (review.rating != null) {
      const stars=text('div','★'.repeat(review.rating),'review-stars');
      stars.setAttribute('aria-label',`${review.rating} de 5 estrelas`);card.append(stars);
    }
    card.append(text('blockquote',review.text));
    if (review.tags?.length) {const tags=document.createElement('div');tags.className='depoimento-tags';review.tags.forEach(tag=>tags.append(text('span',tag)));card.append(tags);}
    const author=document.createElement('div');author.className='review-author';
    const avatar=review.avatar ? document.createElement('img') : text('span',review.name.split(' ').map(n=>n[0]).slice(0,2).join(''),'author-avatar');
    if (review.avatar) {avatar.src=review.avatar;avatar.alt='';avatar.className='author-avatar';avatar.loading='lazy';}
    avatar.setAttribute('aria-hidden','true');author.append(avatar);
    const details=document.createElement('div');details.append(text('strong',review.name),text('span',review.location));
    if (review.source) details.append(text('span',review.source));
    author.append(details);card.append(author);track.append(card);
    if (typeof revealObs !== 'undefined') revealObs.observe(card); else card.classList.add('visible');
  });
  const prev=document.querySelector('[data-review-prev]'), next=document.querySelector('[data-review-next]');
  const update=()=>{prev.disabled=track.scrollLeft<=2;next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-2;};
  const move=direction=>track.scrollBy({left:direction*(track.firstElementChild.getBoundingClientRect().width+24),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
  track.addEventListener('scroll',update,{passive:true});
  track.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}});
  new ResizeObserver(update).observe(track);update();
})();
