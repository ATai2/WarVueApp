<template>
  <div class="page-cell">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="adItem in items" :title="adItem.title" :name="adItem.name" :key="adItem.key">
        <InputDetail ref="sonData" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import SelectPage from './SelectPage'
  import InputDetail from './InputDetail'

  export default {
    name: 'ListInputDetail',
    components: {InputDetail, SelectPage},
    props: ['items', 'dtName'],
    data () {
      return {

      }
    },
    methods: {
      handleChange (val) {
        console.log(val)
      }
    },
    created () {
    }
  }
</script>

<style scoped>

</style>
