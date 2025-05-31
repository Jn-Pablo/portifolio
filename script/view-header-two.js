  const floatingHeader = document.getElementById('floatingHeader');
  const cardsSection = document.getElementById('cards');

  window.addEventListener('scroll', () => {
    const cardsTop = cardsSection.getBoundingClientRect().top;

    if (cardsTop <= 300) {
      
      floatingHeader.classList.add('opacity-100', 'pointer-events-auto');
      floatingHeader.classList.remove('opacity-0', 'pointer-events-none');
    } else {
     
      floatingHeader.classList.add('opacity-0', 'pointer-events-none');
      floatingHeader.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });