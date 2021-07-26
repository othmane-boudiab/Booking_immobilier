import Home from './pages/Home';
import Homedetail from './pages/Homedetail';
// import Homes from './components/Homes';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './Dashboard/Dashboard';
import Users from './Dashboard/Users';
import Homes from './Dashboard/Homes';

export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/homedetail',
            component: Homedetail
        },
        {
            path: '/homes',
            component: Homes
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/dashboard',
            component: Dashboard,
            children: [
                // {
                //     path:"/",
                //     component: Dashboard,
                // },
                {
                  path: 'users',
                  component: Users
                },
                {
                  path: 'homes',
                  component: Homes
                }
              ]
        },

    ]
}