<template>
  <div>
    <mt-header class="bgcolor" :title="headtitle">
      <router-link :to="{ name: 'MyRelease2', params: { url:url ,filterParams:params.filterParams}}"  slot="left">
        <mt-button icon="back" >返回</mt-button>
      </router-link>
      <mt-button  slot="right" @click="goback">back</mt-button>
    </mt-header>
    <!--<HeaderCustom :title="headtitle"/>-->
    <!--<HeaderToLast :title="headtitle" v-on:delWholeInfo="delWholeInfo"/>-->
    <MainInfo class="row" :maininfo="flyInfoMain"/>
    <el-card class="box-card info-color">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item v-for=" (item, index)  in detailList" :title="items[index].title" :name="items[index].name"
                          :key="index">
          <InfoDetail class="row" :item="item"/>
          <div class="row">
            <mt-button @click="delinfo(index)">编辑</mt-button>
            <mt-button @click="delinfo(index)">删除</mt-button>

          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>

    <!--<mt-button class="el-row fix-bottom" type="primary">删除</mt-button>-->

    <!--<InfoDetail v-for="(item, index) in detailList" :key="index" :item="item"/>-->

  </div>

</template>

<script>
  import MainInfo from './MainInfo'
  import TimeLine from './TimeLine'
  import Header from './Header'
  import InfoDetail from './InfoDetail'
  import HeaderToLast from './HeaderToLast'
  import HeaderCustom from './HeaderCustom'
  import Global from './Global'

  export default {
    name: 'DetailInfoPage',
    // props:['list'],
    components: {HeaderCustom, HeaderToLast, InfoDetail, Header, TimeLine, MainInfo},
    data () {
      return {
        headtitle: '信息详情',
        maininfo: {},
        flyInfoMain: {},
        detailList: [],
        activeNames: ['1'],
        items: [],
        params:{},
        url:''
      }
    },
    methods: {
      goback(){
        this.$router.go(-1)
      },
      delWholeInfo () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          console.log("删除")

          axios.post(Global.serverSrc + '/fly/info/create/batch', {
            flyInfoMain: mainData,
            flyInfoDetailList: addList
          })
            .then(function (res) {
              console.log(res)
              Indicator.close();

              Toast({
                message: '表单提交成功',
                position: 'bottom'
              });
              this.$router.go(-1)
            })
            .catch(function (err) {
              console.log(err)
              Indicator.close();
              Toast({
                message: '表单提交失败',
                position: 'bottom'
              });
            })

          // Toast({
          //   message: '删除成功',
          //   iconClass: 'mintui mintui-success'
          // });
        }).catch(() => {

        })
      },
      handleChange (val) {
        console.log(val)
      }
    },
    created () {
      this.url=this.$route.params.url
      this.params={}
      this.params.userid=this.$store.state.userid
      this.params.filterParams=this.$route.params.filterParams

      console.log(this.$route.params.datas)
      this.detailList = this.$route.params.datas.flyInfoDetailList
      this.flyInfoMain = this.$route.params.datas.flyInfoMain
      for (let i = 0; i < this.detailList.length; i++) {
        var item = {}
        item.name = i + 1 + ''
        item.title = '科目' + (i + 1)
        this.items.push(item)
      }
    }
  }
</script>

<style scoped>
  .fix-bottom {
    margin: 0 auto;
    display: block;
    width: 98%;
    position: fixed;
    bottom: 0;
  }

  .row {
    text-align: left;
  }
</style>
