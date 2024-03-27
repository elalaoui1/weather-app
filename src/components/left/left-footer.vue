<template>
  <div class="left_footer">
    <div v-for="dayTime in dayDataTime" :key="dayTime.time">
      <p>{{dayTime.time}}</p>
      <i class="bi bi-cloud-drizzle"></i>
      <h6>{{dayTime.temperature}}°C</h6>
    </div>
    <!-- add more -->


  </div>
</template>
<script>
export default {
  data() {
    return {
      dayDataTime: []
    };
  },
  computed:{
    changecity() {
      return this.$store.getters.getCityName;
    },
    apikey() {
      return this.$store.getters.getApiKey;
    },
},
  methods: {
    async desiredDays() {
      this.dayDataTime = [];
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.changecity}&appid=${this.apikey}`);
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
          temperature: (entry.main.temp - 273.15).toFixed(1) // Convert temperature to Celsius and round to one decimal place
        }));

        // Update dayDataTime with new weather info
        this.dayDataTime = weatherInfo;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  },
  mounted() {
    this.desiredDays();
  },
  watch: {
    '$store.getters.getCityName': {
      handler: 'desiredDays', 
      immediate: true // Call it immediately to ensure it's called initially
    }
  }
};
</script>

<style>

</style>