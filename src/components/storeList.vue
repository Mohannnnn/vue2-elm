/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-10-10 19:57:53 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-10-17 23:05:14
 */
<template>
    <section class="store-container">
        <section class="tip" v-if="storeMsg && storeMsg.length == 0">主人~您的条件太苛刻,换个条件吧~~</section> 
        <section class="store-list" v-if="!!storeMsg" v-for="(item , index) in storeMsg" :key="index">
            <img class="logo" :src="getElmImageUrl(item.restaurant.image_path)" alt="">
            <div class="msg">
                <div class="shopname">{{ item.restaurant.name }}</div>
                <div class="box">
                    <div class="score">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=">
                        <span :style="{'width' : item.restaurant.rating == 0 ? 0 : (5-item.restaurant.rating)*20 + '%'}"></span>
                    </div>
                    <span class="rating">{{ item.restaurant.rating.toFixed(1) }}</span>
                    <span class="ordernum">月售{{ item.restaurant.recent_order_num }}单</span>
                    <span class="deliverymode" v-if="item.restaurant.delivery_mode">{{item.restaurant.delivery_mode.text}}</span>
                </div>
                <div class="box">
                    <span class="amount">￥{{ item.restaurant.float_minimum_order_amount }}起送</span>
                    <span class="fee">配送费￥{{ item.restaurant.float_delivery_fee }}</span>
                    <span class="distance">{{ item.restaurant.distance/1000 > 1 ? (item.restaurant.distance/1000).toFixed(2)+'km' :  item.restaurant.distance+'m'}} |</span>
                    <span class="time"> {{ item.restaurant.order_lead_time }}分钟</span>
                </div>
                <div class="box">
                    <span class="support" v-for="(value ,indexs) in item.restaurant.support_tags" :key="indexs">{{ value.text }}</span>
                    <div class="recommend" v-if="item.restaurant.recommend.image_hash">
                        <img :src="getElmImageUrl(item.restaurant.recommend.image_hash)" alt="">
                        <span>{{ item.restaurant.recommend.reason }}</span>
                    </div>
                </div>
                <div class="activebox">
                    <div class="activities" v-for="(value ,index) in item.restaurant.activities" :key="index" v-if="index<3">
                        <span class="iconname">{{ value.icon_name }}</span>
                        <span class="description">{{ value.description.length > 20 ?  `${value.description.slice(0,25)}...` : value.description }}</span>
                    </div>
                </div>
            </div>
        </section>
        <loading-v v-else></loading-v>
    </section>
</template>

<script>
import loadingV from "@/components/loading";
import { getElmImageUrl } from "@/config/utils";
export default {
    data () {
        return {
            
        };
    },
    components: {
        loadingV
    },
    props :['storeMsg'],
    computed: {},
    watch: {},
    methods: {
        getElmImageUrl
    },
    mounted() {
        // console.log(this.storeMsg);
    }
}

</script>
<style lang='scss' scoped>
@import "@/assets/styles/mixin.scss";
.store-container {
    position: relative;
    min-height: 2rem;
    .tip{
        padding-top: .5rem;
    }
    .store-list {
        padding: 0.2rem 0.24rem 0.05rem;
        @include fj(flex-start, flex-start);
        border-bottom: 1px solid #eee;
    }
    .logo {
        width: 1.3rem;
        height: 1.3rem;
    }
    .msg {
        @include fj(center, flex-start);
        flex-direction: column;
        flex:auto;
        padding-left:.2rem;
    }
    .shopname {
        @include sc(.32rem, #000);
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
        font-weight: bold;
    }
    .box {
        @include fj(flex-start ,center);
        @include sc(.24rem, #666);
        width: 100%;
        padding: .05rem 0;
        .score {
            position: relative;
            span {
                position: absolute;
                right: .01rem;
                top: 0;
                @include wh(0,100%);
                background: #ffffff;
            }
        }
        .rating {
            padding-left: .05rem;
        }
        .ordernum {
            padding-left: .2rem;
            flex: auto;
            text-align: left;
        }
        .deliverymode {
            color: #fff;
            height: .30rem;
            line-height: .3rem;
            background-image: -webkit-linear-gradient(45deg,#0085ff,#0af);
            background-image: linear-gradient(45deg,#0085ff,#0af);
        }
        .fee{
            padding-left: .15rem;
        }
        .distance {
            flex: auto;
            text-align: right;
        }
        .time {
            text-indent: .04rem;
        }
        .support {
            @include sc(.24rem,#666);            
            border: 1px solid rgb(221, 221, 221);
            line-height: .32rem;
            padding: 0 .1rem;
            margin-right: .1rem;
        }
        .support:nth-child(1) {
            color: rgb(102, 102, 102);
        }
        .support:nth-child(2) {
            color: #333333;
        }
        .recommend {
            @include fj(flex-start ,center);
            color: #e8470b;
            img{
                width: .2rem;
                height: .2rem;
                padding-right: .1rem;
                padding-left: .1rem;
            }
        } 
        
    }
    .activebox {
        @include fj(center ,flex-start);
        @include sc(.26rem,#2c3e50);
        flex-direction: column;
        padding: .05rem 0;
        .activities {
            @include fj(flex-start ,center);
            padding: .1rem 0;
            .iconname {
                color: #fff;
                padding: 0 0.05rem;
                margin-right: .1rem;
                background-color: rgb(112, 188, 70);
            }
            .description {
                text-align: left;
            }
        }
        .activities:nth-child(2) .iconname{
            background-color: rgb(240, 115, 115);
        }
        .activities:nth-child(3) .iconname{
            background-color: rgb(241, 136, 79);
        }
    }
}
</style>