// Intro fade
window.addEventListener('load', () => {
  setTimeout(() => {
    const intro = document.getElementById('intro');
    if (intro) intro.classList.add('hidden');
  }, 4000);
});

// Theme toggle + persistence
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

if (toggle) {
  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', current);
    toggle.textContent = current === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('theme', current);
  });

  const saved = localStorage.getItem('theme');
  if (saved) {
    html.setAttribute('data-theme', saved);
    toggle.textContent = saved === 'dark' ? '🌙' : '☀️';
  }
}

// Back to top
const backToTop = document.createElement('a');
backToTop.href = '#';
backToTop.className = 'back-to-top';
backToTop.innerHTML = '↑';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Autoplay videos on scroll (better performance)
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll('.showcase-video');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.play().catch(() => {});
      } else {
        entry.target.pause();
      }
    });
  }, { threshold: 0.6 });

  videos.forEach(video => observer.observe(video));
  
  // Intro hide after load
  setTimeout(() => {
    document.getElementById('intro').style.opacity = '0';
  }, 2200);
});

// Mobile nav toggle (add hamburger in HTML if not there)
