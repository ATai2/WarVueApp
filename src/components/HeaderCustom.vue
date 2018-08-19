<template>
    <div>
      <div class="h-left">
        <i>

        </i>
        <button>返回</button>
      </div>
      <lable class="h-center" >{{title}}</lable>
      <button >{{rightfunction}}</button>
    </div>
</template>

<script>
  export default {
    name: 'HeaderCustom',
    data(){

    },
    methods:{

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
