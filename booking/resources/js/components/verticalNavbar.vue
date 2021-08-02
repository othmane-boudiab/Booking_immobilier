<template>
    <div class="z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 h-screen lg:static lg:inset-0">
            <div class="flex fixed items-center justify-center mt-8">
                <div class="flex items-center">
                    <img class="mx-auto h-12 w-auto" src="/image/logo-booking-home.svg" alt="Workflow" />
                </div>
            </div>
    
            <nav class="mt-10">
                <ul>
                    <li></li>
                    <li class="flex cursor-pointer items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100"><router-link to="/dashboard/users"><i class="fas fa-users text-gray-100 text-lg mr-2"></i>users</router-link></li>
                    <li class="flex cursor-pointer items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"><i class="fas fa-home mr-2"></i>homes</li>
                    <li class="flex cursor-pointer items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"><i class="fas fa-window-restore mr-2"></i>Nos services</li>
                    <li class="flex cursor-pointer items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"><i class="fas fa-hands-helping mr-2"></i>Partners</li>
                    <li class="flex cursor-pointer items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"><i class="fas fa-sign-out-alt mr-2"></i>Logout</li>
                </ul>
            </nav>
        </div>
</template>
<style>

</style>
<script>
export default {
    setup() {
        
    },
}
</script>