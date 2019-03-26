const carSlide = document.querySelector('.slide-1');
const carSlide2 = document.querySelector('.slide-2');
const carImg = document.querySelectorAll('.slide-1 img');
const carImg2 = document.querySelectorAll('.slide-2 img');

const prevBtn = document.querySelector('#prevButton');
const nextBtn = document.querySelector('#nextButton');

let counter = 1;
let cnt = 1;
const size = carImg[0].clientWidth;
const size2 = carImg2[0].clientWidth;

carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
carSlide2.style.transform = 'translateX(' + (-size2 * cnt) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carImg.length - 1) return;
        counter++;
        carSlide.style.transition = "transform 0.1s ease-in-out";
        carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        

    if (cnt <= carImg2.length - 1) {
        cnt++;
        carSlide2.style.transform = 'translateX(' + (-size2 * cnt) + 'px)';
        carSlide2.style.transition = "transform 0.1s ease-in-out";
    }
});

prevBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        carSlide.style.transition = "transform 0.1s ease-in-out";
    }
    if (cnt > 0) {
        carSlide2.style.transition = "transform 0.1s ease-in-out";
        cnt--;
        carSlide2.style.transform = 'translateX(' + (-size2 * cnt) + 'px)';
    }
});

carSlide.addEventListener('transitionend', () => {
    if (carImg[counter].id === 'image5clone') {
        carSlide.style.transition = "none";
        counter = carImg.length - 2;
        carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }

    if (carImg2[cnt].id === 'image3clone') {
        carSlide2.style.transition = "none";
        cnt = carImg2.length - 2;
        carSlide2.style.transform = 'translateX(' + (-size2 * cnt) + 'px)';

    }

    if (carImg[counter].id === 'image7clone') {
        carSlide.style.transition = "none";
        counter = carImg.length - counter;
        carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carImg2[cnt].id === 'image4clone') {
        carSlide2.style.transition = "none";
        cnt = carImg2.length - cnt;
        carSlide2.style.transform = 'translateX(' + (-size2 * cnt) + 'px)';

    }
});