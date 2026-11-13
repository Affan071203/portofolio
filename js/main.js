/**
 * AFFAN AGUNG PRABOWO - INTERACTIVE PORTFOLIO SCRIPT
 * Highlights: Customer Service IT & Marketing Executive IT
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavigation();
  initProjectFilters();
  initProjectModal();
  initCopyButtons();
});

/* ==========================================================================
   1. THEME TOGGLE (DARK / LIGHT MODE)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(toggleBtn, currentTheme);

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(toggleBtn, newTheme);
    showToast(`Beralih ke mode ${newTheme === 'dark' ? 'gelap' : 'terang'}`);
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === 'light') {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    btn.setAttribute('aria-label', 'Ganti ke Mode Gelap');
  } else {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    btn.setAttribute('aria-label', 'Ganti ke Mode Terang');
  }
}

/* ==========================================================================
   2. NAVBAR & MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggleBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileMenuDrawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile drawer toggle
  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen);
      mobileToggleBtn.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Close mobile drawer when link clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', false);
        mobileToggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }

  // Scrollspy
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');
      const desktopLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (desktopLink) desktopLink.classList.add('active');
      }
    });
  }
}

/* ==========================================================================
   3. PROJECT FILTERING
   ========================================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   4. PROJECT CASE STUDY MODAL
   ========================================================================== */
const projectDetailsData = {
  'wisma-migas': {
    title: 'Wisma Migas 2 — Management System & Web Solutions',
    role: 'Project Manager & Client Coordinator (2025)',
    tags: ['Project Management', 'Client Consultation', 'Workflow Planning', 'PHP & SQL'],
    challenge: 'Klien membutuhkan sistem aplikasi website manajemen penginapan dan fasilitas Wisma Migas 2 untuk merapikan alur reservasi manual dan memantau ketersediaan kamar secara real-time antar divisi.',
    action: 'merancang rencana strategi pelaksanaan proyek secara menyeluruh, memetakan spesifikasi kebutuhan bersama stakeholder, mendesain alur kerja (workflow) pengembangan, serta mengawasi tahapan coding hingga tahap User Acceptance Testing (UAT).',
    result: 'Proyek berhasil diselesaikan tepat waktu sesuai timeline yang disepakati dengan tingkat kepuasan klien 100%. Membuktikan kompetensi kepemimpinan proyek dan komunikasi klien untuk posisi Marketing Executive IT / Presales.',
    targetAngle: 'Marketing Executive IT: Kemampuan mengonversi problem bisnis klien ke dalam solusi digital terstruktur.'
  },
  'klinik-kesehatan': {
    title: 'Website Klinik Kesehatan & Terapi Pasien',
    role: 'Front-End Developer & UX Specialist (2024)',
    tags: ['Front-End', 'React.js', 'Responsive UI', 'User Accessibility'],
    challenge: 'Klinik terapi kesehatan membutuhkan website yang dapat dioperasikan oleh berbagai kalangan usia (termasuk pasien lansia dan staf non-teknis) dengan antarmuka yang ramah pengguna dan tidak membingungkan.',
    action: 'Mengembangkan antarmuka responsif dan kontras tinggi menggunakan modern Web components, merancang navigasi reservasi yang ringkas, serta melakukan iterasi berkala berdasarkan feedback langsung dari pemilik klinik.',
    result: 'Website disepakati dan dipuji oleh klien karena sangat mudah digunakan oleh staf operasional serta meningkatkan efisiensi reservasi janji temu terapi pasien.',
    targetAngle: 'Customer Service IT: Memahami empati pengguna, kemudahan akses antarmuka, dan minimasi kesalahan user.'
  },
  'bioskop-mobile': {
    title: 'Aplikasi Bioskop Mobile & Lokasi Terdekat',
    role: 'Mobile Developer & Product Innovator (2024)',
    tags: ['Mobile Flutter', 'Firebase', 'Geolocation Inovasi', 'Customer Reviews'],
    challenge: 'Aplikasi pemesanan tiket bioskop sering kali kaku dan tidak memberikan informasi konteks lokasi teater terdekat secara instan bagi penonton yang sedang dalam perjalanan.',
    action: 'Membangun aplikasi mobile lengkap dengan integrasi lokasi bioskop terdekat, sistem ulasan penonton, serta alur pemilihan kursi yang cepat dan responsif.',
    result: 'Inovasi penambahan fitur jarak bioskop terdekat dan rating ulasan meningkatkan retensi pengguna dan kenyamanan bertransaksi.',
    targetAngle: 'Marketing IT & CS IT: Berorientasi pada kepuasan pelanggan akhir dan penciptaan nilai tambah kompetitif.'
  },
  'research-lazada': {
    title: 'Deteksi Review Palsu E-Commerce & Rekomendasi Keputusan Pembelian',
    role: 'Peneliti Utama & Data Analyst (Sinta 3, 2026)',
    tags: ['Machine Learning', 'Python', 'Consumer Behavior', 'Jurnal Sinta 3'],
    challenge: 'Tingginya ulasan palsu (fake reviews) di platform e-commerce menurunkan kepercayaan konsumen dan menurunkan rasio konversi penjualan produk terpercaya.',
    action: 'Mengimplementasikan komparasi algoritma Machine Learning (Random Forest, SVM, Naive Bayes, Decision Tree, C4.5) untuk memfilter ulasan palsu pada platform Lazada serta menganalisis dampaknya pada keputusan pembelian konsumen.',
    result: 'Publikasi ilmiah terindeks Sinta 3 dengan hasil akurasi model terbaik mencapai 94.8% dan memberikan rekomendasi data-driven bagi strategi reputasi digital e-commerce.',
    targetAngle: 'Marketing IT: Memahami psikologi keputusan belanja online dan kredibilitas ulasan produk digital.'
  }
};

