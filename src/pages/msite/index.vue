/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:07:57 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-10-06 19:01:22
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
      <div class="content-store">
        <h1 class="store-head">推荐商家</h1>
        <section class="store-bar">
          <li class="bar">综合排序<img src="../../assets/svg/icon-down.svg" alt="向下"></li>
          <li class="bar">距离最近</li>
          <li class="bar">品质联盟</li>
          <li class="bar">筛选<img src="../../assets/svg/icon-filter.svg" alt="筛选"></li>
        </section>
        <section class="filter-sort" v-if="filterSort">
            <li>综合排序<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
            <li>好评优先<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
            <li>销量最高<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
            <li>起送价最低<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
            <li>配送最快<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
            <li>配送费最低<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
            <li>人均从低到高<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
            <li>人均从高到低<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
        </section>
        <div class="store-list">
          
        </div>
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
      filterSort      : true   //综合排序
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
      this.contentInit();
    }
  },
  methods: {
    getElmImageUrl,
    setBarActions(){
      
    },
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
      //获取bar
      // getMsiteBarList(this.latitude , this.longitude).then(res => {
      //   this.isSuccGetData = true;
      //   console.log(res);
      // })
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
  overflow: hidden;
  padding-bottom: .9rem;
  .swiper-container-modelist {
    position: relative;
    padding-bottom:.6rem;
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
  .content-store {
    overflow: hidden;
    .store-head {
      padding: .14rem .24rem;
      @include sc(.30rem , #000000);
    }
    .store-bar {
      @include fj(space-between , center);
      @include sc(.28rem , #666666);
      padding: .25rem .24rem;
      border-bottom: 1px solid #ddd;
      .bar {
        @include fj(center , center);
      }
    }
    .filter-sort {
      padding: .3rem 0 0 0;
      li {
        @include fj(space-between , center);
        @include sc(.28rem , #666666);
        line-height: .9rem;
        padding:0 .24rem; 
        text-align: left;
        img {
          width: .3rem;
          height: auto;
        }
      }
    }
    .store-list {
    }
  }
}
</style>
