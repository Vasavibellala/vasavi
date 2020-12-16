import Home from './components/Home.vue';
import EmployeeList from './components/EmployeeList.vue';
import About from './components/About.vue';
import Register from './components/Register.vue'

const routes = [
    { path: '/home', component: Home },
  {path:'/about',
  name:"About",
component:()=>import("./components/About.vue")
},
    { path:'/register',component: Register},
    {path:'/apicall',component:EmployeeList},
    { path: '/about', redirect: '/home' },
   ];
   

export default routes;