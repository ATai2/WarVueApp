<template>
  <mt-header class="bgcolor" :title="title">
    <router-link to="/" slot="left">
      <mt-button icon="back" >返回</mt-button>
    </router-link>

  </mt-header>
</template>

<script>
  export default {
    name: 'Header',
    props:["title"],
    methods:{
      goback(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .bgcolor {
    background-color: #4E74BB;
  }
</style>
