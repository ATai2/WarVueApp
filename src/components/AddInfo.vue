<template>
  <div>
    <Header :title="headtitle"/>
    <MainTable/>
    <mt-button size="large" type="primary" class="addbtn">提交</mt-button>
    <!--<SelectPage/>-->
  </div>
</template>

<script>
  import Header from './Header'
  import MainTable from './MainTable'
  import SelectPage from './SelectPage'
  import axios from 'axios'
  import Global from './Global'

  export default {
    name: 'AddInfo',
    data () {
      return {
        headtitle: '添加'
      }
    },
    components: {SelectPage, MainTable, Header},
    created () {
      console.log('created')
      console.log('ajax load data')
      console.log(Global.serverSrc)
      axios({
        method: 'get',
        url: Global.serverSrc + 'demo/flytype'
      }).then(function (resp) {
        console.log(resp.data)
      }).catch(resp => {
        console.log('请求失败：' + resp.status + ',' + resp.statusText)
      })
    }
  }
</script>

<style scoped>
  .addbtn {
    width: 95%;
    margin: 0.5rem auto;
  }

</style>
