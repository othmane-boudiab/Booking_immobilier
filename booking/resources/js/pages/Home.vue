<template>
    <div>
        <!-- hero header -->
        <header1></header1>
        <!-- Nos services -->
        <div class="container max-w-screen-lg px-6 py-4 mx-auto">
            <div class="text-center">
                <h2 class="font-medium text-xl">Nos services</h2>
                <hr class="w-8 mx-auto mt-2  border-2 border-yellow-400">
            </div>
            <div class="grid grid-flow-col grid-cols-3 grid-rows-1 gap-4 mt-10">
                <service1></service1>
            </div>
        </div>
        <div class="container max-w-screen-lg px-6 py-4 mx-auto">
            <div class="text-center">
                <h2 class="font-medium text-xl">Partners</h2>
                <hr class="w-8 mx-auto mt-2  border-2 border-yellow-400">
            </div>
            <div class="flex justify-between mt-5">
                <Partner></Partner>
                <Partner></Partner>
                <Partner></Partner>
                <Partner></Partner>
            </div>
        </div>
        <story></story>
        <div class="container max-w-screen-lg px-6 py-4 mx-auto">
            <div class="text-center">
                <h2 class="font-medium text-xl">Homes</h2>
                <hr class="w-8 mx-auto mt-2  border-2 border-yellow-400">
            </div>
                <maison></maison>
        </div>
    </div>
</template>
<script>
import header1 from '../components/header1.vue'
import service1 from '../components/service1.vue'
import Partner from '../components/Partner.vue'
import Story from '../components/story.vue'
import Maison from '../components/maison.vue'
export default {
  components: { header1, service1, Partner, Story, Maison },
   
}
</script>