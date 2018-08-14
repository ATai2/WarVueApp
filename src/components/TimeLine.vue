<template>
  <div>
    <el-steps direction="vertical" :active="1">
      <el-step title="张三 已修改" description="20180256">
      </el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
  </div>
</template>

<script>
  export default {
    name: 'TimeLine'
  }
</script>

<style scoped>

</style>
