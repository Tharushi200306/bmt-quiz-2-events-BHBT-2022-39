/* Dark Mode Toggle */
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* Dynamic Projects */
const projects = [
    { title: "Portfolio Website", description: "Personal portfolio project" },
    { title: "Student Management System", description: "CRUD application" },
    { title: "Health App", description: "Biomedical related project" }
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectList.appendChild(div);
});

/* Form Handling */
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log(name, email, message);
    alert("Message sent successfully!");

    form.reset();
});
