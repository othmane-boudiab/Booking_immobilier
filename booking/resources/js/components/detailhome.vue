<template>
    <div>
        <!-- <div > -->
        <div class="images">
            <div class="hero_image">
                <img :src="/image/+homes.image" alt="">
            </div>
            <!-- <div class="hero_image flex justify-between items-center">
                <a href="">
                    <img src="/image/image_header.png" class="pr-1" alt="">
                </a>
                <a href="">
                    <img src="/image/image_header.png" class="pl-1 pr-1" alt="">
                </a>
                <a href="">
                    <img src="/image/image_header.png" class="pl-1 pr-1" alt="">
                </a>
                <a href="">
                    <img src="/image/image_header.png" class="pl-1" alt="">
                </a>
            </div> -->
        </div>
        <div class="content">
            <div>
                <h1 class=" font-bold text-4xl mt-4">{{homes.title}}</h1>
                <div class="flex items-center justify-between flex-wrap mt-4">
                    <div class="">
                            <h3 class="font-medium">Mis à jour le :</h3>
                            <p>{{homes.updated_at}}</p>
                    </div>
                    <div class="flex text-center">
                        <div>
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Maroc</p>
                        </div>
                        <div class="mx-6">
                            <i class="fas fa-border-none "></i>
                            <p>{{homes.surface}} m²</p>
                        </div>
                        <!-- <div>
                            <i class="fas fa-door-open"></i>
                            <p>{{homes.rooms}} rooms</p>
                        </div> -->
                    </div>
                    <div>
                        <strong class=" text-yellow-400 pr-2 text-lg">{{homes.price}}</strong><span>MAD</span>
                    </div>
                </div>
                <div class="mt-4">
                    <h2 class=" font-semibold text-lg">La description</h2>
                    <p>{{homes.description}}</p>
                </div>
                <div>
                    <h2 class=" font-semibold text-lg">Adresse du bien</h2>
                    <div class="flex justify-between items-center">
                        <div class="flex">
                            <div class="flex mr-4">
                                <h3 class="mr-2 font-medium">Ville:</h3>
                                <span>{{homes.ville.name}}</span>
                            </div>
                            <div class="flex">
                                <h3 class="mr-2 font-medium">Quartier:</h3>
                                <span>{{homes.adress}}</span>
                            </div>
                        </div>
                        <!-- <a href="#" class="bg-blue-600 px-2 py-1 rounded-sm text-white">Ouvrir dans Google Maps</a> -->
                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
    </div>
</template>
<style scoped>
.sub-img {
        flex-basis: 24%;
}
</style>
<script>
export default {
    data(){
     return {
         homes:{},
     }
   },
   mounted() {
    this.gethomes();
    this.updateToken();
  },
    methods:{
        updateToken(){
            let token =JSON.parse(localStorage.getItem('userToken'));
            this.$store.commit('setUserToken',token)
        },
        gethomes() {
      axios.get('http://127.0.0.1:8000/api/auth/edithome/'+this.$route.params.id)
      .then(res => {
        this.homes = res.data;
        console.log(this.homes.image);
        // console.log(this.$route.params.id)
        // console.log(res.data.length);
      }
      )
      .then(err => console.log(err))
    },
    },
}
</script>