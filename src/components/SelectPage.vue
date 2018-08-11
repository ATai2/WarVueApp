<template>
    <div>
    <Header/>
      <mt-radio
        class="page-part"
        title="单选框列表"
        v-model="value1"
        :options="options1" />
      <div>
        <mt-cell title="选中的项">{{ value1 }}</mt-cell>
      </div>
    </div>
</template>

<script>
  import Header from './Header'
  export default {
    name: 'SelectPage',
    data(){
      return {
        options:["s","e"]
      }
    },
    components: {Header}
  }
</script>

<style scoped>

</style>
