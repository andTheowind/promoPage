$(document).ready(function($) {

          $(".open_pop_modal").click(function() {
            $(".pop_up_modal").fadeIn()
            $(".black_wrapper").fadeIn();
          });
          $(".black_wrapper, .close_pop").click(function() {
            $(".pop_up_modal").fadeOut();
            $(".black_wrapper").fadeOut();
          });

});