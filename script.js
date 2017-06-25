$(document).ready(function(){
  $("#submitCity").click(function(){
    return getWeather();
  })
})

function getWeather(){
  var city = $("#city").val();
  var state = $("#state").val();
  var url = `https://api.wunderground.com/api/67e285089e02a77a/conditions/q/${state}/${city}.json`

  if(city != "" ){

    $.ajax({
      url: url,
      type: "GET",
      dataType: "jsonp",
      success: function(data){
        var widget = showResults(data);

        $('#showWeather').html(widget);
        $('#city').val("");
        $('#state').val("");

      }
    })

  }
    else {
      $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='' class='close' data-dismiss='alert' aria-label='close'>&times</a>City field required</div>")
  }
}

function showResults(data){

  return  "<h3 style='font-size:24px; padding-top: 35px;' class='text-center results'>"+data.current_observation.display_location.full+" ("+data.current_observation.display_location.zip+")</h3>"+
          "<img src="+data.current_observation.icon_url+" style='height: 50px; width: 50px; margin: auto; display:block;' class='results'>"+
          "<p style='font-size: 40px; color: #FF7040'; class='text-center results'><strong>"+data.current_observation.temp_f+" &degF</strong> </p>"+
          "<p style='padding-top: 22px;' class='text-center results'><strong>Condition</strong>: "+data.current_observation.weather+"</p>"+
          "<p class='text-center results'><strong>Humidity</strong>: "+data.current_observation.relative_humidity+" &degF</p>"+
          "<p  class='text-center results'><strong>Wind</strong>: "+data.current_observation.wind_mph+"mph, "+data.current_observation.wind_dir+"</p>"

  }
