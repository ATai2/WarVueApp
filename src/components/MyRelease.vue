<template>
  <div class="page-loadmore">
    <mt-header class="bgcolor" :title="headtitle">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link :to="FilterPage" slot="left">
      <mt-button  slot="right">筛选</mt-button>    </router-link>
    </mt-header>

    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"
                   ref="loadmore">
        <ul class="page-loadmore-list">
          <li v-for="c in list" class="page-loadmore-listitem">
            <el-row>
              <el-card :body-style="{ padding: '0px' }" :key="c.key">
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
            </el-row>
          </li>
        </ul>
        <!--<CardMainInfo :list="list"/>-->
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>


  <!--<div>-->
  <!--<Header :title="headtitle"/>-->
  <!--&lt;!&ndash;<HeaderToLast/>&ndash;&gt;-->
  <!--<CardMainInfo   :list="list"/>-->
  <!--</div>-->
</template>

<script>

  import MainTable from './MainTable'
  import axios from 'axios'
  import Global from './Global'
  import MainInfo from './MainInfo'
  import CardMainInfo from './CardMainInfo'
  import HeaderToLast from './HeaderToLast'

  export default {
    name: 'MyRelease',
    components: {HeaderToLast, CardMainInfo, MainInfo, MainTable},
    data () {
      return {
        headtitle: '我发布的',
        maininfo: {},
        list: [],
        index: 0,
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0,
        pageNo:1,
        pageSize:10
      }
    },
    created () {

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

        console.log(resp.data)

      }).catch(resp => {
        console.log('请求失败：' + resp.status + ',' + resp.statusText)
      })
      axios({
        method: 'get',
        url: Global.serverSrc + '/userPublish/all'
      }).then(function (resp) {
        console.log(resp.data)
        that.list = resp.data.data
      }).catch(resp => {
        console.log('请求失败：' + resp.status + ',' + resp.statusText)
      })
    },
    methods: {
      handleBottomChange (status) {
        this.bottomStatus = status
      },

      loadBottom () {
        let that = this
        setTimeout(() => {
          console.log('load more')
          this.$refs.loadmore.onBottomLoaded()

        }, 1500)
      },
      openFilterPage(){

      }
    },
    mounted () {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
    }
  }
</script>

<style>
  @component-namespace page {
    @component loadmore {
      @descendent desc {
        text-align: center

      ;
        color: #666

      ;
        padding-bottom:

      5px

      ;
      &:last-of-type {
         border-bottom: solid 1px #eee;
       }
      }

      @descendent listitem {
        height:

      50px

      ;
        line-height:

      50px

      ;
        border-bottom: solid

      1px #eee

      ;
        text-align: center

      ;
      &:first-child {
         border-top: solid 1px #eee;
       }
      }

      @descendent wrapper {
        overflow: scroll;
      }

      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  @component mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;

    @when rotate {
      transform: rotate(180deg);
    }
  }
  }
</style>
