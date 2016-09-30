(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.tooltipped').tooltip({delay: 50});

  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();


    /*
     * Scroll to
     * data-scroll-to="#element" or href="#element"
     */

    $('[data-scroll-to]').on('click', function(e) {
      e.preventDefault();
      var target = $(this).data('scroll-to') || $(this).attr('href');

      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 600);
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
