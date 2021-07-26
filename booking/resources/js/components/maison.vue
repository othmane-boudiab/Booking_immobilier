<template>
    <div>
        <div class="hover:bg-blue-900 relative">
            <img src="/image/m1.png" class="bg-cover mix-blend-multiply w-screen" alt="">
            <div class="border-blue-50 rounded-full p2 ">
                <i class="fas fa-plus absolute text-white translate-x-1/2 translate-y-1/2 text-3xl opacity-75"></i>
            </div>
            
        </div>
        <div class="shadow p-2">
            <h3 class="text-lg font-medium">Maison de familles</h3>
            <div class="flex justify-between">
                <div class="flex">
                    <ul class="flex">
                    <li><i class="fas fa-star text-yellow-400"></i></li>
                    <li><i class="fas fa-star text-yellow-400"></i></li>
                    <li><i class="fas fa-star text-yellow-400"></i></li>
                    <li><i class="fas fa-star text-yellow-400"></i></li>
                    <li><i class="fas fa-star text-gray-300"></i></li>
                </ul>
                <span class="ml-2">4.5</span>
                <!-- <small class="ml-2">4.5</small> -->
                </div>
                <div>
                    <strong class="text-yellow-400">750.00</strong><span>MAD</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
export default {
    setup() {
        
    },
}
</script>