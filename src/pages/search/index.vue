/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:09:06 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-24 19:30:37
 */
<template>
   <div id="search">
        <head-v placeholderMsg="输入商家、商品名称" v-on:listenShowContainer="listenEvent"></head-v> 
        <section class="search-container" v-show="showContainer">
            <div class="container-box" v-if="searchLocalList">
                <h2 class="container-title">历史搜索</h2>
                <img class="delete" src="../../assets/svg/icon-delete.svg" alt="删除" @click="delLocalStr('searchList')">
                <ul class="container-list">
                    <li v-for="(list,index) in searchLocalList" :key="index">{{ list }}</li>
                </ul>
            </div>
            <div class="container-box">
                <h2 class="container-title">热门搜索</h2>
                <ul class="container-list" v-if="searchHotList!=''">
                    <li v-for="(item ,index) in searchHotList" :key="index">{{ item.search_word }}</li>
                </ul>
                <ul class="container-list" v-else>
                    <li>大枣</li>
                    <li>大猪蹄子</li>
                    <li>麻辣烫</li>
                    <li>火锅</li>
                </ul>
            </div>
        </section>
        <section class="search-relatelist" v-show="!showContainer">

        </section>
    </div>
</template>

<script>
import headV from './head';
import { getLocalStorage , delLocalStorage} from '@/config/utils';
import { getSearchHotList } from '@/config/getData';
import { mapState } from 'vuex';
export default {
  data() {
    return {
        searchLocalList : null,
        searchHotList   : [],
        showContainer   : true
    };
  },
  components: {
      headV
  },
  computed: {
    ...mapState({
        latitude(state){
            return state.latitude !='' ? state.latitude : getLocalStorage('locationMsg').latitude;
        },
        longitude(state){
            return state.longitude !='' ? state.longitude : getLocalStorage('locationMsg').longitude;
        }
    })
  },
  watch: {
  },
  methods: {
      listenEvent(data){
          this.showContainer = !data;
      },
      delLocalStr(value) {
          delLocalStorage(value);
          this.searchLocalList = null;
      }
  },
  mounted() {

  },
  created() {
      this.searchLocalList = getLocalStorage('searchList');
      getSearchHotList(this.latitude , this.longitude).then(res => {
          this.searchHotList = res;
      })
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
      background: url("../../assets/svg/icon-search.svg") no-repeat 0.16rem
        0.16rem;
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
  padding: 0 0.24rem;
  .container-box {
    position: relative;
    padding: 0.2rem 0;
    .container-title {
      @include sc(0.3rem, #666666);
      text-align: left;
      padding-bottom: 0.2rem;
    }
    .delete {
      position: absolute;
      right: 0;
      top: 0.22rem;
    }
    .container-list {
      @include fj(flex-start, center);
      @include sc(0.28rem, #666666);
      flex-wrap: wrap;
      li {
        padding: 0.1rem 0.2rem;
        margin: 0.25rem 0.25rem 0 0;
        background-color: #f7f7f7;
      }
    }
  }
}
</style>