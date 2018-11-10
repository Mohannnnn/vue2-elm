## vue2-elm
> 模仿elm的H5商城。在写之前在github上也找过一些项目，恰巧看到了这篇[vue2-elm](https://github.com/bailicangdu/vue2-elm),于是开始下定决心做这个东西。此项目模仿官网UI所开发，完全是娱乐学习，如需定购外卖，请到官网下单。
> 所有的图标icon均来自[http://www.iconfont.cn/search/index](http://www.iconfont.cn/search/index)

## 在线地址
[http://wuhann.cn](http://www.wuhann.cn)

## 前端github地址
[https://github.com/Mohannnnn/vue2-elm](https://github.com/Mohannnnn/vue2-elm)

## 后端github地址
[https://github.com/Mohannnnn/vue2-elm-koa2](https://github.com/Mohannnnn/vue2-elm-koa2)

## 技术栈

`webpack3` + `Vue2` + `Vuex` + `vue-router` + `fetch` + `ES6/7` + `flex` + `scss`

## 开始步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目目录

```
 |-build                            #webpack配置目录
 |      build.js                    #打包production文件
 |      check-version.js            #检查node和npm版本
 |      utils.js                    #打包css工具文件
 |      vue-loader.conf.js          #vue-loader加载器
 |      webpack.base.conf.js        #webpack基础配置文件
 |      webpack.dev.conf.js         #webpack开发环境配置文件
 |      webpack.prod.conf.js        #webpack生产环境配置文件
 |-config                           #webpack基础配置
 |      dev.env.js                  #开发配置部分    
 |      index.js                    #公用配置部分
 |      prod.env.js                 #生产配置部分
 |-router                           #路由文件
 |      index.js                    #路由
 |-store                            #Vuex文件
 |      index.js                    #veux入口文件
 |      actions.js                  
 |      mutations.js                
 |-plugins                          #第三方插件、js
 |-dist                             #build打包后生成的文件
 |      static
 |              css
 |              js
 |      index.html
 |-node_modules                     #依赖模块
 |-src                              #项目主目录
 |      assets                      #静态文件目录
 |      compontents                 #公用组件目录
 |      pages                       #页面目录
 |      router                      #路由目录
 |      store                       #Vuex状态管理目录
 |      config                      #工具函数
 |              utils.js            #工具函数,比如:获取经纬度函数（的Api）
 |              getData.js          #请求接口
 |              requestUrl.js       #请求接口的地址，统一管理
 |              fetch.js            #封装请求的fetch方法
 |              rem.js              #移动端rem适配
 |      App.vue                     #程序入口文件
 |      main.js                     #页面入口文件，加载各种公用组件
 |-index.html                       #html入口
 |-static
 |      .gitkeep
 |.babelrc                          
 |.editorconfig                     #统一编辑器样式
 |.eslintignore                     #eslint忽略文件
 |.eslintrc.js                      
 |.gitignore                        #git上传忽略文件
 |.postcssrc.js                     
 |package-lock.json                 
 |package.json                          
 |README.MD
```
## 功能完成情况

- [x] msite       -- 首页
- [ ] order       -- 订单
- [ ] search      -- 搜索
- [ ] profile     -- 个人中心
- [ ] shop        -- 商家页

## 后端服务

暂无，后续会做，可能会用python或者node来做吧。

## 采坑日记

1.由于使用的是官方的脚手架，官方使用的是css-loader，如果你想使用scss、sass、less语法等，则需要安装相应的loader。此处我用的是scss语法。

``` bash
npm install XXXX-loader -D

npm install sass-loader -D
npm install node-sass   -D
```
2.定位获取经纬度服务，我采用的是高德地图的API [相关文档](https://lbs.amap.com/api/javascript-api/example/location/browser-location)。

3.在使用官方接口的时候，本地需要配置代理，在config/index.js中配置proxyTable。[https://cli.vuejs.org/zh/config/#devserver-proxy](https://cli.vuejs.org/zh/config/#devserver-proxy)

4.fetch请求在转换response.json()的时候需要await。
```
const response = await fetch(url , options);
const responseJSON = await response.json();
return responseJSON;
```
5.使用swiper需要在.babelrc里面的plugins添加"transform-es2015-modules-commonjs",当然这个需要`npm install babel-plugin-transform-es2015-modules-commonjs`

## 开发相关官方接口（如果是在localhost下使用的话,一定要配置代理才行,切记！）

1.选择地址的接口：https://h5.ele.me/restapi/bgs/poi/search_poi_nearby_alipay?keyword=竹园&offset=0&limit=20&latitude=40.032344&longitude=116.281948

2.自动定位接口：https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=40.032344&longitude=116.281948

3.搜索框查找框接口：https://h5.ele.me/restapi/shopping/v1/typeahead?kw=%E6%B0%B4%E6%9E%9C&latitude=39.904172&longitude=116.407417&city_id=4

3.热门搜索接口：https://h5.ele.me/restapi/shopping/v3/hot_search_words?latitude=39.904172&longitude=116.407417 

4.首页频道类型列表接口：https://h5.ele.me/restapi/shopping/openapi/entries?latitude=39.904172&longitude=116.407417&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5

5.首页banner接口：https://h5.ele.me/restapi/shopping/v2/banners?consumer=1&type=1&latitude=40.041426&longitude=116.276241

6.首页推荐商家的筛选接口：https://h5.ele.me/pizza/shopping/restaurants/batch_filter?latitude=40.041426&longitude=116.276241&terminal=h5

7.首页推荐商家的接口：https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=40.041426&longitude=116.276241&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5