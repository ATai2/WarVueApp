<template>
  <header>
    <button @click="goback" class="mint-button mint-button--default mint-button--normal"><span
      class="mint-button-icon"><i class="mintui mintui-back"></i></span> <label class="mint-button-text">返回</label>
    </button>

    <h1 class="h-center mint-header-title">{{title}}</h1>
    <button>{{rightfunction}}</button>
  </header>
</template>

<script>
  export default {
    name: 'HeaderCustom',
    props: ['title'],
    data () {

    },
    methods: {
      goback () {
        this.$router.go(-1)
      },
      rightfunction(){}
    },
    created () {

    }
  }
</script>

<style scoped>
  .h-left {
    text-align: left;
  }
</style>