function initProjectModal() {
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');
  const detailButtons = document.querySelectorAll('.btn-open-modal');

  if (!modalBackdrop || !modalCloseBtn || !modalBody) return;

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = projectDetailsData[projectId];

      if (data) {
        modalBody.innerHTML = `
          <div style="margin-bottom: 20px;">
            <span class="section-badge" style="margin-bottom:8px;">${data.role}</span>
            <h3 style="font-size: 1.5rem; margin-top: 6px; margin-bottom: 12px;">${data.title}</h3>
            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom: 18px;">
              ${data.tags.map(t => `<span class="project-tag" style="background:rgba(56,189,248,0.15); color:var(--brand-primary);">${t}</span>`).join('')}
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:16px;">
            <div style="background:var(--bg-primary); padding:16px; border-radius:10px; border:1px solid var(--border-color);">
              <h5 style="color:#ef4444; font-size:0.85rem; text-transform:uppercase; margin-bottom:6px;">Tantangan / Latar Belakang Masalah</h5>
              <p style="font-size:0.92rem; color:var(--text-secondary);">${data.challenge}</p>
            </div>

            <div style="background:var(--bg-primary); padding:16px; border-radius:10px; border:1px solid var(--border-color);">
              <h5 style="color:var(--brand-primary); font-size:0.85rem; text-transform:uppercase; margin-bottom:6px;">Langkah Strategis &amp; Solusi yang Diterapkan</h5>
              <p style="font-size:0.92rem; color:var(--text-secondary);">${data.action}</p>
            </div>

            <div style="background:var(--bg-primary); padding:16px; border-radius:10px; border:1px solid var(--border-color);">
              <h5 style="color:#10b981; font-size:0.85rem; text-transform:uppercase; margin-bottom:6px;">Hasil &amp; Dampak Nyata</h5>
              <p style="font-size:0.92rem; color:var(--text-secondary);">${data.result}</p>
            </div>

            <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); padding:14px; border-radius:10px;">
              <h5 style="color:#f59e0b; font-size:0.85rem; margin-bottom:4px;">🎯 Nilai Tambah Kompetensi</h5>
              <p style="font-size:0.88rem; color:var(--text-primary); font-weight:600;">${data.targetAngle}</p>
            </div>
          </div>
        `;
        modalBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   5. COPY CONTACT BUTTONS & TOAST SYSTEM
   ========================================================================== */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Berhasil disalin: ${textToCopy}`);
        }).catch(() => {
          showToast(`Teks: ${textToCopy}`);
        });
      }
    });
  });
}

function showToast(message, duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
