import Home from './pages/Home';
import Homedetail from './pages/Homedetail';
// import Homes from './components/Homes';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './Dashboard/Dashboard';
import Users from './Dashboard/Users';
import Homes from './Dashboard/Homes';
import add from './Dashboard/add';
import edituser from './Dashboard/edituser';
import test from './Dashboard/test';
import addHome from './Dashboard/addHome';
import editHome from './Dashboard/editHome';
import app from './app';
import { store } from './app';





export default {
    mode: 'history',

    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'homedetail',
            path: '/homedetail',
            component: Homedetail
        },
        // {
        //     name: 'homes',
        //     path: '/homes',
        //     component: Homes
        // },
        {
            name:'login',
            path: '/login',
            component: Login
        },
        {
            name: 'test',
            path: '/test',
            component: test
        },
        {
            name: 'register',
            path: '/register',
            component: Register
        },
        {
            name: 'dashboard',
            path: '/dashboard',
            component: Dashboard,
            // beforeEnter:(to,from,next) => {
            //     if (store.getters.isLogged == false) {
            //       return next({
            //         name:'login'
            //       })
            //     }
            //     next()
            //   },
            beforeEnter:(to,from,next) => {
                if (localStorage.getItem('userToken') == null ) {
                  return next({
                    name:'login'
                  })
                }
                
                next()
              },
            children: [
                // {
                //     path:"/",
                //     component: Dashboard,

                // },
                {
                    name: 'users',
                    path: 'users',
                    component: Users,
                    // beforeEnter:(to,from,next) => {
                    //     if (localStorage.getItem('userToken') == null && localStorage.getItem('usertype') == 'do_any') {
                    //       return next({
                    //         name:'login'
                    //       })
                    //     }
                    //     next()
                    //   },
                },
                {
                    name: 'add',
                    path: 'add',
                    component: add,
                    // beforeEnter:(to,from,next) => {
                    //     if (localStorage.getItem('userToken') == null && localStorage.getItem('usertype') == 'do_any') {
                    //       return next({
                    //         name:'login'
                    //       })
                    //     }
                    //     next()
                    //   },
                },
                {
                    name: 'edituser',
                    path: 'edituser/:id',
                    component: edituser,
                    // beforeEnter:(to,from,next) => {
                    //     if (localStorage.getItem('userToken') == null && localStorage.getItem('usertype') == 'do_any') {
                    //       return next({
                    //         name:'login'
                    //       })
                    //     }
                    //     next()
                    //   },
                },
                {
                    name: 'addHome',
                    path: 'addHome',
                    component: addHome,
                    // beforeEnter:(to,from,next) => {
                    //         if (localStorage.getItem('userToken') == null && localStorage.getItem('usertype') == !'can_creat_ord') {
                    //           return next({
                    //             name:'login'
                    //           })
                    //         }
                    //         next()
                    //       },
                },
                {
                    name: 'editHome',
                    path: 'editHome',
                    component: editHome,
                    // beforeEnter:(to,from,next) => {
                    //         if (localStorage.getItem('userToken') == null && localStorage.getItem('usertype') == !'can_creat_ord') {
                    //           return next({
                    //             name:'login'
                    //           })
                    //         }
                    //         next()
                    //       },
                    
                },
                {
                    name: 'homes',
                    path: 'homes',
                    component: Homes,
                    // beforeEnter:(to,from,next) => {
                    //     if (localStorage.getItem('userToken') == null && localStorage.getItem('usertype') == !'can_creat_ord') {
                    //       return next({
                    //         name:'login'
                    //       })
                    //     }
                    //     next()
                    //   },
                },
                
            ]
        },

    ]
}