require('./bootstrap');

import Vue from 'vue'

import VueRouter from 'vue-router'
import Vuex from 'vuex';
import routes from './routes'
import App from './app.vue'
// import { defaults } from 'autoprefixer';
// import { data } from 'autoprefixer';
Vue.use(VueRouter);
Vue.use(Vuex);
// import store  from './store';

// // Vue.component('about-us', require('./components/AboutComponent.vue').default);
export { store };
// const router = new VueRouter(routes)
// const passRoutes = ["login","register"]
// router.beforeEach((to, from, next) => {
    // if(passRoutes.includes(to.name)) return next();
    // if(localStorage.getItem('userToken') == null){
    //     router.push('login')
    // }
    // if (!store.getters.isLogged) {
    //     router.push('login')
    // }
    // if (!store.getters.isLogged) {
    //           return next({
    //             name:'login'
    //           })
    //         }
    //         next()
    // next()
// })
// console.log(this.store.state.user)

// console.log(localStorage.getItem('userToken'))
// console.log(axios.defaults.headers.common.Authorization)
// axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('userToken')}`
// console.log(axios.defaults.headers.common.Authorization)
const store = new Vuex.Store({
    state: {
        userToken: null,
        user: null,
        // Editeduser:{}
    },
    getters: { //center
        isLogged(state) {
            return !!state.userToken ;
        },
        typeuser(state) {
            if (state.user) {
                return state.user
            }
            return null

        },
        // userToEdit(state) {
        //     return state.Editeduser
        // 
        // }
    },
    mutations: {
        setUserToken(state, userToken) {
            state.userToken = userToken;
            if (state.userToken) {
                localStorage.setItem('userToken', JSON.stringify(userToken));
            }
            axios.defaults.headers.common.Authorization = `Bearer ${userToken}`;
            // axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('userToken')}`
        },
        removeUserToken(state) {
            state.userToken = null;
            localStorage.removeItem('userToken')
        },
        setstateUser(state, user) {
            state.user = user;
            // if (state.user) {
            //     localStorage.setItem('user', JSON.stringify(user));
            // }
        },
        // logout(state) {
        //     state.userToken = null;
        //     localStorage.removeItem('userToken');
        //     window.location.pathname = "/"
        // },
        // Edituser(state,val) {
        //     state.Editeduser = val;
        //     console.log(val)
        // }
    },
    actions: {
        RegisterUser({ commit }, payload) {
            axios.post('http://localhost:8000/api/auth/register', payload)
                .then(res => {
                    console.log(res)
                    commit('setUserToken', res.data.access_token)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        // addagent({ commit }, payload) {
        //     axios.post('http://localhost:8000/api/auth/addagent', payload)
        //         .then(res => {
        //             console.log(res)
        //             commit('setUserToken', res.data.access_token)
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // },
        LoginUser({ commit }, payload) {
            axios.post('/api/auth/login', payload)
                .then(res => {
                    console.log(res)
                    commit('setUserToken', res.data.access_token)

                    commit('setstateUser', res.data.token_scope)
                    // const router = new VueRouter(routes)
                    // if (res.data.token_scope == 'do_any'){
                    //     // window.location.pathname = "/Dashboard/users";
                    //     router.push('dashboard')
                    //     // router.push({ path: '/dashboard' })
                    // }

                    // console.log(setstateUser)
                    // console.log(this.state.user)
                    // console.log(res.data.user.type)

                    // console.log(axios.defaults.headers.common.Authorization)

                    // const router = new VueRouter(routes)
                    // // const passRoutes = ["login","register"]
                    // router.beforeEach((to, from, next) => {
                    // // if(passRoutes.includes(to.name)) return next();
                    // if(this.state.usertype == 'do_any'){
                    //     router.push('dashboard')
                    // }
                    // next()
                    // })
                    // const router = new VueRouter(routes)

                    if (this.state.user == 'do_any'){
                        
                        // router.push({ path: '/Dashboard/users' })
                        window.location.pathname = "/Dashboard/users";
                    }else if (this.state.user == 'can_crud_home'){
                        window.location.pathname = "/Dashboard";
                    }else {
                        window.location.pathname = "/";
                    }
                    // axios.get('/api/user')
                        // .then(res => {
                        //     console.log(res.data)



                        //     commit('setstateUser', res.data.token_scope)
                        //     // if (data.token_scope == 'admin'){
                        //     //     window.location.pathname = "/Dashboard";
                        //     // }
                        //     // window.location.pathname = "/Dashboard"
                        // })
                })
                .catch(err => {
                    console.log(err)
                })

        }

    }

})



//******* test ******











// creating a vue instance
new Vue({
    render : h => h(App),
    store: store,
    router: new VueRouter(routes)
}).$mount('#app')



// store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
//     // store.dispatch('...mapGetters')
//     new Vue({
//       store,
//       render: h => h(App),
//       router:new VueRouter(routes)
//     }).$mount('#app')
//   })

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import routes from './routes'
// // import { BootstrapVue } from 'bootstrap-vue'
// // import VueTyperPlugin from 'vue-typer'
// import App from './app.vue'
// import store from './store.js'
// import Vuex, { mapGetters } from 'vuex'
// import axios from 'axios'

// axios.defaults.baseURL ='http://127.0.0.1:8000/api'


// Vue.use(VueRouter)
// // Vue.use(VueTyperPlugin)
// Vue.use(Vuex)


// // Vue.use(BootstrapVue)

// store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
//   // store.dispatch('...mapGetters')
//   new Vue({
//     store,
//     render: h => h(App),
//     router:new VueRouter(routes)
//   }).$mount('#app')
// })



