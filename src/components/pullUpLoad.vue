/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-10-15 21:13:30 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-10-16 22:26:54
 */
<template>
    <div class="pullUpLoad" v-if="isLoaded">
        <loading-v></loading-v>
        <slot></slot>
    </div>
</template>

<script>
import loadingV from "@/components/loading";
export default {
    name : 'upLoad',
    data () {
        return {
            loadingStatus : {
                loading : '正在加载...',
                loaded  : '加载完成'
            }
        };
    },
    components: {
        loadingV
    },
    props : ['isLoaded'],
    computed: {},
    watch: {},
    methods: {},
    mounted() {}
}

</script>
<style lang='scss' scoped>
.pullUpLoad {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>