// Modern JS for contact form notification and AJAX submit
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const notification = document.getElementById('contactNotification');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (notification) {
          if (response.ok) {
            form.reset();
            notification.textContent = 'Message sent successfully!';
          } else {
            notification.textContent = 'There was a problem sending your message.';
          }
          notification.classList.add('show');
          setTimeout(() => {
            notification.classList.remove('show');
          }, 3000);
        }
      })
      .catch(() => {
        if (notification) {
          notification.textContent = 'There was a problem sending your message.';
          notification.classList.add('show');
          setTimeout(() => {
            notification.classList.remove('show');
          }, 3000);
        }
      });
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const sliderGroups = document.querySelectorAll('.slider-group');

  sliderGroups.forEach((group) => {
    const sliderEl = group.querySelector('.siema');

    const siema = new Siema({
      selector: sliderEl,
      duration: 400,
      easing: 'ease-out',
      perPage: 1,
      loop: true
    });

    // No autoplay 🎉

    // Buttons scoped to this group
    const prevBtn = group.querySelector('.prev');
    const nextBtn = group.querySelector('.next');

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => siema.prev());
      nextBtn.addEventListener('click', () => siema.next());
    }
  });

  // Modal logic
  const contactBtn = document.getElementById('contactBtn');
  const contactModal = document.getElementById('contactModal');
  const closeModal = document.getElementById('closeModal');

  if (contactBtn && contactModal && closeModal) {
    contactBtn.addEventListener('click', () => {
      contactModal.style.display = 'flex';
    });
    closeModal.addEventListener('click', () => {
      contactModal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.style.display = 'none';
      }
    });
  }
});