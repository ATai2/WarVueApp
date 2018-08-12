<template>
  <div class="page-cell">

    <mt-cell title="试飞科目*" :label="item.subject" is-link></mt-cell>

    <mt-field label="起飞时间*" placeholder="请输入4位数字时间" :attr="{ maxlength: 4 }" :text="item.startFlyTime"></mt-field>
    <mt-field label="着陆时间*" placeholder="请输入4位数字时间" :attr="{ maxlength: 4 }" :text="item.landTime"></mt-field>

    <mt-cell title="起飞机场*" :label="item.flyAirPort" is-link></mt-cell>
    <mt-cell title="着陆机场*" :label="item.landAirPort" is-link></mt-cell>

    <mt-cell title="空中飞行时间*" :label="item.flyTime" is-link></mt-cell>
    <mt-field label="开关车实验时间*" placeholder="请输入" :attr="{ maxlength: 8 }" :text="item.testTime"></mt-field>
    <mt-field label="完成实验点数*" placeholder="请输入" :attr="{ maxlength: 8 }" :text="item.testPoint"></mt-field>
    <mt-cell title="试飞员*" :label="item.polit" is-link></mt-cell>
    <mt-cell title="试飞工程师*" :label="item.engineer" is-link></mt-cell>

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
    props: ['dtName'],
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
    methods: {
      closepop (val) {
        this.airTypepopupVisible = false
        console.log(val)
        this.fd.addAirType = val
      },
      closepop2 (val) {
        this.airNumpopupVisible = false
        this.fd.addAirNum = val
      },
      closepop3 (val) {
        this.airNumpopupVisible = false
        this.fd.addAirNum = val
      },
      closepop4 (val) {
        this.airNumpopupVisible = false
        this.fd.addAirNum = val
      },
      closepop5 (val) {
        this.airNumpopupVisible = false
        this.fd.addAirNum = val
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
