//CSS

$("*").css({"border": "0", "margin": "0", "padding": "0", "list-style": "none"});
$("body").css({"background": "#555"})
$("header").css({"border-bottom": "7px double orange", "background": "black", "color": "white", "text-align": "center"})
$("section#cities-section").css({"margin": "10px", "border": "2px solid blue", "max-width": "200px","text-align": "center", "background": "#333", "min-height": "200px"})
$("#cities").css({"margin": "auto"})
$("h2#select-city").css({"margin": "10px 0", "color": "white"})
$("#output").css({"margin": "10px", "border": "2px solid blue", "max-width": "500px", "background": "#333", "height": "200px", "color": "white", "padding": "30px"})
$("#wrapper").css({"max-width": "500px", "margin": "auto"})



$(document).ready(function(){
//   var apiKey = "$appid=2050cbb0a69d13bed5f40868d4dac37e";
//   var apiCall = "http://api.openweathermap.org/data/2.5/weather?q=London";
//   var taekosKey = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed'
// $.get(apiCall + apiKey, function(data){
//   console.log(data);
// })

var apiCall = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=a3d9eb01d4de82b9b8d0849ef604dbed";

// var weatherRequest = function(){
//   $.get(apiCall + cities + apiKey, function(data){
//     console.log(data);
// })
// };

$("#cities").change(function(){
  var newCity = $("#cities").val();
  var cityName = $("#select-city");
  cityName.text(newCity);

  $.get(apiCall + newCity + apiKey, function(data){
    $("#temp").text(data.main.temp);
    $("#humidity").text(data.main.humidity);
    $("#wind").text(data.wind.speed);
    console.log(data);

})
})

// $("#cities").change(function(){
//   var cityName = $("#select-city");
//   cityName.text($("#cities").val());
// })



//INTERESTING LESSON TODAY! When you include a global variable in a function, it won't edit the variable even if the function is meant to. It'll just work with it.
  //for example, it won't change the value of that variable, even if you specifically tell it to. But if you make the variable local, it is totally editable by that funciton.










})//End of file
