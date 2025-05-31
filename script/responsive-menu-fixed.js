 const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconHamburger = document.getElementById('icon-hamburger');
  const iconClose = document.getElementById('icon-close');

  menuToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        // Abrir menu com animação
      mobileMenu.classList.remove('hidden');
   
      setTimeout(() => {
        mobileMenu.classList.remove('opacity-0', '-translate-y-4');
      }
      , 10);

      // area resposável pelo troca do icone
      iconHamburger.classList.add('hidden');
      iconClose.classList.remove('hidden');
    } else {
      // fechar menu com animação
      mobileMenu.classList.add('-translate-y-4', 'opacity-0');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);

      // trocar ícones novamente para o que tava
      iconClose.classList.add('hidden');
      iconHamburger.classList.remove('hidden');
    }
  });