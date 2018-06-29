//获取应用实例
const TxvContext = requirePlugin('tencentvideo');

Page({
  data: {
   
  },
  onLoad: function () {
    let txvContext = TxvContext.getTxvContext('txv1');
  }
})
