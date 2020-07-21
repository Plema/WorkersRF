$(document).ready(function(){
 
  $(".filtr").bind("click", function(event){
    $('.filtr').removeClass('active');
    $(this).addClass('active');
  });
 
  $(".pagin > ul > li").bind("click", function(event){
    $('.pagin > ul > li').removeClass('active');
    $(this).addClass('active');
  });
 

});
