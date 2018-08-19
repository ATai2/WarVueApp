<template>

  <div>
    <mt-header class="bgcolor" :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button @click="handleClose" slot="right">筛选</mt-button>
    </mt-header>

    <mt-search class="search-top" autofocus v-model="value" :result="filterResult"></mt-search>
  </div>
</template>

<script>
  export default {
    name: 'Header2',
    props: ['title'],
    methods: {
      goback () {
        this.$router.go(-1)
      },
      handleClose () {
        // this.$emit('')
        console.log('click search button')

      }
    }
  }
</script>

<style scoped>
  .bgcolor {
    background-color: #4E74BB;
  }
  .search-top{
    position: absolute;/*这里一定要设置*/
    z-index: 999999;
    /*z-index:auto*/
    -webkit-transition: .5s ease-in-out;/* css的transition允许css的属性值在一定的时间内从一个状态平滑的过渡到另一个状态 */
    -moz-transition: .5s ease-in-out;/*这里为了兼容其他浏览器*/
    -o-transition: .5s ease-in-out;
  }
</style>
