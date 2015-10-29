 
$(document).ready(function() {
   $(function() {
          $('#slides').slidesjs({
            width: 940,
            height: 528,
            navigation: false
          });
          $('#slides2').slidesjs({
        width: 940,
        height: 528,
        navigation: false,
        start: 3,
        play: {
          auto: true
        }
      });

      $('#slides3').slidesjs({
        width: 940,
        height: 528,
        navigation: false,
        start: 3,
        play: {
          auto: true
        }
      });
      $('#slides4').slidesjs({
        width: 940,
        height: 528,
        navigation: false
      });
    });
  
});
