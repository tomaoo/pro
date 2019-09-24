import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import AppAbout from '@/components/pages/about'
import AppHome from '@/components/pages/home'
import AppDynamic from '@/components/pages/dynamic'
import AppGoods from '@/components/pages/goods'
import AppContact from '@/components/pages/contact'
import AppDetail from '@/components/pages/detail'
import DetailAnalysis from '@/components/pages/detailAnalysis'
import DetailCount from '@/components/pages/detailCount'
import DetailForecast from '@/components/pages/detailForecast'
import DetailPublish from '@/components/pages/detailPublish'
import AppOrderList from '@/components/pages/orderlist'
import AppDetailNews from '@/components/pages/detailnews'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
     {
      path: '/orderlist',
      name: 'AppOrderList',
      component: AppOrderList
    },
    {
      path: '/goods',
      name: 'AppGoods',
      component: AppGoods
    },
    {
      path: '/dynamic',
      name: 'AppDynamic',
      component: AppDynamic
    },
    {
      path: '/about',
      name: 'AppAbout',
      component: AppAbout
    },
    {
      path: '/contact',
      name: 'AppContact',
      component: AppContact
    },
    {
      path: '/detail',
      component:AppDetail,
      redirect:'/detail/analysis',
      children:[
        {
          path:'analysis',
          component: DetailAnalysis
        },
        {
          path:'count',
          component: DetailCount
        },
        {
          path:'forecast',
          component: DetailForecast
        },
        {
          path:'publish',
          component: DetailPublish
        }
      ]
    },
    {
      path:'/detailnews/:id',
      component:AppDetailNews,
      name:'AppDetailNews'
    }

  ]
})
