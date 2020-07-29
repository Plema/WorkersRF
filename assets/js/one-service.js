$(document).ready(function(){

  

  function windowSize(){
    if ($(window).width() < '1024'){
      $('.mob-etap-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      });
      $('.slick-arrow').empty();
      $('.slick-dots > li > button').empty();
    } else {
      $('.mob-etap-slider').unslick();
    }
}
  $(window).on('load resize',windowSize);

  $(".all-title > h5").bind("click", function(){
    $('.all-title > h5').removeClass('active');
    $(this).parent().parent().find(".all-blocks").removeClass().addClass("all-blocks");
    var $thisClass = $(this).attr("class");
    var $some = $(this).parent().parent().find(".all-blocks").addClass($thisClass + "-show");
    $(this).addClass('active');
  });

  //Slick-empty
  $('.slick-arrow').empty();
  $('.slick-dots > li > button').empty();

});
