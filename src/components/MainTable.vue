<template>
<div class="main page-part main-color">
  <!--<div>主表信息</div>-->
  <!--<div class="">日期<span style="color: red">*</span><mt-field class="field-inline" placeholder="请输入8位数字"></mt-field></div>-->
    <!--<mt-field label="邮箱*" placeholder="请输入8位数字" state="success"></mt-field>-->
  <div class="page-cell">
    <mt-field label="日期*"  :attr="{ maxlength: 8 }"></mt-field>
    <mt-cell title="飞机型号*" label=" " is-link></mt-cell>
    <mt-cell title="驾机号*" label="" is-link></mt-cell>
  </div>
  <InputDetail/>


</div>
</template>

<script>
  import InputDetail from './InputDetail'
  export default {
    name: 'MainTable',
    components: {InputDetail}
  }
</script>

<style scoped>
   /*.field-inline{*/
     /*display: inline;*/
   /*}*/
  /*.main-color{*/
    /*background-color: aquamarine;*/
  /*}*/
  /*.main-color .mint-cell-wrapper{*/
    /*background-color: aquamarine;*/
  /*}*/
  .main-color{
    width: 98%;
    border-color: aquamarine;
    border-width: 1px;
  }
</style>
