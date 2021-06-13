const slidesPlugin = (activeSlide = 0) => {
  const slides = document.querySelectorAll('.slide');

  // for (let slide of slides) {
  //   slide.addEventListener('click', () => {
  //     clearActiveClasses();
  //     slide.classList.add('active');
  //   });
  // }

  slides[activeSlide].classList.add('active');

  slides.forEach((item) => {
    item.addEventListener('click', () => {
      clearActiveClasses();
      item.classList.add('active');
    });
  });

  const clearActiveClasses = () => {
    slides.forEach((item) => {
      item.classList.remove('active');
    });
  };
};

slidesPlugin(3);
