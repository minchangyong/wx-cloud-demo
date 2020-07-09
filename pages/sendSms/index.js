Page({
  data: {
    phoneNumber: ''
  },
  handleVal(e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  },
  handleClick() {
    if (!this.data.phoneNumber) {
      wx.showToast({
        title: '请先输入手机号'
      })
    } else {
      wx.showLoading({
        title: '发送中'
      })
      wx.cloud.callFunction({
        name: 'sendSms',
        data: {
          phoneNumber: this.data.phoneNumber
        },
        success: res => {
          wx.hideLoading()
          console.log(res)
        },
        fail: err => {
          wx.hideLoading()
          console.log(err)
        }
      })
    }
  }
})