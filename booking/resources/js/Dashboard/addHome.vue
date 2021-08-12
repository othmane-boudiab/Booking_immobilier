<template>
    <div>
        <div class="m-7">
            <h2 class="text-xl font-semibold">Add Home</h2>
                <form action="" enctype="multipart/form-data" novalidate>
                    <div class="mb-6 mt-6">
                        <input type="text" name="title" id="title" placeholder="Title" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="title" />
                        
                    </div>
                    <div class="mb-6">
                        <textarea name="description" id="description" cols="30" placeholder="Description" rows="8" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="description" ></textarea>
                    </div>
                    <div class="mb-6">
                        <div class="flex">
                            <input type="number" name="surface" id="surface" placeholder="Surface" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mr-2" v-model="surface" />
                            <input type="number" name="rooms" id="rooms" placeholder="Rooms" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 ml-2" v-model="rooms" />
                        </div>
                        
                    </div>
                    <div class="mb-6">
                        <div class="flex">
                            <select id="categories" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mr-2" v-model="categorie" >
                                <option value="" disabled selected>Choose categorie</option>
                                <option :value="categorie.id" v-for="categorie in categories" :key="categorie.id">{{categorie.name}}</option>
                            </select>
                            <select id="ville" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mr-2" v-model="ville">
                                <option value="" disabled selected>Choose ville</option>
                                <option :value="ville.id" v-for="ville in villes" :key="ville.id">{{ville.name}}</option>
                            </select>
                        </div>
                      
                    </div>
                    <div class="mb-6">
                        <div class="flex">
                            <input type="text" name="adress" id="adress" placeholder="Quartier" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mr-2" v-model="adress" />
                            <input type="number" name="prix" id="prix" placeholder="Prix" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 ml-2" v-model="prix" />
                        </div>
                        
                    </div>
                    
                    <div class="mb-6">
                            <label class="w-64 flex items-center px-1 py-3 bg-blue-50 text-blue-500 rounded-lg  tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-blue-50">
                            <i class="fas fa-upload ml-2 mr-2"></i>
                            <span class=" text-base leading-normal">Select hero image</span>
                            <input type='file' class="hidden" @change="onImageChang"/>
                        </label>
                        

                    </div>
                    <div class="mb-6">
                        <button  type="button" class="w-full px-3 py-4 text-white  bg-blue-600 rounded-md focus:bg-blue-600 focus:outline-none" @click.prevent="addhome">Add Home</button>
                    </div>
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
            posts:{},
            tille : '',
            description: '',
            image : '',
            ville : '',
            villes : {},
            categorie : '',
            categories : {},
            rooms : '',
            adress : '',
            prix : '',
            surface : '',
        }
    },
    created(){
        this.getCategories();
        this.getVilles();
        // console.log(categories)
    },
    methods:{
        getVilles() {
            axios.get('http://127.0.0.1:8000/api/auth/getVilles')
           .then(res => {
                    // console.log(res.data)
                    this.villes = res.data;
                })
                .then(err => console.log(err))
        },
        getCategories() {
            axios.get('http://127.0.0.1:8000/api/auth/getCategories')
           .then(res => {
                    // console.log(res.data)
                    this.categories = res.data;

                    // console.log(categories)
                })
                .then(err => console.log(err))
        },
        onImageChang(event) {
            // console.log(event.target.files[0])
            this.image = event.target.files[0]
        },
        addhome(){
            let config ={
                headers :{"content-type" : 'multipart/form-data'}
            }
            let formdata = new FormData();
            formdata.append('title' ,this.title)
            formdata.append('description' ,this.description)
            formdata.append('surface' ,this.surface)
            formdata.append('adress' ,this.adress)
            formdata.append('prix' ,this.prix)
            formdata.append('rooms' ,this.rooms)
            formdata.append('ville' ,this.ville)
            formdata.append('categorie' ,this.categorie)
            formdata.append('image' ,this.image)
            axios.post('http://127.0.0.1:8000/api/auth/addhome', formdata, config)
            // .then(res => {

            // })

        }
        
        
    }
}
</script>