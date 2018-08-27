import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddInfo from '@/components/AddInfo'
import MyRelease from '@/components/MyRelease'
import MyRelease2 from '@/components/MyRelease2'
import MyRelease3 from '@/components/MyRelease3'
import SumCard from '@/components/SumCard'
import SelectPage from '@/components/SelectPage'
import CardMainInfo from '@/components/CardMainInfo'
import TimeLine from '@/components/TimeLine'
import FilterPage from '@/components/FilterPage'
// import ListPullView from '@/components/ListPullView'
import DetailInfoPage from '@/components/DetailInfoPage'
import EditInfoPage from '@/components/EditInfoPage'

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
      // name: 'MyRelease3',
      // component: MyRelease3
      name: 'MyRelease',
      component: MyRelease
    },{
      path: '/myrelease2',
      name: 'MyRelease2',
      component: MyRelease2
    },{
      path: '/myrelease3',
      name: 'MyRelease3',
      component: MyRelease3
    },
    {
      path: '/SumCard',
      name: 'SumCard',
      component: SumCard
    },
    {
      path: '/receriveinfos',
      name: 'MyReceiver',
      component: CardMainInfo
    },
    {
      path: '/select/:id',
      name: 'SelectPage',
      component: SelectPage
    }    ,
    // {
    //   path: '/listpull',
    //   name: 'ListPullView',
    //   component: ListPullView
    // }    ,
    {
      path: '/cardlist',
      name: 'CardMainInfo',
      component: CardMainInfo
    }
   ,
    {
      path: '/detailpage',
      name: 'DetailInfoPage',
      component: DetailInfoPage
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
    },
    {
      path: '/filter',
      name: 'FilterPage',
      component: FilterPage
    },
    {
      path: '/edit',
      name: 'EditInfoPage',
      component: EditInfoPage
    }
  ]
})
