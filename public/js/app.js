// ================================================================
//  app.js — Motor do site
//  Lê o SITE (config.js) e monta todas as seções automaticamente.
//  Não precisa editar este arquivo para personalizar o conteúdo.
// ================================================================

// ── Utilitários ─────────────────────────────────────────────────

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fmtPreco(v) {
  return 'R$ ' + Number(v).toFixed(2).replace('.', ',');
}

function waLink(texto) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(texto)}`;
}

// ── Ícones SVG ──────────────────────────────────────────────────

const ICONS = {
  leaf: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 40c4-12 12-20 32-28C36 28 28 36 8 40z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M8 40c0-8 4-16 12-20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
  chef: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 38V26a10 10 0 1 1 4-19.6A10 10 0 1 1 28 6.4 10 10 0 1 1 32 26v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 38h20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
  wine: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6h16l-4 18a8 8 0 0 1-8 0L16 6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M24 30v12M18 42h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M18 18c2 2 6 2 8 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
  star: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6l4.5 9.1 10.1 1.5-7.3 7.1 1.7 10-9-4.7-9 4.7 1.7-10L9.4 16.6l10.1-1.5L24 6z"
          stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="currentColor" stroke-width="1.5"/>
    <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="1.5"/>
  </svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"
          stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
  </svg>`,
};

// ── Renderização ─────────────────────────────────────────────────

function renderAll() {
  setupMeta();
  renderNav();
  renderHero();
  renderMarquee();
  renderAbout();
  renderMenu();
  renderFeatures();
  renderGallery();
  renderTestimonials();
  renderReservations();
  renderFooter();
  setupFloatingButtons();
}

function setupMeta() {
  document.title = `${SITE.nome} — ${SITE.slogan}`;
  document.querySelector('meta[name="description"]').content = SITE.descricao;
}

function renderNav() {
  document.getElementById('navLogo').innerHTML = `
    <span class="logo-main">${esc(SITE.nomePartes[0])}</span>
    <span class="logo-sub">${esc(SITE.nomePartes[1])}</span>
  `;
  document.getElementById('navLinks').innerHTML = `
    <li><a href="#sobre"    class="nav-link">Nossa História</a></li>
    <li><a href="#cardapio" class="nav-link">Cardápio</a></li>
    <li><a href="#galeria"  class="nav-link">Galeria</a></li>
    <li><a href="#contato"  class="nav-link">Contato</a></li>
    <li><a href="#reservas" class="nav-cta">Reservar Mesa</a></li>
  `;
}

function renderHero() {
  document.getElementById('heroImg').src = SITE.imagens.hero;
  document.getElementById('heroImg').alt = SITE.nome;

  document.getElementById('heroContent').innerHTML = `
    <p class="hero-eyebrow">Bem-vindo à</p>
    <h1 class="hero-title">${esc(SITE.nomePartes[0])}<br><em>${esc(SITE.nomePartes[1])}</em></h1>
    <p class="hero-subtitle">${esc(SITE.slogan)}</p>
    <div class="hero-actions">
      <a href="#cardapio" class="btn btn-gold">Ver Cardápio</a>
      <a href="#reservas" class="btn btn-outline">Reservar Mesa</a>
    </div>
  `;

  const [h1, h2, h3] = SITE.horarios;
  document.getElementById('heroInfoBar').innerHTML = `
    <div class="info-item">
      <span class="info-label">${esc(h1.dias)}</span>
      <span class="info-value">${esc(h1.horario)}</span>
    </div>
    <div class="info-divider"></div>
    <div class="info-item">
      <span class="info-label">${esc(h2.dias)}</span>
      <span class="info-value">${esc(h2.horario)}</span>
    </div>
    ${h3 ? `
    <div class="info-divider"></div>
    <div class="info-item">
      <span class="info-label">${esc(h3.dias)}</span>
      <span class="info-value">${esc(h3.horario)}</span>
    </div>` : ''}
    <div class="info-divider"></div>
    <div class="info-item">
      <span class="info-label">Reservas</span>
      <span class="info-value">${esc(SITE.telefone)}</span>
    </div>
  `;
}

function renderMarquee() {
  const tags = [SITE.slogan, 'Ingredientes Frescos', 'Vinhos Selecionados', 'Ambiente Aconchegante', 'Receitas Tradicionais', 'Chef Especializado'];
  const repeated = [...tags, ...tags].map(t => `<span>${esc(t)}</span><span class="dot">·</span>`).join('');
  document.getElementById('marqueeTrack').innerHTML = repeated;
}

