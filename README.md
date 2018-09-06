## vue2-elm
> 模仿elm的H5商城
>在写之前在github上也找过一些项目，恰巧看到了这篇[vue2-elm](https://github.com/bailicangdu/vue2-elm),于是开始下定决心做这个东西。

## github地址
[https://github.com/Mohannnnn/vue2-elm](https://github.com/Mohannnnn/vue2-elm)

## 技术栈

`webpack3` + `Vue2` + `Vuex` + `vue-router` + `ftech` + `ES6/7` + `flex`

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
 |-config                           #工具函数
 |      utils.js                    #获取经纬度函数（H5的Api）
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

- [x] home

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

## 开发相关说明以及官方接口

> 有些接口也是使用的官方的接口。由于新版Chrome（blink内核）和IOS10不支持不安全域的定位请求，而本次定位在开发状况下只能在非blink内核的浏览器下调试，定位才能成功。
>1、IE浏览器内核：Trident内核，也是俗称的IE内核； 
>2、Chrome浏览器内核：统称为Chromium内核或Chrome内核，以前是Webkit内核，现在是Blink内核； 
>3、Firefox浏览器内核：Gecko内核，俗称Firefox内核；  
>4、Safari浏览器内核：Webkit内核； 
>5、Opera浏览器内核：最初是自己的Presto内核，后来是Webkit，现在是Blink内核； 
>6、360浏览器、猎豹浏览器内核：IE+Chrome双内核； 
>7、搜狗、遨游、QQ浏览器内核：Trident（兼容模式）+Webkit（高速模式）；
>8、百度浏览器、世界之窗内核：IE内核； 
>9、2345浏览器内核：以前是IE内核，现在也是IE+Chrome双内核；
>注：windows版QQ浏览器9代版本是webkit加Trident内核，10代是用的Chromium。Mac版是基于Chromium的。建议使用Firefox浏览器。

#### 具体如下：

- 1.选择地址的接口：https://h5.ele.me/restapi/bgs/poi/search_poi_nearby_alipay?keyword=竹园&offset=0&limit=20&latitude=40.032344&longitude=116.281948

- 2.自动定位接口：https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=40.032344&longitude=116.281948