document.addEventListener("DOMContentLoaded", function() {
 /*
  $("#ctemp").addEventListener("click", hider());
$("#ftemp").addEventListener("click", hider());
*/
var celsius = 0;
var ctemp = 0;


getLocation();
widthCheck();
$(window).resize(function(){
  widthCheck();
});



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position);
    } else {
       console.log("not working");

    }
}
function position(position){

  var latitude =position.coords.latitude.toFixed(2);
  var longitude =position.coords.longitude.toFixed(2);
  weatherUpdate(latitude, longitude);
}

function widthCheck(){
  if($( document ).width()<800){
    $(".inner_mid").css("flex-flow", "column");
  } else {
    $(".inner_mid").css("flex-flow", "row");
  }

}





  function weatherUpdate(lat, long){
  $.ajax({
    url:"https://fcc-weather-api.glitch.me/api/current?lon="+long+"&lat="+lat, success: function (result) {
       $("#location").html("<h2>"+result.name+", "+result.sys.country+"</h2>");

  weather = result.weather[0].main;
  $("#weather_icon").removeClass();
  temp = result.main.temp;


  var ctemp=parseFloat(temp);
  var ftemp = ctemp*(9/5)+32;
  ctemp=  temp.toFixed(2);
  ftemp=  ftemp.toFixed(2);
  $("#ctemp").html(ctemp+'&#8451');        $("#ftemp").html(ftemp+'&#8457');


      console.log(ftemp, ctemp);

var icon = "";
  //weather = "hay";
  weather = weather.toLowerCase();
  if(weather.includes("rain") && weather.includes("wind")){
      icon="wi-rain-wind";
      document.body.background = "https://cdn.pixabay.com/photo/2014/04/05/11/39/rain-316579_960_720.jpg";}
  else if (weather.includes("fog")){
      icon="wi-fog";
      document.body.background = "https://i.imgur.com/NVHkhFX.jpg";}
  else if (weather.includes("cloud")){
      icon="wi-cloudy";
      document.body.background = "http://www.freeimageslive.co.uk/files/images001/clouds4482.JPG";}
  else if(weather.includes("wind")){
      icon="wi-windy";
      document.body.background = "http://wallportal.com/uploads/posts/windy-wallpaper/windy_wallpaper_019.jpg"}
  else if(weather.includes("rain")){
      icon="wi-rain";
      document.body.background = "https://cdn.pixabay.com/photo/2014/04/05/11/39/rain-316579_960_720.jpg";}
  else if(weather.includes("storm")){
      icon="wi-storm-showers";
      document.body.background = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDOPLdnpqJW96UGIiwWb6BjGrqfQuQ4fedhO70LLv8NSsU6OU";}
   else if(weather.includes("sun")){
      icon="wi-day-sunny";
      document.body.background = "http://tribwpmt.files.wordpress.com/2013/05/beachbody.jpg";
   }
   else if(weather.includes("clear")){
      icon="wi-night-clear";
      document.body.background = "https://res.cloudinary.com/hhberclba/image/upload/v1460294745/uvrmyoknxtuls18x87yo.png"}
   else {
      icon="wi-meteor";
      document.body.background = "http://img.psdvault.com/2011/01/end-of-world-battle-scene-flatten1.jpg"}
  icon += " wi wi-fw "
  console.log(icon);
  $("#weather_icon").addClass(icon);



  }});
  }
});
function hider(){
  $("#ctemp").toggleClass("hide");
  $("#ftemp").toggleClass("hide");
                }
