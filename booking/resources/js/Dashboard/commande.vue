<template>
    <div>
        <div class="flex flex-col">
    <!-- <router-link class="bg-blue-50 text-blue-700 p-1 rounded-sm px-5 mb-3 w-24 text-center hover:bg-blue-700 hover:text-blue-50" to="/dashboard/addHome"><i class="fas fa-plus pr-2"></i>Add</router-link> -->

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
                  Email
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  date
                </th>
                <th scope="col" class="relative px-6 py-3"> 
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200" >
              <tr v-for="val in orders" :key="val.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="/image/+val.user.image" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        <!-- {{val.}} -->
                        {{val.user.name}}
                      </div>
                      <div class="text-sm text-gray-500">
                        <!-- {{val.id}} -->
                      </div>
                      <!-- <div class="text-sm text-red-500">
                        {{val.id}}
                      </div> -->
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{val.user.email}}</div>

                  <!-- <div class="text-sm text-gray-500">test 1</div> -->
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    
                    {{val.message}}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{val.created_at}}
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> -->
                  <!-- <router-link class="text-indigo-600 hover:text-indigo-900 mr-1" to="/dashboard/edituser" @click="edituser(val,$event)">Edit</router-link> -->
                  <!-- <router-link class="text-indigo-600 hover:text-indigo-900 mr-1" :to="{name: 'editHome', params: { id: val.id }}">Edit</router-link> -->
                  <!-- <a href="edituser" class="text-indigo-600 hover:text-indigo-900 mr-1" @click="edituser(nub,$event)">Edit</a> -->
                  <!-- <button class="text-indigo-600 hover:text-indigo-900 mr-1" type="button" v-on:click="toggleModal()">Edit</button> -->
                  <!-- <test @click="edituser(users,$event)"></test> -->
                  <!-- <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-1">Edit</a> -->
                  <!-- <a href="#" class="text-red-600 hover:text-red-900">Delete</a> -->
                  <!-- <button class="text-red-600 hover:text-red-900" @click="deletehome(val.id)">Delete</button> -->
                <!-- </td> -->
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
<style>

</style>
<script>
export default {
    data() {
        return {
            orders:[]
        }
    },
    mounted() {
        this.getorder();
    },
    methods:{
    // toggleModal: function(){
    //   this.showModal = !this.showModal;
    // },
    // updateToken(){
    //         let token =JSON.parse(localStorage.getItem('userToken'));
    //         this.$store.commit('setUserToken',token)
    //     },
    // deletehome(id){
    //   // console.log(this.users.id)
    //   axios.delete(`/api/auth/deletehome/${id}`).then(res => {
    //     window.location.pathname = "/Dashboard/homes";
    //   })
      
    // },
    // getauth() {
    //     axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('userToken')}`;
    //   },
    getorder() {
      axios.get('http://localhost:8000/api/auth/store')
      .then(res => {
        this.orders = res.data;
        console.log(res.data);
      }
      )
      .then(err => console.log(err))
    },
    // getallhomes() {
    //   axios.get('http://localhost:8000/api/auth/getallhomes')
    //   .then(res => {
    //     this.homes = res.data;
    //     console.log(res.data);
    //   }
    //   )
    //   .then(err => console.log(err))
    // },
    // edituser(val){
		// 	this.$store.commit('Edituser',val)
    //   // console.log(this.name)
    //   console.log(this.val.name)
		// },
    
  },
}
</script>