function renderAbout() {
  document.getElementById('aboutVisuals').innerHTML = `
    <div class="about-img-main">
      <img src="${esc(SITE.imagens.sobre1)}" alt="Ambiente ${esc(SITE.nome)}" loading="lazy">
    </div>
    <div class="about-img-accent">
      <img src="${esc(SITE.imagens.sobre2)}" alt="Prato especial" loading="lazy">
    </div>
    <div class="about-badge">
      <span class="badge-since">Desde</span>
      <span class="badge-year">${esc(String(SITE.desde))}</span>
    </div>
  `;

  const statsHTML = SITE.sobre.stats.map((s, i) => `
    ${i > 0 ? '<div class="stat-divider"></div>' : ''}
    <div class="stat">
      <span class="stat-number">${esc(s.numero)}</span>
      <span class="stat-label">${esc(s.legenda)}</span>
    </div>
  `).join('');

  document.getElementById('aboutText').innerHTML = `
    <p class="section-label">Nossa História</p>
    <h2 class="section-title">${esc(SITE.sobre.titulo).replace(' em ', ' em<br><em>').replace('em<br><em>', 'em<br><em>')}</h2>
    ${SITE.sobre.textos.map(t => `<p class="about-desc">${esc(t)}</p>`).join('')}
    <div class="about-stats">${statsHTML}</div>
    <a href="#cardapio" class="btn btn-gold">Explorar Cardápio</a>
  `;
}

