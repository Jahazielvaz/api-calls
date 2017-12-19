// $(document).ready(function() {
//
//   $('#current-city').change(function() {
//     var city = $('#current-city').val();
//     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
//       $('#current-temperature').text(data.main.temp + " °C")
//   })
//
//     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
//       $('#current-weather').text(data.weather[0].description) // this selects the element and updates it w/ the open weather temp
//     })
//   })
//
//   $('#select-zipcode').submit(function(event) {
//     event.preventDefault();
//     var zip = $('#current-city-zipcode').val();
//     $.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
//       $('#current-temperature').text(data.main.temp + " °C");
//     })
//   })
//
// }) // end document.ready wrapper

//MY SECTION
$(document).ready(function(){
  var apiKey = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed'
  var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q='

  $("#city").change(function(){
    var city = $("#city").val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data){
      console.log(data);
    })
  })

}) // end doc ready

/*
QUESTIONS FOR TAEKO:
-Why isn't there anything inside the val function.
-How did she know the data parameter before making the call.
-how did she know the data temp and main
*/

// $(document).ready(function() {
//   var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
//   var zipUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
//   var apiKey = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
//   var units = '&units=metric';
//
//    $('#current-city').change(function() {
//      var city = $('#current-city').val(); // local variable as this is defined by the change event
//      $.get(url + city + apiKey + units, function(data) {
//       $('#current-temperature').text(data.main.temp + " °C");
//      })
//
//      $.get(url + city + apiKey + units, function(data) {
//       $('#current-weather').text(data.weather[0].description);
//      })
//    }) // end change event
//
//
//    $('#select-zipcode').submit(function(event) {
//      event.preventDefault();
//      var zip = $('#current-city-zipcode').val();
//      $.get(zipUrl + zip + apiKey + units, function(data) {
//        $('#current-temperature').text(data.main.temp + " °C");
//      })
//    })
// })
