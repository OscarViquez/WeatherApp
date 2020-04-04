$(document).ready(function () {
    
    //====== DOM Variables ====== //
    let pEl = "<p></p>";
    
    //====== CURRENT WEATHER API ====== //
    
    //api address +city + country + apikey,
    let apiCity = "London";
    const todayKey = "539c4552c221865dbee29f3f0ff60742";
    const todayURL = `http://api.openweathermap.org/data/2.5/weather?q=${apiCity}&APPID=${todayKey}`;
    
    const weekKey = "63a9ac4e19f45a761bdfaa751262d207";
    const weekURL = `api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=71`

    $.ajax(todayURL, {
        method: "GET",
        data: JSON,
        url: todayURL
    }).then(data => {
        //the console log data
        console.log(data);
        console.log(data.weather[0].main);
        console.log(data.wind.speed);
        console.log(data.weather[0].description);
        console.log(data.main.temp);
        console.log(data.main.pressure);
        console.log(data.main.humidity);
        console.log(data.sys.country);
        console.log(data.name);
        //====== Storing Data in Variables ====== //
        const weather = data.weather[0].main;
        const windSpeed = data.wind.speed;
        const weatherDes = data.weather[0].description;
        const temp = data.main.temp;
        const pressure = data.main.pressure;
        const humidity = data.main.humidity;
        const countryName = data.sys.country;
        const cityName = data.name;

        //====== display Current Weather to HTML ====== //
        function displayCurrWeather() {
            const appendWeather = $(pEl).text(weather);
            const appSpeed = $(pEl).text(windSpeed);
            const appWeaDes = $(pEl).text(weatherDes);
            const appTemp = $(pEl).text(temp);
            const appPressure = $(pEl).text(pressure);
            const appHumidity = $(pEl).text(humidity);
            const appCity = $(pEl).text(cityName);
            const appCountry = $(pEl).text(countryName);
            
            $(".currentWeather").append(appendWeather);
            $(".appSpeed").append(appSpeed);
            $(".appWeaDes").append(appWeaDes);
            $(".appTemp").append(appTemp);
            $(".appPresure").append(appPressure);
            $(".appHumidity").append(appHumidity);
            $(".appCity").append(appCity);
            $(".appCountry").append(appCountry);
        };
        displayCurrWeather();

        

        
    });

    /////////// 5 DAY FORECAST ///////////


    





});
