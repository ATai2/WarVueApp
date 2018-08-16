<template>
  <div>
    <!--<Header :title="headtitle"/>-->

    <el-row>
      <!--<el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">-->
      <el-card v-for="c in list" :body-style="{ padding: '0px' }" :key="c.key">
        <!--<img src="~examples/assets/images/hamburger.png" class="image">-->
        <div style="padding: 14px;" class="info">

          <div class="row">
            日期: <span>{{c.flyInfoMain.date}}</span>
          </div>
          <div class="row">
            飞机型号: <span>{{c.flyInfoMain.aircraftType}}</span>
          </div>
          <div class="row">
            驾机号: <span>{{c.flyInfoMain.aircraftNum}}</span>
          </div>

          <div class="bottom clearfix mint-cell-wrapper right right-align">
            <!--<a href="/detail"></a>-->
            <router-link :to="{ name: 'DetailInfoPage',params: {datas: c}}">
              <el-button type="text" class="button">详情</el-button>
            </router-link>

          </div>
        </div>
      </el-card>
      <!--</el-col>-->
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  import Global from './Global'
  import Header from './Header'

  export default {
    name: 'CardMainInfo',
    components: {Header},
    props:['list'],
    data () {
      return {
        headtitle:"我发布的",
      }
      //   c:{date:"20180202",aircraftType:"ccc",aircraftNum:"222"},
      //   currentDate: new Date(),
      //   key:1
      // }
    },
    methods: {
      detailpage () {
        this.$router.push({name: '路由命名', params: {参数名: 参数值, 参数名: 参数值}})
      }
    },
    created () {
      // let that = this
      // axios.get(Global.serverSrc + '/userPublish/all')
      //   .then(function (response) {
      //     console.log(response)
      //     if (response.data.code == 0) {
      //       that.list = response.data.data
      //     }
      //     console.log('sss')
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
      // console.log('sss')
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
