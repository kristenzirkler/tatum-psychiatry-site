// Main JS File Unminified 
$(function(){

  // fade in
  $(document).ready(function(){
    $('.container').addClass('show');

    var username = 'info',
      hostname = 'tatumpsyciatry.com', 
      linktext = username + '@' + hostname;

    $('#contact-email').html('<a href="mailto:' + linktext + '">' + linktext + '</a>');

  });


});