<template>
  <div class="page-cell">
    <Header :title="title"/>
    <!--<div class="main-text"><span>主表信息:</span></div>-->
    <div v-on:click="open('picker')" v-on:closepop="closepop1">
      <mt-cell title="开始日期*" :label="fd.startDate" is-link></mt-cell>
    </div>
    <div v-on:click="open('picker2')" v-on:closepop="closepop2">
      <mt-cell title="结束日期*" :label="fd.endDate" is-link></mt-cell>
    </div>
    <!--<mt-field v-model="fd.flyDate" placeholder="请输入8位数字日期" label="日期*"  :attr="{ maxlength: 8 }"></mt-field>-->
    <div v-on:click="seenAirType" v-on:closepop="closepop3">
      <mt-cell title="飞机型号*" :label="fd.aircraftType" is-link></mt-cell>
    </div>
    <div v-on:click="seenAirNum" v-on:closepop="closepop4">
      <mt-cell title="驾机号*" :label="fd.aircraftNum" is-link></mt-cell>
    </div>
    <mt-button size="large" type="primary" @click="emptyData">清空</mt-button>
    <mt-button size="large" type="primary" @click="confirmFilter">确定</mt-button>


    <SelectPage :datalist="dbItem.aircraftType" :popupVisible="airTypepopupVisible" @closepage="closepop3"/>
    <SelectPage :datalist="dbItem.aircraftNum" :popupVisible="airNumpopupVisible" @closepage="closepop4"/>

    <mt-datetime-picker
      ref="picker"
      type="date"
      v-model="value"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      v-model="value2"
      @confirm="handleChange2">
    </mt-datetime-picker>
  </div>
</template>

<script>
  import axios from 'axios'
  import Global from './Global'
  import {
    Indicator,
    Toast
  } from 'mint-ui'
  import Header from './Header'
  import SelectPage from './SelectPage'

  export default {
    name: 'FilterPage',
    components: {SelectPage, Header},
    data () {
      return {
        title: '筛选',
        value: '2018-08-08',
        value2: '2018-08-08',
        airTypepopupVisible: false,
        airNumpopupVisible: false,
        dbItem: {},
        fd: {
          startDate: '',
          endDate: '',
          aircraftType: '',
          aircraftNum: '',
        },
      }
    },
    methods: {
      emptyData () {
        this.fd.startDate = ''
        this.fd.endDate = ''
        this.fd.aircraftType = ''
        this.fd.aircraftNum = ''
      },
      confirmFilter(){

      },
      open (picker) {
        this.$refs[picker].open()
      },
      handleChange (value) {
        console.log(value)
        this.fd.startDate = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + (value.getDate())
      },
      handleChange2 (value) {
        console.log(value)
        this.fd.endDate = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + (value.getDate())
      },
      seenAirType () {
        this.airTypepopupVisible = !this.airTypepopupVisible
      },
      seenAirNum () {
        this.airNumpopupVisible = !this.airNumpopupVisible
      },
      closepop1 (val) {
        // this.airTypepopupVisible = false
        console.log(val)
        this.fd.startDate = val
      },
      closepop2 (val) {
        // this.airTypepopupVisible = false
        console.log(val)
        this.fd.endDate = val
      },
      closepop3 (val) {
        this.airTypepopupVisible = false
        console.log(val)
        this.fd.aircraftType = val
      },
      closepop4 (val) {
        this.airNumpopupVisible = false
        this.fd.aircraftNum = val
      }
    },
    created () {
      let that = this
      let dt = new Date()
      this.value = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate()

      axios({
        method: 'get',
        url: Global.serverSrc + '/fly/info/optional/names'
      }).then(function (resp) {
        console.log(resp.data)
        that.dbItem.aircraftType = resp.data.data.aircraftType
        that.dbItem.aircraftNum = resp.data.data.aircraftNum
        // that.dbItem.subject = resp.data.data.subject
        // that.dbItem.airport = resp.data.data.airport
        // that.dbItem.pilot = resp.data.data.pilot
        // that.dbItem.engineer = resp.data.data.engineer

        console.log(resp.data)

      }).catch(resp => {
        console.log('请求失败：' + resp.status + ',' + resp.statusText)
      })

    }
  }
</script>

<style scoped>

</style>
