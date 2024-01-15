'use strict';

/** mbile toggle nav-bar **/ 

const /** {elementNode} **/ $navbar = document.querySelector("[data-navbar]");
const /** {elementNode} **/ $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));


/** state-scroll-head **/

const /** {elementNode} **/ $header = document.querySelector("{data-header}");

window.addEventListener("scroll" e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
});




