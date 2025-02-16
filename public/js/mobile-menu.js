document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const mainMenu = document.querySelector('#main-menu');
    const bodyOverlay = document.querySelector('.body-overlay'); // Asegúrate de tener este elemento en tu HTML
  
    if (menuToggle && mainMenu && bodyOverlay) {
      menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !expanded);
        mainMenu.classList.toggle('hidden'); // Muestra/oculta el menú
        bodyOverlay.classList.toggle('hidden'); // Muestra/oculta el overlay para el body
      });
  
      bodyOverlay.addEventListener('click', () => {
        mainMenu.classList.add('hidden'); // Oculta el menú
        bodyOverlay.classList.add('hidden'); // Oculta el overlay
        menuToggle.setAttribute('aria-expanded', false); // Actualiza el estado del botón
      });
    }
  });