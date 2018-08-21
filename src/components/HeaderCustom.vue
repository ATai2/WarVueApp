<template>
    <header>
      <div class="h-left mint-header">
        <button class="mint-header-button is-left" @click="goback">返回</button>
      </div>
      <h1 class="h-center mint-header-title" >{{title}}</h1>
      <button >{{rightfunction}}</button>
    </header>
</template>

<script>
  export default {
    name: 'HeaderCustom',
    props:['title'],
    data(){

    },
    methods:{
      goback(){
        this.$router.go(-1)
      }
    },
    created(){

    }
  }
</script>

<style scoped>
  .h-left{
    text-align: left;
  }
</style>
