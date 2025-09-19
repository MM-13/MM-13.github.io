const caseStudies = {
      p1: `
        <h2>Huntsman Isle — Role: Project Manager, Game Designer & Programmer</h2>
        <p><strong>Goal:</strong> Make a game that is engaging and fun to play, but most importantly, to start my own studio with.</p>
        <p><strong>Process:</strong> How you lead the team: milestones, delegation, playtests, pivot decisions.</p>
        <p><strong>Outcome:</strong> Result metrics (plays, feedback, press), lessons learned and next steps.</p>
      `,
      p2: `
        <h2>Project Two — Role: Lead</h2>
        <p>Short case study. Replace this content with your real process + outcomes.</p>
      `,
      p3: `
        <h2>Project Three — Role: Lead</h2>
        <p>Short case study. Replace with your details.</p>
      `
    }

    function openModal(id) {
      document.getElementById('modal').classList.add('open');
      document.getElementById('modal').setAttribute('aria-hidden', 'false');
      document.getElementById('modal-body').innerHTML = caseStudies[id] || '<p>No case study found.</p>';
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
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