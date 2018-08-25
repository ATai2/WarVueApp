<template>
  <div>
    <HeaderCustom :title="title"/>

  </div>
</template>

<script>
  import HeaderCustom from './HeaderCustom'

  export default {
    name: 'SumInfos',
    data(){
      return {
        title:'信息汇总'
      }
    },
    components: {HeaderCustom}
  }
</script>

<style scoped>

</style>
