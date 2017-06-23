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
        $(".icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>")
        $('#city').val("");

      }
    })

  } else {
    $("#error").html("<div>City field required</div>")
  }
}


//return value of parameter - temp
function showResults(data){
  var iconCode = data.weather[0].icon;
  var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

  return "<h4>"+data.name+"</h4>"+

      "<p>Condition: " +data.weather[0].description+"</p>"+
      "<p>Temperature: "+data.main.temp+" &deg;F</p>"+
      "<p>Humidity: " +data.main.humidity+"</p>"+
      "<p>Wind: " +data.wind.speed+"mph</p>"

}
