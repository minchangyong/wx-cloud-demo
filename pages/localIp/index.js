Page({
  data: {
    localIp: ''
  },
  handleClick() {
    wx.showLoading({
      title: '获取中'
    })
    wx.cloud.callFunction({
      name: "localIp",
      success: res => {
        wx.hideLoading()
        console.log(res)
        this.setData({
          localIp: res.result
        })
      },
      fail: err => {
        wx.hideLoading()
        console.log(err)
      }
    })
  }
})