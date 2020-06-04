"use strict";

var page = document.querySelector(".page");

var menu = document.querySelector(".page-header .site-list");
var btnMenu = document.querySelector(".menu-toggle");

// Удаление класса для стилизации при выключенном JS у пользователя
page.classList.remove("page--nojs");

// Анимация меню
btnMenu.addEventListener("click", function() {
  this.classList.toggle("menu-toggle--opened");
  menu.classList.toggle("menu-opened");
});

