
export async function desiredDays(apikey, city, callback) {
   
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`);
      const data = await response.json();
      
      const desiredDayData = data.list.filter(entry => {
        const entryDate = new Date(entry.dt * 1000); // Multiply by 1000 to convert seconds to milliseconds
        const desiredDate = new Date(); 
        // const desiredDate = new Date('2024-3-26'); 
        return entryDate.toDateString() === desiredDate.toDateString();
      });

      const weatherInfo = desiredDayData.map(entry => ({
        time: new Date(entry.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Extract time (e.g., 6:00)
        weatherType: entry.weather[0].main, // Extract weather type (e.g., Rain, Clouds)
        temperature: (entry.main.temp - 273.15).toFixed(0) // Convert temperature to Celsius and round to one decimal place
      }));

    //   callback function
      callback(weatherInfo)
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }