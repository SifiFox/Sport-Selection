let sections = $(".section");
let dots = {
  elements: $(".nav-dots__dot"),
  dotIndex: 0,
};

// nav-dots__dot__active
let activeDot = dots.elements.eq(dots.dotIndex);

// $(document).ready(function() {
//     if ($('.section').width() >= "990") {
//         setActiveDot();
//         $('.sections').fullpage({
//             normalScrollElements: ".section-about-desc",
//             scrollingSpeed: 1400,
//             responsiveWidth: 990,
//             onLeave: function (origin, destination, direction) {
//                 if (direction === 'up') {
//                     $('.nav-dots__dot__active').removeClass('nav-dots__dot__active')
//                     // console.log(dots)
//                     // dots.dotIndex -= 1;
//                     activeDot = dots.elements.eq(dots.dotIndex);
//                     console.log(activeDot)
//                     setActiveDot()
//                 }
//                 if (direction === 'down') {
//                     $('.nav-dots__dot__active').removeClass('nav-dots__dot__active')
//                     // dots.dotIndex += 1;
//                     // console.log(dots)
//                     activeDot = dots.elements.eq(dots.dotIndex);
//                     setActiveDot()
//                 }
//
//                 if ($('.section').width() >= "990") {
//                     if (direction === 'up') {
//                         $('.animation-start__trigger').addClass('animation-end__reverse')
//                         setTimeout(() => {
//                             $('.animation-end__trigger').addClass('animation-start__reverse')
//                         }, 100)
//
//                         setTimeout(() => {
//                             $('.animation-start__trigger').removeClass('animation-start__reverse')
//                             $('.animation-end__trigger').removeClass('animation-end__reverse')
//                         }, 1000)
//                     } else {
//                         $('.animation-start__trigger').addClass('animation-start')
//
//                         setTimeout(() => {
//                             $('.animation-end__trigger').addClass('animation-end')
//                         }, 100)
//
//
//                         setTimeout(() => {
//                             $('.animation-start__trigger').removeClass('animation-start')
//                             $('.animation-end__trigger').removeClass('animation-end')
//                         }, 1000)
//                     }
//                 }
//             }
//         });
//
//     }
// });

function setActiveDot() {
  activeDot.addClass("nav-dots__dot__active");
}

$(".auth-mobile").on("click", function () {
  $(".mobile-menu").addClass("mobile-menu__active");
});

// $('.nav-dots__dot').on('click',function (e) {
//     $('.nav-dots__dot__active').removeClass("nav-dots__dot__active");
//     $(this).addClass('nav-dots__dot__active');
//     let dotIndex;
//     $(this).parent().find(".nav-dots__dot__active").each(function (){
//         dotIndex = $(this).index()
//     })
//     dots.dotIndex = dotIndex;
//     // activeDot = dots.elements.eq(dots.dotIndex);
//
//     console.log(dotIndex)
//     $(".sections").fullpage.moveTo(dotIndex);
//     // $(".sections").fullpage(getActiveSlide());
//
// })

$(".mobile-menu__item").on("click", closeMenuMobile);
$(".mobile-menu__close").on("click", closeMenuMobile);

function closeMenuMobile() {
  $(".mobile-menu__active").removeClass("mobile-menu__active");
}

$(document).ready(function () {
  if ($(".section").width() >= "990") {
    setActiveDot();
    $(".sections").fullpage({
      normalScrollElements: ".section-about-desc",
      scrollingSpeed: 1400,
      responsiveWidth: 990,
      onLeave: function (origin, destination, direction) {
        if ($(".section").width() >= "990") {
          if (direction === "up") {
            $(".nav-dots__dot__active").removeClass("nav-dots__dot__active");
            let currDot = $(".nav-dots__dot")[destination - 1];
            $(currDot).addClass("nav-dots__dot__active");
            $(".animation-end__trigger").addClass("animation-end__reverse");
            setTimeout(() => {
              $(".animation-start__trigger").addClass(
                "animation-start__reverse"
              );
            }, 100);

            setTimeout(() => {
              $(".animation-start__trigger").removeClass(
                "animation-start__reverse"
              );
              $(".animation-end__trigger").removeClass(
                "animation-end__reverse"
              );
            }, 1000);
          } else {
            $(".nav-dots__dot__active").removeClass("nav-dots__dot__active");
            let currDot = $(".nav-dots__dot")[destination - 1];
            $(currDot).addClass("nav-dots__dot__active");

            console.log(origin);

            $(".animation-start__trigger").addClass("animation-start");
            setTimeout(() => {
              $(".animation-end__trigger").addClass("animation-end");
            }, 100);
            setTimeout(() => {
              $(".animation-start__trigger").removeClass("animation-start");
              $(".animation-end__trigger").removeClass("animation-end");
            }, 1000);
          }
        }
      },
    });
  }
});

$(".nav-dots__dot").on("click", function (e) {
  $(".nav-dots__dot__active").removeClass("nav-dots__dot__active");
  $(this).addClass("nav-dots__dot__active");
  let dotIndex;
  $(this)
    .parent()
    .find(".nav-dots__dot__active")
    .each(function () {
      dotIndex = $(this).index();
    });
  dots.dotIndex = dotIndex;
  dotIndex += 1;
  $(".sections").fullpage.moveTo(dotIndex);
  console.log(dotIndex);
});
