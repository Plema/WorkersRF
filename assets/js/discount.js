$(document).ready(function(){
 
  $(".pagin > ul > li").bind("click", function(event){
    $('.pagin > ul > li').removeClass('active');
    $(this).addClass('active');
  });
 

});
