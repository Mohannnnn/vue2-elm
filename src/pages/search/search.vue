/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:09:06 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-21 15:59:49
 */

<template>
   <div id="search">
       <section class="search-head">
            <img src="../../assets/svg/icon-back.svg" alt="" class="head-back"/>
            <form>
                <input type="search" placeholder="输入商家、商品名称" class="head-input" v-model="searchMsg">
                <button type="button" class="head-btn" @click="searchPro">搜索</button>
            </form>
        </section>
        <section class="search-container">
            <div class="container-box" v-if="searchLocalList">
                <h2 class="container-title">历史搜索</h2>
                <img class="delete" src="../../assets/svg/icon-delete.svg" alt="删除" @click="delLocalStr('searchList')">
                <ul class="container-list">
                    <li v-for="(list,index) in searchLocalList" :key="index">{{ list }}</li>
                </ul>
            </div>
            <div class="container-box">
                <h2 class="container-title">热门搜索</h2>
                <ul class="container-list">
                    <li>蛋糕</li>
                    <li>年糕</li>
                    <li>可乐鸡翅</li>
                    <li>汉堡包</li>
                    <li>鸡腿</li>
                    <li>麻辣烫</li>
                    <li>串串</li>
                    <li>烤乳猪</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
        searchLocalList : null ,
        searchMsg  : ''
    };
  },
  components: {},
  computed: {
      
  },
  watch: {
    //   searchMsg(){
    //       console.log(this.searchMsg);
    //   }
  },
  methods: {
      searchPro() {
          if(this.searchMsg != '')  this.setLocalSearchList(this.searchMsg ,'searchList');
      },
      delLocalStr(value) {
          window.localStorage.removeItem(value , '');
          this.searchLocalList = null;
      },
      setLocalSearchList(value , key) {
          let searchList = this.getLocalSearchList(key);
          if(!searchList) {
            let array = [];
            array.push(value);
            window.localStorage.setItem(key , JSON.stringify(array));
          }else if(JSON.stringify(searchList).indexOf(value) == -1){
            if(searchList.constructor == Array) {
                searchList.push(value);
                window.localStorage.setItem(key , JSON.stringify(searchList));
            } 
          } 
      }, 
      getLocalSearchList(value) {
          if(window.localStorage.getItem(value)) {
              return JSON.parse(window.localStorage.getItem(value));              
          }else {
              return ''
          }
      }
  },
  mounted() {
      this.searchLocalList = this.getLocalSearchList('searchList');
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/styles/mixin.scss";
.search-head {
  @include fj(space-between, center);
  .head-back {
    padding-left: 0.2rem;
  }
  form {
    @include fj(space-between, center);
    padding: 0.22rem 0.22rem 0.22rem 0;
    margin-left: 0.22rem;
    flex: auto;
    .head-input {
      @include sc(0.26rem, #666);
      flex: auto;
      padding: 0.13rem 0.3rem 0.13rem 0.66rem;
      margin-right: 0.3rem;
      background: url("../../assets/svg/icon-search.svg") no-repeat 0.16rem 0.16rem;
      background-color: #f5f5f5;
      border-radius: 0.1rem;
    }
    .head-btn {
      @include sc(0.3rem, #333333);
      font-weight: bold;
    }
  }
}
.search-container {
    padding: 0 .24rem;
    .container-box {
        position: relative;
        padding: .2rem 0 ;
        .container-title {
            @include sc(.30rem , #666666);
            text-align: left;
            padding-bottom: .2rem;
        }
        .delete {
            position: absolute;
            right: 0;
            top: .22rem;;
        }
        .container-list {
            @include fj(flex-start, center);
            @include sc(.28rem , #666666);
            flex-wrap: wrap;
            li {
                padding: .2rem;
                margin: .25rem .25rem 0 0;
                background-color: #f7f7f7;
            }
        }
        
    }
}
</style>