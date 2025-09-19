const caseStudies = {
      p1: `
        <h2>Project One — Role: Lead</h2>
        <p><strong>Goal:</strong> Explain the problem this project solved and the vision.</p>
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
      if (!msg || !email) {
        alert('Please add a short message and your email.');
        return;
      }
      document.getElementById('sent').style.display = 'block';
      // NOTE: integrate your emailing endpoint here (Netlify forms, Formspree, server) to enable sending.
    }