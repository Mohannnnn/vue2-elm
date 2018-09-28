/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:07:57 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-28 16:19:30
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
    <section class="msite-content" v-if="isSuccLocation">
      <div class="swiper-container" v-if="!!modelist">
          <div class="swiper-wrapper">
            <ul class="swiper-slide msite-modelist">
              <li v-for="(item , index) in modelist.slice(0,10)" :key="index">
                <img :src="getElmImageUrl(item.image_hash)" alt="">
                <span>{{ item.name }}</span>
              </li>
            </ul>
            <ul class="swiper-slide msite-modelist">
              <li v-for="(items , index) in modelist.slice(10,20)" :key="index">
                <img :src="getElmImageUrl(items.image_hash)" alt="">
                <span>{{ items.name }}</span>
              </li>
            </ul>
          </div>
          <div class="swiper-pagination"></div>
      </div>
    </section>
    <loading-v v-else></loading-v>
    <footer-v></footer-v>
  </div>
</template>

<script>
import footerV from "@/components/footer";
import loadingV from "@/components/loading";
import {  getLocalStorage , getElmImageUrl } from "@/config/utils";
import {  getMsiteModeList } from "@/config/getData";
import { mapState, mapMutations } from "vuex";

export default {
  name: "msite",
  data() {
    return {
      isSuccLocation : false,
      modelist : null,
    };
  },
  components: {
    footerV,
    loadingV
  },
  computed: {
    ...mapState(['latitude','longitude','curLocalName'])
  },
  watch: {
    latitude(){
      const _this = this;
      this.isSuccLocation = true;
      getMsiteModeList(this.latitude , this.longitude).then(res => {
        this.modelist = res[0].entries;
        setTimeout(function(){
          _this.startSwiper();
        } ,100) 
      });
    }
  },
  methods: {
    getElmImageUrl,
    startSwiper() {
       var swiper = new Swiper('.swiper-container', {
          loop:true,
          pagination: '.swiper-pagination'
        })
    }
  },
  mounted() {
     
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
  .swiper-container {
    padding-bottom:.6rem;
  }
  .msite-modelist{
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
}
</style>
