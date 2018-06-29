# 腾讯视频小程序播放插件
只需要一个vid！！把视频上传到腾讯视频之后得到vid！！就可以在自己的小程序上播放视频了！！流畅到爆！！


### 接入方式
+ 插件appid: wxa75efa648b60994b
+ 技术文档： https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxa75efa648b60994b&token=1290792907&lang=zh_CN
+ 审核时间： 申请审核周期较长，本次申请经过了6天


### 使用播放器组件

#### /app.json 配置插件信息
<pre>
"plugins": {
  "tencentvideo": {
    "version": "1.1.1",
    "provider": "wxa75efa648b60994b"
  }
}
</pre>

+ tencentvideo: 插件名称，内部JS调用会用到
+ version： 版本号，请使用最新版本
+ provider： appid


#### /pages/dir/dir.json 使用插件
<pre>
"usingComponents": {
  "txv-video": "plugin://tencentvideo/video"
}
</pre>

#### /pages/dir/dir.wxml 插入视频控件
<pre>
<txv-video vid="t0704rp2e2k" playerid="txv1" autoplay="{{true}}" ></txv-video>
</pre>

+ vid: 视频ID
+ playerid: 视频控件ID
+ autoplay: 是否自动播放

#### /pages/dir/dir.js 调用插件及使用
<pre>
//获取应用实例
const TxvContext = requirePlugin('tencentvideo');

let txvContext = TxvContext.getTxvContext('txv1'); // txv1即播放器组件的playerid值

txvContext.play();  // 播放
txvContext.pause(); // 暂停
txvContext.requestFullScreen(); // 进入全屏
txvContext.exitFullScreen();    // 退出全屏
txvContext.playbackRate(+e.currentTarget.dataset.rate); // 设置播放速率
</pre>
