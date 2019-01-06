import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/tabbar/Home.vue"
import GoodsInfo from "./components/good/GoodsInfo.vue"
import Login from "./components/Login/Login.vue"
import Register from "./components/Register/Register.vue"
Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',redirect:"/home"},
        {path:'/home',component:Home },
        {path:'/Goodsinfo/:id',component:GoodsInfo},
        {path:'/login',component:Login},
        {path:'/register',component:Register}
    ]
})