$(document).ready(function () {

  
    ////////// CURRENT WEATHER //////////////

    //api address +city + country + apikey,
    let apiCity = "London";
    const todayKey = "539c4552c221865dbee29f3f0ff60742";
    const todayURL = `http://api.openweathermap.org/data/2.5/weather?q=${apiCity}&APPID=${todayKey}`;
    
    const weekKey = "63a9ac4e19f45a761bdfaa751262d207";
    const weekURL = `api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=71`

    $.ajax(todayURL, {
        method: "GET",
        url: todayURL
    }).then(data => {
        //the data
        console.log(data);
        // ^ weather data (id, main, description, icon) { clear sky }
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        // ^ temp, feels_like, temp_min, temp_max, pressure, humidity
        console.log(data.main.temp);
        console.log(data.main.pressure);
        console.log(data.main.humidity);
        console.log(data.sys.country);
        console.log(data.name);
        
    });
    
    /////////// 5 DAY FORECAST ///////////


    





});
