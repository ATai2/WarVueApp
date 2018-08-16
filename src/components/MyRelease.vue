<template>
  <div class="page-loadmore">
    <h1 class="page-title">Pull up</h1>
    <p class="page-loadmore-desc">在列表底部, 按住 - 上拉 - 释放可以获取更多数据</p>
    <p class="page-loadmore-desc">此例请使用手机查看</p>
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"
                   ref="loadmore">
        <CardMainInfo :list="list"/>
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
  import Header from './Header'
  import MainTable from './MainTable'
  import axios from 'axios'
  import Global from './Global'
  import MainInfo from './MainInfo'
  import CardMainInfo from './CardMainInfo'
  import HeaderToLast from './HeaderToLast'

  export default {
    name: 'MyRelease',
    components: {HeaderToLast, CardMainInfo, MainInfo, MainTable, Header},
    data () {
      return {
        headtitle: '我发布的',
        maininfo: {},
        list: [],

        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0
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
        setTimeout(() => {
          console.log("load more")
          // let lastValue = this.list[this.list.length - 1]
          // if (lastValue < 40) {
          //   for (let i = 1; i <= 10; i++) {
          //     this.list.push(lastValue + i)
          //   }
          // } else {
          //   this.allLoaded = true
          // }
          // this.$refs.loadmore.onBottomLoaded()
        }, 1500)
      }
    },
    mounted () {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
    }
  }
</script>

<style scoped>
  @component-namespace page {
    @component loadmore {
      @descendent desc {
        text-align: center ;
        color: #666   ;
        padding-bottom:   5px   ;
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
