
$(document).ready(function(){
 
  $(".look-more").bind("click", function(event){
    $('.more-img').addClass('show-all');
    $('.look-more').css('display','none');
  });

  $("#numb-pay").mask("+7 (999)999 99 99");

});