// pages/wxPayment/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleVal(e) {
    this.setData({
      totalFee: e.detail.value
    })
  },
  handleClick() {
    wx.showLoading({
      title: '加载中'
    })
    if (!this.data.totalFee) {
      wx.showToast({
        title: '请先输入需要支付的金额',
        icon: 'none'
      })
    } else {
      wx.cloud.callFunction({
        name: 'wxPayment',
        data: {
          body: '青团前端云开发-超市',
          outTradeNo : Date.now().toString(), // 'wx2020063010499423129961069394',
          spbillCreateIp: '127.0.0.1',
          subMchId: '1536042191',
          totalFee: this.data.totalFee * 100,
          envId: "open-2mk50",
          functionName: 'createCode'
        },
        success: res => {
          wx.hideLoading()
          const payment = res.result.payment
          wx.requestPayment({
            ...payment,
            success (res) {
              console.log('pay success', res)
            },
            fail (err) {
              console.error('pay fail', err)
            }
          })
        },
        fail: err => {
          wx.hideLoading()
          console.log(err)
        }
      })
    }
  }
})