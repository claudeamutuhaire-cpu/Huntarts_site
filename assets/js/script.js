// Intro fade out after animation
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro').classList.add('hidden');
  }, 4000); // 4s show time
});

// Theme toggle
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

toggle.addEventListener('click', () => {
  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
    toggle.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  html.setAttribute('data-theme', 'light');
  toggle.textContent = '☀️';
      }
// Example fetch to Firebase (needs init first)
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  // ... collect data ...
  await fetch('https://hell-ad7ee.firebaseio.com/messages.json', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
});
