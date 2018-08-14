<template>
  <div>
    <Header :title="headtitle"/>
    <MainTable ref="mainData"/>
    <!--<InputDetail :dbItem="dbItem"/>-->
    <ListInputDetail :items="items" :dbItem="dbItem" v-on:delInputInfo="delInputInfo"/>
    <!--<mt-button plain size="large" v-on:click="addDetailInfo">添加明细表</mt-button>-->
    <!--<mt-button size="large" type="primary" class="addbtn">提交</mt-button>-->
    <!--<SelectPage/>-->

    <!--<button v-on:click="getMainData">getMainData</button>-->
    <!--<ListInputDetail :items="items"  :dbItem="dbItem"/>-->
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

  export default {
    name: 'AddInfo',
    data () {
      return {
        headtitle: '添加',
        activeNames: ['明细1'],
        subject: ['1', '2'],
        dbItem: {
          subjectlist: [
            'Subject1',
            'Subject2',
            'Subject3',
            'Subject4',
            'Subject5',
          ],
          startportlist: [
            'startport1',
            'startport2',
            'startport3',
            'startport4',
            'startport5',
          ],
          endportlist: [
            'endportlist1',
            'endportlist2',
            'endportlist3',
            'endportlist4',
            'endportlist5',
          ],
          politlist: [
            'politlist1',
            'politlist2',
            'politlist3',
            'politlist4',
            'politlist5',
          ],
          engineerlist: [
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
    components: {ListInputDetail, InputDetail, SelectPage, MainTable, Header},
    methods: {
      delInputInfo(index){
        console.log("del addinfo "+ index)
        this.items.splice(index,1)
        console.log('get main end')
      },
      addDetailInfo () {
        var size = this.items.length
        console.log(this.items.length)
        this.items.push({key: size + 1, title: '明细' + (size + 1)})
        // this.
      },
      getMainData(){
        console.log('get main data')

      },
      submitDatas(){
        console.log("submit")
        let mainData = this.$refs.mainData.fd

        for (var key in mainData){
          if (mainData[key] == '') {

          }
        }
        // console.log(mainData)
        let addListMap = this.$store.state.addList
        let addList=[]
        for(var key in addListMap){
          addList.push(addListMap[key])
        }

        for (let i = 0; i < addList.length; i++) {
          let addListElement = addList[i]
          for (var key in addListElement){
            if (addListElement[key] == '') {
              console.log(key)
            }
            console.log(addListElement[key])
          }

        }

        axios.post(Global.serverSrc +'/fly/info/create/batch',{
          flyInfoMain:mainData,
          flyInfoDetailList:addList
        })
          .then(function(res){
            console.log(res);
          })
          .catch(function(err){
            console.log(err);
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
      axios({
        method: 'get',
        url: Global.serverSrc + '/demo/flytype'
      }).then(function (resp) {
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
