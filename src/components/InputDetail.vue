<template>
  <div class="page-cell">
    <mt-cell title="试飞科目*" label=" " is-link></mt-cell>

    <mt-cell title="起飞时间*" label=" " is-link></mt-cell>
    <mt-cell title="着陆时间*" label=" " is-link></mt-cell>

    <mt-cell title="起飞机场*" label="" is-link></mt-cell>
    <mt-cell title="着陆机场*" label="" is-link></mt-cell>

    <mt-cell title="空中飞行时间*" label="" is-link></mt-cell>
    <mt-cell title="开关车实验时间*" label="" is-link></mt-cell>
    <mt-field label="完成实验点数*" placeholder="请输入8位数字日期" :attr="{ maxlength: 8 }"></mt-field>
    <mt-cell title="试飞员*" label="" is-link></mt-cell>
    <mt-cell title="试飞工程师*" label="" is-link></mt-cell>

  </div>
</template>

<script>
  export default {
    name: 'InputDetail'
  }
</script>

<style scoped>

</style>
