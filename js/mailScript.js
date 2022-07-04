$(document).ready(function($) {

          $("#form5").submit(function() {

            $.ajax({
              type: "POST",
              url: "send9.php",
              data: $("#form5").serialize()
            }).done(function() {
               $('.pop_up_modal').fadeOut();
               $(".black_wrapper").fadeOut();
               setTimeout(function () {
                 window.location.href='thanks.html';
               }, 300)
              
            });
            return false;
          });
      
});