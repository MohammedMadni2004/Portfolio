const staggerChildren = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Particle.js configuration
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#64ffda"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#64ffda",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      }
    },
    "retina_detect": true
  }
);

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('section, .project-card, .education-card').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

window.addEventListener("DOMContentLoaded", () => {
  // Hero/header fade-in (vanilla JS – no Motion library)
  const hero = document.querySelector(".hero-container");
  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";
    requestAnimationFrame(() => {
      hero.style.transition = "opacity 1s ease-out, transform 1s ease-out";
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    });
  }

  // Section and card animations are handled by IntersectionObserver above (fade-up + visible)

  // Project card hover scale via CSS class (no Motion library)
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
      card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });

  // data-motion-card / data-motion-achievement: already animated by IntersectionObserver + .fade-up

  document.querySelectorAll('.achievement-card i').forEach(icon => {
    setInterval(() => {
      icon.style.animation = 'none';
      icon.offsetHeight; 
      icon.style.animation = 'glow 3s infinite';
    }, Math.random() * 5000 + 3000);
  });

  const scrollAnimationOptions = {
    threshold: 0.2,
    rootMargin: "-50px"
  };
});
