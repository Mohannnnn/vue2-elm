/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:07:57 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-10-07 19:48:44
 */
<template>
  <div class="msite">
    <header>
      <div class="msite-location">
        <img src="../../assets/svg/icon-location.svg" alt="定位">
        <span class="msg">{{ !!curLocalName ? curLocalName : '正在获取位置信息 ...' }}</span>
      </div>
      <router-link tag="div" class="msite-search" to="/search">
        <img src="../../assets/svg/icon-search.svg" alt="搜索">
        <span>搜索饿了么商家、商品名称</span>
      </router-link>
    </header>
    <section class="msite-content" v-if="isSuccGetData">
      <div class="swiper-container-modelist" v-if="!!modeList">
          <div class="swiper-wrapper">
            <ul class="swiper-slide content-modelist">
              <li v-for="(item , index) in modeList.slice(0,10)" :key="index">
                <img :src="getElmImageUrl(item.image_hash)" alt="">
                <span>{{ item.name }}</span>
              </li>
            </ul>
            <ul class="swiper-slide content-modelist">
              <li v-for="(items , index) in modeList.slice(10,20)" :key="index">
                <img :src="getElmImageUrl(items.image_hash)" alt="">
                <span>{{ items.name }}</span>
              </li>
            </ul>
          </div>
          <div class="swiper-pagination"></div>
      </div>
      <div class="content-activitylist" v-if="!!activityList">
        <div class="activitylist-box">
          <h3>{{ activityList.name }}</h3>
          <div class="description">{{ activityList.description }}</div>
          <div class="population"><span>{{ JSON.parse(activityList.more).population }}</span>人正在抢 ></div>
          <img :src="getElmImageUrl(activityList.image_hash)" alt="">
        </div>
        <div class="activitylist-box">
            <h3>{{ activityList.name }}</h3>
            <div class="description">{{ activityList.description }}</div>
            <div class="population"><span>{{ JSON.parse(activityList.more).population }}</span>人正在抢 ></div>
            <img :src="getElmImageUrl(activityList.image_hash)" alt="">
        </div>
      </div>
      <div class="swiper-container-banner" v-if="!!bannerList">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item , index) in bannerList" :key="index">  
                <img :src="getElmImageUrl(item.image_hash)" alt="">
            </div>
          </div>
      </div>
      <store-v></store-v>
    </section>
    <loading-v v-else></loading-v>
    <footer-v></footer-v>
  </div>
</template>

<script>
import footerV from "@/components/footer";
import loadingV from "@/components/loading";
import storeV from  '@/components/store';
import {  getLocalStorage , getElmImageUrl } from "@/config/utils";
import {  getMsiteModeList , getMsiteBannerList , getMsiteBarList } from "@/config/getData";
import { mapState, mapMutations } from "vuex";

export default {
  name: "msite",
  data() {
    return {
      isSuccGetData   : false,  //是否成功获取到数据
      modeList        : null,   //模式列表数据
      activityList    : null,   //活动优惠列表数据
      bannerList      : null,   //banner
    };
  },
  components: {
    footerV,
    loadingV,
    storeV
  },
  computed: {
    ...mapState(['latitude','longitude','curLocalName'])
  },
  watch: {
    latitude(){
      this.contentInit();
    }
  },
  methods: {
    getElmImageUrl,
    contentInit(){
      // 获取modeList
      getMsiteModeList(this.latitude , this.longitude).then(res => {
        this.isSuccGetData = true;
        this.modeList = res[0].entries;
        this.activityList = (res[1].entries)[0];
        setTimeout(function(){
          new Swiper('.swiper-container-modelist', {
            loop:true,
            pagination: '.swiper-pagination'
          })
        } ,100) 
      });
      //获取banner
      getMsiteBannerList(this.latitude , this.longitude).then(res => {
        this.isSuccGetData = true;
        this.bannerList = res;
        setTimeout(function(){
          new Swiper('.swiper-container-banner', {
            autoplay : 2000,
            loop:true
          })
        } ,100) 
      });
    }
  },
  mounted() {
     if(this.latitude != '') {
        this.contentInit();
     }
  },
  created() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/styles/mixin.scss';
header{
  background-image: linear-gradient(90deg,#0af,#0085ff);
  padding: .3rem .24rem .2rem .24rem;
  .msite-location{
    @include fj(flex-start ,center);
    @include sc(.30rem , #ffffff);
    font-weight: bold;
  }
  .msite-search {
    @include fj(center ,center);
    @include sc(.28rem ,#999);
    background-color: #ffffff;
    margin-top: .2rem;
    padding: .2rem .2rem;
    font-family: simsun;
    text-align: center;
    border-radius: .05rem;
  }
}
.msite-content {
  padding-bottom: .9rem;
  .swiper-container-modelist {
    position: relative;
    padding-bottom:.6rem;
    overflow: hidden;
  }
  .content-modelist{
    @include fj(flex-start ,center);
    flex-wrap: wrap;
    li {
      @include fj(center ,center);
      flex-direction: column;
      width: 20%;
      margin-top: .2rem;
      img {
        @include wh(.9rem ,.9rem);
      }
      span {
        @include sc(.24rem, #666666);
        text-align: center;
      }
    }
  }
  .content-activitylist {
    @include fj(center ,center);
    padding: 0 0.14rem;
    .activitylist-box {
      position: relative;
      width: 50%;
      background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
      margin: 0 0.1rem;
      padding: 0.2rem 0 0 .3rem;
      text-align: left;
    }
    h3{
      @include sc(.32rem , #e81919);
    }
    .description {
      @include sc(.24rem , #777);
    }
    .population {
      @include sc(.24rem , #000000);
      span {
        @include sc(.24rem , #e81919);
      }
    }
    img{
      width: 2.4rem;
      height: auto; 
      float: right;
    }
  }
  .swiper-container-banner {
    margin: .14rem .24rem;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
