const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;
const sliderDirectionBtn = document.getElementById('sliderDirection');
const actionButtons = document.querySelector('.action-buttons');
const body = document.documentElement;

let activeSlideIndex = 0;


upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const sliderHeight = sliderContainer.clientHeight;
const sliderWidth = sliderContainer.clientWidth;

const changeSlide = (direction) => {


    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }


    if (body.classList.contains('direction--change')) {
        slideLeft.style.top = '0vh';
        slideLeft.style.left = `-${(slidesLength - 1) * 35}vw`;

        slideRight.style.transform = `translateX(-${(activeSlideIndex * sliderWidth) / 100 * 65}px)`;

        slideLeft.style.transform = `translateX(${(activeSlideIndex * sliderWidth) / 100 * 35}px)`;

    } else {
        slideLeft.style.left = `0vw`;
        slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

        slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
        slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;

    }
};

changeSlide();



window.addEventListener('keydown', (e) => {
    if (e.keyCode === 37) {
        changeSlide('down');
    } else if (e.keyCode === 38) {
        changeSlide('up');
    } else if (e.keyCode === 39) {
        changeSlide('up');
    } else if (e.keyCode === 40) {
        changeSlide('down');
    }
});

window.addEventListener("mousewheel", function (e) {
    if (e.deltaY === 100) {
        changeSlide('down');
    } else if (e.deltaY === -100) {
        changeSlide('down');
    }
});


sliderDirectionBtn.addEventListener('click', () => {
    body.classList.toggle('direction--change');

    actionButtons.classList.toggle('direction--change');
    slideRight.classList.toggle('direction--change');
    slideLeft.classList.toggle('direction--change');


    changeSlide();
});



slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;