$(document).ready(function(){

  
  $(".all-title > h5").bind("click", function(){
    $('.all-title > h5').removeClass('active');
    $(this).parent().parent().find(".all-blocks").removeClass().addClass("all-blocks");
    var $thisClass = $(this).attr("class");
    var $some = $(this).parent().parent().find(".all-blocks").addClass($thisClass + "-show");
    $(this).addClass('active');
  });

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
    } else if($(window).width() < '1280' && $(window).width() > '1024'){
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
          $('.select-desc > p').removeClass('active');
          $(this).parent().parent().find(".all-block-info").removeClass().addClass("all-block-info");
          var $thisClass = $(this).attr("class");
          var $some = $(this).parent().parent().find(".all-block-info").addClass($thisClass + "-show");
          $(this).addClass('active');
        });
      }
}
  $(window).on('load resize',windowSize);



  $(".razvernut").bind("click", function(){
    $('.all-p').css('height', 'auto')
    $('.razvernut').css('display', 'none')
  });
});
