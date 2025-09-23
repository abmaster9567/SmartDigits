lucide.createIcons(); // render initial icons

const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
let isOpen = false;

navToggle.addEventListener('click', () => {
  isOpen = !isOpen;

  // Toggle nav visibility
  nav.classList.toggle('show', isOpen);

  // Change icon
  if (isOpen) {
    navToggle.innerHTML = '<i data-lucide="x"></i>'; // close icon
  } else {
    navToggle.innerHTML = '<i data-lucide="menu"></i>'; // bars icon
  }

  // Re-render icons
  lucide.createIcons();
});



document.querySelectorAll('.faq-card').forEach(card => {
  const btn = card.querySelector('.faq-head');
  const panel = card.querySelector('.faq-body');

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const icon = btn.querySelector('[data-lucide]');

    // Close other panels (accordion mode)
    document.querySelectorAll('.faq-head[aria-expanded="true"]').forEach(openBtn => {
      if (openBtn !== btn) {
        openBtn.setAttribute('aria-expanded', 'false');
        const p = openBtn.closest('.faq-card').querySelector('.faq-body');
        p.hidden = true;
        p.style.display = 'none';

        // reset icon to plus
        let openIcon = openBtn.querySelector('[data-lucide]');
        if (!openIcon) {
          openIcon = document.createElement("i");
          openBtn.appendChild(openIcon);
        }
        openIcon.setAttribute("data-lucide", "plus-circle");
      }
    });

    if (expanded) {
      btn.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
      panel.style.display = 'none';

      // swap back to plus icon
      if (!icon) {
        const newIcon = document.createElement("i");
        newIcon.setAttribute("data-lucide", "plus-circle");
        btn.appendChild(newIcon);
      } else {
        icon.setAttribute("data-lucide", "plus-circle");
      }
    } else {
      btn.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
      panel.style.display = 'block';

      // change to minus icon
      if (!icon) {
        const newIcon = document.createElement("i");
        newIcon.setAttribute("data-lucide", "minus-circle");
        btn.appendChild(newIcon);
      } else {
        icon.setAttribute("data-lucide", "minus-circle");
      }
    }

    // re-render all Lucide icons
    lucide.createIcons();
  });
});