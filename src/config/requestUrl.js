/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:15:47 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-24 18:27:03
 */

 //请求接口地址配置
 const requestUrl = {
    currentLocation : '/restapi/bgs/poi/reverse_geo_coding',    //获取位置信息接口
    searchRelateList: '/restapi/shopping/v1/typeahead',         //搜索推荐列表接口，非搜索结果接口
    searchHotList   : '/restapi/shopping/v3/hot_search_words'   //热门搜索接口
}
export  default requestUrl;