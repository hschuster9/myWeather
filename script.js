$(document).ready(function(){
  $("#submitCity").click(function(){
    return getWeather();
  })
})


function getWeather(){
  var city = $("#city").val();
  var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=927340b14919bfd5a15c4c55b3888520`

  if(city != ""){

    $.ajax({
      url: url,
      type: "GET",
      dataType: "jsonp",
      success: function(data){
        //pass function into variable
        var widget = showResults(data);

        $('#showWeather').html(widget);
        $("#icon").html("<img style='height: 80px; margin: auto; display:block; margin-top: 10px;' class='weatherIcon' src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>")
        $('#city').val("");

      }
    })

  } else {
    $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='' class='close' data-dismiss='alert' aria-label='close'>&times</a>City field required</div>")
  }
}


//return value of parameter - temp
function showResults(data){
  var iconCode = data.weather[0].icon;
  var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

  return "<h3 style='font-size:25px; padding-top: 25px;' class='text-center'>"+data.name+"</h3>"+
          "<p style='padding-left:40px; padding-top: 50px;'><strong>Condition</strong>: "  +data.weather[0].description+"</p>"+
          "<p style='padding-left:40px;'><strong>Temperature</strong>: "+data.main.temp+" &deg;F</p>"+
          "<p style='padding-left:40px;'><strong>High</strong>: "+data.main.temp_max+" &deg;F</p>"+
          "<p style='padding-left:40px;'><strong>Low</strong>: "+data.main.temp_min+" &deg;F</p>"+
          "<p style='padding-left:40px;'><strong>Humidity</strong>: " +data.main.humidity+"%</p>"+
          "<p style='padding-left:40px; padding-bottom: 30px;'><strong>Wind</strong>: " +data.wind.speed+"mph</p>"

}
