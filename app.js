/**
 * Law Office Shirin Shoaei - Website Application Logic
 * Lightweight, accessible interactions, theme toggler, modal handling, contact validation,
 * and a static multi-language translation engine (EN, FA) with RTL direction support.
 */

// Global state for active language
let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
  initLanguageEngine();
  initTheme();
  initMobileMenu();
  initScrollEffects();
  initModals();
  initContactForm();
  initCardSpotlight();
});

/**
 * Language Engine: Handles EN and FA (Persian) switching, HTML attributes,
 * dynamic text rendering, and RTL alignment transitions.
 */
function initLanguageEngine() {
  const langButtons = document.querySelectorAll('.lang-btn');
  if (langButtons.length === 0) return;

  // Retrieve saved language or default to English
  const savedLang = localStorage.getItem('lang');
  const browserLang = navigator.language.slice(0, 2);
  let initialLang = 'en';

  if (savedLang && ['en', 'fa'].includes(savedLang)) {
    initialLang = savedLang;
  } else if (browserLang === 'fa') {
    initialLang = 'fa';
  }

  // Set initial language
  switchLanguage(initialLang);

  // Bind click handlers to buttons
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang !== currentLang) {
        switchLanguage(selectedLang);
      }
    });
  });
}

/**
 * Swaps language, switches RTL/LTR alignment direction, and changes typeface models.
 * @param {string} langCode - Language code ('en', 'fa')
 */
function switchLanguage(langCode) {
  if (!translations[langCode]) return;
  currentLang = langCode;

  // Update HTML elements for document attributes
  document.documentElement.setAttribute('lang', langCode);
  if (langCode === 'fa') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }

  // Update active status on selector buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang') === langCode) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // 1. Translate Standard Text elements (data-i18n)
  const i18nElements = document.querySelectorAll('[data-i18n]');
  i18nElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[langCode][key]) {
      // Use innerHTML if the translation contains HTML formatting elements like <br>
      if (translations[langCode][key].includes('<') || translations[langCode][key].includes('&')) {
        el.innerHTML = translations[langCode][key];
      } else {
        el.textContent = translations[langCode][key];
      }
    }
  });

  // 2. Translate HTML Blocks elements (data-i18n-html)
  const i18nHtmlElements = document.querySelectorAll('[data-i18n-html]');
  i18nHtmlElements.forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[langCode][key]) {
      el.innerHTML = translations[langCode][key];
    }
  });

  // 3. Translate Placeholders elements (data-i18n-placeholder)
  const i18nPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
  i18nPlaceholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[langCode][key]) {
      el.setAttribute('placeholder', translations[langCode][key]);
    }
  });

  // Save selected language to storage
  localStorage.setItem('lang', langCode);
}

/**
 * Theme Toggler (Dark / Light mode)
 */
function initTheme() {
  const themeToggleBtn = document.querySelector('.theme-toggle');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else if (savedTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
  } else if (!systemPrefersDark) {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
      showToast(translations[currentLang].toastThemeDark, 'success');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      showToast(translations[currentLang].toastThemeLight, 'success');
    }
  });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!menuToggle || !nav) return;

  const toggleMenu = () => {
    const isActive = nav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isActive);
    
    if (isActive) {
      menuToggle.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
      document.body.style.overflow = 'hidden';
    } else {
      menuToggle.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
      document.body.style.overflow = '';
    }
  };

  menuToggle.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
}

/**
 * Scroll Effects (Sticky Header, Active Navigation Highlight, Reveal on Scroll)
 */
function initScrollEffects() {
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const revealElements = document.querySelectorAll('.reveal');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(element => element.classList.add('active'));
  }
}

/**
 * Modal Dialog Handler (Impressum & Datenschutz)
 */
function initModals() {
  const triggers = document.querySelectorAll('[data-modal-target]');
  const overlays = document.querySelectorAll('.modal-overlay');
  const closeButtons = document.querySelectorAll('.modal-close');

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();

    modal.addEventListener('keydown', trapFocus);
  };

  const closeModal = (modal) => {
    modal.classList.remove('open');
    const openModals = document.querySelectorAll('.modal-overlay.open');
    const mobileNavOpen = document.querySelector('.nav.active');
    if (openModals.length === 0 && !mobileNavOpen) {
      document.body.style.overflow = '';
    }
    modal.removeEventListener('keydown', trapFocus);
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      openModal(targetId);
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(btn.closest('.modal-overlay'));
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModalElement = document.querySelector('.modal-overlay.open');
      if (openModalElement) {
        closeModal(openModalElement);
      }
    }
  });

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    
    const focusableElements = this.querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }
}

/**
 * Contact Form Validation & Submission Handling (Dynamic localized inputs)
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('formName');
  const emailInput = document.getElementById('formEmail');
  const messageInput = document.getElementById('formMessage');
  const submitBtn = form.querySelector('button[type="submit"]');

  const inputs = [nameInput, emailInput, messageInput];
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('invalid');
      const errorMsg = input.nextElementSibling;
      if (errorMsg && errorMsg.classList.contains('error-message')) {
        errorMsg.style.display = 'none';
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    let isValid = true;
    const strings = translations[currentLang];

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, strings.validationNameEmpty);
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      showError(emailInput, strings.validationEmailEmpty);
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, strings.validationEmailInvalid);
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError(messageInput, strings.validationMessageEmpty);
      isValid = false;
    }

    if (!isValid) return;

    // Visual loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    
    // Check direction to adjust loading icon location
    const spinnerHtml = `
      <svg class="spinner" viewBox="0 0 50 50" width="20" height="20" style="animation: spin 1s linear infinite; margin-inline-end: 8px;">
        <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-dasharray="80, 200" stroke-dashoffset="0"></circle>
      </svg>
    `;
    
    submitBtn.innerHTML = spinnerHtml + strings.toastSending;

    if (!document.getElementById('spinner-style')) {
      const style = document.createElement('style');
      style.id = 'spinner-style';
      style.innerHTML = `@keyframes spin { 100% { transform: rotate(360deg); } }`;
      document.head.appendChild(style);
    }

    try {
      const isConfigured = form.getAttribute('action') && form.getAttribute('action') !== '#';

      if (isConfigured) {
        const formData = new FormData(form);
        const response = await fetch(form.getAttribute('action'), {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          showToast(strings.toastSuccess, 'success');
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } else {
        await new Promise(resolve => setTimeout(resolve, 1200));
        showToast(strings.toastSuccessDemo, 'success');
        form.reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
      showToast(strings.toastError, 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  function showError(input, message) {
    input.classList.add('invalid');
    const errorMsg = input.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('error-message')) {
      errorMsg.textContent = message;
      errorMsg.style.display = 'block';
    }
  }
}

/**
 * Toast Notification Popup
 * @param {string} message - Notification text
 * @param {'success'|'error'} type - Style type
 */
function showToast(message, type = 'success') {
  const existingToast = document.querySelector('.alert-toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = `alert-toast ${type} glass-card`;
  
  const icon = type === 'success' 
    ? `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

/**
 * Spotlight Hover Effect for Glass Cards
 * Tracks cursor positions on mousemove and updates CSS custom variables.
 */
function initCardSpotlight() {
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', `-999px`);
      card.style.setProperty('--mouse-y', `-999px`);
    });
  });
}
