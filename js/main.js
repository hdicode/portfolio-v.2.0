window.onscroll = function() {scrollNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scrollNavbar() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}