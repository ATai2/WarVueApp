<template>
  <div class="main page-part main-color" ref="fd">

    <!--<div class="">日期<span style="color: red">*</span><mt-field class="field-inline" placeholder="请输入8位数字"></mt-field></div>-->
    <!--<mt-field label="邮箱*" placeholder="请输入8位数字" state="success"></mt-field>-->

    <el-card class="box-card main-color">
      <!--<div slot="header" class="clearfix">-->
        <!--<span>卡片名称</span>-->
      <!--</div>-->
      <div class="page-cell">
        <div  class="main-text"><span>主表信息:</span></div>
        <div v-on:click="open('picker')" v-on:closepop="closepop">
          <mt-cell title="日期*" :label="fd.flyDate" is-link></mt-cell>
        </div>
        <!--<mt-field v-model="fd.flyDate" placeholder="请输入8位数字日期" label="日期*"  :attr="{ maxlength: 8 }"></mt-field>-->
        <div v-on:click="seenAirType" v-on:closepop="closepop">
          <mt-cell title="飞机型号*" :label="fd.aircraftType" is-link></mt-cell>
        </div>
        <div v-on:click="seenAirNum" v-on:closepop="closepop2">
          <mt-cell title="驾机号*" :label="fd.aircraftNum" is-link></mt-cell>
        </div>
      </div>
    </el-card>


    <!--<InputDetail/>-->
    <SelectPage :datalist="dbItem.aircraftType" :popupVisible="airTypepopupVisible" @closepage="closepop"/>
    <SelectPage :datalist="dbItem.aircraftNum" :popupVisible="airNumpopupVisible" @closepage="closepop2"/>


    <mt-datetime-picker
      ref="picker"
      type="date"
      v-model="value"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>
  </div>
</template>

<script>
  import InputDetail from './InputDetail'
  import SelectPage from './SelectPage'
  import {
    Indicator,
    Toast
  } from 'mint-ui';

  export default {
    name: 'MainTable',
    props:['dbItem'],
    components: {SelectPage, InputDetail},
    data () {
      return {
        value:'2018-08-08',
        fd:{
          aircraftNum:"",
          aircraftType:"",
          flyDate:""
        },

        airTypepopupVisible: false,
        airNumpopupVisible: false,
        value1: 'sdfa',
        airTypelist: ['a', 'b', 'c'],
        airNumlist: ['ksldk', 'lkdjfls']
      }
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        console.log(value)
        this.fd.flyDate=value.getFullYear()+'-'+(value.getMonth()+1)+'-'+(value.getDate())
        // Toast({
        //   message: '已选择 ' + value.toString(),
        //   position: 'bottom'
        // });
      },
      seenAirType () {
        this.airTypepopupVisible = !this.airTypepopupVisible
      },
      seenAirNum () {
        this.airNumpopupVisible = !this.airNumpopupVisible
      },
      closepop (val) {
        this.airTypepopupVisible = false
        console.log(val)
        this.fd.aircraftType=val
      },
      closepop2 (val) {
        this.airNumpopupVisible = false
        this.fd.aircraftNum=val
      }
    },
    created () {
        let dt=new Date()
        this.value=dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate()
    }
  }
</script>

<style scoped>

  .main-color {
    align-content: center;
    width: 98%;
    margin: 0 auto;
    background-color: #F6FEFF;
    padding: 0;
  }

  .borderdiv{
    /*width: 90%;*/
    /*padding: 0.5rem;*/
    /*border-width: 0.1rem;*/
    /*border-color: #4E74BB;*/
    /*border-radius: 5px;*/
    margin: 0 auto;
  }

  .main-text{
    color: #0099FF;
    text-align: left;
    margin-left: 0.5rem;
  }
</style>
