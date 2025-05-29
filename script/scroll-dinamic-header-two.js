  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#header nav a, #floatingHeader nav a");

  function onScroll() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  }
window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll); // ⬅️ Adicionado para rodar ao carregar a página
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      onScroll(); // força atualização após o scroll por clique
    }, 100); // pequeno delay para garantir que o scroll foi concluído
  });
});