<template>
  <mt-header class="bgcolor" :title="title">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <!--<mt-button @click="openFilterPage" slot="right">筛选</mt-button>-->
  </mt-header>
</template>

<script>
  export default {
    name: 'Header',
    props: ['title'],
    methods: {
      goback () {
        this.$router.go(-1)
      },
      handleClose () {
        alert('close this page')
      }
    }
  }
</script>

<style scoped>
  .bgcolor {
    background-color: #4E74BB;
  }
</style>
