<template>
    <div class="w-full bg-center bg-cover image h-screen">
        <div class="h-screen bg-blue-900 bg-opacity-75">
            <div class="container max-w-screen-lg px-6 py-4 mx-auto flex items-center justify-between">
                <div class="logo w-32 ">
                    <img src="/image/logo-booking-home.svg" alt="">
                </div>
                <div class="hidden md:block">
                    <router-link to="/" class="text-white pr-2 hover:text-yellow-400">Accueil</router-link>
                    <router-link to="/maison_de_reves" class="text-white px-2 hover:text-yellow-400">Maison de réves</router-link>
                    <router-link to="/agents" class="text-white px-2 hover:text-yellow-400">Agent</router-link>
                    <router-link to="/a_propos" class="text-white px-2 hover:text-yellow-400">À propos</router-link>
                    <router-link to="/contactez-nous" class="text-white pl-2 hover:text-yellow-400">Contactez-nous</router-link>
                    <router-link to="/login" class=" text-white bg-blue-500 px-2 py-1.5 rounded-sm hover:bg-blue-700 ml-2">Login</router-link>
                    <router-link to="/register" class=" text-white bg-blue-500 px-2 py-1.5 rounded-sm hover:bg-blue-700 ml-2">Register</router-link>
                </div>
                <!-- Mobile menu button -->
                    <div class="md:hidden w-8 ">
                        <button type="button" class="text-white dark:text-gray-200 hover:text-yellow-400 dark:hover:text-gray-400 focus:outline-none focus:text-yellow-400 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
            </div>
            <div class="container text-center pt-20 flex flex-col max-w-lg m-auto">
                <h1 class="text-yellow-400 text-4xl	font-bold">la maison des réves</h1>
                <p class="text-white my-3">Booking une application qui offre, un choix au clients qui cherchent des locations ou achat des immobiliers partout au maroc.</p>
                <router-link to="/maison_de_reves" class="text-white bg-blue-500 rounded-sm flex justify-center p-1 px-10 pb-2 mt-3 items-center m-auto hover:bg-blue-700">view</router-link>
            </div>
            <!-- <div class="container mt-20">
                <div class="text-center">
                    <i class="fas fa-crown text-2xl text-yellow-400"></i>
                    <h4 class="text-white text-xl font-medium">Top 3 Agent</h4>
                </div>
                <div class="flex justify-center max-w-lg m-auto mt-7">
                    <div class="flex flex-col items-center">
                        <img src="/image/im1.png" class="rounded-full w-16 border-2 border-yellow-400 p-1" alt="">
                        <h5 class="text-white">Name Agent</h5>
                    </div>
                    <div class="flex flex-col items-center mx-7">
                        <img src="/image/im2.png" class="rounded-full w-16 border-2 border-yellow-400 p-1" alt="">
                        <h5 class="text-white">Name Agent</h5>
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="/image/im3.png" class="rounded-full w-16 border-2 border-yellow-400 p-1" alt="">
                        <h5 class="text-white">Name Agent</h5>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<style>
.image {
    background: url("/image/image_header.png");
    background-size: cover;

}
</style>
<script>
export default {

}
</script>