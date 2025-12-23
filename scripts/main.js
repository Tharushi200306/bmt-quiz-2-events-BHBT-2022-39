/* ---------------- DARK MODE ---------------- */
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

/* ---------------- SCROLL ANIMATION ---------------- */
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach(card => observer.observe(card));

 

/* NAV ACTIVE ON CLICK */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

/* NAV ACTIVE ON SCROLL */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


/* ---------------- PROJECTS (Dynamic) ---------------- */
const projects = [
  { title: "Personal Portfolio", desc: "Portfolio using HTML, CSS & JS" },
  { title: "Business Website", desc: "Responsive static business site" },
  { title: "Landing Page", desc: "Modern front-end landing page" }
];

const container = document.getElementById("projectContainer");

projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
  container.appendChild(div);
});

/* ---------------- CONTACT FORM ---------------- */
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent 😊");
});

window.addEventListener("load", function() {
    const loader = document.getElementById("preloader");
    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 3500); 
});
