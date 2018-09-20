/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:09:06 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-20 18:22:46
 */

<template>
   <div id="search">
       <section class="search-head">
            <img src="../../assets/svg/icon-back.svg" alt="" class="search-back"/>
            <form>
                <input type="search" placeholder="输入商家、商品名称" class="search-input">
                <button type="submit" class="search-btn">搜索</button>
            </form>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
@import "@/assets/styles/mixin.scss";
.search-head {
  @include fj(space-between, center);
  .search-back {
    padding-left: .2rem;
  }
  form {
    @include fj(space-between, center);
    padding: 0.22rem 0.22rem 0.22rem 0;
    margin-left: 0.22rem;
    flex:auto;
    .search-input {
        @include sc(.24rem , #666);
        flex:auto;
        padding: 0.13rem .3rem .13rem .66rem;
        margin-right: .3rem;
        background: url('../../assets/svg/icon-search.svg') no-repeat .16rem .16rem;
        background-color: #f5f5f5;
        border-radius: .1rem;
    }
    .search-btn {
        @include sc(.3rem ,#333333);
        font-weight: bold;
    }
  }
}
</style>