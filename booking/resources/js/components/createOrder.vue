<template>
    <div class="p-2 shadow h-full">
        <div>
            <h2 class="mb-6">Contactez Agents</h2>
            <form action="" enctype="multipart/form-data" v-if="isLogged" novalidate>
                    <div class="mb-6">
                        <!-- <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label> -->
                        <!-- <input type="name" name="name" id="name" placeholder="name" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="name" /> -->
                        
                    </div>
                    <div class="mb-6">
                        <!-- <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label> -->
                        <!-- <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="email" /> -->
                        
                    </div>
                    <div class="mb-6">
                        <textarea name="message" id="message" cols="30" placeholder="Message" rows="8" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="message"></textarea>
                    </div>
                    
                    
                    <div class="mb-2">
                        <button  type="button" class=" w-72 px-3 py-2 text-white  bg-blue-600 rounded-md focus:bg-blue-600 focus:outline-none" @click.prevent="addorder">SEND</button>
                    </div>
                    <!-- <p class="text-sm text-center text-gray-400">I&#x27;have an account <router-link to="/login" class="text-blue-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign ip</router-link>.</p> -->
                </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

            message: '',
            post_id: this.$route.params.id,
            
        }

    },
    methods: {
        addorder(){
            let {message,post_id} = this;
            axios.post('/api/auth/create',{message,post_id})
            .then(res => {
                console.log(res)
                // this.comments.unshift(res.data)
            })
        },
    },
    computed: {
        isLogged(){
          return this.$store.getters.isLogged;
        },
    }
}
</script>