// 
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
// import { store } from '../app';



// const router = new VueRouter(routes)
// const passRoutes = ["login","register"]
// router.beforeEach((to, from, next) => {
//     // if(passRoutes.includes(to.name)) return next();
//     // if(localStorage.getItem('userToken') == null){
//     //     router.push('login')
//     // }
//     if (store.getters.isLogged) {
//         router.push('dashboard')
//     }
//     next()
// })


/* ---------- ----------------- ----------- */



//import axios from "axios";

// export default {
//     namespaced: true,
//     state: {
//         token: null,
//         user: {}
//     },
//     getters: {
//         authenticated(state){
//             return state.token && state.user;
//         },
//         user(state){
//             return state.user;
//         }
//     },
//     mutations: {
//         SET_TOKEN(state, token) {
//             state.token = token;
            
//             if (state) {
//             localStorage.setItem('token', token)
//             // localStorage.setItem('user', user)
//             }
//         },
//         SET_USER(state, data) {
//             state.user = data;
//             if (state) {
//                 // localStorage.setItem('token', token)
//                 localStorage.setItem('user', data)
//                 }
//         },
     
//     },
//     actions: {
     
//         async register({ dispatch }, credentials) {
//             console.log(credentials)
//             let response = await axios.post("/auth/register", credentials,{headers:{ "Content-Type": "multipart/form-data"}});

//             // console.log(response.data.data.token);

//             dispatch("attempt", response.data.token);
//         },
//         async login({ dispatch }, credentials) {
//             let response = await axios.post("/auth/login", credentials);


//             console.log(response.data);
//             // console.log(this.state.user)
//             // console.log(this.state.token)
//             dispatch("attempt", response.data);
//         },
//         async attempt({ commit,state }, data) {
//             if (data.access_token) {
//             commit("SET_TOKEN", data.access_token);
//             axios.defaults.headers.common.Authorization = 'Bearer'+ data.access_token;
//             commit("SET_USER", data.user);
//             }
//             // if (data.user) {
//             //     commit("SET_USER", data.user);
//             // }
//             if (!state.token) {
//                 return
//             }
//             console.log(data.user)
//             // try {
//             //     // let response = await axios.get("/users", {
//             //     //     headers: {
//             //     //         Authorization: "Bearer " + data.access_token
//             //     //     },
//             //     // });
//             //     // axios.defaults.headers.common['Authorization'] = 'Bearer'+ data.token
//             //     // let response = axios.defaults.headers.common.Authorization = 'Bearer'+ data.token;
//             //     // console.log(response.data)
//             //     // commit("SET_USER", data.user);
//             // } catch (e) {
//             //     commit("SET_USER", null);
//             //     commit("SET_TOKEN", null);
//             // }
//         },
//         // async attempt({ commit,state }, data) {
//         //     if (data.access_token) {
//         //     commit("SET_TOKEN", data.access_token);
//         //     commit("SET_USER", data.user);
                
//         //     }
//                 // commit("SET_USER", response.data.user);
//             // console.log(response.data)
         
//             // try {
//             //     // headers: {
//             //     //     Authorization: "Bearer " + data.access_token;
//             //     // }
//             //     console.log(response.data)
                
                    
                
//             //     // commit("SET_USER", response.data);
//             // } catch (e) {
//             //     commit("SET_USER", null);
//             //     commit("SET_TOKEN", null);
//             // }
//         },
//         logout({commit}){
//             return axios.get('/lougout').then(()=>{
//                 commit("SET_USER", null);
//                 commit("SET_TOKEN", null);
//             });
        
//     }
    
//     // -------------------

//     // state: {
//     //             userToken: null,
//     //             user: null,
//     //             // Editeduser:{}
//     //         },
//     //         getters: { //center
//     //             isLogged(state) {
                    
//     //                 return !!state.userToken ;
//     //             },
//     //             typeuser(state) {
//     //                 if (state.user) {
//     //                     return state.user
//     //                 }
//     //                 // return null
        
//     //             },
//     //             // LoginUser(state){
//     //             //     return u
//     //             // }
//     //             // userToEdit(state) {
//     //             //     return state.Editeduser
//     //             // 
//     //             // }
//     //         },
//     //         mutations: {
//     //             setUserToken(state, userToken) {
//     //                 state.userToken = userToken;
//     //                 if (state.userToken) {
//     //                     localStorage.setItem('userToken', JSON.stringify(userToken));
//     //                 }
//     //                 axios.defaults.headers.common.Authorization = `Bearer ${userToken}`;
//     //             },
//     //             removeUserToken(state) {
        
//     //                 state.userToken = null;
//     //                 localStorage.removeItem('userToken')
//     //             },
//     //             setstateUser(state, user) {
//     //                 state.user = user
//     //             },
//     //             // logout(state) {
//     //             //     state.userToken = null;
//     //             //     localStorage.removeItem('userToken');
//     //             //     window.location.pathname = "/"
//     //             // },
//     //             // Edituser(state,val) {
//     //             //     state.Editeduser = val;
//     //             //     console.log(val)
//     //             // }
//     //         },
//     //         actions: {
//     //             RegisterUser({ commit }, payload) {
//     //                 axios.post('http://localhost:8000/api/auth/register', payload)
//     //                     .then(res => {
//     //                         console.log(res)
//     //                         commit('setUserToken', res.data.access_token)
//     //                     })
//     //                     .catch(err => {
//     //                         console.log(err)
//     //                     })
//     //             },
//     //             // addagent({ commit }, payload) {
//     //             //     axios.post('http://localhost:8000/api/auth/addagent', payload)
//     //             //         .then(res => {
//     //             //             console.log(res)
//     //             //             commit('setUserToken', res.data.access_token)
//     //             //         })
//     //             //         .catch(err => {
//     //             //             console.log(err)
//     //             //         })
//     //             // },
//     //             LoginUser({ commit }, payload) {
//     //                 axios.post('/api/auth/login', payload)
//     //                     .then(res => {
//     //                         console.log(res)
//     //                         commit('setUserToken', res.data.access_token)
        
//     //                         commit('setstateUser', res.data.token_scope)
//     //                         // console.log(setstateUser)
//     //                         console.log(this.state.user)
//     //                         console.log(axios.defaults.headers.common.Authorization)
//     //                         if (this.state.user == 'do_any'){
//     //                             // window.location.pathname = "/Dashboard/users";
//     //                         }else if (this.state.user == 'can_crud_home'){
//     //                             window.location.pathname = "/Dashboard";
//     //                         }else {
//     //                             window.location.pathname = "/";
//     //                         }
//     //                         // axios.get('/api/user')
//     //                             // .then(res => {
//     //                             //     console.log(res.data)
        
        
        
//     //                             //     commit('setstateUser', res.data.token_scope)
//     //                             //     // if (data.token_scope == 'admin'){
//     //                             //     //     window.location.pathname = "/Dashboard";
//     //                             //     // }
//     //                             //     // window.location.pathname = "/Dashboard"
//     //                             // })
//     //                     })
//     //                     .catch(err => {
//     //                         console.log(err)
//     //                     })
        
//     //             }
        
//     //         }
        
// };