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
   import {desiredDays} from '../../functions/desiredDays';

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
    desiredDays(){
      desiredDays(this.apikey,this.changecity,(data)=>{
        this.dayDataTime = data

      })
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
.left_footer h6,.left_footer p{
  animation: fall 0.5s ease-in-out;
}
@keyframes fall {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>