$(document).ready(function(){
  $("#submitCity").click(function(){
    return getWeather();
  })
})


function getWeather(){
  var city = $("#city").val();
  var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=927340b14919bfd5a15c4c55b3888520`

  if(city != ""){

    $.ajax({
      url: url,
      type: "GET",
      dataType: "jsonp",
      success: function(data){
        console.log(data)
        $('#showWeather').html(data);
      }
    })



  }else {
    $("#error").html("<div>City field required</div>")
  }
}
