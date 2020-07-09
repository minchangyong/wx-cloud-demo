// pages/createCode/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxcode: ''
  },

handleClick() {
  wx.showLoading({
    title: '加载中'
  })
  wx.cloud.callFunction({
    name: "createCode",
    data: {
        page: 'pages/recruitList/index',
        scene: 'partJobId=222222'
    }
  })
  .then(res => {
    wx.hideLoading()
    this.setData({
      wxcode: res.result.tempFileURL
    })
  })
}
})