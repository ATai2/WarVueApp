<template>
  <div>
    <!--<HeaderToLast/>-->
    <Header :title="headtitle"/>
    <MainTable ref="mainData" :dbItem="dbItem"/>
    <ListInputDetail :items="items" :dbItem="dbItem" v-on:delInputInfo="delInputInfo"/>
    <mt-button plain size="large" v-on:click="addDetailInfo">添加明细表</mt-button>
    <mt-button size="large" type="primary" class="addbtn" @click="submitDatas">提交</mt-button>
  </div>
</template>

<script>
  import Header from './Header'
  import MainTable from './MainTable'
  import SelectPage from './SelectPage'
  import axios from 'axios'
  import Global from './Global'
  import InputDetail from './InputDetail'
  import ListInputDetail from './ListInputDetail'
  import {
    Indicator,
    Toast
  } from 'mint-ui';
  import HeaderToLast from './HeaderToLast'


  export default {
    name: 'AddInfo',
    data () {
      return {
        headtitle: '添加',
        activeNames: ['明细1'],
        subject: ['1', '2'],
        dbItem: {
          aircraftType: [
            'hand'
          ],
          aircraftNum: [
            'hand'
          ],
          subject: [
            'Subject1',
            'Subject2',
            'Subject3',
            'Subject4',
            'Subject5',
          ],
          airport: [
            'startport1',
            'startport2',
            'startport3',
            'startport4',
            'startport5',
          ],
          pilot: [
            'politlist1',
            'politlist2',
            'politlist3',
            'politlist4',
            'politlist5',
          ],
          engineer: [
            'engineerlist1',
            'engineerlist2',
            'engineerlist3',
            'engineerlist4',
            'engineerlist5',
          ]
        },
        items: [{
          key: 1,
          title: '明细1',
        }]
      }
    },
    components: {HeaderToLast, ListInputDetail, InputDetail, SelectPage, MainTable, Header},
    methods: {
      delInputInfo (index) {
        console.log('del addinfo ' + index)
        this.items.splice(index, 1)
        console.log('get main end')
      },
      addDetailInfo () {
        var size = this.items.length
        console.log(this.items.length)
        this.items.push({key: size + 1, title: '明细' + (size + 1)})
        // this.
      },
      getMainData () {
        console.log('get main data')

      },
      submitDatas () {
        console.log('submit')
        let mainData = this.$refs.mainData.fd

        for (var key in mainData) {
          if (mainData[key] == '') {
            console.log(key)
          }
        }
        // console.log(mainData)
        let addListMap = this.$store.state.addList
        let addList = []
        for (var key in addListMap) {
          addList.push(addListMap[key])
        }

        for (let i = 0; i < addList.length; i++) {
          let addListElement = addList[i]
          for (var key in addListElement) {
            if (addListElement[key] == '') {
              console.log(key)
            }
            if (key == 'takeOffTime' || key == 'landingTime') {
              addListElement[key]+=':00'
            }
            console.log(addListElement[key])
          }

        }

        console.log({
          flyInfoMain: mainData,
          flyInfoDetailList: addList
        })

        Indicator.open({
          text: '正在提交表单',
          spinnerType: 'snake'
        })
        axios.post(Global.serverSrc + '/fly/info/create/batch', {
          flyInfoMain: mainData,
          flyInfoDetailList: addList
        })
          .then(function (res) {
            console.log(res)
            Indicator.close();

            Toast({
              message: '表单提交成功',
              position: 'bottom'
            });
            this.$router.go(-1)
          })
          .catch(function (err) {
            console.log(err)
            Indicator.close();
            Toast({
              message: '表单提交失败',
              position: 'bottom'
            });
          })
      },
      handleChange (val) {
        console.log(val)
      }
    },
    created () {
      console.log('created')
      console.log('ajax load data')
      console.log(Global.serverSrc)
      let that=this
      axios({
        method: 'get',
        url: Global.serverSrc + '/fly/info/optional/names'
      }).then(function (resp) {
        console.log(resp.data)
        that.dbItem.aircraftType = resp.data.data.aircraftType
        that.dbItem.aircraftNum = resp.data.data.aircraftNum
        that.dbItem.subject = resp.data.data.subject
        that.dbItem.airport = resp.data.data.airport
        that.dbItem.pilot = resp.data.data.pilot
        that.dbItem.engineer = resp.data.data.engineer

        console.log(resp.data)

      }).catch(resp => {
        console.log('请求失败：' + resp.status + ',' + resp.statusText)
      })
    }
  }
</script>

<style scoped>
  .addbtn {
    width: 95%;
    margin: 0.5rem auto;
  }

</style>
