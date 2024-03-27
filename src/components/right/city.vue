<template>
  
  <div class="city">
        <h3>now</h3>
        <div class="degree">
            <p>11°C</p>
            <i class="bi bi-cloud-drizzle"></i>
        </div>
        <p class="status">{{data.weather}}</p>
        <span>
            <p>
                <i class="bi bi-geo-alt"></i>
                {{changecity}}
            </p>
        </span>

       </div>

</template>

<script >
   import {currentWeather} from '../../functions/Currentweather';

export default {
data(){
    return{
        data:[]
    }
},
computed:{
    changecity() {
        
        if(this.$store.getters.getCityName.length > 15){
            return  `${this.$store.getters.getCityName.slice(0, 15)}...`
        }
      return this.$store.getters.getCityName;
    },
    changecity_1(){
        return this.$store.getters.getCityName;
    },
    apikey() {
      return this.$store.getters.getApiKey;
    },
},
methods:{
    async fetchWeather() {
      currentWeather(this.apikey, this.changecity_1, (data) => {
        this.data = data;
        console.log(this.data);
      });
    }
},
  mounted(){
    this.fetchWeather();
    },
  watch: {
    '$store.getters.getCityName': {
      handler: 'fetchWeather', 
      immediate: true // Call it immediately to ensure it's called initially
    }
  }
}
</script>

<style>

</style>