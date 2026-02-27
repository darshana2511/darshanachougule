// Contact Form Confirmation
const form = document.getElementById('contactForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  confirmation.textContent = `Thank you, ${name}! Your message has been sent.`;
  form.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
