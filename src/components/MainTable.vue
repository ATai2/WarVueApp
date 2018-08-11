<template>
  <div class="main page-part main-color">

    <!--<div class="">日期<span style="color: red">*</span><mt-field class="field-inline" placeholder="请输入8位数字"></mt-field></div>-->
    <!--<mt-field label="邮箱*" placeholder="请输入8位数字" state="success"></mt-field>-->

    <div class="page-cell borderdiv">
      <div  class="main-text mint-field"><span>主表信息:</span></div>
      <mt-field v-model="addInfoTime" placeholder="请输入8位数字日期" label="日期*" :attr="{ maxlength: 8 }"></mt-field>
      <div v-on:click="seenAirType" v-on:closepop="closepop">
        <mt-cell title="飞机型号*" :label="fd.addAirType" is-link></mt-cell>
      </div>
      <div v-on:click="seenAirNum" v-on:closepop="closepop">
        <mt-cell title="驾机号*" :label="fd.addAirNum" is-link></mt-cell>
      </div>
    </div>
    <!--<InputDetail/>-->
    <SelectPage :datalist="airTypelist" :popupVisible="airTypepopupVisible" @closepage="closepop"/>
    <SelectPage :datalist="airNumlist" :popupVisible="airNumpopupVisible" @closepage="closepop2"/>

  </div>
</template>

<script>
  import InputDetail from './InputDetail'
  import SelectPage from './SelectPage'

  export default {
    name: 'MainTable',
    components: {SelectPage, InputDetail},
    data () {
      return {
        fd:{
          addInfoTime:"",
          addAirType:"请点击选择",
          addAirNum:"请点击选择"
        },



        airTypepopupVisible: false,
        airNumpopupVisible: false,
        value1: 'sdfa',
        airTypelist: ['a', 'b', 'c'],
        airNumlist: ['ksldk', 'lkdjfls', 'ksldk', 'lkdjfls', 'ksldk', 'lkdjfls', 'ksldk', 'lkdjfls', 'ksldk', 'lkdjfls']
      }
    },
    methods: {
      seenAirType () {
        this.airTypepopupVisible = !this.airTypepopupVisible
      },
      seenAirNum () {
        this.airNumpopupVisible = !this.airNumpopupVisible
      },
      closepop (val) {
        this.airTypepopupVisible = false
        console.log(val)
        this.fd.addAirType=val
      },
      closepop2 (val) {
        this.airNumpopupVisible = false
        this.fd.addAirNum=val
      }
    },
    created () {

    }
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
  .main-color {
    width: 98%;
    border-color: aquamarine;
    border-width: 1px;
    background-color: #F6FEFF;
  }

  .borderdiv{
    width: 90%;
    padding: 0.5rem;
    border-width: 0.1rem;
    border-color: #4E74BB;
    border-radius: 5px;
    margin: 0 auto;
  }

  .main-text{
    color: #0099FF;
    text-align: left;
    margin-left: 0.5rem;
  }
</style>
