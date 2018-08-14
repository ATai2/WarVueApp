<template>
  <div>
    <Header :title="headtitle"/>
    <MainInfo v-for="" :maininfo="maininfo"/>
    <TimeLine/>
  </div>

</template>

<script>
  import MainInfo from './MainInfo'
  import TimeLine from './TimeLine'
  import Header from './Header'
  export default {
    name: 'DetailInfoPage',
    components: {Header, TimeLine, MainInfo},
    data(){
      return {
        headtitle:'信息详情',
        maininfo:{}
      }
    },
    created(){
      console.log( this.$route.params.datas)
    }
  }
</script>

<style scoped>

</style>
