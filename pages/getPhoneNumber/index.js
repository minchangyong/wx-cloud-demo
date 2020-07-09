Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: ''
  },
  getPhoneNumber(e) {
    if (e.detail.errMsg === 'getPhoneNumber:ok') {
      wx.showLoading({
        title: '加载中'
      })
      wx.cloud.callFunction({
        name: 'getPhoneNumber',
        data: {
          phoneNumber: wx.cloud.CloudID(e.detail.cloudID)
        },
      }).then(resData => {
        wx.hideLoading()
        this.setData({
          phoneNumber: resData.result.phoneData.phoneNumber
        })
      })
    }
  }
})