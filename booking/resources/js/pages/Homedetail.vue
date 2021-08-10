<template>
    <div>
        <header2></header2>
        <div class="container container max-w-screen-lg px-6 py-4 mx-auto flex">
            <detailhome class="flex-initial mr-2"></detailhome>
            <createOrder class="flex-initial ml-2 "></createOrder>
        </div>
        
        <!-- <h1 class="text-red-600">Homedetail</h1> -->
    </div>
</template>
<style>

</style>
<script>
import header2 from '../components/header2.vue'
import detailhome from '../components/detailhome.vue'
import createOrder from '../components/createOrder.vue'
export default {
   components : {
       header2,
       detailhome,
       createOrder,
   }
}
</script>