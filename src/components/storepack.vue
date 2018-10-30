/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-10-08 10:00:35 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-10-30 20:02:49
 */
<template>
    <div class="store">
        <h1 class="store-head">推荐商家</h1>
        <section class="store-barcontainer" ref="barcontainer" v-if="isSuccGetData">
          <section class="store-bar">
            <li class="bar" @click="setBarActions()">{{ filterSortName }}<img src="../assets/svg/icon-down.svg" alt="向下"></li>
            <li class="bar" v-for="item in outside_sort_filter" :key="item.value"  :class="{selected : selectedKeyValue == item.key+ '&'+item.value}" @click="setBarActions(item)">{{ item.name }}</li>
            <li class="bar" @click="setFilterActions()" :class="{selected : filterObj != ''}">筛选<img src="../assets/svg/icon-filter.svg" alt="筛选"></li>
          </section>
          <section class="filter-sort" v-if="showSort">
              <li v-for="item in inside_sort_filter" :key="item.value" :class="{selected : selectedKeyValue == item.key+ '&'+item.value} " @click="setBarActions(item , 'inside')">{{ item.name }}<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
          </section>
          <section class="filter-attr" v-show="showFilter">
            <div class="attr-container">
              <h2>商家服务 (可多选)</h2>
              <ul> 
                <li ref="liList" v-if="delivery_mode" @click="setFilterActions(delivery_mode ,'delivery_mode',$event)" ><img :src="getElmImageUrl(delivery_mode.icon_hash)" alt="">{{delivery_mode.text}}</li>
                <li v-for="item in supports" :key="item.id" @click="setFilterActions(item , 'support_ids' , $event)" ref="liLists"><img :src="getElmImageUrl(item.icon_hash)" alt="">{{ item.name }}</li>
              </ul>
            </div>
            <div class="attr-container">
              <h2>优惠活动 (单选)</h2>
              <ul>
                <li v-for="item in activity_types" :key="item.id" :class="{selected : selectedActivityId == item.id}" @click="setFilterActions(item ,'activity_types')">{{ item.name }}</li>
              </ul>
            </div>
            <div class="attr-container">
              <h2>人均消费</h2>
              <ul>
                <li v-for="item in average_costs" :key="item.id" :class="{selected : selectedAverageId == item.id}" @click="setFilterActions(item ,'average_costs')">{{ item.description }}</li>
              </ul>
            </div>
            <div class="btn">
              <span @click="emptyFilterObj">清空</span>
              <span @click="getStoreList">确定</span>
            </div>
          </section>
        </section>
        <storelist-v :store-msg="storeMsg"></storelist-v>
        <section class="loadingContainer" v-if="!isLoaded"><loading-v></loading-v></section>
    </div>
</template>

