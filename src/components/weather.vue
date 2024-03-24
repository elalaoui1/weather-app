<template>
  
<div class="main">
    <!-- start left -->

        <Left/>
    <!--end left-->

    <!-- start right -->
        <right/>

    <!--end right-->

</div>
  

</template>

<script>
import Left from './left/Left.vue';
import right from './right/right.vue';
export default {
    components:{
        Left,
        right
    }
    ,
data(){
    return{

    }
},
methods(){


},
mounted() {
    
},
}
</script>

<style scoped>

</style>