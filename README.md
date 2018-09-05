# vue2-elm

> 模仿elm的H5商城
github地址:[https://github.com/Mohannnnn/vue2-elm](https://github.com/Mohannnnn/vue2-elm)

> 写之前在github上也找过一些项目，恰巧看到了这篇[vue2-elm](https://github.com/bailicangdu/vue2-elm),于是开始下定决心做这个东西。

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

-[x] 

## 后端服务

暂无，后续会做，可能会用python或者node来做吧。

## 采坑日记

1.由于使用的是官方的脚手架，官方使用的是css-loader，如果你想使用scss、sass、less语法等，则需要安装相应的loader。
此处我用的是scss语法

``` bash
npm install XXXX-loader -D

npm install sass-loader -D
npm install node-sass   -D
```

2.