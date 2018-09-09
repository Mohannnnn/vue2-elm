<template>
  <div class="home">
    <Footer></Footer>
  </div>
</template>

<script>
import Location from '../location/location'
import Footer from '../../components/footer'
import { getItude } from '../../config/utils'
import { GetCurLocation } from '../../config/getData'

export default {
  name: 'index',
  data () {
    return {
      longitude : 0 ,
      latitude : 0 
    }
  },
  components : {
    location,
    Footer
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted() {
    getItude().then(res => {
      this.longitude = res.longitude;
      this.latitude = res.latitude;
      // GetCurLocation(res.latitude , res.longitude).then(res => {
      //   console.log('location' , res)
      // })
    });
  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
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
