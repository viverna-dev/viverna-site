(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

})(jQuery); // End of use strict

function doSubmit() {
  var scriptUrl = "https://script.google.com/macros/s/AKfycbzCb8s-mzIFGUGSiTlowyjFvkAABNcFXQg5fZ3CceXQtTc_opIB/exec";
  var formData = {
    name: $('#name').val(),
    email: $('#email').val(),
    message: $('#message').val()
  };

  $.ajax({
    type: "POST",
    url: scriptUrl,
    data: formData,
    crossDomain: true,
    error: function(data) {
      setThanksButton();
    },
    success: function(data){
      setThanksButton();
    }
  });
}

function setThanksButton() {
  var button = $('#sendMessageButton');
  button.removeClass('btn-primary');
  button.addClass('btn-success');
  button.text('Thank you!'); 
}
