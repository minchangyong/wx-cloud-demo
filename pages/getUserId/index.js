Page({
  data: {
    openId: '',
    unionid: '',
    appId: ''
  },
  onLoad() {
    
  },
  getOpenid() {
    wx.showLoading({
      title: '加载中'
    })
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        wx.hideLoading()
        console.log(res)
        console.log('云函数获取到的openid:', res.result.openid)
        const openId = res.result.openid;
        const appId = res.result.appid
        const unionid = res.result.unionid
        this.setData({
          openId,
          appId,
          unionid
        })
      }
    })
  }
})