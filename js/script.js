"use strict";

// меню Бургер -------------------------------------------------------------------------

// const iconMenu = document.querySelector(".menu__icon");
// const bodyMenu = document.querySelector(".menu__body");
// if (iconMenu) {
//     iconMenu.addEventListener("click", function (event) {

//         document.body.classList.toggle("_lock"); //! добавляем класс "_lock" в SCSS для запрета прокрутки при активном меню-бургере
//         iconMenu.classList.toggle("_active");
//         bodyMenu.classList.toggle("_active");

//     });
// };

// убираю placeholder при фокусе -----------------------------------------------------------

// const form = document.forms[0];
// const input = form.elements.inputEmail;
// const inputPlaceholder = input.placeholder;

// input.addEventListener("focus", function (event) {

//     input.placeholder = "";
// });

// input.addEventListener("blur", function (event) {

//     input.placeholder = inputPlaceholder;
// });


// Initialize Swiper -----------------------------------------------------------------------------

const sliderThumbs = new Swiper('.slider-thumbs', {
	loop: true,
	spaceBetween: 20,  //! расстояние между картинками в пикселях
	slidesPerView: 3,  //! количество картинок на странице
	centeredSlides: true,  //! теперь активный слайд будет по центру (без функции ниже это работает только при начальной загрузке)
	loopedSlides: 4,
});

sliderThumbs.on('click', (swiper) => {  //! у Swiper (из библиотеки) есть метод "on"
	swiper.slideTo(swiper.clickedIndex);
	//! берётся индекс слайда, по которому кликнули, и передаётся в метод slideTo, чтобы сделать его активным, т.е. перенести в центр sliderThumbs
});

const sliderMain = new Swiper('.slider-main', {
	loop: true,
	loopedSlides: 4,
	// thumbs: {
	// 	swiper: sliderThumbs,  //! так мы связываем два слайдера - большой с маленьким
	// },
});

//! сделали связь между слайдерами иначе - так полный контроль:
sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;
