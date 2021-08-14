<template>
    <div class="shadow">
        <div class="container max-w-screen-lg px-6 py-4 mx-auto flex items-center  justify-between">
                <div class="logo w-32 ">
                    <img src="/image/logo 2.svg" alt="">
                </div>
                <div class="hidden md:block">
                    <router-link to="/" class=" text-gray-900 pr-2 hover:text-yellow-400">Accueil</router-link>
                    <router-link to="/maison_de_reves" class="text-gray-900 px-2 hover:text-yellow-400">Maison de réves</router-link>
                    <!-- <router-link to="/agents" class="text-gray-900 px-2 hover:text-yellow-400">Agent</router-link>
                    <router-link to="/a_propos" class="text-gray-900 px-2 hover:text-yellow-400">À propos</router-link>
                    <router-link to="/contactez-nous" class="text-gray-900 pl-2 hover:text-yellow-400">Contactez-nous</router-link> -->
                    <router-link to="/login" class=" text-white bg-blue-500 px-2 py-1.5 rounded-sm hover:bg-blue-700 ml-2" v-if="!isLogged">Login</router-link>
                    <router-link to="/register" class=" text-white bg-blue-500 px-2 py-1.5 rounded-sm hover:bg-blue-700 ml-2" v-if="!isLogged">Register</router-link>
                    <a @click="logout" class=" text-white bg-blue-500 px-2 py-1.5 cursor-pointer rounded-sm hover:bg-blue-700 ml-2" v-if="isLogged">Logout</a>
                </div>
                
                <!-- Mobile menu button -->
                    <div class="md:hidden w-8 ">
                        <button @click="tog" type="button" class="text-gray-900 dark:text-gray-200 hover:text-yellow-400 dark:hover:text-gray-400 focus:outline-none focus:text-yellow-400 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
            </div>
            <div :class="open ? 'block': 'hidden'" class="flex flex-col  justify-center items-center w-screen h-screen top-0 bg-blue-900 opacity-80 fixed">
                <button @click="tog" class="fixed hover:text-yellow-400 top-4 right-6"><i class="far fa-window-close text-white text-xl "></i></button>
                <router-link to="/" class=" text-white text-xl pr-2 hover:text-yellow-400">Accueil</router-link>
                <router-link to="/maison_de_reves" class="text-white text-xl px-2 hover:text-yellow-400">Maison de réves</router-link>
                <router-link to="/login" class=" text-white  mt-2 bg-blue-500 px-2 py-1.5 rounded-sm hover:bg-blue-700 ml-2" v-if="!isLogged">Login</router-link>
                <router-link to="/register" class=" text-white mt-3 bg-blue-500 px-2 py-1.5 rounded-sm hover:bg-blue-700 ml-2" v-if="!isLogged">Register</router-link>
                <a @click="logout" class=" text-white bg-blue-500 mt-2 px-2 py-1.5 cursor-pointer rounded-sm hover:bg-blue-700 ml-2" v-if="isLogged">Logout</a>
            </div>
    </div>
</template>
<script>
export default {
    data() {
  	    return {
              open: false,
          }
    },
    mounted() {
        this.updateToken();
    },
    methods: {
        logout(){
            this.$store.commit('logout')
        },
        updateToken(){
            let token =JSON.parse(localStorage.getItem('userToken'));
            this.$store.commit('setUserToken',token)
        },
        tog() {
    	this.open = !this.open
    },
    },
    computed: {
        isLogged(){
          return this.$store.getters.isLogged;
        },
    }

}
</script>