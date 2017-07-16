// router
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './components/home.vue'
// import App from './App'
import index from './index'
import weapp from './components/weapp.vue'
import Demo from './components/Demo.vue'
import Blog from './components/Blog.vue'
import js from './components/js.vue'
import node from './components/node.vue'
import mysql from './components/mysql.vue'
import http from './components/http.vue'
import createNote from './components/createNote.vue'
import aboutme from './components/aboutme.vue'
import article from './components/article.vue'

var pop = index;

Vue.use(VueRouter)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })


// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。

const routes = [
  { path: '/',name:"home",component: home},
  { path: '/weapp',name:"weapp",component: weapp},
  { path: '/Demo',name:"Demo",component: Demo},
  { path: '/Blog',name:"Blog",component: Blog},
  { path: '/js',name:"js",component: js},
  { path: '/node',name:"node",component: node},
  { path: '/mysql',name:"mysql",component: mysql},
  { path: '/http',name:"http",component: http},
  { path: '/createNote',name:"createNote",component: createNote},
  { path: '/aboutme',name:"aboutme",component: aboutme},
  { path: '/article/:fileName',name:"article",component: article},
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  // mode: 'history',
  // mode: 'history',
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  render: h => h(index)
}).$mount('#app')

// 现在，应用已经启动了！