function renderMenu() {
  document.getElementById('menuHeader').innerHTML = `
    <p class="section-label">Nosso Cardápio</p>
    <h2 class="section-title">Sabores que<br><em>contam histórias</em></h2>
    <p class="section-desc">Pratos preparados com ingredientes frescos, selecionados diariamente.<br>
      <strong>Clique em qualquer item para ver a foto.</strong>
    </p>
  `;

  document.getElementById('menuTabs').innerHTML = SITE.cardapio.map((cat, i) => `
    <button class="menu-tab ${i === 0 ? 'active' : ''}" data-tab="${esc(cat.id)}">${esc(cat.nome)}</button>
  `).join('');

  document.getElementById('menuPanels').innerHTML = SITE.cardapio.map((cat, i) => `
    <div class="menu-panel ${i === 0 ? 'active' : ''}" id="tab-${esc(cat.id)}">
      <div class="menu-grid">
        ${cat.itens.map(item => `
          <div class="menu-item"
               data-nome="${esc(item.nome)}"
               data-desc="${esc(item.desc)}"
               data-preco="${item.preco}"
               data-img="${esc(item.img || '')}"
               role="button" tabindex="0"
               title="Clique para ver a foto">
            <div class="item-body">
              <div class="item-info">
                <h3>
                  ${esc(item.nome)}
                  ${item.tag ? `<span class="item-tag">${esc(item.tag)}</span>` : ''}
                  ${item.img ? '<span class="item-camera" aria-hidden="true">📷</span>' : ''}
                </h3>
                <p>${esc(item.desc)}</p>
              </div>
              <span class="item-price">${fmtPreco(item.preco)}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderFeatures() {
  document.getElementById('featuresGrid').innerHTML = SITE.diferenciais.map((d, i) => `
    <div class="feature-card" data-reveal style="--reveal-delay:${i * 0.12}s">
      <div class="feature-icon">${ICONS[d.icone] || ''}</div>
      <h3>${esc(d.titulo)}</h3>
      <p>${esc(d.desc)}</p>
    </div>
  `).join('');
}

function renderGallery() {
  document.getElementById('galeriaHeader').innerHTML = `
    <p class="section-label">Nossa Galeria</p>
    <h2 class="section-title">Cada detalhe é<br><em>uma experiência</em></h2>
  `;

  document.getElementById('galeriaGrid').innerHTML = SITE.galeria.map(g => {
    const cls = g.destaque ? 'gallery-item--lg' : g.small ? 'gallery-item--sm' : '';
    return `
      <div class="gallery-item ${cls}">
        <img src="${esc(g.img)}" alt="${esc(g.legenda)}" loading="lazy">
        <div class="gallery-overlay"><span>${esc(g.legenda)}</span></div>
      </div>
    `;
  }).join('');
}

function renderTestimonials() {
  document.getElementById('depHeader').innerHTML = `
    <p class="section-label">Depoimentos</p>
    <h2 class="section-title">O que nossos<br><em>clientes dizem</em></h2>
  `;

  document.getElementById('depGrid').innerHTML = SITE.depoimentos.map((d, i) => `
    <div class="testimonial-card" data-reveal style="--reveal-delay:${i * 0.15}s">
      <div class="stars">★★★★★</div>
      <p>${esc(d.texto)}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${esc(d.nome.charAt(0))}</div>
        <div>
          <strong>${esc(d.nome)}</strong>
          <span>${esc(d.local)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderReservations() {
  document.getElementById('reservasText').innerHTML = `
    <p class="section-label">Reservas</p>
    <h2 class="section-title">Reserve sua<br><em>mesa agora</em></h2>
    <p class="reservations-desc">Garanta sua experiência gastronômica. Para grupos acima de 10 pessoas, entre em contato diretamente.</p>
    <div class="contact-list">
      <div class="contact-item">
        ${ICONS.phone}
        <a href="tel:${esc(SITE.telefone)}">${esc(SITE.telefone)}</a>
      </div>
      <div class="contact-item">
        ${ICONS.email}
        <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
      </div>
      <div class="contact-item">
        ${ICONS.calendar}
        <span>Reservas via WhatsApp disponíveis</span>
      </div>
    </div>
    <a href="${esc(waLink('Olá! Gostaria de fazer uma reserva na ' + SITE.nome))}"
       target="_blank" rel="noopener" class="btn btn-whatsapp" style="margin-top:1.5rem">
      <svg viewBox="0 0 32 32" fill="currentColor" width="18" height="18">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.83.739 5.486 2.031 7.794L.071 31.929l8.378-2.197A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.274 19.509c-.398-.199-2.353-1.161-2.718-1.293-.365-.132-.63-.198-.896.199-.266.397-1.03 1.293-1.262 1.559-.232.265-.465.298-.863.099-.398-.199-1.682-.62-3.203-1.977-1.183-1.055-1.981-2.358-2.213-2.755-.232-.397-.024-.612.175-.81.179-.178.398-.465.597-.697.199-.232.265-.398.398-.664.132-.265.066-.497-.033-.696-.1-.199-.896-2.16-1.228-2.956-.323-.776-.651-.671-.896-.684-.232-.012-.497-.015-.763-.015-.265 0-.696.099-1.061.497-.365.397-1.394 1.361-1.394 3.319s1.427 3.848 1.626 4.114c.199.265 2.808 4.284 6.805 6.012.951.41 1.692.655 2.27.837.954.302 1.822.26 2.508.158.765-.114 2.353-.962 2.685-1.892.332-.93.332-1.727.232-1.892-.1-.166-.365-.265-.763-.464z"/>
      </svg>
      Reservar pelo WhatsApp
    </a>
  `;
}

function renderFooter() {
  const horasHTML = SITE.horarios.map(h => `
    <li><span>${esc(h.dias)}</span><span>${esc(h.horario)}</span></li>
  `).join('') + `<li class="hours-note">Cozinha fecha 45 min antes</li>`;

  const redesHTML = Object.entries(SITE.redes).map(([rede, url]) => `
    <a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${esc(rede)}" class="social-link">
      ${ICONS[rede] || ''}
    </a>
  `).join('');

  document.getElementById('footerGrid').innerHTML = `
    <div class="footer-brand">
      <a href="#inicio" class="footer-logo">
        <span class="logo-main">${esc(SITE.nomePartes[0])}</span>
        <span class="logo-sub">${esc(SITE.nomePartes[1])}</span>
      </a>
      <p>${esc(SITE.descricao)}</p>
      <div class="social-links">${redesHTML}</div>
    </div>
    <div class="footer-col">
      <h4>Navegação</h4>
      <ul>
        <li><a href="#sobre">Nossa História</a></li>
        <li><a href="#cardapio">Cardápio</a></li>
        <li><a href="#galeria">Galeria</a></li>
        <li><a href="#reservas">Reservas</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Horários</h4>
      <ul class="hours-list">${horasHTML}</ul>
    </div>
    <div class="footer-col">
      <h4>Localização</h4>
      <address>
        <p>${esc(SITE.endereco.rua)}<br>${esc(SITE.endereco.bairro)}<br>${esc(SITE.endereco.cidade)}, ${esc(SITE.endereco.cep)}</p>
      </address>
      <div class="footer-contact">
        <p><a href="tel:${esc(SITE.telefone)}">${esc(SITE.telefone)}</a></p>
        <p><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></p>
      </div>
    </div>
  `;

  document.getElementById('footerBottom').innerHTML = `
    <p>&copy; ${new Date().getFullYear()} ${esc(SITE.nome)}. Todos os direitos reservados.</p>
    <p>Desenvolvido por Kaylan Argollo</p>
  `;
}

function setupFloatingButtons() {
  const wa = document.getElementById('floatingWa');
  if (wa) wa.href = waLink('Olá! Quero falar com a ' + SITE.nome);

  const reserva = document.getElementById('floatingReserva');
  if (reserva) {
    window.addEventListener('scroll', () => {
      const show = window.scrollY > window.innerHeight * 0.5;
      reserva.classList.toggle('show', show);
      wa.classList.toggle('show', show);
    }, { passive: true });
  }
}

// ── Interações ──────────────────────────────────────────────────

function setupInteractions() {
  setupNavScroll();
  setupMobileNav();
  setupMenuTabs();
  setupReveal();
  setupMenuItemModal();
  setupModal();
  setupForm();
  setupDateMin();
  setupSmoothScroll();
}

function setupNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

function setupMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function setupMenuTabs() {
  document.getElementById('menuTabs').addEventListener('click', e => {
    const tab = e.target.closest('.menu-tab');
    if (!tab) return;

    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const panel = document.getElementById(`tab-${tab.dataset.tab}`);
    if (panel) {
      panel.classList.add('active');
      panel.style.animation = 'none';
      panel.offsetHeight;
      panel.style.animation = 'panelFadeIn .35s ease';
    }
  });
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

function setupMenuItemModal() {
  document.getElementById('menuPanels').addEventListener('click', e => {
    const item = e.target.closest('.menu-item');
    if (!item) return;
    openModal(item.dataset);
  });

  document.getElementById('menuPanels').addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const item = e.target.closest('.menu-item');
      if (!item) return;
      e.preventDefault();
      openModal(item.dataset);
    }
  });
}

function openModal({ nome, desc, preco, img }) {
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalName').textContent  = nome || '';
  document.getElementById('modalDesc').textContent  = desc || '';
  document.getElementById('modalPrice').textContent = fmtPreco(Number(preco) || 0);

  const imgEl = document.getElementById('modalImg');
  if (img) {
    imgEl.src = img;
    imgEl.style.display = 'block';
    document.querySelector('.modal-img-wrap').style.display = 'block';
  } else {
    imgEl.src = '';
    document.querySelector('.modal-img-wrap').style.display = 'none';
  }

  const msg = `Olá! Gostaria de pedir: ${nome} — ${fmtPreco(Number(preco) || 0)}`;
  document.getElementById('modalWa').href = waLink(msg);

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function setupModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function setupForm() {
  const form    = document.getElementById('reservationForm');
  const success = document.getElementById('formSuccess');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Monta a mensagem do WhatsApp com os dados do formulário
    const nome    = form.querySelector('[name="nome"]').value;
    const tel     = form.querySelector('[name="telefone"]').value;
    const data    = form.querySelector('[name="data"]').value;
    const hora    = form.querySelector('[name="horario"]').value;
    const pessoas = form.querySelector('[name="pessoas"]').value;
    const obs     = form.querySelector('[name="mensagem"]').value;

    const msg = [
      `🍽️ Reserva — ${SITE.nome}`,
      `Nome: ${nome}`,
      `Telefone: ${tel}`,
      `Data: ${data} às ${hora}`,
      `Pessoas: ${pessoas}`,
      obs ? `Obs: ${obs}` : null,
    ].filter(Boolean).join('\n');

    await new Promise(r => setTimeout(r, 800));

    // Abre o WhatsApp com os dados da reserva
    window.open(waLink(msg), '_blank');

    form.reset();
    btn.style.display = 'none';
    success.innerHTML = document.getElementById('formSuccess').innerHTML; // preserva HTML
    success.style.display = 'flex';

    setTimeout(() => {
      success.style.display = '';
      btn.style.display = '';
      btn.textContent = 'Confirmar Reserva';
      btn.disabled = false;
    }, 6000);
  });
}

function setupDateMin() {
  const input = document.getElementById('r-data');
  if (input) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    input.min = tomorrow.toISOString().split('T')[0];
  }
}

function setupSmoothScroll() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 76, behavior: 'smooth' });
  });
}

// ── Inicialização ────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  setupInteractions();

  // Injeta a animação de troca de aba via CSS
  const style = document.createElement('style');
  style.textContent = '@keyframes panelFadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }';
  document.head.appendChild(style);
});
