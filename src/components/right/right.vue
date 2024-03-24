<template>
  
  <div class="right">
        <!-- city info -->
          <city/>
       <!-- end city info -->
       <!-- next days info -->
        <nextDays />
       <!-- next_days info-->
       

    </div>

</template>

<script>
import city from './city.vue';
import nextDays from './next-days.vue';
export default {
components:{
    city,
    nextDays
},
data(){
    return{

    }
},
methods:{

},
mounted(){
    
}
}
</script>

<style>

</style>