<template>
<div>
  <!-- <vertical-navbar class="fixed"></vertical-navbar> -->
  <!-- <navdash></navdash> -->
  <div class="flex flex-col">
    <router-link class="bg-blue-50 text-blue-700 p-1 rounded-sm px-5 mb-3 w-24 text-center hover:bg-blue-700 hover:text-blue-50" to="/dashboard/add"><i class="fas fa-plus pr-2"></i>Add</router-link>

    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <!-- <button class="bg-blue-50 text-blue-700 p-1 rounded-sm px-5 mb-3"><i class="fas fa-plus pr-2"></i>Add</button> -->
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          
          <table class="min-w-full divide-y divide-gray-200">
            
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created_at
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Updated_at
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" class="relative px-6 py-3"> 
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="val in users" :key="val.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="/image/+val.image" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{val.name}}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{val.email}}
                      </div>
                      <!-- <div class="text-sm text-red-500">
                        {{val.id}}
                      </div> -->
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{val.created_at}}</div>
                  <!-- <div class="text-sm text-gray-500">test 1</div> -->
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{val.updated_at}}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{val.type}}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <!-- <router-link class="text-indigo-600 hover:text-indigo-900 mr-1" to="/dashboard/edituser" @click="edituser(val,$event)">Edit</router-link> -->
                  <router-link class="text-indigo-600 hover:text-indigo-900 mr-1" :to="{name: 'edituser', params: { id: val.id }}">Edit</router-link>
                  <!-- <a href="edituser" class="text-indigo-600 hover:text-indigo-900 mr-1" @click="edituser(nub,$event)">Edit</a> -->
                  <!-- <button class="text-indigo-600 hover:text-indigo-900 mr-1" type="button" v-on:click="toggleModal()">Edit</button> -->
                  <!-- <test @click="edituser(users,$event)"></test> -->
                  <!-- <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-1">Edit</a> -->
                  <!-- <a href="#" class="text-red-600 hover:text-red-900">Delete</a> -->
                  <button class="text-red-600 hover:text-red-900" @click="deleteuser(val.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <edituser class="v hidden"></edituser> -->
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
import Navdash from '../components/navdash.vue';
import verticalNavbar from '../components/verticalNavbar.vue';
// import Edituser from './edituser.vue';
// import test from '../Dashboard/test.vue';
// const people = [
//   {
//     name: 'Jane Cooper',
//     title: 'Regional Paradigm Technician',
//     department: 'Optimization',
//     role: 'Admin',
//     email: 'jane.cooper@example.com',
//     image:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
// ]
// name: "large-modal",
export default {
  components: { verticalNavbar, Navdash},
  data() {
    return {
      // showModal: false,
      users:[],
      
      //  val: {}
    }
  },
  mounted() {
    this.getUsers();
    this.updateToken();
    // this.getauth();
    console.log(this.$store.getters.isLogged);
  },
  methods:{
    // toggleModal: function(){
    //   this.showModal = !this.showModal;
    // },
    updateToken(){
            let token =JSON.parse(localStorage.getItem('userToken'));
            this.$store.commit('setUserToken',token)
        },
    deleteuser(id){
      // console.log(this.users.id)
      axios.delete(`/api/auth/deleteuser/${id}`).then(res => {
        window.location.pathname = "/Dashboard/users";
      })
      
    },
    // getauth() {
    //     axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('userToken')}`;
    //   },
    getUsers() {
      axios.get('/api/auth/users')
      .then(res => {
        this.users = res.data;
        // console.log(user)
      }
      )
      .then(err => console.log(err))
    },
    // edituser(val){
		// 	this.$store.commit('Edituser',val)
    //   // console.log(this.name)
    //   console.log(this.val.name)
		// },
    
  },
  computed:{
        // userToEdit(){
        //     return this.$store.getters.userToEdit;
            

        // }
        // isLogged(){
        //   return this.$store.getters.isLogged;
        // },
        
    }
}
</script>