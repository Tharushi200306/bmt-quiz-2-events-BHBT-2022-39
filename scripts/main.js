/* ---------------- 1. DARK MODE ---------------- */
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}

/* ---------------- 2. SCROLL ANIMATIONS ---------------- */
const cards = document.querySelectorAll(".card");
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => cardObserver.observe(card));

/* ---------------- 3. NAV ACTIVE ON SCROLL ---------------- */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.pageYOffset >= sectionTop) {
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

/* ---------------- 4. PROJECTS (Dynamic & Clickable) ---------------- */
const myProjects = [
    { 
        title: "Web Design", 
        desc: "Creative UI/UX design and modern layouts.", 
        img: "web-design-technology-browsing-programming-concept_53876-163260.avif",
        link: "https://drive.google.com/file/d/18wLl1udO9x7MWiySBn2B4l48XMjMdLIR/view?usp=drive_link" 
    },
    { 
        title: "Web Development", 
        desc: "Building responsive websites using HTML, CSS, & JS.", 
        img: "images.jpg",
        link: "https://drive.google.com/file/d/1f0LISqXCynxlrb3q0JRgPuljH7_n_i53/view?usp=drive_link" 
    },
    { 
        title: "CV Design", 
        desc: "Professional and ATS-friendly CV/Resume designs.", 
        img: "images (1).jpg", 
        link: "https://drive.google.com/file/d/1iHsTe3hFC3oiF2I4AFk6-R-73QnVbuLq/view?usp=drive_link" 
    },
    { 
        title: "Portfolio Design", 
        desc: "Interactive personal branding sites with animations.", 
        img: "sddefault.jpg",
        link: "https://drive.google.com/file/d/1umJQH603NTucZeZyDi2eYYgC72MQiIQa/view?usp=drive_link" 
    }
];

const projectContainer = document.getElementById("projectContainer");

if (projectContainer) {
    projectContainer.innerHTML = ""; 
    myProjects.forEach(proj => {
        // අලුත් <a> tag එකක් සාදා එය Card එකක් ලෙස සකසමු
        const projectCard = document.createElement("a");
        projectCard.href = proj.link;
        projectCard.target = "_blank"; 
        projectCard.className = "project-card card animate show"; 
        projectCard.style.cssText = "text-decoration: none; color: inherit; display: block; overflow: hidden;";
        
        projectCard.innerHTML = `
            <div class="project-img-wrapper" style="position:relative; overflow:hidden; border-radius:10px;">
                <img src="${proj.img}" alt="${proj.title}" style="width:100%; height:180px; object-fit:cover; transition: 0.4s;">
                <div class="overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(188, 19, 254, 0.4); opacity:0; transition:0.3s; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; font-size:18px;">View Project</div>
            </div>
            <h3 style="margin-top:15px; color:#bc13fe; font-size:20px;">${proj.title}</h3>
            <p style="font-size:14px; margin-top:5px; opacity: 0.8;">${proj.desc}</p>
        `;

        // Hover Effect සඳහා පාලනය
        projectCard.addEventListener("mouseenter", () => {
            const overlay = projectCard.querySelector(".overlay");
            const img = projectCard.querySelector("img");
            if(overlay) overlay.style.opacity = "1";
            if(img) img.style.transform = "scale(1.1)";
        });
        
        projectCard.addEventListener("mouseleave", () => {
            const overlay = projectCard.querySelector(".overlay");
            const img = projectCard.querySelector("img");
            if(overlay) overlay.style.opacity = "0";
            if(img) img.style.transform = "scale(1)";
        });

        projectContainer.appendChild(projectCard);
    });
}

/* ---------------- 5. CONTACT FORM ---------------- */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully 😊");
        contactForm.reset();
    });
}

/* ---------------- 6. PRELOADER CONTROL ---------------- */
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("loader-hidden");
            setTimeout(() => {
                loader.style.display = "none";
            }, 1000);
        }, 5000); // වේගවත් වීමට තත්පර 2ක් ලබා දුන්නා
    }
});
