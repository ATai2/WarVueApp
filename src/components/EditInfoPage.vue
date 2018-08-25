<template>
  <div>
    <HeaderCustom :title="编辑"/>
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
