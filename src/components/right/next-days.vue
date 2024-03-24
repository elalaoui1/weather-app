<template>
  
  <div class="next_days_forecast">
        <h3>the next days forecast</h3>
        <p>{{changecity}}</p>
       
        <div class="next_days">
            <a href="#">5 days</a>
            <a href="#">10 days</a>
            <a href="#">15 days</a>
        </div>
        <!-- details -->
        <div class="details">

            <div>
                <i class="bi bi-cloud-drizzle"></i>
                <span>
                    <h6>friday. april 23</h6>
                    <p>heavy rain </p>
                </span>
                <span>
                    <p>9°</p>
                    <p>10°</p>
                </span>
            </div>
            <!-- add more  -->


        </div> 
        <!--end details-->
        </div>

</template>

<script>

export default {
data(){
    return{
        city:'london',
        cnt:2,
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
    forecast_for_4_days(){
        fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${this.city}&appid=${this.apikey}`)
        .then(result=>result.json())
        .then(data=>console.log('forecast_for_4_days'+data))
    },
    current_weather(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`)
        .then(result=>result.json())
        .then(data=>console.log('Current_Weather'+data))
    },
    Forecast_16_Days(){
        fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${this.city}&cnt=${this.cnt}&appid=${this.apikey}`)
        .then(result=>result.json())
        .then(data=>console.log('Forecast_16_Days'+data))
    }
    
},
mounted(){
    this.forecast_for_4_days(),
    this.current_weather(),
    this.Forecast_16_Days()  
}

}
</script>

<style>

</style>