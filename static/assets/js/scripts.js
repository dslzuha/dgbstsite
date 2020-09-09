window.onGatsbyRouteUpdate = function() {
/* Navigation on small screens */
let navToggle = document.querySelectorAll('.js-nav-toggle');
if (navToggle) {
  for (let i = 0; i < navToggle.length; i++) {
    navToggle[i].addEventListener('click', function (e) {
      document.body.classList.toggle('js-nav-open');
      e.preventDefault();
    });
  }
}
document.body.classList.remove('js-nav-open');

};