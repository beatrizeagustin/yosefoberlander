/* SCROLL ANIMATION */
$(window).on('scroll', function() {
  if($(window).scrollTop() >= 300) {
    $('#portfolio h4').addClass('animated');
    
    let li = $(".portfolio-skills li")
    for (i=0; i < li.length; i++) {
        setTimeout(function() {
            $('.portfolio-skills li').addClass("slide");
            $('.skill-list').removeClass("hidden")
        }, 100)  
    }
  }
  if($(window).scrollTop() >= 500) {  
      $('#services h4').addClass('animated'); 
        let list = $('.services-list li')
        for (i = 0; i < list.length; i++) {
            (function(i) {
                setTimeout(function() { 
                    list[i].setAttribute("style", "animation: slidedown 0.5s ease; visibility: visible");  
                }, i*200)
            }(i))
        }
  }
  if($(window).scrollTop() >= 900) {  
      $('#social h4').addClass('animated'); 
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

 



