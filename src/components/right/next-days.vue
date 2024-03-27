<template>
  
  <div class="next_days_forecast">
        <h3>the next days forecast</h3>
       
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

    
},
mounted(){
   
}

}
</script>

<style>

</style>