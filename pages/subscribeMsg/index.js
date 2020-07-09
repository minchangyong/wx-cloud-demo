Page({
  data: {

  },
  handleClick() {
    wx.requestSubscribeMessage({
      tmplIds: [
        "oAujDykWLvy8ci2leuDFyTInJRYpkJ08ufLykYlIHYM"
      ],
      success(res) {
        setTimeout(() => {
          wx.cloud.callFunction({
            name: 'subscribeMsg',
            success: res => {
              console.log(res)
            },
             fail : err => {
               console.log(err)
             }
          })
        }, 5000)
      },
      fail(res) {
        console.log("订阅消息API调用失败：",res)
      }
    })
  }
})