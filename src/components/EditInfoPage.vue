<template>
  <div>
    <HeaderCustom :title="headtitle"/>
    <!--<MainInfo :maininfo="maininfo"/>-->
    <InputDetail :dbItem="dbItem" />

  </div>
</template>

<script>
  import HeaderCustom from './HeaderCustom'
  import MainInfo from './MainInfo'
  import InputDetail from './InputDetail'

  export default {
    name: 'EditInfoPage',
    components: {InputDetail, MainInfo, HeaderCustom},

    data () {
      return {
        headtitle:'编辑',
        dbItem:{}
      }
    },
    methods: {},
    created () {

    }
  }
</script>

<style scoped>

</style>
