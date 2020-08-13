$(document).ready(function(){

  $('body').css('opacity','1')
 
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

  $( ".city > .top" ).click(function(event) {
    event.preventDefault();
    $('.city').stop().toggleClass('open-blockP');
  });
  $( ".hiddenText-city" ).click(function(event) {
      var x = $(this).text();
      var y = $(".showText-city").text();
        $(this).text(y);
        $(".showText-city").text(x);
        $('.city').stop().toggleClass('open-blockP');
  });

  $('.file-caption-name').attr("placeholder", "Файл не выбран")
  $('.btn-file > span').text('Прикрепить')
  $('.fileinput-remove-button > span').text('x')

  $(".close-pop").bind("click", function(event){
    $('.pop-up').removeClass('open-pop');
    $('.back-dark').removeClass('open-back-dark');
    $('body').css('overflow','auto')
  });
  
  $(".send-primechanie").bind("click", function(event){
    $('.pop-up').removeClass('open-pop');
    $('.back-dark').removeClass('open-back-dark');
    $('body').css('overflow','auto')
  });

  $(".back-dark").bind("click", function(event){
    $('.pop-up').removeClass('open-pop');
    $('.back-dark').removeClass('open-back-dark');
    $('body').css('overflow','auto')
  });

  $(".open-pop-sale").bind("click", function(event){
    $('.discount-pop').addClass('open-pop');
    $('.back-dark').addClass('open-back-dark');
    $('body').css('overflow','hidden');
  });

  $(".open-politic").bind("click", function(event){
    $('.pop-up').removeClass('open-pop');
    $('.politic-pop').addClass('open-pop');
    $('.back-dark').addClass('open-back-dark');
    $('body').css('overflow','hidden');
  });

  $(".open-politic").bind("click", function(event){
    $('.pop-up').removeClass('open-pop');
    $('.politic-pop').addClass('open-pop');
    $('.back-dark').addClass('open-back-dark');
    $('body').css('overflow','hidden');
  });

  $(".open-vacancy").bind("click", function(event){
    $('.pop-up').removeClass('open-pop');
    $('.vacancy').addClass('open-pop');
    $('.back-dark').addClass('open-back-dark');
    $('body').css('overflow','hidden');
  });
    
  $(".open-accept").bind("click", function(event){
    $('.pop-up').removeClass('open-pop');
    $('.accept-pop').addClass('open-pop');
    $('.back-dark').addClass('open-back-dark');
    $('body').css('overflow','hidden');
  });

  $("#check1-contactMenedg").mask("+7 (___)___ __ __");
  $("#check1-contactMenedgBig").mask("+7 (___)___ __ __");
  $("#numb3").mask("+7 (___)___ __ __");
  $("#inp-footer").mask("+7 (___)___ __ __");
  $("#inp-popup1").mask("+7 (___)___ __ __");
  $("#phone-p").mask("+7 (___)___ __ __");
});
