document.addEventListener('DOMContentLoaded', function () {
  const scrollLinks = document.querySelectorAll('[data-scroll]');

  scrollLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('data-scroll');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
              });
          }
      });
  });
})
