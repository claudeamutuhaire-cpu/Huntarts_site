/* ==========================================================================
   HuntArts - Full Stylesheet (March 2026 rebuild)
   ========================================================================== */

:root {
  --bg: #0a0a0f;
  --text: #e0e0ff;
  --accent: #ff3366;     /* hot pink punch */
  --accent2: #00ff9d;    /* electric green */
  --card: #1a1a2e;
  --shadow: 0 10px 30px rgba(0,0,0,0.5);
  --transition: all 0.4s ease;
}

[data-theme="light"] {
  --bg: #f0f4ff;
  --text: #1a1a2e;
  --card: #ffffff;
  --shadow: 0 10px 30px rgba(0,0,0,0.15);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  background-size: 400% 400%;
  animation: gradientShift 18s ease infinite;
  line-height: 1.6;
  min-height: 100vh;
}

@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

h1, h2, h3 {
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 1.2rem;
}

h1 { font-size: 3.5rem; color: var(--accent); }
h2 { font-size: 2.8rem; }
h3 { font-size: 2rem; color: var(--accent); }

/* Header & Nav */
header {
  padding: 1.5rem 0;
  background: rgba(10, 10, 15, 0.7);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255,51,102,0.15);
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

nav ul {
  display: flex;
  gap: 2.2rem;
  list-style: none;
}

nav a {
  color: var(--text);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: var(--transition);
}

nav a:hover,
nav a.active {
  color: var(--accent);
  text-shadow: 0 0 10px rgba(255,51,102,0.6);
}

/* Theme toggle */
.theme-btn {
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  transition: var(--transition);
}

.theme-btn:hover { transform: rotate(20deg); }

/* Intro animation */
.intro {
  position: fixed;
  inset: 0;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 1.2s ease;
}

.intro.hidden {
  opacity: 0;
  pointer-events: none;
}

.logo-assemble {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(4rem, 12vw, 10rem);
  color: var(--accent);
  letter-spacing: -0.1em;
}

.letter {
  opacity: 0;
  transform: scale(0.4) rotate(-45deg);
  display: inline-block;
  animation: assemble 1s forwards;
  animation-delay: calc(var(--i) * 0.12s);
}

@keyframes assemble {
  to { opacity: 1; transform: scale(1) rotate(0); }
}

.tagline {
  margin-top: 1.5rem;
  font-size: 1.8rem;
  color: #fff;
  opacity: 0.9;
}

/* Main sections */
main {
  padding: 2rem 0 6rem;
}

.hero {
  text-align: center;
  padding: 6rem 0 4rem;
}

.gallery,
.pricing-grid,
.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.card {
  background: var(--card);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  position: relative;
}

.card:hover {
  transform: translateY(-16px) scale(1.04);
  box-shadow: 0 25px 60px rgba(255,51,102,0.3);
}

.card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: transform 0.7s ease;
  display: block;
}

.card:hover img {
  transform: scale(1.12);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
  opacity: 0;
  transition: opacity 0.5s ease;
  text-align: center;
  padding: 1rem;
}

.card:hover .overlay {
  opacity: 1;
}

/* Pricing & Services */
.pricing-grid,
.service-cards {
  gap: 2.5rem;
}

.pricing-card {
  padding: 2.2rem;
}

.price-list {
  margin: 1.8rem 0;
}

.price-item {
  background: rgba(255,51,102,0.08);
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  margin: 0.8rem 0;
  font-size: 1.15rem;
}

/* Form */
.contact-form {
  max-width: 680px;
  margin: 4rem auto;
  background: var(--card);
  padding: 3rem 2.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.form-group {
  margin-bottom: 1.8rem;
}

label {
  display: block;
  margin-bottom: 0.7rem;
  font-weight: 600;
  font-size: 1.05rem;
}

input, select, textarea {
  width: 100%;
  padding: 1rem 1.3rem;
  border: 2px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  background: rgba(255,255,255,0.04);
  color: var(--text);
  font-size: 1.05rem;
  transition: border-color 0.3s;
}

input:focus, select:focus, textarea:focus {
  border-color: var(--accent);
  outline: none;
  box-shadow: 0 0 0 3px rgba(255,51,102,0.2);
}

input:invalid:not(:placeholder-shown),
textarea:invalid:not(:placeholder-shown) {
  border-color: #ff4d4d;
}

.submit-btn {
  background: linear-gradient(135deg, var(--accent), #ff6699);
  color: white;
  border: none;
  padding: 1.3rem;
  border-radius: 50px;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: var(--transition);
}

.submit-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(255,51,102,0.45);
}

/* CTA buttons */
.contact-options {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 3rem 0;
}

.cta-btn {
  padding: 1.3rem 2.8rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.3rem;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 8px 25px rgba(0,0,0,0.4);
}

.whatsapp-btn { background: #25D366; color: white; }
.call-btn     { background: #0066ff; color: white; }

.cta-btn:hover { transform: scale(1.08); }

/* Footer */
footer {
  background: rgba(0,0,0,0.75);
  padding: 4rem 0 2rem;
  text-align: center;
  border-top: 1px solid rgba(255,51,102,0.2);
}

.socials a {
  color: var(--accent);
  margin: 0 1.5rem;
  font-size: 1.3rem;
  text-decoration: none;
  transition: var(--transition);
}

.socials a:hover {
  transform: translateY(-4px);
  text-shadow: 0 0 15px var(--accent);
}

/* Floating WhatsApp */
.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  background: #25D366;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(37,213,102,0.5);
  transition: var(--transition);
}

.whatsapp-float:hover {
  transform: scale(1.15) translateY(-5px);
}

.whatsapp-float img {
  width: 45px;
  height: 45px;
}

/* Back to top */
.back-to-top {
  position: fixed;
  bottom: 110px;
  right: 30px;
  background: var(--accent);
  color: white;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  box-shadow: 0 8px 25px rgba(255,51,102,0.4);
  z-index: 999;
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .container { padding: 0 1rem; }

  nav ul {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10,10,15,0.95);
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
    display: none;
    border-bottom: 1px solid rgba(255,51,102,0.2);
  }

  nav ul.active { display: flex; }

  .hero { padding: 4rem 0 3rem; }

  h1 { font-size: 2.8rem; }
  h2 { font-size: 2.2rem; }

  .gallery,
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .contact-options { flex-direction: column; }
}

/* Helpers */
.text-center { text-align: center; }
.mt-4 { margin-top: 4rem; }
.mb-0 { margin-bottom: 0; }
