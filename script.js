/* SCROLL ANIMATION */
$(window).on('scroll', function() {
  if($(window).scrollTop() >= 900) {
    $('#portfolio h4').addClass('animated');
        setTimeout(function() {
            $('.portfolio-skills li').addClass("slide");
            $('.skill-wrapper').removeClass("hidden")
        }, 100)
    }

  if($(window).scrollTop() >= 1300) {
      $('#services h4').addClass('animated');
      $('#portfolio span').removeClass('cursor')
        let list = $('.services-list li')
        for (i = 0; i < list.length; i++) {
            (function(i) {
                setTimeout(function() {
                    list[i].setAttribute("style", "animation: slidedown 0.5s ease; visibility: visible");
                }, i*200)
            }(i))
        }
  }
  if($(window).scrollTop() >= 2100) {
      $('#social h4').addClass('animated');
      $('#services span').removeClass('cursor');
      $('#one').removeClass('hidden').addClass('animated2');
      $('#two').removeClass('hidden').addClass('animated3')
        let list = $('.social-list li')
        for (i = 0; i < list.length; i++) {
            (function(i) {
                setTimeout(function() {
                    list[i].setAttribute("style", "animation: slidedown 0.5s ease; visibility: visible");
                }, i*200)
            }(i))
        }
  }
})

// test SCRIPTS for better scrolling and view

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();
/*
var isElementInView = Utils.isElementInView($('#flyout-left-container'), false);

if (isElementInView) {
    console.log('in view');
} else {
    console.log('out of view');
} */
