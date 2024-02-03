var navbar = document.getElementById('navbar');

window.onscroll = function() {scrollFunction()};
function scrollFunction () {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
        navbar.style.backgroundColor = "black";
        navbar.style.transition = "500ms"
    }
    else {
        navbar.style.backgroundColor = " rgba(245, 245, 220, 0)";
    }
}