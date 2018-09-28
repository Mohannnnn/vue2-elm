<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getItude , setLocalStorage } from "./config/utils.js";
import { getCurLocation } from "@/config/getData";
import { mapMutations } from "vuex";
import Swiper from './plugins/swiper.min.js';
export default {
  name: 'App',
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {},
  methods: {
    ...mapMutations(['SET_LOCATIONMSG'])
  },
  created() {
    getItude().then(res => {
      getCurLocation(res.latitude, res.longitude).then(res => {
        // this.$store.commit('SET_LOCATIONMSG' , res)
        this.SET_LOCATIONMSG(res);
        setLocalStorage(res , 'locationMsg');
      });
    });
  }
};
</script>

<style>
@import './assets/styles/reset.css';
@import './assets/styles/swiper.min.css';
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
