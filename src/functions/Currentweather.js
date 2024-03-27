

export async function currentWeather(apikey, city, callback) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const sunriseTime = new Date(data.sys.sunrise * 1000);
            const sunriseHours = sunriseTime.getHours();
            const sunriseMinutes = sunriseTime.getMinutes();
            const sunsetTime = new Date(data.sys.sunset * 1000);
            const sunsetHours = sunsetTime.getHours();
            const sunsetMinutes = sunsetTime.getMinutes();
            const weatherData = {
                airQuality: {
                    PM25: data.main.pm2_5, // Assuming OpenWeatherMap provides PM2.5 data directly
                    SO2: data.main.so2,    // Assuming OpenWeatherMap provides SO2 data directly
                    NO2: data.main.no2,    // Assuming OpenWeatherMap provides NO2 data directly
                    O3: data.main.o3      // Assuming OpenWeatherMap provides O3 data directly
                },
                sunrise: `${sunriseHours}:${sunriseMinutes}`, // Convert sunrise Unix timestamp to human-readable time
                sunset:`${sunsetHours}:${sunsetMinutes}`, // Convert sunset Unix timestamp to human-readable time
                humidity: data.main.humidity + "%", // Humidity in percentage
                pressure: data.main.pressure + " hPa", // Pressure in hPa
                visibility: (data.visibility / 1000) + " km", // Visibility in kilometers
                feelsLike: (data.main.feels_like - 273.15).toFixed(2) + "°C",
                weather: data.weather[0].description
            };
            callback(weatherData);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
