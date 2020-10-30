//= jquery.min.js
"use strict";

//код для оформления видео
$(document).on("click", ".js-videoPoster", function (e) {
  e.preventDefault();
  var poster = $(this);
  var wrapper = poster.closest(".js-videoWrapper");
  videoPlay(wrapper);
});

function videoPlay(wrapper) {
  var iframe = wrapper.find(".js-videoIframe");
  var src = iframe.data("src");
  wrapper.addClass("video__wrapper_active");
  iframe.attr("src", src);
}

//открытие-закрытие модального окна
$(".equipment-cards__item").click(function () {
  $(".equipment-popup").addClass("equipment-popup__active");
});

$(".close").click(function () {
  $(".equipment-popup").removeClass("equipment-popup__active");
});

jQuery(function ($) {
  $(".equipment-popup").mouseup(function (e) {
    var popup = $("#equipment-popup");
    if (!popup.is(e.target) && popup.has(e.target).length === 0) {
      $(".equipment-popup").removeClass("equipment-popup__active");
    }
  });
});

//код для галереи оборудования

var links = [
  "./img/equipment/equipment-1.png",
  "./img/equipment/equipment-2.png",
  "./img/equipment/equipment-3.png",
  "./img/equipment/equipment-4.png",
  "./img/equipment/equipment-5.png",
];

var thumbnails = document.querySelectorAll(".equipment__item");
var fullPhoto = document.querySelector(".equipment__full-img");

for (var i = 0; i < thumbnails.length; i++) {
  var addThumbnailsMouseHandler = function (thumbnail, link) {
    thumbnail.addEventListener("mouseenter", function () {
      fullPhoto.src = link;
    });
  };
  addThumbnailsMouseHandler(thumbnails[i], links[i]);
}

//открытие-закрытие телефонного меню
$(".burger-menu__img").click(function () {
  $(".burger-menu__info").toggleClass("active");
});

$(document).click(function (e) {
  const menuBlock = ".burger-menu__info";
  const button = ".burger-menu__img";
  if (
    $(e.target).closest(menuBlock).length ||
    $(e.target).closest(button).length
  )
    return;

  $(".burger-menu__info").removeClass("active");
});

//меняет контент по табам
$(".tabs-buttons__item").click(function (event) {
  const tabId = $(this).attr("data-tab-button");
  if (!tabId) return;

  const wrapper = $(this).closest(".tabs-wrapper");

  $(this).siblings().removeClass("tabs-buttons__item_active");
  $(this).addClass("tabs-buttons__item_active");

  wrapper
    .children(`.tabs-content:not([data-tab-content="${tabId}"])`)
    .removeClass("tabs-content_active");
  wrapper
    .children(`.tabs-content[data-tab-content="${tabId}"]`)
    .toggleClass("tabs-content_active");
});

//код для открытия вкладок с информацией на странице калькулятора
$(".characteristic__title").click(function () {
  $(this).toggleClass("characteristic__title_active");
  $(this).siblings(".characteristic__content-wrapper").toggleClass("active");
});

//код для открытия видео
$(".video__black-bar").click(function () {
  $(this).siblings(".video__player-wrapper").toggleClass("active");
});
//код для открытия видео в отзывах
$(".video-reviews__item-wrapper").click(function () {
  $(".video-reviews__full-video").addClass("active");
  $(".video-reviews__item-wrapper").removeClass("video-reviews_active");
  $(this).addClass("video-reviews_active");
});
$(".video-reviews").click(function (e) {
  const videoReviewsItems = ".video-reviews__items-wrapper";
  if ($(e.target).closest(videoReviewsItems).length) return;
  $(".video-reviews__full-video").removeClass("active");
  $(".video-reviews__item-wrapper").removeClass("video-reviews_active");
});

//код для галереи кейсов
var linksCases = [
  "./img/cases/bound-editions/case-1/cases-1.png",
  "./img/cases/bound-editions/case-1/cases-2.png",
  "./img/cases/bound-editions/case-1/cases-3.png",
  "./img/cases/bound-editions/case-1/cases-4.png",
  "./img/cases/bound-editions/case-1/cases-2.png",
];

