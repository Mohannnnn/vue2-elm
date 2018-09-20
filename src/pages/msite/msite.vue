/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:07:57 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-20 15:46:21
 */
<template>
  <div class="home">
    <span>msite</span>
    <footer-v></footer-v>
  </div>
</template>

<script>
import footerV from "@/components/footer";
import { getItude } from "../../config/utils";
import { getCurLocation } from "../../config/getData";
import { mapState, mapMutations } from "vuex";

export default {
  name: "index",
  data() {
    return {
    };
  },
  components: {
    footerV
  },
  computed: {
    ...mapState(["curLoName"])
  },
  watch: {},
  methods: {
    ...mapMutations(["SET_ITUDE", "SET_CURLONAME"])
  },
  mounted() {},
  created() {
    getItude().then(res => {
      this.SET_ITUDE(res);
      // this.$store.commit('SET_ITUDE' , res)
      getCurLocation(res.latitude, res.longitude).then(res => {
        this.SET_CURLONAME({ curLoName: res.name });
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
