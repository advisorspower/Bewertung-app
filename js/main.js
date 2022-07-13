var prevScrollPos = $(window).scrollTop();
$(window).scroll(function () {
  var currentScrollPos = $(window).scrollTop();
  if (prevScrollPos > currentScrollPos) {
    $("header").css("top", 0);
  } else {
    $("header").css("top", -150);
  }
  prevScrollPos = currentScrollPos;
});


var swiper4 = new Swiper(".social-comments", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  navigation: {
    nextEl: ".comments-btn .news-slide-next",
    prevEl: ".comments-btn .news-slide-prev",
  },
});

fetch("modal.html")
  .then(response => response.text())
  .then(data => document.querySelector(".modals-wrapper").innerHTML = data);

//menu
$(".menu-btn").on("click", function () {
  var $this = $(this);
  if (!$this.hasClass("active")) {
    $this.addClass("active");
    $("nav").addClass("active");
    setTimeout(function () {
      $("nav").addClass("animate");
    }, 700);
  } else {
    $this.removeClass("active");
    $("nav").removeClass("animate");
    setTimeout(function () {
      $("nav").removeClass("active");
    }, 500);
  }
});

//scroll button
$(function() {
  var funkyArrow = $('.down-sec');
  funkyArrow.click(function(e) {
    e.preventDefault();
    var startPosition = $(window).scrollTop(),
      docHeight = $(document).height(),
      winHeight = $(window).height();
    if ($(this).hasClass('go-down')) {
      $('html, body').animate({
        scrollTop: startPosition + winHeight
      }, 500);
    } else {
      $('html, body').animate({
        scrollTop: 0
      }, 0);
    }
  });
});
// button



