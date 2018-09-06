/**
* 获取经纬度
*/
export const getItude =  async () => {
    let reMsg = {
        longitude : 0 , //经度
        latitude : 0 ,  //纬度
        status : 0,
        address : '',
        msg : ''
    }
    if(!window.AMap) require('../plugins/aMap.js');
    return await new Promise(resolve => {
        let map, geolocation;
        //加载地图，调用浏览器定位服务
        map = new AMap.Map('', {
            resizeEnable: true
        });
        map.plugin('AMap.Geolocation',  async function() {
            geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                buttonOffset: new AMap.Pixel(10, 10),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                buttonPosition:'RB'
            });
            map.addControl(geolocation);
            await geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
            AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
        });
        //解析定位结果
        function onComplete(data) {
            console.log(data)
            reMsg.longitude = data.position.getLng();
            reMsg.latitude = data.position.getLat();
            reMsg.msg = data.message;
            reMsg.status = 1;
            reMsg.address = data.formattedAddress;
            resolve(reMsg)
        }
        //解析定位错误信息
        function onError(data) {
            reMsg.msg = data.message;
            resolve(reMsg)
        }
    })
}

