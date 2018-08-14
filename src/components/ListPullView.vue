<template>

</template>

<style>
  .center {
    margin: 0 auto;
  }

  @component-namespace page {
    @component loadmore {
      width:

    100%;
      overflow-x: hidden

    ;

      @descendent desc {
        text-align: center

      ;
        color: #666

      ;
        padding-bottom:

      5px

      ;
      &:last-of-type {
         border-bottom: solid 1px #eee;
       }
      }

      @descendent listitem {
        height:

      50px

      ;
        line-height:

      50px

      ;
        border-bottom: solid

      1px #eee

      ;
        text-align: center

      ;
      &:first-child {
         border-top: solid 1px #eee;
       }
      }

      @descendent wrapper {
        margin-top: -1px;
        overflow: scroll;
      }

      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  @component loading-background {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    transition: .2s linear;
  }
  @component mint-loadmore-top {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;

    @when rotate {
      transform: rotate(180deg);
    }
  }
  }
  .mint-spinner-snake {
    margin: 0 auto;
  }
</style>

<script type="text/babel">
  import CardMainInfo from './CardMainInfo'

  export default {
    components: {CardMainInfo},
    data () {
      return {
        list: [],
        allLoaded: false,
        topStatus: '',
        bottomStatus: '',
        wrapperHeight: 0,
        translate: 0,
        moveTranslate: 0
      }
    },

    methods: {
      handleTopChange (status) {
        this.moveTranslate = 1
        this.topStatus = status
      },
      translateChange (translate) {
        const translateNum = +translate
        this.translate = translateNum.toFixed(2)
        this.moveTranslate = (1 + translateNum / 70).toFixed(2)
      },
      loadTop () {
        setTimeout(() => {
          let firstValue = this.list[0]
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i)
          }
          this.$refs.loadmore.onTopLoaded()
        }, 1500)
      },
      handleBottomChange (status) {
        this.bottomStatus = status
      },

      loadBottom () {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1]
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i)
            }
          } else {
            this.allLoaded = true
          }
          this.$refs.loadmore.onBottomLoaded()
        }, 1500)
      }
    },

    created () {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i)
      }
    },

    mounted () {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
    }
  }
</script>
