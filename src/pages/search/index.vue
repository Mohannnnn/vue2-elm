/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:09:06 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-24 23:08:42
 */
<template>
   <div id="search">
        <head-v placeholderMsg="输入商家、商品名称" v-on:listenShowContainer="listenEvent"></head-v> 
        <section class="search-container" v-if="showContainer">
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
        <section v-else>
            <ul class="search-relatelist">
                <li v-if="relateListMsg.restaurants" v-for="(item , index) in relateListMsg.restaurants" :key="index">
                    <img :src="`${relateListImg}${item.image_path.substr(0,1)}/${item.image_path.substr(1,1)}/${item.image_path.substr(2)}.${item.image_path.substr(32)}`" alt="">
                    <div class="relate-msg">
                        <span class="name">{{ item.name }}</span>
                        <span class="tags" v-if="item.tags" v-for="(tags , indexs) in item.tags" :key="indexs" :style="`background-color:#${tags.name_color}`">{{ tags.name }}</span>
                        <span class="evaluation">评价{{item.rating}}</span>
                    </div>
                </li>
                <li v-if="relateListMsg.words" v-for="words in relateListMsg.words" :key="words">
                    <img src="../../assets/svg/icon-search.svg" alt="">
                    <div class="relate-msg">{{ words }}</div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import headV from './head';
import { getLocalStorage , delLocalStorage } from '@/config/utils';
import { getSearchHotList , getSearchRelateList } from '@/config/getData';
import { mapState } from 'vuex';
export default {
  data() {
    return {
        searchLocalList : null,
        searchHotList   : [],
        showContainer   : true,
        relateListImg   : 'https://fuss10.elemecdn.com/',
        relateListMsg   : {}
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
        },
        cityId(state){
            return state.cityId !='' ? state.cityId : getLocalStorage('locationMsg').cityId;
        }
    })
  },
  watch: {
  },
  methods: {
      listenEvent(data){
          this.showContainer = !data;
          if(data != '') {
              getSearchRelateList(data , this.latitude , this.longitude , this.cityId).then(res => {
                  this.relateListMsg = res;
              })
          }
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
.search-relatelist {
    padding: 0 .24rem;
    li {
        @include fj(flex-start , center);
        img {
            max-width: .48rem;
            height: auto;
            margin-right: .24rem;
        }
        .relate-msg{
            @include sc(.28rem,#333333);
            padding: .24rem 0;
            flex: auto;
            text-align: left;
            border-bottom: 1px solid #e3e3e3;
            .name{
                @include sc(.28rem,#333333);
                margin-right: .2rem;
            }
            .tags{
                @include sc(.24rem,#ffffff);
                padding: 0 .05rem;
                margin-right: .1rem;
            }
            .evaluation{
                @include sc(.26rem,#999999);
                float: right;
            }
        }            
    }
}
</style>