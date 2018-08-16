<template>
  <div class="page-cell">
        <div class="row">试飞科目：{{item.subject}}</div>
        <div class="row">起飞时间：{{item.takeOffTime}}</div>
        <div class="row">着陆时间：{{item.landingTime}}</div>
        <div class="row">起飞机场：{{item.takeOffAirport}}</div>
        <div class="row">着陆机场：{{item.landingAirport}}</div>
        <div class="row">空中飞行时间：{{item.flightTime}}</div>
        <div class="row">开关车实验时间：{{item.turnOnAndOffTime}}</div>
        <div class="row">完成实验点数：{{item.points}}</div>
        <div class="row">试飞员：{{item.pilot}}</div>
        <div class="row">试飞工程师：{{item.engineer}}</div>
  </div>
</template>

<script>
  export default {
    name: 'InfoDetail',
    props:['item']
  }
</script>

<style scoped>

</style>
