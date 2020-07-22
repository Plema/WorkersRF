
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.9114037, 30.3487953],
          zoom: 14
      }, {
          searchControlProvider: 'yandex#search'
      }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: №799370; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          balloonContent: 'г. Москва, ул. Ленина, 25'
      }, {
          iconLayout: 'default#image',
          iconImageHref: '../img/vector.png',
          iconImageSize: [30, 42],
          iconImageOffset: [-5, -38]
      });

  myMap.geoObjects
      .add(myPlacemark)
});