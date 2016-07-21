// AJAX
// Asynchronous JavaScript And XML


updateCityName();
updateTemp();

setInterval(updateTemp, 60000);

function updateTemp() {
  
  $.getJSON("http://api.wunderground.com/api/6909934e349e83ce/conditions/q/CA/Los_Angeles.json", function(weatherData) {
    
    // update page
    weatherData = weatherData.current_observation;
    
    var $tempDiv = $("#temp");
    var $pastTempsDiv = $("#past-temps");
        

    var temp = weatherData.temp_f;
    var imgSrc = weatherData.icon_url;
    
    $("#favicon").attr("href", imgSrc);
    
    var imgStr = "<img id=weather-icon src=" + imgSrc + " alt=weather />";
    
    $tempDiv.animateCss("bounceOut");
    // $tempDiv.hide();   
    $tempDiv.html(imgStr + " " + temp + "&deg;");
    // $tempDiv.show();
    $tempDiv.animateCss("bounceInLeft");
    
    $pastTempsDiv.prepend(temp + "&deg;" + "<br>");    
    
    // check time
    var today = new Date();
    if (today.getMinutes() % 10 === 0) {
      alert("Going to talk!");
      responsiveVoice.speak("The current temperature is " + temp + " degrees.", "Australian Female");
    }
    
  });
  
  return "cookies";
  
}

function updateCityName() {
  
  $.getJSON("http://api.wunderground.com/api/6909934e349e83ce/conditions/q/CA/Los_Angeles.json", function(weatherData) {
    
    weatherData = weatherData.current_observation;
    
    var $cityDiv = $("#city");
    
    var cityName = weatherData.display_location.city;        
    
    $cityDiv.text(cityName);
    
  });
  
}

// $.ajax({
//   url: "http://api.wunderground.com/api/6909934e349e83ce/conditions/q/CA/Los_Angeles.json",
//   success: function(weatherData) {
//     
//     weatherData = weatherData.current_observation;
//         
//     var $cityDiv = $("#city");
//     var $tempDiv = $("#temp");    
//     
//     var cityName = weatherData.display_location.city;        
//     var temp = weatherData.temp_f;
//     var imgSrc = weatherData.icon_url;
//     
//     $cityDiv.text(cityName);    
//     $tempDiv.text(temp);
//         
//   },
//   error: function(e) {
//     console.log(e);
//   }
// });

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});







