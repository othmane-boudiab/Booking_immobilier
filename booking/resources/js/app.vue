<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<style lang="css">

</style>

<script>
export default {
    name : 'App',
    computed:{
        // userToEdit(){
        //     return this.$store.getters.userToEdit;
            

        // }
        isLogged(){
          return this.$store.getters.isLogged;
        },
        
    }
}
</script>