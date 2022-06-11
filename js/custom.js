// Header
window.onscroll = function () {
    myFunction()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
// Header
// Carousel
$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 3

      },
      1900: {
        items: 3
      }
    }
  })
  // Carousel