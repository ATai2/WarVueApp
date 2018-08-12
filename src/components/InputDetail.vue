<template>
  <div class="page-cell">
    <div v-on:click="seen1" v-on:closepop="closepop" >
      <mt-cell title="试飞科目*" :label="item.subject" is-link></mt-cell>
    </div>

    <mt-field label="起飞时间*" placeholder="请输入4位数字时间" :attr="{ maxlength: 4 }" :text="item.startFlyTime"></mt-field>
    <mt-field label="着陆时间*" placeholder="请输入4位数字时间" :attr="{ maxlength: 4 }" :text="item.landTime"></mt-field>
    <div v-on:click="seen2" v-on:closepop="closepop">
      <mt-cell title="起飞机场*" :label="item.flyAirPort" is-link></mt-cell>
    </div>
    <div v-on:click="seen3" v-on:closepop="closepop">
      <mt-cell title="着陆机场*" :label="item.landAirPort" is-link></mt-cell>
    </div>

    <mt-cell title="空中飞行时间*" :label="item.flyTime" ></mt-cell>
    <mt-field label="开关车实验时间*" placeholder="请输入" :attr="{ maxlength: 8 }" :text="item.testTime"></mt-field>
    <mt-field label="完成实验点数*" placeholder="请输入" :attr="{ maxlength: 8 }" :text="item.testPoint"></mt-field>

    <div v-on:click="seen4" v-on:closepop="closepop">
      <mt-cell title="试飞员*" :label="item.polit" is-link></mt-cell>
    </div>

    <div v-on:click="seen5" v-on:closepop="closepop">
      <mt-cell title="试飞工程师*" :label="item.engineer" is-link></mt-cell>
    </div>

    <SelectPage :datalist="dbItem.subjectlist" :popupVisible="subjectpopupVisible" @closepage="closepop"/>
    <SelectPage :datalist="dbItem.startportlist" :popupVisible="startportpopupVisible" @closepage="closepop2"/>
    <SelectPage :datalist="dbItem.endportlist" :popupVisible="endportpopupVisible" @closepage="closepop3"/>
    <SelectPage :datalist="dbItem.politlist" :popupVisible="politpopupVisible" @closepage="closepop4"/>
    <SelectPage :datalist="dbItem.engineerlist" :popupVisible="engineerpopupVisible" @closepage="closepop5"/>

  </div>
</template>

<script>
  import SelectPage from './SelectPage'

  export default {
    name: 'InputDetail',
    components: {SelectPage},
    props: ['dbItem','listId'],
    data () {
      return {
        item: {
          subject: '',
          startFlyTime: '',
          landTime: '',
          flyAirPort: '',
          landAirPort: '',
          flyTime: '',
          polit: '',
          testTime: '',
          testPoint: '',
          engineer: '',
        },
        subjectpopupVisible: false,
        startportpopupVisible: false,
        endportpopupVisible: false,
        politpopupVisible: false,
        engineerpopupVisible: false,
      }
    },
    watch:{
      item: {
        handler(newValue, oldValue) {
          console.log("watch item")
          console.log(this.listId)
          this.item.key=this.listId
          var key="key"+this.listId
          // this.$store.state.addList[key]=this.item
          this.$store.commit('updateItem', this.item)
        },
        deep: true
      }
    },
    methods: {
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
        this.item.flyAirPort = val
      },
      closepop3 (val) {
        this.endportpopupVisible = false
        this.item.landAirPort = val
      },
      closepop4 (val) {
        this.politpopupVisible = false
        this.item.polit = val
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
      // console.log('dbitem    ' + this.dbItem)
    }
  }
</script>

<style scoped>

</style>
