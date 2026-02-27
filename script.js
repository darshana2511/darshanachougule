// Active Navigation — based on scroll position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Smooth scroll for nav links
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetID = link.getAttribute("href");
    document.querySelector(targetID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
