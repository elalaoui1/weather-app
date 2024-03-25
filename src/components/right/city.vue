<template>
  
  <div class="city">
        <h3>now</h3>
        <div class="degree">
            <p>11°C</p>
            <i class="bi bi-cloud-drizzle"></i>
        </div>
        <p class="status">Heavy Rain </p>
        <span>
            <p>
                <i class="bi bi-geo-alt"></i>
                {{changecity}}
            </p>
        </span>

       </div>

</template>

<script >
export default {
   
data(){
    return{

    }
},
computed:{
    changecity() {
        
        if(this.$store.getters.getCityName.length > 15){
            return  `${this.$store.getters.getCityName.slice(0, 15)}...`
        }
      return this.$store.getters.getCityName;
    }
}
}
</script>

<style>

</style>