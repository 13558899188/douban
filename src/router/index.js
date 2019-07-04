import Vue from 'vue'
import Router from 'vue-router'
import Broadcast from '@/Pages/Broadcast/broadcast.vue'
import Group from '@/Pages/Group/group.vue'
import Home from '@/Pages/Home/home.vue'
import Mine from '@/Pages/Mine/mine.vue'
import Radio from '@/Pages/Radio/radio.vue'


//配置二级路由
import Film from '../components/film.vue'
import Tv from '../components/tv.vue'
import Ready from '../components/ready.vue'
import City from '../components/city.vue'
import Music from '../components/music.vue'


//配置书影音的三级路由


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path:'/home',name:'Home',component:Home},
    {path:'/broadcast',name:'Broadcast',component:Broadcast,children:[
       {path:'film',name:'Film',component:Film},
       {path:'tv',name:'Tv',component:Tv},
       {path:'ready',name:'Ready',component:Ready},
       {path:'city',name:'City',component:City},
       {path:'music',name:'Music',component:Music}
    ]},
    {path:'/group',name:'Group',component:Group},
    {path:'/mine',name:'Mine',component:Mine},
    {path:'/radio',name:'Radio',component:Radio}
  ]
})
