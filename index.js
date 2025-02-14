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
  // Header animation
  motion(
    document.querySelector(".header-content"),
    {
      opacity: [0, 1],
      y: [50, 0],
    },
    {
      duration: 1,
      easing: "ease-out",
    }
  );

  document.querySelectorAll("section").forEach((section) => {
    scroll(
      animate(section, {
        opacity: [0, 1],
        y: [100, 0],
      }),
      {
        target: section,
        offset: ["0 1", "1 1"],
      }
    );
  });

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      motion(
        card,
        {
          scale: 1.05,
        },
        {
          duration: 0.3,
        }
      );
    });

    card.addEventListener("mouseleave", () => {
      motion(
        card,
        {
          scale: 1,
        },
        {
          duration: 0.3,
        }
      );
    });
  });

  document.querySelectorAll('[data-motion-card]').forEach((card, index) => {
    motion(card, {
      initial: { scale: 0.9, opacity: 0, y: 50 },
      animate: { scale: 1, opacity: 1, y: 0 },
      transition: {
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      },
      whileHover: { 
        scale: 1.03, 
        rotate: 1,
        transition: { duration: 0.3 }
      }
    });
  });

  
  document.querySelectorAll('[data-motion-achievement]').forEach((card, index) => {
    motion(card, {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: {
        delay: index * 0.3,
        type: "spring",
        stiffness: 100
      },
      whileHover: { 
        scale: 1.1,
        transition: { duration: 0.2 }
      }
    });
  });

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
