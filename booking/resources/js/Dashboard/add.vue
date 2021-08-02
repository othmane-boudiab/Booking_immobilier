<template>
    <div>
        <div class="m-7">
            <h2 class="text-xl font-semibold">Add</h2>
                <form action="" enctype="multipart/form-data" novalidate>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Name</label>
                        <input type="name" name="name" id="name" placeholder="name" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="name" />
                        
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="email" />
                        
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between mb-2">
                            <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            <!-- <a href="#!" class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a> -->
                        </div>
                        <input type="password" name="password" id="password" placeholder="Your Password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="password" />
                        
                    </div>
                    
                    <div class="mb-6">
                        <label class="w-64 flex items-center px-1 py-3 bg-blue-50 text-blue-500 rounded-lg  tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-blue-50">
                            <!-- <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg> -->
                            <i class="fas fa-upload ml-2 mr-2"></i>
                            <span class=" text-base leading-normal">Select image</span>
                            <input type='file' class="hidden" @change="onImageChang"/>
                        </label>
                    </div>
                    <div class="mb-6">
                        <button  type="button" class="w-full px-3 py-4 text-white  bg-blue-600 rounded-md focus:bg-blue-600 focus:outline-none" @click.prevent="addagent"  >Add</button>
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
    data(){
     return {
         users:[],
       name : '',
       email : '',
       password : '',
       image: ''
     }
   },
    methods:{
        onImageChang(event) {
            // console.log(event.target.files[0])
            this.image = event.target.files[0]
        },
        addagent(){
            let config ={
                headers :{"content-type" : 'multipart/form-data'}
            }
            let formdata = new FormData();
            formdata.append('name' ,this.name)
            formdata.append('email' ,this.email)
            formdata.append('password' ,this.password)
            formdata.append('image' ,this.image)
            axios.post('/api/auth/addagent', formdata, config)
            // .then(res => {

            // })

        }
    //  submitRegister(){
    //   //  console.log('submit')
    //    let  {name,email,password} = this;
    //         this.$store.dispatch('RegisterUser',{name,email,password})

    //  }
   }
}
</script>