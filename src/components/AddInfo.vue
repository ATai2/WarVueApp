<template>
  <div>
    <Header/>
    <MainTable/>
    <mt-button size="large" type="primary" class="addbtn">primary</mt-button>
  </div>
</template>

<script>
  import Header from './Header'
  import MainTable from './MainTable'
  export default {
    name: 'AddInfo',
    components: {MainTable, Header},
    created(){
      console.log("created")
      console.log("ajax load data")
    }
  }
</script>

<style scoped>
.addbtn{
  width: 95%;
  margin: 0.5rem auto;
}

</style>
