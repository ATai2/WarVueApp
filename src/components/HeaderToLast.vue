<template>
  <mt-header class="bgcolor" :title="title">
    <router-link to="/myrelease" slot="left">
      <mt-button icon="back" >返回</mt-button>
    </router-link>
    <mt-button  slot="right" @click="delWholeInfo">删除</mt-button>
  </mt-header>
</template>

<script>
  export default {
    name: 'HeaderToLast',
    props: ['title'],
    methods: {
      delWholeInfo(){
        this.$emit('delWholeInfo')
      }
    }
  }
</script>

<style scoped>
  .bgcolor {
    background-color: #4E74BB;
  }
  .header{
    /*width: 100%;*/
    /*height: 2.3rem;*/
  }
</style>
