// Ember & Bean Café — shared script

// 1. Mobile navbar: the hamburger button shows and hides the links.
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// 2. Contact form: show a friendly message instead of sending data anywhere.
const form = document.querySelector(".contact-form");
const message = document.querySelector(".form-message");

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stops the page from reloading
    const name = form.elements["name"].value.trim();
    message.textContent = `Thanks, ${name}! We have received your message and will reply soon.`;
    message.classList.add("show");
    form.reset();
  });
}
