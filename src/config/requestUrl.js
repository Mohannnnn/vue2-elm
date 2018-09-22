/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:15:47 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-21 17:38:32
 */

 //请求接口地址配置
 const requestUrl = {
    currentLocation : '/restapi/bgs/poi/reverse_geo_coding',    //获取位置信息接口
    searchList      : '/restapi/shopping/v1/typeahead',         //搜索列表接口
    searchHotList   : '/restapi/shopping/v3/hot_search_words'   //热门搜索接口
}
export  default requestUrl;