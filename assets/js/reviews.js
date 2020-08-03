$(document).ready(function(){
 
  $(".pagin > ul > li").bind("click", function(event){
    $('.pagin > ul > li').removeClass('active');
    $(this).addClass('active');
  });
 
  $(".wr-review").bind("click", function(event){
    $('.write-review').css('display','block');
    $('.write-control').css('display','none');
    $('.tabs > a').removeClass('active-tab');
    $(this).addClass('active-tab');
  });
 
  $(".wr-control").bind("click", function(event){
    $('.write-control').css('display','block');
    $('.write-review').css('display','none');
    $('.tabs > a').removeClass('active-tab');
    $(this).addClass('active-tab');
  });
 
  $("#inp-reviews").mask("8(999) 999-9999");
  $("#inp-reviews2").mask("8(999) 999-9999");

});
