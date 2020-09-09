
$(document).ready(function(){
 
    $(".title").bind("click", function(event){
      $(this).parent().find('.answer').slideToggle();
      $(this).parent().toggleClass('open-quest');
    });
   
  
  });
  
  

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
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
