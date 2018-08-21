<template>
  <mt-header class="bgcolor" :title="title">
    <!--<div @click="goback">-->
    <router-link :to="{ name: 'MyRelease2', params: { url:this.$route.params.url ,filterParams:params.filterParams}}"  slot="left">
      <mt-button icon="back" >返回</mt-button>
    </router-link>

    <!--</div>-->
    <!--<mt-button  slot="right" @click="delWholeInfo">删除</mt-button>-->
  </mt-header>
</template>

<script>
  export default {
    name: 'HeaderToLast',
    props: ['title','params'],
    data(){
      return{}
    },
    methods: {
      // delWholeInfo(){
      //   this.$emit('delWholeInfo')
      // },
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
  .header{
    /*width: 100%;*/
    /*height: 2.3rem;*/
  }
</style>
