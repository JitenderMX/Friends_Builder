$(document).ready(function () {
  // Call the checkViewportWidth function on window load
  checkViewportWidth();

  // Call the checkViewportWidth function on window resize
  // $(window).resize(function () {
  //   checkViewportWidth();
  // });
  // $(window).load(function () {
  // });
  $(window).on('resize load', function () {
    checkViewportWidth();

  })

  function checkViewportWidth() {
    var viewportWidth = $(window).width();

    if (viewportWidth <= 1200) {
      // Code for extra large devices (1200px and down)
    }

    if (viewportWidth <= 992) {
      // Code for large devices (992px and down)
    }

    if (viewportWidth <= 768) {
      // Code for medium devices (768px and down)
      $(".mobile-slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
      });
      $(".test-tab").removeClass("test-small");
      $(".test-tab").removeClass("test-big");
      $(".upper-tab").slideUp();
      $(".project-tab-btn").on('click', function () {
        $(".upper-tab").slideToggle();
        $(this).find(".far").toggleClass("active");
      })
    }
    else {
      $(".upper-tab").slideDown();

      $(".mobile-slider").slick('unslick')

      // Project Tab Box
      $(".project-tab1").mouseover(function () {
        $(".lower-img").css("transform", "translateY(0)");
      });
      $(".project-tab2").mouseover(function () {
        $(".lower-img").css("transform", "translateY(-625px)");
      });
      $(".project-tab3").mouseover(function () {
        $(".lower-img").css("transform", "translateY(-1250px)");
      });
      $(".project-tab4").mouseover(function () {
        $(".lower-img").css("transform", "translateY(-1875px)");
      });
    }

    if (viewportWidth <= 576) {
      // Code for small devices (576px and down)
    }
  }

});