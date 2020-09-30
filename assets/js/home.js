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
   $('.pop-clock').toggleClass('open-clock');
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

        $('.select-desc > p').removeClass('active');
        $(this).addClass('active');
        var dataS = $(this).data('select');
        $('.one-block').removeClass('active');
        $('.' + dataS).addClass('active');
        
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

  
$(".quantity-arrow-minus2").bind("click", function(){
  var $quantityNum = $(this).parent().find(".quantity-num2");
    if ($quantityNum.val() > 1){
      $quantityNum.val(+$quantityNum.val() - 1);
    }
  });
  $(".quantity-arrow-plus2").bind("click", function(){
  var $quantityNum = $(this).parent().find(".quantity-num2");
      $quantityNum.val(+$quantityNum.val() + 1);
  });

  $('#select-workers').ddslick({
    imagePosition: "left",
  });


  $(".top-input").bind("click", function(){
    $('.top-input').removeClass('onfocus')
    $(this).addClass('onfocus')
  });

  $(".top-input > .right-div").bind("click", function(){
    $('.all-map').css('display','block')
  });

  $(".close-map").bind("click", function(){
    $('.all-map').css('display','none')
  });


  $('.datepicker1').datepicker({
    inline: true,
  })

  $(".inputs").bind("click", function(){
    $('.date-time-pop').addClass('open-pop');
    $('.blue-border').addClass('smoke')
  });

  $(".smoke").bind("click", function(){
    $('.date-time-pop').removeClass('open-pop');
    $('.blue-border').removeClass('smoke')
  });

  $( ".hurry-up > button" ).click(function(event) {
    event.preventDefault();
    $('.hurry-up > button').removeClass('active');
    $(this).addClass('active');
  });

  $( ".yes-order" ).click(function(event) {
    event.preventDefault();
    $('.date-time-pop').removeClass('open-pop');
    $('.blue-border').removeClass('smoke')
  });
});

ymaps.ready(function () {
  var myMap = new ymaps.Map('map2', {
          center: [59.911494, 30.350597],
          zoom: 13
      }, {
          searchControlProvider: 'yandex#search'
      })
  
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContent: 'ул. Курская 21Б'
      }, {
          iconLayout: 'default#image',
      }),
      myMap.geoObjects
          .add(myPlacemark);
  });

