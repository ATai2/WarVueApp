<template>
  <div>
    <Header :title="headtitle"/>
    <MainInfo  :maininfo="flyInfoMain"/>
    <InfoDetail v-for="(item, index) in detailList" :key="index" :item="item"/>

  </div>

</template>

<script>
  import MainInfo from './MainInfo'
  import TimeLine from './TimeLine'
  import Header from './Header'
  import InfoDetail from './InfoDetail'
  export default {
    name: 'DetailInfoPage',
    components: {InfoDetail, Header, TimeLine, MainInfo},
    data(){
      return {
        headtitle:'信息详情',
        maininfo:{},
        flyInfoMain:{},
        detailList:[]
      }
    },
    created(){
      console.log( this.$route.params.datas)
      detaillist=this.$route.params.datas.flyInfoDetailList
    }
  }
</script>

<style scoped>

</style>
