<template>
  
  <div class="left">
    <!-- head -->
       <Head/>
    <!-- end head -->
    <div class="left_content">
        <leftContent/>
    </div>
    <!-- left footer -->
    <leftFooter/>
    <!-- end left footer -->
    </div>

</template>

<script>
import Head from './Head.vue';
import leftFooter from './left-footer.vue';
import leftContent from './left_content.vue';
export default {
components:{
    Head,
    leftFooter,
    leftContent
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