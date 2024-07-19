//NAV FIXED AU SCROLL
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  var sticky = window.innerHeight;

  if (window.scrollY > sticky) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});
//BTN NAV ACTIF
document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.navRight a');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});

//SLIDER
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    onInitialized: addNumberedDots,
    onChanged: updateActiveDot,
  });

  function addNumberedDots(event) {
    var dots = $(event.target).find(".owl-dot");
    dots.each(function (index) {
      $(this).html("<span>" + (index + 1) + "</span>");
    });
  }

  function updateActiveDot(event) {
    var dots = $(event.target).find(".owl-dot");
    dots.removeClass("active");
    var activeIndex =
      event.item.index - event.relatedTarget._clones.length / 2;
    if (activeIndex < 0) {
      activeIndex = dots.length + activeIndex;
    } else if (activeIndex >= dots.length) {
      activeIndex = activeIndex % dots.length;
    }
    dots.eq(activeIndex).addClass("active");
  }
});
//ACCORDEON
$(document).ready(function () {
  $('.accordion-header').click(function () {
    var $content = $(this).next('.accordion-content');

    // Si le contenu est déjà ouvert, on le ferme
    if ($content.is(':visible')) {
      $content.slideUp();
    } else {
      // Ferme tous les autres contenus ouverts
      $('.accordion-content').slideUp();

      // Ouvre le contenu correspondant à l'en-tête cliqué
      $content.slideDown();
    }
  });
});