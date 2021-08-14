<template>
    <div class=" grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10 ">
        <div v-for="val in homes" :key="val.id" class="hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
        <div class="hover:bg-blue-900 relative " >
            <img :src="/image/+val.image" class="bg-cover mix-blend-multiply w-screen" alt="">
            <div class="border-blue-50 rounded-full p2 ">
                <i class="fas fa-plus absolute text-white translate-x-1/2 translate-y-1/2 text-3xl opacity-75"></i>
            </div>
            
        </div>
        <div class="shadow p-2">
            <!-- <h3 class="text-lg font-medium hover:text-yellow-400 cursor-pointer"></h3> -->
            <router-link  :to="{name: 'homedetail', params: { id: val.id }}" class="text-lg font-medium hover:text-yellow-400 cursor-pointer">{{val.title.substr(0,30)}}</router-link>
            <div class="flex justify-between">
                <div class="flex">
                <div class="flex items-center mr-2">
                <i class="fas fa-building text-yellow-400"></i>
                <span class="ml-2">{{val.categorie.name}}</span> 
                </div>
                <div class="flex items-center">
                <i class="fas fa-map-marker-alt text-yellow-400"></i>
                <span class="ml-2">Maroc</span> 
                </div>
                </div>
                <div>
                    <strong class="text-yellow-400">{{val.price}}</strong><span>MAD</span>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
export default {
    data() {
        return {
            homes:[],
        }
    },
    mounted() {
    this.getallhomes();
    },
    methods :{
        getallhomes() {
      axios.get('http://localhost:8000/api/auth/gethomes')
      .then(res => {
        this.homes = res.data;
        console.log(res.data);
      }
      )
      .then(err => console.log(err))
    },
    }
}
</script>