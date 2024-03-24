<template>
  
  <div class="left">
    <!-- head -->
       <Head/>
    <!-- end head -->
    <div class="left_content">
        <p>Heavy Rain</p>
    </div>
    <!-- left footer -->
    <leftFooter/>
    <!-- end left footer -->
    </div>

</template>

<script>
import Head from './Head.vue';
import leftFooter from './left-footer.vue';
export default {
components:{
    Head,
    leftFooter
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