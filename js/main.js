
// AOS Js
AOS.init();
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
// number count for stats, using jQuery animate
$(".num").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 3000,
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

// Projec Page ==========-------
// // Line Hover Animation
$("#residential").click(function () {
  $(".upper-tab-btn").removeClass("active");
  $(this).addClass("active");
  $("#residential-tab").removeClass("d-none");
  $("#commercial-tab").addClass("d-none");
  $("#office-tab").addClass("d-none");
});
$("#commercial").click(function () {
  $(".upper-tab-btn").removeClass("active");
  $(this).addClass("active");
  $("#residential-tab").addClass("d-none");
  $("#commercial-tab").removeClass("d-none");
  $("#office-tab").addClass("d-none");
});
$("#office").click(function () {
  $(".upper-tab-btn").removeClass("active");
  $(this).addClass("active");
  $("#residential-tab").addClass("d-none");
  $("#commercial-tab").addClass("d-none");
  $("#office-tab").removeClass("d-none");
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


// Faq Animation
$(".faq-content p").slideUp();
$(".faq-content").eq(0).find("p").slideDown();
$(".arrow .far").click(function () {
  $(".arrow .far").removeClass("active");
  $(this).addClass("active");
  $(".faq-content p").slideUp();
  $(this).parent().parent().next("p").slideToggle();
});

//Line Hover Animation on section 
$("section").each(function () {
  $(this).mouseover(function () {
    $(this).find(".left-to-right").addClass("active");
    $(this).find(".top-to-bottom").addClass("active");
  })
})

$(".lower-tab-btn").each(function () {
  $(this).mouseover(function () {
    $(this).addClass("tab-btn-active");
  })
  $(this).mouseout(function () {
    $(this).removeClass("tab-btn-active");
  })
})
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
$(".project-tab5").mouseover(function () {
  $(".lower-img").css("transform", "translateY(-2500px)");
});
$(window).resize(function () {
  var windowWidth = $(window).width();
  var threshold = 768;
  if (windowWidth < threshold) {
    $(".project-tab1").mouseover(function () {
      $(".lower-img").css("transform", "translateY(0)");
    });
    $(".project-tab2").mouseover(function () {
      $(".lower-img").css("transform", "translateY(-400px)");
    });
    $(".project-tab3").mouseover(function () {
      $(".lower-img").css("transform", "translateY(-800px)");
    });
    $(".project-tab4").mouseover(function () {
      $(".lower-img").css("transform", "translateY(-1200px)");
    });
    $(".project-tab5").mouseover(function () {
      $(".lower-img").css("transform", "translateY(-1600px)");
    });
  }

});
// $(".banner").mouseover(function(){
//   $(this).find(".left-to-right").addClass("active");
// })
// $(".banner").mouseover(function(){
//   $(this).find(".top-to-bottom").addClass("active");
// })
// $(".counter").mouseover(function(){
//   $(this).find(".left-to-right").addClass("active");
// })
// $(".counter").mouseover(function(){
//   $(this).find(".top-to-bottom").addClass("active");
// })
// $(".project").mouseover(function(){
//   $(this).find(".left-to-right").addClass("active");
// })
// $(".project").mouseover(function(){
//   $(this).find(".top-to-bottom").addClass("active");
// })
// $(".contact-form").mouseover(function(){
//   $(this).find(".left-to-right").addClass("active");
// })
// $(".contact-form").mouseover(function(){
//   $(this).find(".top-to-bottom").addClass("active");
// })
// $(".footer").mouseover(function(){
//   $(this).find(".left-to-right").addClass("active");
// })
// $(".footer").mouseover(function(){
//   $(this).find(".top-to-bottom").addClass("active");
// })
// $(".about-page").mouseover(function(){
//   $(this).find(".left-to-right").addClass("active");
// })
// $(".about-page").mouseover(function(){
//   $(this).find(".top-to-bottom").addClass("active");
// })
// $(".our-team").mouseover(function(){
//   $(this).find(".left-to-right").addClass("active");
// })
// $(".our-team").mouseover(function(){
//   $(this).find(".top-to-bottom").addClass("active");
// })
// $(".history").mouseover(function(){
//   $(this).find(".left-to-right").addClass("active");
// })
// $(".history").mouseover(function(){
//   $(this).find(".top-to-bottom").addClass("active");
// })
// $(".faq").mouseover(function(){
//   $(this).find(".left-to-right").addClass("active");
// })
// $(".faq").mouseover(function(){
//   $(this).find(".top-to-bottom").addClass("active");
// })
