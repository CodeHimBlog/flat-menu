/* Demo only */
$(function(){
/* Change the color */
 $(".theme-tray span").click(function() {
  var skin = $(this).attr("class");
  $(".side-bar").attr('class', skin).addClass("side-bar");
  $(".flat-menu").attr('class', skin).addClass("flat-menu");
  });
});