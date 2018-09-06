> 有些接口也是使用的官方的接口。由于新版Chrome（blink内核）和IOS10不支持不安全域的定位请求，而本次定位在开发状况下只能在非blink内核的浏览器下调试，定位才能成功。

> 1、IE浏览器内核：Trident内核，也是俗称的IE内核； 
> 2、Chrome浏览器内核：统称为Chromium内核或Chrome内核，以前是Webkit内核，现在是Blink内核； 
> 3、Firefox浏览器内核：Gecko内核，俗称Firefox内核； 
> 4、Safari浏览器内核：Webkit内核； 
> 5、Opera浏览器内核：最初是自己的Presto内核，后来是Webkit，现在是Blink内核； 
> 6、360浏览器、猎豹浏览器内核：IE+Chrome双内核； 
> 7、搜狗、遨游、QQ浏览器内核：Trident（兼容模式）+Webkit（高速模式）；
> 8、百度浏览器、世界之窗内核：IE内核； 
> 9、2345浏览器内核：以前是IE内核，现在也是IE+Chrome双内核；
> 注：windows版QQ浏览器9代版本是webkit加Trident内核，10代是用的Chromium。Mac版是基于Chromium的。建议使用Firefox浏览器。

#### 具体如下：

- 1.选择地址的接口：https://h5.ele.me/restapi/bgs/poi/search_poi_nearby_alipay?keyword=竹园&offset=0&limit=20&latitude=40.032344&longitude=116.281948

- 2.自动定位接口：https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=40.032344&longitude=116.281948