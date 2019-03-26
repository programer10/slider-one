'use strict';

var carSlide = document.querySelector('.slide-1');
var carSlide2 = document.querySelector('.slide-2');
var carImg = document.querySelectorAll('.slide-1 img');
var carImg2 = document.querySelectorAll('.slide-2 img');

var prevBtn = document.querySelector('#prevButton');
var nextBtn = document.querySelector('#nextButton');

var counter = 1;
var cnt = 1;
var size = carImg[0].clientWidth;
var size2 = carImg2[0].clientWidth;

carSlide.style.transform = 'translateX(' + -size * counter + 'px)';
carSlide2.style.transform = 'translateX(' + -size2 * cnt + 'px)';

nextBtn.addEventListener('click', function () {
    if (counter >= carImg.length - 1) return;
    counter++;
    carSlide.style.transition = "transform 0.1s ease-in-out";
    carSlide.style.transform = 'translateX(' + -size * counter + 'px)';

    if (cnt <= carImg2.length - 1) {
        cnt++;
        carSlide2.style.transform = 'translateX(' + -size2 * cnt + 'px)';
        carSlide2.style.transition = "transform 0.1s ease-in-out";
    }
});

prevBtn.addEventListener('click', function () {
    if (counter > 0) {
        counter--;
        carSlide.style.transform = 'translateX(' + -size * counter + 'px)';
        carSlide.style.transition = "transform 0.1s ease-in-out";
    }
    if (cnt > 0) {
        carSlide2.style.transition = "transform 0.1s ease-in-out";
        cnt--;
        carSlide2.style.transform = 'translateX(' + -size2 * cnt + 'px)';
    }
});

carSlide.addEventListener('transitionend', function () {
    if (carImg[counter].id === 'image5clone') {
        carSlide.style.transition = "none";
        counter = carImg.length - 2;
        carSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    }

    if (carImg2[cnt].id === 'image3clone') {
        carSlide2.style.transition = "none";
        cnt = carImg2.length - 2;
        carSlide2.style.transform = 'translateX(' + -size2 * cnt + 'px)';
    }

    if (carImg[counter].id === 'image7clone') {
        carSlide.style.transition = "none";
        counter = carImg.length - counter;
        carSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    }

    if (carImg2[cnt].id === 'image4clone') {
        carSlide2.style.transition = "none";
        cnt = carImg2.length - cnt;
        carSlide2.style.transform = 'translateX(' + -size2 * cnt + 'px)';
    }
});