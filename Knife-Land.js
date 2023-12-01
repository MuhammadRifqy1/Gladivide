document.addEventListener('DOMContentLoaded', function () {

  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var headerImg = document.getElementById('headerImg');
  var KnifeCutting = document.getElementById('KnifeCutting');
  var KnifeTag = document.getElementById('KnifeTag');
  var KnifeGroup = document.getElementById('KnifeGroup');

  if (screenWidth >= 768) {
      headerImg.src = './assets/knife-board.webp';
      KnifeCutting.src = './assets/knife-cutting.webp';
      KnifeTag.src = './assets/knife-tag.webp';
      KnifeGroup.src = './assets/knife-group.webp';
  }else {
      headerImg.src = './assets/knife-board-sm.webp';
      KnifeCutting.src = './assets/knife-cutting-sm.webp';
      KnifeTag.src = './assets/knife-tag-sm.webp';
      KnifeGroup.src = './assets/knife-group-sm.webp';
  }

  const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenter = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerScaleTop = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('scale-top-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  observerLeft.observe(document.querySelector('.header'));
  observerCenter.observe(document.querySelector('.head-img-container'));
  observerCenter.observe(document.querySelector('.faq'));
  observerSlideLeft.observe(document.querySelector('.feature'));
  observerSlideLeft.observe(document.querySelector('.buy'));

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
