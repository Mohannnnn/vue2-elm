/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-21 16:49:56 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-21 17:26:21
 */
<template>
    <section class="search-head">
        <img src="../../assets/svg/icon-back.svg" alt="" class="head-back" @click="goBack"/>
        <form>
            <input type="search" :placeholder="placeholderMsg" class="head-input" v-model="searchMsg">
            <button type="button" class="head-btn" @click="searchPro">搜索</button>
        </form>
</section>
</template>

<script>
export default {
  data() {
    return {
      searchMsg: ''
    };
  },
  props : ['placeholderMsg'],
  computed: {},
  watch: {},
  methods: {
    searchPro() {
      if (this.searchMsg != '')
        this.setLocalSearchList(this.searchMsg, "searchList");
    },
    goBack(){
        console.log(this.$router);
        this.$router.go(-1);
    },
    setLocalSearchList(value, key) {
      let searchList = this.getLocalSearchList(key);
      if (!searchList) {
        let array = [];
        array.push(value);
        window.localStorage.setItem(key, JSON.stringify(array));
      } else if (JSON.stringify(searchList).indexOf(value) == -1) {
        if (searchList.constructor == Array) {
          searchList.push(value);
          window.localStorage.setItem(key, JSON.stringify(searchList));
        }
      }
    },
    getLocalSearchList(value) {
      if (window.localStorage.getItem(value)) {
        return JSON.parse(window.localStorage.getItem(value));
      } else {
        return '';
      }
    }
  },
  mounted() {}
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
</style>