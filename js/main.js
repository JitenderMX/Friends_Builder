
// AOS Js
AOS.init();
$("#contact-form").load("contact-form.html");
$("#footer").load("footer.html");

// Website Loader =======-----
$(window).on('load', function () {
  setTimeout(function () {
    $(".loader-wrapper").fadeOut("slow");
  }, 1800);
})
  /* ========== Scroll Top Start ==========  */
  $(".scroll-top-btn").fadeOut();
  $(window).scroll(function() {
      var scrTop = $(window).scrollTop();
      if (scrTop > 280) {
          $(".scroll-top-btn").fadeIn(100);
          // $(".whatsapp-btn").fadeIn(100);
      } else {
          $(".scroll-top-btn").fadeOut(100);
          // $(".whatsapp-btn").fadeOut(100);
      }
  });
  $(".scroll-top-btn").click(function() {
      $("html, body").animate({
              scrollTop: 0,
          },
          500
      );
  });
  /* ========== Scroll Top End ==========  */
// Home Page Js ========------
$(function () {
  $(".testimonal .test-tab")
    .eq(0)
    .click(function () {
      if ($(this).hasClass("test-small")) {
        $(this).removeClass("test-small");
        $(this).addClass("test-big");
        $(".testimonal .test-tab").eq(1).removeClass("test-big");
        $(".testimonal .test-tab").eq(1).addClass("test-small");
        $(".testimonal .test-tab").eq(2).removeClass("test-big");
        $(".testimonal .test-tab").eq(2).addClass("test-small");
      }
    });
  $(".testimonal .test-tab")
    .eq(1)
    .click(function () {
      if ($(this).hasClass("test-small")) {
        $(this).removeClass("test-small");
        $(this).addClass("test-big");
        $(".testimonal .test-tab").eq(0).removeClass("test-big");
        $(".testimonal .test-tab").eq(0).addClass("test-small");
        $(".testimonal .test-tab").eq(2).removeClass("test-big");
        $(".testimonal .test-tab").eq(2).addClass("test-small");
      }
    });
  $(".testimonal .test-tab")
    .eq(2)
    .click(function () {
      if ($(this).hasClass("test-small")) {
        $(this).removeClass("test-small");
        $(this).addClass("test-big");
        $(".testimonal .test-tab").eq(1).removeClass("test-big");
        $(".testimonal .test-tab").eq(1).addClass("test-small");
        $(".testimonal .test-tab").eq(0).removeClass("test-big");
        $(".testimonal .test-tab").eq(0).addClass("test-small");
      }
    });
});

//Line Hover Animation on section 
$("section").each(function () {
  $(this).mouseover(function () {
    $(this).find(".left-to-right").addClass("active");
    $(this).find(".top-to-bottom").addClass("active");
  })
})
// Projec Page ==========-------
// // Line Hover Animation
$("#residential").click(function () {
  $(".project-tab-t").text($(this).text());
  $(".upper-tab-btn").removeClass("active");
  $(this).addClass("active");
  $("#residential-tab").removeClass("d-none");
  $("#commercial-tab").addClass("d-none");
  $("#office-tab").addClass("d-none");
});
$("#commercial").click(function () {
  $(".project-tab-t").text($(this).text());
  $(".upper-tab-btn").removeClass("active");
  $(this).addClass("active");
  $("#residential-tab").addClass("d-none");
  $("#commercial-tab").removeClass("d-none");
  $("#office-tab").addClass("d-none");
});
$("#office").click(function () {
  $(".project-tab-t").text($(this).text());
  $(".upper-tab-btn").removeClass("active");
  $(this).addClass("active");
  $("#residential-tab").addClass("d-none");
  $("#commercial-tab").addClass("d-none");
  $("#office-tab").removeClass("d-none");
});


$(".lower-tab-btn").each(function () {
  $(this).mouseover(function () {
    $(this).addClass("tab-btn-active");
  })
  $(this).mouseout(function () {
    $(this).removeClass("tab-btn-active");
  })
})

// slider
$(".slider-container").slick({
  dots: false,
  arrows: false
});




// const project_tab1 = document.querySelector(".project-tab1");
//     const project_tab2 = document.querySelector(".project-tab2");
//     const project_tab3 = document.querySelector(".project-tab3");
//     const project_tab4 = document.querySelector(".project-tab4");
//     const project_tab5 = document.querySelector(".project-tab5");
//     const lower_img = document.querySelector(".lower-img");

//     const residential_btn = document.querySelector("residential");
//     const commercial_btn = document.querySelector("commercial");
//     const office_btn = document.querySelector("office");
//     const residential_tab = document.querySelector("residential-tab");
//     const commercial_tab = document.querySelector("commercial-tab");
//     const office_tab = document.querySelector("office-tab");

//     project_tab1.addEventListener("mouseover", function () {
//       lower_img.style.transform = "translateY(0)";
//       this.classList.add("tab-btn-active");
//     });
//     project_tab1.addEventListener("mouseout", function () {
//       this.classList.remove("tab-btn-active");
//     });
//     project_tab2.addEventListener("mouseover", function () {
//       lower_img.style.transform = "translateY(-625px)";
//       this.classList.add("tab-btn-active");
//     });
//     project_tab2.addEventListener("mouseout", function () {
//       this.classList.remove("tab-btn-active");
//     });
//     project_tab3.addEventListener("mouseover", function () {
//       lower_img.style.transform = "translateY(-1250px)";
//       this.classList.add("tab-btn-active");
//     });
//     project_tab3.addEventListener("mouseout", function () {
//       this.classList.remove("tab-btn-active");
//     });
//     project_tab4.addEventListener("mouseover", function () {
//       lower_img.style.transform = "translateY(-1875px)";
//       this.classList.add("tab-btn-active");
//     });
//     project_tab4.addEventListener("mouseout", function () {
//       this.classList.remove("tab-btn-active");
//     });
//     project_tab5.addEventListener("mouseover", function () {
//       lower_img.style.transform = "translateY(-2500px)";
//       this.classList.add("tab-btn-active");
//     });
//     project_tab5.addEventListener("mouseout", function () {
//       this.classList.remove("tab-btn-active");
//     });







// $(window).no('load resize',function () {
//   var windowWidth = $(window).width();
//   var threshold = 768;
//   if (windowWidth < threshold) {
//     $(".project-tab1").mouseover(function () {
//       $(".lower-img").css("transform", "translateY(0)");
//     });
//     $(".project-tab2").mouseover(function () {
//       $(".lower-img").css("transform", "translateY(0px)");
//     });
//     $(".project-tab3").mouseover(function () {
//       $(".lower-img").css("transform", "translateY(0px)");
//     });
//     $(".project-tab4").mouseover(function () {
//       $(".lower-img").css("transform", "translateY(0px)");
//     });
//     $(".project-tab5").mouseover(function () {
//       $(".lower-img").css("transform", "translateY(0px)");
//     });
//   }

// });

// counter  play on coming to element
var counter = $(".counter").offset().top - 300;
$(window).scroll(function () {
  var scrTop = $(window).scrollTop();
  if (scrTop > counter) {
    $(".num").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 1000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
  }
});


