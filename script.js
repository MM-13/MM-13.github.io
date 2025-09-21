const caseStudies = {
      p1: `
        <h2>Huntsman Isle — Role: Project Manager, Game Designer & Programmer</h2>
        <img src="Images/HI.png" alt="Huntsman Isle Picture">
        <p><strong>Goal:</strong> Make a game that is engaging and fun to play, but most importantly, to start my own studio with.</p>
        <p><strong>Process:</strong> How you lead the team: milestones, delegation, playtests, pivot decisions.</p>
        <p><strong>Outcome:</strong> Result metrics (plays, feedback, press), lessons learned and next steps.</p>
      `,
      p2: `
        <h2>Café CATastrophe — Role: Project Manager & Programmer</h2>
        <img src="Images/cover.png" alt="Café CATastrophe Picture">
        <p>This was a Game Jam project where I was the Project Manager.</p>
        <p><strong>Goal:</strong> Make a game in 2 days that is engaging and fun to play.</p>
        <p><strong>Process:</strong> How you lead the team: making sure everyone had something to do and had their work done on time without pushing.</p>
        <p><strong>Outcome:</strong> We finished 8th out of the 30+ contestants.</p>
      `,
      p3: `
        <h2>Collapsing Corridors — Solo Project</h2>
        <img src="Images/CC.png" alt="Collapsing Corridors Picture">
        <p>This project was part of a game design assignment where we had to make a vertical slice.</p>
        <p><strong>Goal:</strong> Design an engaging and fun game through a solid game design process.</p>
        <p><strong>Process:</strong> Design a game from the ground up, starting from a sepcific theme.</p>
        <p><strong>Outcome:</strong> A fun and challenging concept with unique mechanics.</p>
      `
    }

    function openModal(id) {
      document.getElementById('modal').classList.add('open');
      document.getElementById('modal').setAttribute('aria-hidden', 'false');
      document.getElementById('modal-body').innerHTML = caseStudies[id] || '<p>No case study found.</p>';
    }

    function closeModal() {
      document.getElementById('modal').classList.remove('open');
      document.getElementById('modal').setAttribute('aria-hidden', 'true');
    }

    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({
        behavior: 'smooth'
      });
    }

    function sendMessage() {
      const msg = document.getElementById('msg').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();

      if (!msg || !email || !subject) {
        alert('Please add a short message, subject and your email.');
        return;
      }

      const body = `From: ${email} \n ${msg}`;
      const mailtoLink = `mailto:maesmatthias@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;

      document.getElementById('sent').style.display = 'block';
    }