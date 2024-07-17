window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  var sticky = window.innerHeight;

  if (window.scrollY > sticky) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

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