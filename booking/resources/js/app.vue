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
    created(){
        this.upuser();
    },
    methods: {
        upuser(){
            let user =JSON.parse(localStorage.getItem('user'));
            this.$store.commit('setuser',user)
        },
    },
    computed:{
        // userToEdit(){
        //     return this.$store.getters.userToEdit;
            

        // }
        isLogged(){
          return this.$store.getters.isLogged;
        //   return this.$store.getters.typeuser;

        },

        // setuser(){
        //     return this.$store.getters.typeuser;
        // }
        
    }
}
</script>