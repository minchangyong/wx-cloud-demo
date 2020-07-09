Page({
  data: {

  },
  handleToAddress(e) {
    this.setData({
      toAddress: e.detail.value
    })
  },
  handleSubject(e) {
    this.setData({
      toSubject: e.detail.value
    })
  },
  handleTextarea(e) {
    this.setData({
      toTextArea: e.detail.value
    })
  },
  handleClick() {
    wx.showLoading({
      title: '发送中'
    })
    const {toAddress, toSubject, toTextArea} = this.data
    wx.cloud.callFunction({
      name: 'sendMail',
      data: {
        from: '8662054@qq.com',
        to: toAddress,
        subject: toSubject,
        text: toTextArea
        // html: '<p><b>你好：</b><img src=""></p>' +'<p>欢迎欢迎<br/></p>'
      },
      success: res => {
        wx.hideLoading()
        console.log(res)
        wx.showToast({
          title: '发送成功'
        })
      },
      fail: err =>{
        wx.hideLoading()
        console.log(err)
      }
    })
  }
})