<template>
  <header class="mint-header bgcolor">
    <div class="mint-header-button is-left">
      <button @click="goback"  class="mint-button mint-button--default mint-button--normal"><span
        class="mint-button-icon">
        <i class="mintui mintui-back"></i></span>
        <label class="mint-button-text">返回</label>
      </button>
      <!--<button @click="goback"><span-->
        <!--class="mint-header-button is-left">-->
      <!--<i class="mintui mintui-back"></i></span>-->
        <!--<label class="mint-button-text">返回</label>-->
      <!--</button>-->
    </div>


    <h1 class="mint-header-title center">{{title}}</h1>
    <div class="mint-header-button is-right"></div>
    <!--<button>{{rightfunction}}</button>-->
  </header>
</template>

<script>
  export default {
    name: 'HeaderCustom',
    props: ['title'],
    methods: {
      goback () {
        this.$router.go(-1)
      },
      // rightfunction(){}
    },
    created () {

    }
  }
</script>

<style scoped>
  .center {
    margin: 0 auto;
  }
</style>
