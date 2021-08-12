<template>
    <div>
        <div class="m-7">
            <h2 class="text-xl font-semibold">Edit Home</h2>
                <form action="" enctype="multipart/form-data" novalidate>
                    <div class="mb-6 mt-6">
                        <input type="text" name="title" id="title" placeholder="Title" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="homes.title" />
                        
                    </div>
                    <div class="mb-6">
                        <textarea name="description" id="description" cols="30" placeholder="Description" rows="8" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" v-model="homes.description" ></textarea>
                    </div>
                    <div class="mb-6">
                        <div class="flex">
                            <input type="number" name="surface" id="surface" placeholder="Surface" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mr-2" v-model="homes.surface" />
                            <input type="number" name="rooms" id="rooms" placeholder="Rooms" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 ml-2" v-model="homes.rooms" />
                        </div>
                        
                    </div>
                    <div class="mb-6">
                        <div class="flex">
                            <select id="categories" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mr-2" v-model="homes.categorie.id" >
                                <option value="" disabled selected>Choose categorie</option>
                                <option :value="categorie.id" v-for="categorie in categories" :key="categorie.id">{{categorie.name}}</option>
                            </select>
                            <select id="ville" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mr-2" v-model="homes.ville.id" >
                                <option value="" disabled selected>Choose ville</option>
                                <option :value="ville.id" v-for="ville in villes" :key="ville.id">{{ville.name}}</option>
                            </select>
                        </div>
                      
                    </div>
                    <div class="mb-6">
                        <div class="flex">
                            <input type="text" name="adress" id="adress" placeholder="Quartier" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 mr-2" v-model="homes.adress" />
                            <input type="number" name="prix" id="prix" placeholder="Prix" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 ml-2" v-model="homes.price" />
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
                        <button  type="button" class="w-full px-3 py-4 text-white  bg-blue-600 rounded-md focus:bg-blue-600 focus:outline-none" @click.prevent="updatehome">Edit Home</button>
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
         homes:{},
    //    name : '',
    //    email : '',
    //    password : '',
    //    image: ''
     }
   },
   mounted() {
    // this.gethome();
    this.getCategories();
    this.getVilles();
    this.gethomes();
    // this.getallhomes();
    this.updateToken();
  },
    methods:{
        updateToken(){
            let token =JSON.parse(localStorage.getItem('userToken'));
            this.$store.commit('setUserToken',token)
        },
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
      
    // },
    // getauth() {
    //     axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('userToken')}`;
    //   },
    // gethome() {
    //   axios.get('http://localhost:8000/api/auth/gethome')
    //   .then(res => {
    //     this.homes = res.data;
    //     console.log(res.data);
    //   }
    //   )
    //   .then(err => console.log(err))
    // },
    // getallhomes() {
    //   axios.get('http://localhost:8000/api/auth/getallhomes')
    //   .then(res => {
    //     this.homes = res.data;
    //     console.log(res.data);
    //   }
    //   )
    //   .then(err => console.log(err))
    // },
		
		onImageChang(event){
			console.log(event.target.files[0]);
			this.users.image = event.target.files[0];
            
		},
        // updateuser(){
        //     axios.post('http://127.0.0.1:8000/api/auth/updateuser/'+this.$route.params.id, this.users)
        //             .then((response) => {
        //                 this.$router.push({name: 'users'});
        //             });
        // },
		updatehome(){
			let config ={
				headers :{"content-type" : 'multipart/form-data'}
			}
			// let formdata = new FormData();
            let formdata = new FormData();
            formdata.append('title' ,this.homes.title)
            formdata.append('description' ,this.homes.description)
            formdata.append('surface' ,this.homes.surface)
            formdata.append('adress' ,this.homes.adress)
            formdata.append('price' ,this.homes.price)
            formdata.append('rooms' ,this.homes.rooms)
            formdata.append('ville' ,this.homes.ville.id)
            formdata.append('categorie' ,this.homes.categorie.id)
            formdata.append('image' ,this.image)
            axios.post('http://127.0.0.1:8000/api/auth/updatehome/'+this.$route.params.id, formdata, config)
			.then(res => {
				console.log(res)
				// this.users.name = res.data.name;
				// this.users.email= res.data.email;
				// this.users.password = res.data.passwoard;
                // this.users.image = ''; 
                // // this.users.image = res.data.image
				// $('#editPostModal').modal('hide');
				// $('.modal-backdrop').css('display','none')
                this.$router.push({name: 'homes'});
			})
		},
        gethomes() {
      axios.get('http://127.0.0.1:8000/api/auth/edithomes/'+this.$route.params.id)
      .then(res => {
        this.homes = res.data;
        console.log(this.homes.image);
        // console.log(this.$route.params.id)
        // console.log(res.data.length);
      }
      )
      .then(err => console.log(err))
    },
        
        // edituser(val){
		// 	this.$store.commit('Edituser',val)
		// },
    },
    computed:{
        // userToEdit(){
        //     return this.$store.getters.userToEdit;

        // }
    }

}
</script>