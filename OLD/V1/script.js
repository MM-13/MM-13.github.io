const caseStudies = {
  p1: `
    <h2>Huntsman Isle</h2>
    <img src="Images/post.png" alt="Huntsman Isle">
    <p><strong>Goal:</strong> Make a game that is engaging and fun to play — and use it as the foundation for starting my own studio.</p>
    <p><strong>Process:</strong> I assembled a team of 6, set clear milestones, delegated based on skill sets, ran regular playtests and made pivot decisions based on player feedback.</p>
    <p><strong>Outcome:</strong> A working demo published on Itch.io. Still in active development — focusing on multiplayer and cross-platform support.</p>
  `,
  p2: `
    <h2>Café CATastrophe</h2>
    <img src="Images/cover.png" alt="Café CATastrophe">
    <p><strong>Goal:</strong> Make a fun, polished game in 48 hours for a Game Jam.</p>
    <p><strong>Process:</strong> As PM, I made sure everyone always had something to do and that work was delivered on time — without pressure. I kept the scope tight and the energy high.</p>
    <p><strong>Outcome:</strong> We finished 8th out of 30+ contestants — a great result for a 2-day sprint.</p>
  `,
  p3: `
    <h2>Collapsing Corridors</h2>
    <img src="Images/CC.png" alt="Collapsing Corridors">
    <p><strong>Goal:</strong> Design an engaging game through a thorough game design process.</p>
    <p><strong>Process:</strong> I designed the game from the ground up starting from a specific theme — iterating on mechanics, level design, and player experience.</p>
    <p><strong>Outcome:</strong> A fun and challenging vertical slice with unique mechanics that pushed my design thinking forward.</p>
  `
};

function openModal(id) {
  const modal = document.getElementById('modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.getElementById('modal-body').innerHTML = caseStudies[id] || '<p>No case study found.</p>';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function handleModalBackdrop(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function sendMessage() {
  const msg = document.getElementById('msg').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();

  if (!msg || !email || !subject) {
    alert('Please fill in a subject, message, and your email.');
    return;
  }

  const body = `From: ${email}\n\n${msg}`;
  window.location.href = `mailto:maesmatthias@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('sent').style.display = 'block';
}