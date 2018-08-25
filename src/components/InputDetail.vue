<template>
  <div class="page-cell">
    <div v-on:click="seen1" v-on:closepop="closepop">
      <mt-cell title="试飞科目*" :label="item.subject" is-link></mt-cell>
    </div>
    <div v-on:click="open('picker1')" v-on:closepop="closepop">
      <mt-cell title="起飞时间*" :label="item.takeOffTime" is-link></mt-cell>
    </div>
    <div v-on:click="open('picker2')" v-on:closepop="closepop">
      <mt-cell title="着陆时间*" :label="item.landingTime" is-link></mt-cell>
    </div>
    <div v-on:click="seen2" v-on:closepop="closepop2">
      <mt-cell title="起飞机场*" :label="item.takeOffAirport" is-link></mt-cell>
    </div>
    <div v-on:click="seen3" v-on:closepop="closepop3">
      <mt-cell title="着陆机场*" :label="item.landingAirport" is-link></mt-cell>
    </div>

    <mt-cell title="空中飞行时间*" :label="item.flightTime"></mt-cell>
    <mt-field label="开关车实验时间*" placeholder="请输入分钟" v-model="item.turnOnAndOffTime" type="number"
              :attr="{ maxlength: 8 }"
              :text="item.turnOnAndOffTime"></mt-field>
    <mt-field label="完成实验点数*" placeholder="请输入完成实验点数" v-model="item.points" type="number" :attr="{ maxlength: 8 }"
              :text="item.points"></mt-field>

    <div v-on:click="seen4" v-on:closepop="closepop4">
      <mt-cell title="试飞员*" :label="item.pilot" is-link></mt-cell>
    </div>

    <div v-on:click="seen5" v-on:closepop="closepop5">
      <mt-cell title="试飞工程师*" :label="item.engineer" is-link></mt-cell>
    </div>

    <SelectPage :datalist="dbItem.subject" :popupVisible="subjectpopupVisible" @closepage="closepop"/>
    <SelectPage :datalist="dbItem.airport" :popupVisible="startportpopupVisible" @closepage="closepop2"/>
    <SelectPage :datalist="dbItem.airport" :popupVisible="endportpopupVisible" @closepage="closepop3"/>
    <SelectPage :datalist="dbItem.pilot" :popupVisible="politpopupVisible" @closepage="closepop4"/>
    <SelectPage :datalist="dbItem.engineer" :popupVisible="engineerpopupVisible" @closepage="closepop5"/>

    <mt-datetime-picker
      ref="picker1"
      v-model="value1"
      @confirm="handleChange1">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      v-model="value2"
      @confirm="handleChange2">
    </mt-datetime-picker>

  </div>
</template>

<script>
  import SelectPage from './SelectPage'
  import axios from 'axios'
  import Global from './Global'

  export default {
    name: 'InputDetail',
    components: {SelectPage},
    props: ['listId'],
    data () {
      return {
        value1: null,
        value2: null,
        date1: null,
        date2: null,
        visible: false,
        dbItem: {
          aircraftType: [],
          aircraftNum: [],
          subject: [],
          airport: [],
          pilot: [],
          engineer: []
        },
        item: {
          subject: '',
          takeOffTime:
            '',
          landingTime:
            '',
          takeOffAirport:
            '',
          landingAirport:
            '',
          flightTime:
            '',
          pilot:
            '',
          turnOnAndOffTime:
            '',
          points:
            '',
          engineer:
            '',
        }
        ,
        subjectpopupVisible: false,
        startportpopupVisible:
          false,
        endportpopupVisible:
          false,
        politpopupVisible:
          false,
        engineerpopupVisible:
          false,
      }
    },
    watch: {
      item: {
        handler (newValue, oldValue) {
          console.log('watch item')
          console.log(this.listId)
          this.item.key = this.listId
          var key = 'key' + this.listId
          // this.$store.state.addList[key]=this.item
          this.$store.commit('updateItem', this.item)

        },
        deep: true
      }
    },
    methods: {
      handleChange1 (value) {
        // console.log(value)
        this.item.takeOffTime = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + (value.getDate()) + ' ' + value.getHours() + ':' + value.getMinutes()
        this.date1 = value.valueOf()
      },
      handleChange2 (value) {
        this.item.landingTime = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + (value.getDate()) + ' ' + value.getHours() + ':' + value.getMinutes()
        this.date2 = value.valueOf()

        if (this.item.takeOffTime != '' && this.item.landingTime != '') {
          let shijiancha = new Date(this.date2 - this.date1)
          console.log(this.date2)
          console.log(this.date1)
          console.log(shijiancha)
          var days = shijiancha / 1000 / 60 / 60 / 24
          var daysRound = Math.floor(days)
          var hours = shijiancha / 1000 / 60 / 60 - (24 * daysRound)
          var hoursRound = Math.floor(hours)
          var minutes = shijiancha / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound)
          var minutesRound = Math.floor(minutes)
          var seconds = shijiancha / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound)
          // this.item.flightTime
          let s = ''
          if (daysRound > 0) {
            s += daysRound + '天 '
          }
          if (hoursRound > 0) {
            s += hoursRound + '时 '
          }
          s += minutesRound + '分 '
          console.log(s)

          this.item.flightTime = s
        }
      },
      open (picker) {
        this.$refs[picker].open()
      },

      seen1 () {
        this.subjectpopupVisible = !this.subjectpopupVisible
      },
      seen2 () {
        this.startportpopupVisible = !this.startportpopupVisible
      },
      seen3 () {
        this.endportpopupVisible = !this.endportpopupVisible
      },
      seen4 () {
        this.politpopupVisible = !this.politpopupVisible
      },
      seen5 () {
        this.engineerpopupVisible = !this.engineerpopupVisible
      },
      closepop (val) {
        this.subjectpopupVisible = false
        console.log(val)
        this.item.subject = val
      },
      closepop2 (val) {
        this.startportpopupVisible = false
        this.item.takeOffAirport = val
      },
      closepop3 (val) {
        this.endportpopupVisible = false
        this.item.landingAirport = val
      },
      closepop4 (val) {
        this.politpopupVisible = false
        this.item.pilot = val
      },
      closepop5 (val) {
        this.engineerpopupVisible = false
        this.item.engineer = val
      },

      handleChange (val) {
        console.log(val)
      }
    },
    created () {
      let dt = new Date()
      this.value1 = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate()
      this.value2 = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate()

      // if (this.$route.params.item) {
      //   this.item=this.$route.params.item
      // }
      let urlItem = this.$route.params.item
      if (urlItem) {
        this.item = urlItem
      }

      let that = this
      axios({
        method: 'get',
        url: Global.serverSrc + '/fly/info/optional/names'
      }).then(function (resp) {
        console.log(resp.data)
        that.dbItem.aircraftType = resp.data.data.aircraftType
        that.dbItem.aircraftNum = resp.data.data.aircraftNum
        that.dbItem.subject = resp.data.data.subject
        that.dbItem.airport = resp.data.data.airport
        that.dbItem.pilot = resp.data.data.pilot
        that.dbItem.engineer = resp.data.data.engineer

      }).catch(resp => {
        console.log('请求失败：' + resp.status + ',' + resp.statusText)
      })

    }
  }
</script>

<style scoped>

</style>
