<template>
  <el-row>


  <el-card class="box-card main-color">
    <!--<div slot="header" class="clearfix">-->
    <!--<span>卡片名称</span>-->
    <!--</div>-->
    <div class="page-cell">
      <div  class="main-text"><span>主表信息:</span></div>
      <div>日期：{{maininfo.flyDate}}</div>
      <div>飞机型号：{{maininfo.aircraftType}}</div>
      <div>驾机号：{{maininfo.aircraftNum}}</div>
    </div>
  </el-card>
  </el-row>
</template>

<script>
  export default {
    name: 'MainInfo',
    props:['maininfo'],
    data(){
      return {

      }
    }
  }
</script>

<style scoped>

</style>
