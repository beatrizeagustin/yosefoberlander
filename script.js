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