var thumbnailsCase = document.querySelectorAll(".case__img");
var fullPhotoCase = document.querySelector(".case__full-img");

for (var i = 0; i < thumbnailsCase.length; i++) {
  var addThumbnailsClickHandler = function (thumbnail, link) {
    thumbnail.addEventListener("click", function () {
      fullPhotoCase.src = link;
    });
  };
  addThumbnailsClickHandler(thumbnailsCase[i], linksCases[i]);
}

//код для калькулятора
$(".order-details__inputs-wrapper").change(function () {
  $(".order-details__form-wrapper").addClass("active");
});

$("#order-details-tel").change(function () {
  $("#order-tel").css("display", "block");
  $("#order-mail").css("display", "none");
  $("#order-whatsapp").css("display", "none");
});

$("#order-details-mail").change(function () {
  $("#order-tel").css("display", "none");
  $("#order-mail").css("display", "block");
  $("#order-whatsapp").css("display", "none");
});

$("#order-details-whatsapp").change(function () {
  $("#order-tel").css("display", "none");
  $("#order-mail").css("display", "none");
  $("#order-whatsapp").css("display", "block");
});

//стили после отправки формы
$(".calculator-page__form").submit(function (e) {
  const form = $(this);
  $(".calculator-page__order-details.order-details").css("display", "none");
  $(".after-sending").css("display", "block");
  $(".calculator__order-title").css("display", "none");
  $(".calculator__step").css("display", "none");
  $(".hr").addClass("hr_none");
  e.preventDefault();
});


//стили для открытия вакансий
$(".vacancies__item").click(function () {
  $(this).children(".vacancies__info-wrapper").toggleClass("active");
  $(this).children(".vacancies__little-title").toggleClass("vacancies__little-title_active");
});


//меню услуг
$(".services__item").click(function () {
  $('.services__item_active').removeClass("services__item_active");
  $(this).addClass("services__item_active");

  const id = $(this).attr('data-menu-item')
  $('.services__catalogue_active').removeClass("services__catalogue_active");
  $(`.services__catalogue[data-catalogue-item="${id}"]`).addClass('services__catalogue_active')

  $('.services__subparagraphs').removeClass("active");
  $(this).siblings('.services__subparagraphs').addClass("active");
});

$(".cases__item").click(function () {
  $('.cases__item_active').removeClass("cases__item_active");
  $(this).addClass("cases__item_active");

  // const id = $(this).attr('data-menu-item')
  // $('.services__catalogue_active').removeClass("services__catalogue_active");
  // $(`.services__catalogue[data-catalogue-item="${id}"]`).addClass('services__catalogue_active')
});

//код для слайдера калькулятора
let stepArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
]

let j = 1

$('.calculator_pre').click(function() {
    if(j === 1) {
      return
    } else {
      j = j - 1
      $(".calculator").attr("data-step-number", stepArray[j])
      $('.calculator-wrapper').removeClass('calculator-wrapper_active')
      $(`.calculator-wrapper[data-step-content="${j}"]`).addClass('calculator-wrapper_active')
      $('.calculator__number').text('Шаг ' + stepArray[j] + '/7')
    }
 })

 $('.calculator_next').click(function() {
  if(j + 1 >= stepArray.length) {
    return
  } else {
    j = j + 1
    $(".calculator").attr("data-step-number", stepArray[j])
    $('.calculator-wrapper').removeClass('calculator-wrapper_active')
    $(`.calculator-wrapper[data-step-content="${j}"]`).addClass('calculator-wrapper_active')
    $('.calculator__number').text('Шаг ' + stepArray[j] + '/7')
  }
 })

 //убирает выделение с радио-кнопки
$( "#pages" ).focus(function() {
  $('input[name="colour"]').prop('checked', false);
});
  
$( "#pages-in-a-block" ).focus(function() {
  $('input[name="colored-pages-in-a-block"]').prop('checked', false);
});

$( "#height" ).focus(function() {
  $('#customizable').prop('checked', true);
});
$( "#width" ).focus(function() {
  $('#customizable').prop('checked', true);
});