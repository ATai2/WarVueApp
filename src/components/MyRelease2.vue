<template>
  <div class="page-loadmore">
    <Header :title="headtitle"/>


    <!--<h1 class="page-title">Pull up</h1>-->
    <!--<p class="page-loadmore-desc">在列表底部, 按住 - 上拉 - 释放可以获取更多数据</p>-->
    <!--<p class="page-loadmore-desc">translate : {{ translate }}</p>-->
    <!--<div class="loading-background" :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }">-->
    <!--translateScale : {{ moveTranslate }}-->
    <!--</div>-->

    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange"
                   :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"
                   ref="loadmore">

        <!--<ul class="page-loadmore-list">-->
        <!--<li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>-->
        <!--</ul>-->
        <div v-if="empty"> 你还没有发布过~~~</div>
        <!--<ul class="page-loadmore-list">-->
          <!--<li v-for="c in list" class="page-loadmore-listitem">-->
            <el-row v-for="(c,index) in list" :key="index">
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
          <!--</li>-->
        <!--</ul>-->

        <div class="" v-if="allLoaded">没有更多</div>

        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>


        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>


    </div>
  </div>
</template>

<style>


  .loading-background, .mint-loadmore-top span {
    -webkit-transition: .2s linear;
    transition: .2s linear
  }

  .mint-loadmore-top span {
    display: inline-block;
    vertical-align: middle
  }

  .mint-loadmore-top span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
  }

  .page-loadmore .mint-spinner {
    display: inline-block;
    vertical-align: middle
  }

  .page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px
  }

  .page-loadmore-desc:last-of-type,
  .page-loadmore-listitem {
    border-bottom: 1px solid #eee
  }

  .page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    text-align: center
  }

  .page-loadmore-listitem:first-child {
    border-top: 1px solid #eee
  }

  .page-loadmore-wrapper {
    overflow: scroll
  }

  .mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
  }

  .mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
  }

</style>

<script type="text/babel">
  import axios from 'axios'
  import Global from './Global'
  import Header from './Header'

  export default {
    components: {Header},
    data () {
      return {
        list: [],
        allLoaded: false,
        headtitle: '我发布的',

        bottomStatus: '',
        wrapperHeight: 0,

        empty: false,

        topStatus: '',
        //wrapperHeight: 0,
        translate: 0,
        moveTranslate: 0,

        pageNo: 1,
        pageSize: 10,
        userId: 1

      }
    },

    methods: {
      handleBottomChange (status) {
        this.bottomStatus = status
      },

      loadBottom () {
        let that = this
        setTimeout(() => {
          axios({
            method: 'get',
            url: Global.serverSrc + '/userPublish/' + that.userId,
            params: {
              pageNo: that.pageNo,
              pageSize: that.pageSize
            },
          }).then(function (resp) {
            console.log(resp.data)
            that.list.push( resp.data.data)

            if (resp.data.data.size() == that.pageSize) {
              that.pageNo++
            }

            that.$refs.loadmore.onBottomLoaded()
            empty_list()
          }).catch(resp => {
            console.log('请求失败：' + resp.status + ',' + resp.statusText)
          })

          let firstValue = this.list[0]
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i)
          }
          this.$refs.loadmore.onTopLoaded()
        }, 1500)
        // this.$refs.loadmore.onBottomLoaded();
        // }, 1500);
      },

      handleTopChange (status) {
        this.moveTranslate = 1
        this.topStatus = status
      },
      translateChange (translate) {
        const translateNum = +translate
        this.translate = translateNum.toFixed(2)
        this.moveTranslate = (1 + translateNum / 70).toFixed(2)
      },
      empty_list () {
        this.empty = true
      },
      endLoad(datalist){
        if (datalist.size() < this.pageNo) {
          this.allLoaded=true
        }
      },
      loadTop () {
        setTimeout(() => {
          axios({
            method: 'get',
            url: Global.serverSrc + '/userPublish/' + userId,
            params: {
              pageNo: that.pageNo,
              pageSize: that.pageSize
            },
          }).then(function (resp) {
            console.log(resp.data)
            that.list = resp.data.data
            that.pageNo++
            if (this.list.size() == 0) {
              that.empty_list()
            }
          }).catch(resp => {
            console.log('请求失败：' + resp.status + ',' + resp.statusText)
          })
          this.$refs.loadmore.onTopLoaded()
        }, 1500)
      },

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
      setTimeout(() => {
        axios({
          method: 'get',
          url: Global.serverSrc + '/userPublish/' + that.userId,
          params: {
            pageNo: that.pageNo,
            pageSize: that.pageSize
          },
        }).then(function (resp) {
          console.log(resp.data)
          that.list.push(resp.data.data)
          // that.list = resp.data.data
          that.pageNo++
          empty_list()
          this.$refs.loadmore.onTopLoaded()
        }).catch(resp => {
          console.log('请求失败：' + resp.status + ',' + resp.statusText)
          this.$refs.loadmore.onTopLoaded()
        })
      }, 1500)
    },

    mounted () {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
    }
  }
</script>
