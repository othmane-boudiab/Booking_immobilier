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
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
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
              <tr v-for="user in users" :key="user.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="/image/+user.image" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{user.name}}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{user.email}}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{user.created_at}}</div>
                  <!-- <div class="text-sm text-gray-500">test 1</div> -->
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{user.updated_at}}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{user.type}}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <router-link class="text-indigo-600 hover:text-indigo-900 mr-1" to="/Dashboard/edituser">Edit</router-link>
                  <!-- <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-1">Edit</a> -->
                  <a href="#" class="text-red-600 hover:text-red-900">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navdash from '../components/navdash.vue';
import verticalNavbar from '../components/verticalNavbar.vue';
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

export default {
  components: { verticalNavbar, Navdash },
  data() {
    return {
      users:[]
    }
  },
  mounted() {
    this.getUsers();
  },
  methods:{
    getUsers() {
      axios.get('/api/auth/users')
      .then(res => {
        this.users = res.data;
        // co
      }
      )
      .then(err => console.log(err))
    }
  }
}
</script>