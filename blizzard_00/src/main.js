import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//0.1:引入Vuex
import Vuex from "vuex"
//0.2:注册Vuex组件
Vue.use(Vuex)
//0.3:创建Vuex实例对象
var store=new Vuex.Store({
  state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')):{
    uid:"",
    uname:"",
    islogin:false,
    isloginout:true
  },
  mutations:{
    setUid(state,newmsg){
      state.uid=newmsg.uid;
      state.uname=newmsg.uname;
      state.islogin=true;
      state.isloginout=false;
    },
    removeUid(state){
      state.uid=undefined;
      state.uname=undefined;
      state.islogin=false;
      state.isloginout=true;
    }
    // setUname(state,newName){
    //   state.uname=newName;
    // }
  },
  getters:{
    
  }
})


// 3.1:引入axios库(VueResource)
import axios from "axios"
// 3.2:跨域保存session值
axios.defaults.withCredentials=true
//3.3:注册组件
Vue.prototype.axios=axios


//6.1: 设置请求的根目录 
// Vue.http.options.root = "http://127.0.0.1:3000/";
//6.2:全局设置post 时候表单的数据组织格式为 application/x-www-form-urlencoded
//将提交数据进行转码操作
// Vue.http.options.emulateJSON = true;
//6.3:跨域访问保存session值选项
// Vue.http.options.withCredentials =true;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store
  //将Vuex对象注册 Vue实例
}).$mount('#app')
