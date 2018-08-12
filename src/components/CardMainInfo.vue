<template>
  <el-row>
    <!--<el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">-->
    <el-card v-for="c in list" :body-style="{ padding: '0px' }" :key="c.key">
      <!--<img src="~examples/assets/images/hamburger.png" class="image">-->
      <div style="padding: 14px;" class="info">

        <div class="row">
          日期: <span>{{c.date}}</span>
        </div>
        <div class="row">
          飞机型号: <span>{{c.aircraftType}}</span>
        </div>
        <div class="row">
          驾机号: <span>{{c.aircraftNum}}</span>
        </div>

        <div class="bottom clearfix mint-cell-wrapper right right-align">

          <el-button type="text" class="button">详情</el-button>
        </div>
      </div>
    </el-card>
    <!--</el-col>-->
  </el-row>
</template>

<script>
  export default {
    name: 'CardMainInfo',
    data () {
      return {
        list:[{date:"20180202",aircraftType:"ccc",aircraftNum:"222"}],
        currentDate: new Date(),
        key:1
      }
    }
  }
</script>

<style scoped>
  .right-align {
    justify-content: flex-end;
  }

  .info {
    text-align: left;
  }

  .row {
    margin-bottom: 0.1rem;
    margin-left: 0.5rem;
  }
</style>
