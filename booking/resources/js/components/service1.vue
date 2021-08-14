<template>
    <div  >
        <div v-for="service in services" :key="service.id" class=" mt-8 opacity-0 relative hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
            <div  class=" m-auto mt-4 bg-blue-900 bg-top w-24 rounded-full border-2 flex items-center justify-center border-yellow-400 h-24">
                <i :class="service.icon" class="fas text-yellow-400 m-2 text-5xl"></i>
            </div> 
        <div class="text-center p-5 shadow pt-5">
            <h3 class="">{{service.title}}</h3>
            <p>{{service.description}}</p>
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
            services:[],
        }
    },
    mounted() {
    this.getallhomes();
    },
    methods :{
        getallhomes() {
      axios.get('http://localhost:8000/api/auth/service')
      .then(res => {
        this.services = res.data;
        console.log(res.data);
      }
      )
      .then(err => console.log(err))
    },
    }
}
</script>