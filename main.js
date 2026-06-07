document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "components/header.html");
  loadComponent("sidebar", "components/sidebar.html");
  loadComponent("footer", "components/footer.html");

  setTimeout(() => {
    activateMenu();
  }, 300);

  activateScrollEffects();
  activateBackToTop();
});

function loadComponent(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error("Error cargando componente:", file, error));
}

function activateMenu() {
  const menuButton = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
}

function activateScrollEffects() {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(element => observer.observe(element));
}

function activateBackToTop() {
  const button = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}