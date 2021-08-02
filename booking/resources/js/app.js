require('./bootstrap');

import Vue from 'vue'

import VueRouter from 'vue-router'
import Vuex from 'vuex';
import routes from './routes'
import App from './app.vue'
import { data } from 'autoprefixer';
Vue.use(VueRouter);
Vue.use(Vuex);


// Vue.component('about-us', require('./components/AboutComponent.vue').default);

const store = new Vuex.Store({
    state: {
        userToken: null,
        user: null,
        // EditedPost: {}
    },
    getters: { //center
        isLogged(state) {
            
            return !!state.userToken ;
        },
        isAdmin(state) {
            if (state.user.type) {
                return state.user.type
            }
            // return null

        },
        // PostToEdit(state) {
        //     return state.EditedPost
        // }
    },
    mutations: {
        setUserToken(state, userToken) {
            state.userToken = userToken;
            localStorage.setItem('userToken', JSON.stringify(userToken));
            axios.defaults.headers.common.Authorization = `Bearer ${userToken}`
        },
        removeUserToken(state) {

            state.userToken = null;
            localStorage.removeItem('userToken')
        },
        setstateUser(state, user) {
            state.user = user
        },
        // logout(state) {
        //     state.userToken = null;
        //     localStorage.removeItem('userToken');
        //     window.location.pathname = "/"
        // },
        // EditPost(state, post) {
        //     state.EditedPost = post;
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
                    console.log(this.state.user)
                    if (this.state.user == 'do_any'){
                        // window.location.pathname = "/Dashboard/users";
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











// // creating a vue instance
new Vue({
    render : h => h(App),
    store: store,
    router: new VueRouter(routes)
}).$mount('#app')









