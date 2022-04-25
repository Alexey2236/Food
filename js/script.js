'use strict';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calck';
import data from './modules/data';
import slider from './modules/slider';
import { showModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => showModal('.modal', modalTimerId), 30000);


    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    timer();
    cards();
    calc();
    data(modalTimerId);
    slider();




    //ПРОСТОЙ ВАРИАНТ СЛАЙДЕРА

    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show', 'fade');
    //     });

    //     slides[slideIndex - 1].classList.add('show', 'fade');
    //     slides[slideIndex - 1].classList.remove('hide');

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });


});