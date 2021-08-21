const slides = document.querySelectorAll('.slide');
const titles = document.querySelectorAll('h3');


slides.forEach(item => {

  item.addEventListener('click', () => {
    slides.forEach(item => {
      item.classList.remove('slide--active');
    });
    item.classList.add('slide--active');

    titles.forEach(title => {
      title.classList.remove('active--title');
    });

    item.querySelector('h3').classList.add('active--title');
    
  });



});