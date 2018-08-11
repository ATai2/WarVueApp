<template>
  <div>
    <Header/>
    <MainTable/>
  </div>
</template>

<script>
  import Header from './Header'
  import MainTable from './MainTable'
  export default {
    name: 'MyRelease',
    components: {MainTable, Header}
  }
</script>

<style scoped>

</style>
