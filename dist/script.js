window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrolled = window.pageYOffset > 500;

  if (scrolled) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

