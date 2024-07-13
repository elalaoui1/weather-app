
export async function forecastWeather(apikey, city, callback) {



    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Get current date
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison
        
        // Group forecast data by date
        const groupedForecast = {};
        
        data.list.forEach(item => {
        // Convert forecast date to a Date object
        const forecastDate = new Date(item.dt * 1000);
        forecastDate.setHours(0, 0, 0, 0);
        
        // Exclude current day's forecast and forecast for past days
        if (forecastDate > currentDate) {
            const date = forecastDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
            if (!groupedForecast[date]) {
            groupedForecast[date] = {
                temperature: (item.main.temp - 273.15).toFixed(0) + '°', // Convert from Kelvin to Celsius
                feelsLike: (item.main.feels_like - 273.15).toFixed(0) + '°', // Convert from Kelvin to Celsius
                weatherDescription: item.weather[0].description
            };
            } 
        }
        });
        callback(groupedForecast);
        // Extract and display forecast data
        // Object.keys(groupedForecast).forEach(date => {
        //   console.log(`${date}: ${groupedForecast[date].temperature}, Feels like ${groupedForecast[date].feelsLike}, ${groupedForecast[date].weatherDescription}`);
        // });
        
    })
    .catch(error => {
        console.error('There was a problem fetching the weather data:', error);
    });

}