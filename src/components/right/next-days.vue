<template>
  
  <div class="next_days_forecast">
        <h3>the next days forecast</h3>
       
        <!-- <div class="next_days">
            <a href="#">5 days</a>
            <a href="#">10 days</a>
            <a href="#">15 days</a>
        </div> -->
        <!-- details -->
        <div class="details">

            <div v-for="(forecast,date ) in data" :key="date">
                <i class="bi bi-cloud-drizzle"></i>
                <span>
                    <h6>{{date}}</h6>
                    <p>{{forecast.weatherDescription}} </p>
                </span>
                <span>
                    <p>{{forecast.temperature}}</p>
                    <p>{{ forecast.feelsLike }}</p>
                </span>
            </div>
            <!-- add more  -->


        </div> 
        <!--end details-->
        </div>

</template>

<script>
   import {forecastWeather} from '../../functions/forecastWeather';

export default {
data(){
    return{
        data:[]
    }
},
computed: {
    changecity() {
      return this.$store.getters.getCityName;
    },
    apikey() {
      return this.$store.getters.getApiKey;
    },
},
methods:{
    async fetchforecast() {
      this.data = []
      forecastWeather(this.apikey, this.changecity, (data) => {
        this.data = data;
        // console.log(this.data);
      });
    }
    
},
  mounted(){
    this.fetchforecast();
    },
  watch: {
    '$store.getters.getCityName': {
      handler: 'fetchforecast', 
      immediate: true 
    }
  }

}
</script>

<style>

</style>