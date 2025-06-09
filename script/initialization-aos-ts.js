AOS.init();

  tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    background: {
      color: "#000000" // fundo preto
    },
    particles: {
      number: {
        value: 80,
        density: { enable: true, area: 800 }
      },
      color: { value: "#ffffff" }, // bolinhas brancas
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: {
          default: "out"
        }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  });