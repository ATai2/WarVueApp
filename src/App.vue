<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  body{
    margin: 0;
  }

  .el-card__body{
    padding: 0;
  }

  .mint-cell-label{
    display: inline;
    font-size: 1rem;
    margin-left: 2rem;
  }

  .el-message-box {
    width: 85% !important;
  }
  .el-message-box--center {
    width: 85% !important;
  }
</style>