<script>
import { mapState } from "vuex";
import loadingV from "@/components/loading";
import storelistV from "@/components/storeList";
import { getElmImageUrl } from "@/config/utils";
import { getMsiteBarList , getRestaurantsList } from "@/config/getData";
export default {
  data() {
    return {
      showSort: false, //综合排序
      showFilter : false , //筛选
      filterSortName: '综合排序', //排序名
      selectedKeyValue: 'order_by&0', //排序id
      selectedActivityId: null,
      selectedAverageId : null,
      filterObj: [],//筛选对象
      isSuccGetData : false,
      inside_sort_filter: null,
      outside_sort_filter : null,
      activity_types: null,
      average_costs: null,
      delivery_mode: null,
      supports: null,
      storeMsg: [], //商店信息,
      offset : 0,  //商店数量
      isLoaded : false
    };
  },
  components: {
    loadingV,
    storelistV
  },
  computed: {
    ...mapState(['latitude','longitude'])
  },
  watch: {
    storeMsg(){
      this.isLoaded = true
    }
  },
  methods: {
    getElmImageUrl,
    emptyFilterObj(){
      this.filterObj = [];
      this.selectedActivityId = null;
      this.selectedAverageId = null;
      this.$refs.liList.className = '';
      this.$refs.liLists.forEach(item => {
        item.className = '';
      }) 
    },
    setFilterActions(value ,type ,event) {
      this.setScrollTop();
      const _this = this;
      if(type) {
        if(type == 'delivery_mode' || type == 'support_ids'){
          if(event.currentTarget.className == '') {
            event.currentTarget.className += 'selected';
            this.filterObj.push({
              key : type,
              id  : value.id
            })
          }else {
            event.currentTarget.className = '';
            this.filterObj.forEach((item , index ) =>{
              if(item.key == type && item.id == value.id) _this.filterObj.splice(index , 1);
            })
          }
        }else if(type == 'activity_types'){
          this.filterObj.forEach((item , index ) =>{
              if(item.key == type) _this.filterObj.splice(index , 1);
          })
          if(this.selectedActivityId != value.id) {
            this.selectedActivityId = value.id;
            this.filterObj.push({
                key : type,
                id  : value.id
            })
          }else {
            this.selectedActivityId = null;
          }
        }else if(type == 'average_costs'){
          this.selectedAverageId = this.selectedAverageId == value.id ? null : value.id;
        }
      }else {
        this.showFilter = !this.showFilter;
        this.showSort = false;
      }
    },
    setBarActions(item , side) {
      this.setScrollTop();
      if(item) {
        if(side == 'inside'){
         this.filterSortName = item.name; 
        }else {
          this.filterSortName = this.inside_sort_filter[0].name;
        }
        this.showSort = false;
        this.selectedKeyValue = item.key+'&'+item.value;
        this.getStoreList();
      }else {
        this.showSort = !this.showSort;
        this.showFilter = false;
      }
    },
    setScrollTop(){ 
      const top = this.$refs.barcontainer.offsetTop;
      if(document.documentElement) {
        document.documentElement.scrollTop = top;
      }else {
        document.body.scrollTop = top;
      }
    },
    getStoreList(type){
      if(type != 'more') {
        this.offset = 0;
        this.storeMsg = [];
      }
      let datas = {offset:this.offset};
      datas[this.selectedKeyValue.split('&')[0]] = this.selectedKeyValue.split('&')[1];
      this.filterObj.forEach(item => {
        datas[item.key + '[]'] = item.id;
      })
      getRestaurantsList(this.latitude , this.longitude , datas).then(res => {
        this.storeMsg = this.storeMsg.concat(res.items);
        this.offset+=8;
      })
      this.isLoaded = false;
      this.showFilter = false;
    },
    getMoreStoreList(){
      const that = this;
      const throttle = function (callback , delay ,time) {
        let startTime = new Date();
        let timer = null;
        return function() {
          const context = this;
          const currTime = new Date();

          clearTimeout(timer);
          if(currTime.getTime() - startTime.getTime() > time) {
            callback.call(context);
            startTime = currTime;
          } else {
            timer = setTimeout(callback , delay);
          }
        }
      }
      function callback() {
          const clientH = document.documentElement.clientHeight;
          const scrollH = document.documentElement.scrollTop || document.body.scrollTop;
          const allH    = document.body.clientHeight;
          if(allH - clientH - scrollH < 100 && that.offset < 81 && that.storeMsg.length%8 == 0) {
            that.getStoreList('more');
            console.log('more');
          }
      }
      document.ontouchmove = throttle(callback , 500 , 1000);
    }
  },
  mounted() {
      //获取bar
      getMsiteBarList(this.latitude , this.longitude).then(res => {
        this.isSuccGetData = true;
        this.activity_types = res.bar.activity_types;
        this.average_costs = res.bar.average_costs;
        this.delivery_mode = res.bar.delivery_mode;
        this.supports = res.bar.supports;
        this.inside_sort_filter = res.outside.inside_sort_filter;
        this.outside_sort_filter = res.outside.outside_sort_filter;
      })
      this.getStoreList();
      this.getMoreStoreList();
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/styles/mixin.scss";
.store {
  padding-bottom: .6rem;
  .store-head {
    padding: 0.14rem 0.24rem;
    @include sc(0.3rem, #000000);
  }
  .store-barcontainer {
    top: 0;
    left: 0;
    z-index: 10;
    position: -webkit-sticky;
    position: sticky;
  }
  .store-bar {
    @include fj(space-between, center);
    @include sc(0.28rem, #666666);
    padding: 0.25rem 0.24rem;
    border-bottom: 1px solid #ddd;
    background: #fff;
    .bar {
      @include fj(center, center);
    }
    .bar:first-child {
      min-width: 2rem;
    }
    .bar.selected {
      font-weight: bold;
      color: $blue;
    }
  }
  .filter-sort {
    padding: 0.3rem 0 0 0;
    background: #fff;
    border-bottom: 1px solid #ccc;
    li {
      @include fj(space-between, center);
      @include sc(0.28rem, #666666);
      line-height: 0.9rem;
      padding: 0 0.24rem;
      text-align: left;
      img {
        width: 0.3rem;
        height: auto;
        display: none;
      }
    }
    li.selected{
      font-weight: bold;
      color: $blue;
      img {
        display: block;
      }
    }
  }
  .filter-attr {
    padding: 0.1rem 0.24rem;
    background: #fff;
    h2 {
      @include sc(.26rem , #666666);
      padding-bottom: .14rem;
      padding-top: .1rem;
      font-weight: normal;
    }
    .attr-container {
      @include fj(center, flex-start);
      flex-direction: column;
    }
    ul {
      @include fj(flex-start, center);
      @include sc(.26rem, #333333);
      flex-wrap: wrap;
      width: 100%;
    }
    li {
        @include fj(center, center);
        background: #fafafa;
        margin: .1rem .2rem .1rem 0;
        flex: 0 0 30.3%;
        height: .7rem;
        img{
          width: .26rem;
          height: auto;
          padding-top: .08rem;
          padding-right: .08rem;
        }
    }
    li.selected {
      font-weight: 700;
      color: #3190e8;
      background-color: #edf5ff;
    }
    .btn {
      @include fj(center , center);
      margin-top: .5rem;
      border: 1px solid #e9e9e9;
      span {
        width: 50%;
        @include sc(.28rem , #000000);
        text-align: center;
        padding: .2rem 0;
      }
      span:last-child{
        color : #fff;
        background-color: #00d762;
      }
    }
  }
  .loadingContainer{
    position: relative;
    height: 1rem;
  }
}
</style>