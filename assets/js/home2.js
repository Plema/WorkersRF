$(document).ready(function(){
 
  $('.top-but').removeClass('acti');
  $('.ur').addClass('acti');
  
  $('.slider-banner').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  
  $('.slider-clients').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          dots: false,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  
  //Slick-empty
  $('.slick-arrow').empty();
  $('.slick-dots > li > button').empty();



});
