<template>
    <div>
        <!-- <div class="w-full bg-center bg-cover story">
        <div class="bg-blue-900 bg-opacity-75 text-center h-64 flex justify-center items-center">

            <div class="max-w-md">
                <h3 class="text-2xl text-yellow-400 font-bold">STORY_clients</h3>
            <span class="text-blue-500 font-medium text-lg">Client Heureux</span>
            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
            </div>

        </div>
        
    </div> -->
  <hooper class="w-full bg-center bg-cover story" :progress="true" :autoPlay="true" :playSpeed="2000">
    <slide class="bg-blue-900 bg-opacity-75 text-center h-64 flex justify-center items-center " v-for="story in storys" :key="story.id">
        <div class="max-w-md" >
            <h3 class="text-2xl text-yellow-400 font-bold">{{story.name}}</h3>
            <span class="text-blue-500 font-medium text-lg">Client Heureux</span>
            <p class="text-white">{{story.message}}</p>
        </div>
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
    </div>

</template>
<style>
.story {
    background: url("/image/sovremen-stile-3.png");
    background-size: cover;
}
</style>
<script>
// import { Hooper, Slide } from 'hooper';
// import 'hooper/dist/hooper.css';

// export default {
//   name: 'App',
//   components: {
//     Hooper,
//     Slide
//   }
// };
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
  } from 'hooper';
  import 'hooper/dist/hooper.css';

// export default {
//   components: {
//     Hooper,
//     Slide,
//     HooperNavigation
//   }
// }
export default {
    components: {
    Hooper,
    Slide,
    HooperNavigation
  },
    data() {
        return {
            storys:[],
        }
    },
    mounted() {
    this.getallstorys();
    },
    methods :{
        getallstorys() {
      axios.get('http://localhost:8000/api/auth/story')
      .then(res => {
        this.storys = res.data;
        console.log(res.data);
      }
      )
      .then(err => console.log(err))
    },
    }
}
</script>