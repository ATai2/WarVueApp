import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddInfo from '@/components/AddInfo'
import MyRelease from '@/components/MyRelease'
import SumInfos from '@/components/SumInfos'
import SelectPage from '@/components/SelectPage'
import CardMainInfo from '@/components/CardMainInfo'
import TimeLine from '@/components/TimeLine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/addinfo',
      name: 'AddInfo',
      component: AddInfo
    },
    {
      path: '/myrelease',
      name: 'MyRelease',
      component: MyRelease
    },
    {
      path: '/suminfos',
      name: 'SumInfos',
      component: SumInfos
    },
    {
      path: '/select/:id',
      name: 'SelectPage',
      component: SelectPage
    }



    //demo
    ,
    {
      path: '/card',
      name: 'card',
      component: CardMainInfo
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: TimeLine
    }
  ]
})
