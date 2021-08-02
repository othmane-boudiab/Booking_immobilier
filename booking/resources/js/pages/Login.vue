<template>
<div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
                <p class="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
            </div>
            <div class="m-7">
                <form action="" novalidate>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="email"/>
                        <div v-show="emailerror" class="text-red-600">
                          ... the email is not valid
                        </div>
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between mb-2">
                            <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            <a href="#!" class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="Your Password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="password"/>
                        <div v-show="passworderror" class="text-red-600">
                          ... the password is to short
                        </div>
                    </div>
                    <div class="mb-6">
                        <button type="button" class="w-full px-3 py-4 text-white bg-blue-600 rounded-md focus:bg-blue-700 focus:outline-none disabled:opacity-50" tabindex="-1" :disabled="!isFormValid" @click.prevent="submitLogin">Sign in</button>
                    </div>
                    <p class="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <router-link to="/register" class="text-blue-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign up</router-link>.</p>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<style>

</style>
<script>
export default {
   data(){
     return {
       email : '',
       password : ''
     }
   },
   computed:{
     emailerror(){
       return !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)) && this.email.length > 0
     },
     passworderror(){
       return this.password.length > 0 && this.password.length < 7
     },
     isFormValid(){
       return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)) && this.password.length > 7
     }
   },
   methods:{
     submitLogin(){
       let {email,password} = this;
           this.$store.dispatch('LoginUser',{email,password})
     }
   }
}
</script>
