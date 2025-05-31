const floatToggle = document.getElementById("floating-menu-toggle");
const floatMenu = document.getElementById("floating-mobile-menu");
const floatIconOpen = document.getElementById("floating-icon-hamburger");
const floatIconClose = document.getElementById("floating-icon-close");

if (floatToggle) {
  floatToggle.addEventListener("click", () => {
    floatMenu.classList.toggle("hidden");
    floatMenu.classList.toggle("opacity-0");
    floatMenu.classList.toggle("-translate-y-4");
    floatIconOpen.classList.toggle("hidden");
    floatIconClose.classList.toggle("hidden");
  });
}