
$(document).ready(function(){
 
  $(".title").bind("click", function(event){
    $(this).parent().find('.answer').slideToggle();
    $(this).parent().toggleClass('open-quest');
  });
 

});