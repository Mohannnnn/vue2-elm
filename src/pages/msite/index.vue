/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:07:57 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-27 11:09:29
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
    <section class="msite-modelist">

    </section>
    <footer-v></footer-v>
  </div>
</template>

<script>
import footerV from "@/components/footer";
import {  getLocalStorage} from "@/config/utils";
import {  getMsiteModeList } from "@/config/getData";
import { mapState, mapMutations } from "vuex";

export default {
  name: "msite",
  data() {
    return {
    };
  },
  components: {
    footerV
  },
  computed: {
    ...mapState(['latitude','longitude','curLocalName'])
  },
  watch: {
    latitude(a , b){
      console.log(a , b);
      getMsiteModeList(this.latitude , this.longitude).then(res => {console.log(res)});
    }
  },
  methods: {
    
  },
  mounted() {
    // getMsiteModeList(this.latitude , this.longitude).then(res => {console.log(res)});
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
</style>
