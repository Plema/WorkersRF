
$(document).ready(function(){
 
    $(".title").bind("click", function(event){
      $('.answer').slideToggle();
      $(this).parent().toggleClass('open-quest');
    });
   
  
  });
  
  
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.9114037, 30.3487953],
          zoom: 13
      }, {
          searchControlProvider: 'yandex#search'
      })
});
