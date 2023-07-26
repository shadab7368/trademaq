$(document).ready(function () {
  // Header Scroll
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $("#header2").addClass("fixed");
    } else {
      $("#header2").removeClass("fixed");
    }
  });

  // Page Scroll
  var sections = $("section");
  nav = $('nav[role="navigation"]');

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();
    sections.each(function () {
      var top = $(this).offset().top - 76;
      bottom = top + $(this).outerHeight();
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });
  nav.find("a").on("click", function () {
    var $el = $(this);
    id = $el.attr("href");
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - 75,
      },
      500
    );
    return false;
  });

  // Mobile Navigation
  $(".nav-toggle").on("click", function () {
    $(this).toggleClass("close-nav");
    nav.toggleClass("open");
    return false;#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
}
  });
  nav.find("a").on("click", function () {
    $(".nav-toggle").toggleClass("close-nav");
    nav.toggleClass("open");
  });
});


/*---------------------------------------------------- */
/* Smooth Scrolling
  	------------------------------------------------------ */
$(".smoothscroll").on("click", function (e) {
  e.preventDefault();

  var target = this.hash,
    $target = $(target);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top,
      },
      800,
      "swing",
      function () {
        window.location.hash = target;
      }
    );
});

/*----------------------------------------------------- */
/* Back to top
   ------------------------------------------------------- */
var pxShow = 300; // height on which the button will show
var fadeInTime = 400; // how slow/fast you want the button to show
var fadeOutTime = 400; // how slow/fast you want the button to hide
var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

// Show or hide the sticky footer button
jQuery(window).scroll(function () {
  if (!$("#header-search").hasClass("is-visible")) {
    if (jQuery(window).scrollTop() >= pxShow) {
      jQuery("#go-top").fadeIn(fadeInTime);
    } else {
      jQuery("#go-top").fadeOut(fadeOutTime);
    }
  }
});

/*----------------------------------------------------- */
/* Back to top
   ------------------------------------------------------- */
var pxShow = 300; // height on which the button will show
var fadeInTime = 400; // how slow/fast you want the button to show
var fadeOutTime = 400; // how slow/fast you want the button to hide
var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

// Show or hide the sticky footer button
jQuery(window).scroll(function () {
  if (!$("#header-search").hasClass("is-visible")) {
    if (jQuery(window).scrollTop() >= pxShow) {
      jQuery("#cust-top").fadeIn(fadeInTime);
    } else {
      jQuery("#cust-top").fadeOut(fadeOutTime);
    }
  }
});
