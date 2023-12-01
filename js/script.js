document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  });