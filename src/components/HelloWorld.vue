<template>
  <div class="hello">
    <Header :title="title"/>

    <div class="img-top">
      <img class="img-auto" src="../assets/logo.png" alt="">
    </div>
    <div class="" :style="{display:canSee}">
      <div v-if="releaseUser">
        <router-link :to="{ name: 'AddInfo'}">
          <mt-button type="primary" class="row">信息发布</mt-button>
        </router-link>
        <router-link :to="{ name: 'MyRelease2',params:{url:'/userPublish/',title:'我发布的222'}}">
          <mt-button type="primary" class="row">我发布的</mt-button>
        </router-link>
      </div>

      <router-link :to="{ name: 'MyRelease2',params:{url:'/userPublish/',title:'我接收的'}}">
        <mt-button type="primary" class="row">我接收的</mt-button>
      </router-link>
      <!--<router-link v-else :to="{ name: 'MyRelease',params:{url:'/userPublish',title:'我接收的',filterParams:{}}}">-->
      <!--<mt-button type="primary" class="row">我接收的</mt-button>-->
      <!--</router-link>-->
      <router-link :to="{ name: 'SumCard',params:{url:'/userPublish/',title:'我接收的'}}">
        <mt-button type="primary" class="row">信息汇总</mt-button>
      </router-link>

    </div>
  </div>
</template>


<script>

  import Header from './Header'
  import {
    Indicator,
    Toast,
    MessageBox
  } from 'mint-ui'

  export default {
    name: 'HelloWorld',
    components: {Header},
    data () {
      return {
        id: '123',
        title: '软件信息管理',
        canSee: 'none',
        releaseUser: true,
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      openIndicator () {
        // Indicator.open({
        //   text: '正在加载中',
        //   spinnerType: 'snake'
        // })
        // setTimeout(()=>{  Indicator.close()}, 2000)
        this.canSee = 'block'

      },
    },
    created () {

      // alert(window.location.search);
      // alert(window.location.href);
      // let phoneNumber=this.$route.query.phoneNumber
      // alert(window.location.hash);
      var originUrl = location.search; //获取url中"?"符后的字串
      var theRequest = {};
      if (originUrl.indexOf("?") != -1) {
        let str = originUrl.substr(1);
        let strs = str.split("&");
        for(let i = 0; i < strs.length; i ++) {
          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
      }

      // MessageBox.alert(theRequest.phoneNumber,'phone')

      this.openIndicator()
      console.log('home created')
      this.userId = '123'
      this.$store.commit('upadateUserId', this.userId)
      // setTimeout("alert('对不起, 要你久候')", 3000 )
      this.$store.commit('updateUrl', '')
    },
    beforeDestroy () {
      Indicator.close()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .row {

    margin: 20px auto;
    display: block;
    width: 65%;
  }

  @component-namespace page {
    @component indicator {
      @descendent wrapper {
        padding:

      0 20px

      ;
        position: absolute

      50% * * *

      ;
        width:

      100%;
        transform:

      translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
