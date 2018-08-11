<template>
  <div class="page-popup-wrapper">
    <mt-popup
      v-model="popupVisible"
      position="bottom" class="fullwidth mint-popup-4" :modal="true" >
      <mt-radio
        class="page-part"
        title="单选框列表"
        v-model="value1"
        :options="datalist" v-bind:onselect="getData"/>
      <div>
        <mt-cell title="选中的项">{{ value1 }}</mt-cell>
      </div>
      <mt-button type="default" v-on:click="closeThis">确定</mt-button>
    </mt-popup>
  </div>
</template>

<script>

  export default {
    name: 'SelectPage',
    props:["datalist","popupVisible"],
    data () {
      return {
        disaled:true,
        seen:true,
        value1: 'sdfa',
      }
    },
    methods: {
      closeThis () {
        console.log('close')
        this.$emit('closepage',this.value1)
        // this.btnDisabled=false
        // this.seen=false
      },
      getData () {
        console.log('getdata')
      }
    },
    // computed:{
    //   btnDisabled:function(){
    //     return !popupVisible;
    //   }
    // },
    created () {
      // disaled:true
      // this.datalist = ['选项A', '选项B', '选项C']
    }
  }
</script>

<style>
  .fullwidth {
    width: 100%;
  }
  @component-namespace page {
    @component popup {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }

      .mint-popup-1 {
        width: 200px;
        border-radius: 8px;
        padding: 10px;
        transform: translate(-50%, 0);

      h1 {
        font-size: 20px;
        color: #26a2ff;
      }

      p {
        margin-bottom: 10px;
      }
    }

    .mint-popup-1::before {
      triangle: 10px top #fff;
      content: '';
      position: absolute;
      top: -20px;
      right: 50px;
    }

    .mint-popup-2 {
      width: 100%;
      height: 50px;
      text-align: center;
      background-color: rgba(0,0,0,.7);
      backface-visibility: hidden;
    }

    .mint-popup-2 p {
      line-height: 50px;
      color: #fff;
    }

    .mint-popup-3 {
      width: 100%;
      height: 100%;
      background-color: #fff;
    }

    .mint-popup-3 .mint-button {
      position: absolute;
      width: 90%;
      top: 50%;
      left: 5%;
      transform: translateY(-50%);
    }

    .mint-popup-4 {
      width: 100%;
    .picker-slot-wrapper, .picker-item {
      backface-visibility: hidden;
    }
  }
  }
  }
</style>
