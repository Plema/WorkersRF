$(document).ready(function(){
 
  $(".more").bind("click", function(event){
    $('.more').toggleClass('open-more');
    $('.with-services').removeClass('open-serv');
  });
 
  $(".lin").bind("click", function(event){
    $('.with-services').toggleClass('open-serv');
    $('.more').removeClass('open-more');
  });
 
  $(".menu-burg").bind("click", function(event){
    $('.burger-menu').addClass('open-burger-menu');
    $('body').css('overflow','hidden');
  });
 
  $(".close-burg").bind("click", function(event){
    $('.burger-menu').removeClass('open-burger-menu');
    $('body').css('overflow','auto');
  });

  $( ".showText-city" ).click(function(event) {
    event.preventDefault();
    $('.city').stop().toggleClass('open-blockP');
  });
  $( ".hiddenText-city" ).click(function(event) {
      var x = $(this).text();
      console.log(x)
      var y = $(".showText-city").text();
        $(this).text(y);
        $(".showText-city").text(x);
        $('.city').stop().toggleClass('open-blockP');
  });

});
