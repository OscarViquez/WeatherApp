$(document).ready(function () {

    //====== DOM Variables ====== //
    let pEl = "<p></p>";

    //====== CURRENT WEATHER API ====== //

    //api address +city + country + apikey,
    let apiCity = "Atlanta";
    const todayKey = "539c4552c221865dbee29f3f0ff60742";
    const todayURL = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&units=imperial&APPID=${todayKey}`;

    const weekKey = "63a9ac4e19f45a761bdfaa751262d207";
    const weekURL = `https://api.openweathermap.org/data/2.5/forecast?q=${apiCity}&units=imperial&appid=${weekKey}`
//====== AJAX REQUEST ====== //
    $.ajax(todayURL, {
        method: "GET",
        data: JSON,
        url: todayURL
    }).then(data => {

        //====== Console log data ====== //
        console.log(data);
        // console.log('weather:',data.weather[0].main);
        // console.log('windspeed:',data.wind.speed);
        // console.log('description on weather:',data.weather[0].description);
        // console.log('temp:',data.main.temp,' F');
        // console.log('pressure:',data.main.pressure);
        // console.log('humid:',data.main.humidity);
        // console.log('country:',data.sys.country);
        // console.log('city name:',data.name);
        // console.log('iconID:',data.weather[0].icon);
        // console.log('date:',data.dt);

        //====== Storing Data in Object====== //
        const currWeather = {
            weather: data.weather[0].main,
            windSpeed: data.wind.speed,
            weatherDes: data.weather[0].description,
            temp: data.main.temp,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            countryName: data.sys.country,
            cityName: data.name
        };
        console.log(currWeather);
        
        $("#currWeather").append(
            $(pEl).text(`Temperature: ${currWeather.temp}`),
            $(pEl).text(`Weather: ${currWeather.weather}`),
            $(pEl).text(`Pressure: ${currWeather.pressure}`),
            $(pEl).text(`Wind Speed: ${currWeather.windSpeed}`),
            $(pEl).text(`humidity Level: ${currWeather.humidity}`),
            $(pEl).text(`Country: ${currWeather.countryName}`),
            $(pEl).text(`City: ${currWeather.cityName}`)
            //$(pEl).text(`Weather: ${ weather1.iconID}`)
        );




    });

    /////////// 5 DAY FORECAST ///////////
    //====== AJAX REQUEST ====== //
    $.ajax(weekURL, {
        method: "GET",
        data: JSON,
        url: weekURL
    }).then(data => {

        //====== Miscs ====== //
        // List -> 5, 13, 21, 29, 37,
        //console.log(data);
        //console.log(data.list[5]);

        //====== Weather 1 ====== //
        console.log("//---- Weather 1 ----//");
        console.log('temp:', data.list[5].main.temp);
        console.log('humid:', data.list[5].main.humidity);
        console.log('pressure:', data.list[5].main.pressure);
        console.log('weather:', data.list[5].weather[0].main);
        console.log('iconID:', data.list[5].weather[0].icon);
        console.log('date:', data.list[5].dt_txt.substring(0, 10));

        const weather1 = {
            temp: data.list[5].main.temp,
            humid: data.list[5].main.humidity,
            pressure: data.list[5].main.pressure,
            weather: data.list[5].weather[0].main,
            iconID: data.list[5].weather[0].icon,
            date: data.list[5].dt_txt.substring(0, 10)
        };
        console.log(weather1);
        
        $("#Monday").append(
            $(pEl).text(`Date: ${weather1.date}`),
            $(pEl).text(`Temperature: ${weather1.temp}`),
            $(pEl).text(`Weather: ${weather1.weather}`),
            $(pEl).text(`Pressure: ${weather1.pressure}`),
            $(pEl).text(`Humid: ${weather1.humid}`),
            //$(pEl).text(`Weather: ${ weather1.iconID}`)
        );


        //====== weather 2 ====== //     
        const weather2 = {
            temp: data.list[13].main.temp,
            humid: data.list[13].main.humidity,
            pressure: data.list[13].main.pressure,
            weather: data.list[13].weather[0].main,
            iconID: data.list[13].weather[0].icon,
            date: data.list[13].dt_txt.substring(0, 10)
        };
        console.log(weather2);

        $("#Tuesday").append(
            $(pEl).text(`Date: ${weather2.date}`),
            $(pEl).text(`Temperature: ${weather2.temp}`),
            $(pEl).text(`Weather: ${weather2.weather}`),
            $(pEl).text(`Pressure: ${weather2.pressure}`),
            $(pEl).text(`Humid: ${weather2.humid}`),
            //$(pEl).text(`Weather: ${ weather1.iconID}`)
        );


        //====== weather 3 ====== //    
        const weather3 = {
            temp: data.list[21].main.temp,
            humid: data.list[21].main.humidity,
            pressure: data.list[21].main.pressure,
            weather: data.list[21].weather[0].main,
            iconID: data.list[21].weather[0].icon,
            date: data.list[21].dt_txt.substring(0, 10)
        };

        console.log(weather3);

        $("#Wednesday").append(
            $(pEl).text(`Date: ${weather3.date}`),
            $(pEl).text(`Temperature: ${weather3.temp}`),
            $(pEl).text(`Weather: ${weather3.weather}`),
            $(pEl).text(`Pressure: ${weather3.pressure}`),
            $(pEl).text(`Humid: ${weather3.humid}`),
            //$(pEl).text(`Weather: ${ weather1.iconID}`)
        );


        //====== Weather 4 ====== //
        const weather4 = {
            temp: data.list[29].main.temp,
            humid: data.list[29].main.humidity,
            pressure: data.list[29].main.pressure,
            weather: data.list[29].weather[0].main,
            iconID: data.list[29].weather[0].icon,
            date: data.list[29].dt_txt.substring(0, 10)
        };

        console.log(weather4);

        $("#Thursday").append(
            $(pEl).text(`Date: ${weather4.date}`),
            $(pEl).text(`Temperature: ${weather4.temp}`),
            $(pEl).text(`Weather: ${weather4.weather}`),
            $(pEl).text(`Pressure: ${weather4.pressure}`),
            $(pEl).text(`Humid: ${weather4.humid}`),
            //$(pEl).text(`Weather: ${ weather1.iconID}`)
        );


        //====== Weather 5 ====== //
        const weather5 = {
            temp: data.list[37].main.temp,
            humid: data.list[37].main.humidity,
            pressure: data.list[37].main.pressure,
            weather: data.list[37].weather[0].main,
            iconID: data.list[37].weather[0].icon,
            date: data.list[37].dt_txt.substring(0, 10)
        };

        console.log(weather5);

        $("#Friday").append(
            $(pEl).text(`Date: ${weather5.date}`),
            $(pEl).text(`Temperature: ${weather5.temp}`),
            $(pEl).text(`Weather: ${weather5.weather}`),
            $(pEl).text(`Pressure: ${weather5.pressure}`),
            $(pEl).text(`Humid: ${weather5.humid}`),
            //$(pEl).text(`Weather: ${ weather1.iconID}`)
        );

    });

});
