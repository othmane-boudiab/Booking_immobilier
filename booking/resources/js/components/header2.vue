<template>
    <div class="shadow">
        <div class="container max-w-screen-lg px-6 py-4 mx-auto flex items-center  justify-between">
                <div class="logo w-32 ">
                    <img src="/image/logo 2.svg" alt="">
                </div>
                <div class="hidden md:block">
                    <router-link to="/" class=" text-gray-900 pr-2 hover:text-yellow-400">Accueil</router-link>
                    <router-link to="/maison_de_reves" class="text-gray-900 px-2 hover:text-yellow-400">Maison de réves</router-link>
                    <router-link to="/agents" class="text-gray-900 px-2 hover:text-yellow-400">Agent</router-link>
                    <router-link to="/a_propos" class="text-gray-900 px-2 hover:text-yellow-400">À propos</router-link>
                    <router-link to="/contactez-nous" class="text-gray-900 pl-2 hover:text-yellow-400">Contactez-nous</router-link>
                    <router-link to="/login" class=" text-white py-1.5 bg-blue-600 p-2 rounded-sm hover:bg-blue-800 ml-2">Login</router-link>
                    <router-link to="/register" class=" text-white py-1.5 bg-blue-600 p-2 rounded-sm hover:bg-blue-800 ml-2">Register</router-link>
                </div>
                <!-- Mobile menu button -->
                    <div class="md:hidden w-8 ">
                        <button type="button" class="text-gray-900 dark:text-gray-200 hover:text-yellow-400 dark:hover:text-gray-400 focus:outline-none focus:text-yellow-400 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
            </div>
    </div>
</template>