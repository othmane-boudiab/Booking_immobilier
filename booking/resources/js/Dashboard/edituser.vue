<template>
    <div>
        <div class="m-7">
            <h2 class="text-xl font-semibold">Edit</h2>
                <form action="" method="post" novalidate>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                        <input type="name" name="name" id="name" placeholder="name" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="name" />
                        
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="email" />
                        
                    </div>
                    <div class="mb-6">
                        <!-- <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label> -->
                        <input type="hidden" name="type" id="type" v-model="type" value="agent"/>
                        
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between mb-2">
                            <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            <!-- <a href="#!" class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a> -->
                        </div>
                        <input type="password" name="password" id="password" placeholder="Your Password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="password" />
                        
                    </div>
                    <div class="mb-6">
                        <button  type="button" class="w-full px-3 py-4 text-white  bg-blue-600 rounded-md focus:bg-blue-600 focus:outline-none" @click.prevent="submitRegister"  >Edit</button>
                    </div>
                    <!-- <p class="text-sm text-center text-gray-400">I&#x27;have an account <router-link to="/login" class="text-blue-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign ip</router-link>.</p> -->
                </form>
            </div>
    </div>
</template>
<style>

</style>
<script>
export default {
    
}
</script>