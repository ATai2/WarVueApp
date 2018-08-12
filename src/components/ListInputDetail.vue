<template>
  <div class="page-cell">
    <el-card class="box-card info-color" >
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item v-for=" (adItem, index)  in items" :title="adItem.title" :name="adItem.name" :key="adItem.key">
          <InputDetail ref="sonData[{{index}}]" :dbItem="dbItem" :listId="adItem.key"/>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
  import SelectPage from './SelectPage'
  import InputDetail from './InputDetail'

  export default {
    name: 'ListInputDetail',
    components: {InputDetail, SelectPage},
    props: ['items', 'dbItem'],

    data () {
      return {
        activeNames: ['明细1'],
        inputList:[]
      }
    },
    watch:{

    },
    methods: {
      handleChange (val) {
        console.log(val)
      }
    },
    created () {
      console.log('list create')
    }
  }
</script>

<style scoped>
  .info-color {
    align-content: center;
    width: 98%;
    margin: 0 auto;
    padding: 0 !important;
    /*background-color: #F6FEFF;*/
  }
</style>
