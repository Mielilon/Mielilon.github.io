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
$('.characteristic__title').click(function() {
  $(this).toggleClass('characteristic__title_active')
  $(this).siblings('.characteristic__content-wrapper').toggleClass('active')
})

//код для галереи кейсов
var linksCases = [
  "./img/cases/bound-editions/case-1/cases-1.png",
  "./img/cases/bound-editions/cases-2.png",
  "./img/cases/bound-editions/case-1/cases-1.png",
  "./img/cases/bound-editions/case-1/cases-1.png",
  "./img/cases/bound-editions/case-1/cases-1.png",
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