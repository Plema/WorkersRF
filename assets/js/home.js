$(document).ready(function(){
 
  $('.top-but').removeClass('acti');
  $('.phis').addClass('acti');

  $('.slider-banner').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  
  $('.slider-review').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  });

  
  //Slick-empty
  $('.slick-arrow').empty();
  $('.slick-dots > li > button').empty();

  $( ".showText2" ).click(function(event) {
    event.preventDefault();
   $('.sel2').stop().slideToggle();
  });
  $( ".hiddenText2" ).click(function(event) {
      var x = $(this).text();
      var y = $(".showText2").text();
        $(this).text(y);
        $(".showText2").text(x);
      $('.sel2').stop().slideToggle();
  });

  $( ".showText3" ).click(function(event) {
    event.preventDefault();
   $('.sel3').stop().slideToggle();
   $(this).parent().toggleClass('open-sel')
  });
  $( ".hiddenText3" ).click(function(event) {
      var x = $(this).text();
      $(this).parent().parent().toggleClass('open-sel')
      var y = $(".showText3").text();
        $(this).text(y);
        $(".showText3").text(x);
      $('.sel3').stop().slideToggle();
  });

  
  $(".quantity-arrow-minus").bind("click", function(event){
    event.preventDefault();
    var $quantityNum = $(this).parent().parent().find(".quantity-num");
    if ($quantityNum.val() > 1){
      $quantityNum.val(+$quantityNum.val() - 1);
    }
  });
  $(".quantity-arrow-plus").bind("click", function(event){
    event.preventDefault();
      var $quantityNum = $(this).parent().parent().find(".quantity-num");
      $quantityNum.val(+$quantityNum.val() + 1);
  });



  function windowSize(){
    if ($(window).width() < '1280'){
        $( ".showText" ).click(function(event) {
          event.preventDefault();
        $('.sel').stop().slideToggle();
        });
        $( ".hiddenText" ).click(function(event) {
            var x = $(this).text();
            var y = $(".showText").text();
              $(this).text(y);
              $(".showText").text(x);
            $('.sel').stop().slideToggle();
        });
    } else {
      $(".select-desc > p").bind("click", function(event){

        $(this).parent().parent().find(".all-block-info").removeClass().addClass("all-block-info");
        var $thisClass = $(this).attr("class");
        var $some = $(this).parent().parent().find(".all-block-info").addClass($thisClass + "-show");

        $('.select-desc > p').removeClass('active');
        $(this).addClass('active');
      });
    }
}
  $(window).on('load resize',windowSize);


  $('#my-element').datepicker({
    minDate: new Date(  )
  })

  
  $(".primechanie").bind("click", function(event){
    $('.primechanie-pop').addClass('open-pop');
    $('.back-dark').addClass('open-back-dark');
    $('body').css('overflow','hidden');
  });


});
