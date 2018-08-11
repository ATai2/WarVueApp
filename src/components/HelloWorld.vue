<template>
  <div class="hello">
    <mt-header title="软件信息管理">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="img-top">
      <img class="img-auto" src="../assets/logo.png" alt="">
    </div>
    <div class="">

    <router-link :to="{ name: 'AddInfo'}"> <mt-button type="primary" class="row">信息发布</mt-button></router-link>
    </div>
    <router-link :to="{ name: 'MyRelease'}"> <mt-button type="primary" class="row">我发布的</mt-button></router-link>
    <router-link :to="{ name: 'SumInfos'}"> <mt-button type="primary" class="row">信息汇总</mt-button></router-link>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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

  .row{

    margin: 20px auto;
    display: block;
    width: 65%;
  }
</style>
