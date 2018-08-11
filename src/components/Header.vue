<template>
  <mt-header class="bgcolor" :title="title">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
  export default {
    name: 'Header',
    props:["title"]
  }
</script>

<style scoped>
  .bgcolor {
    background-color: #4E74BB;
  }
</style>
