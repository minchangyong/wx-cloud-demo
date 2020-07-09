// pages/weRunData/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleClick() {
    wx.getWeRunData({
      success: res => {
        console.log(`cloudID: ${res.cloudID}`) 
        wx.showLoading({
          title: '加载中'
        })
        wx.cloud.callFunction({
          name: 'weRunData',
          data: {
            weRunData: wx.cloud.CloudID(res.cloudID)
          },
        }).then(resData => {
          wx.hideLoading()
          console.log(resData)
          this.setData({
            todayStep: resData.result.wxRunData[30].step,
            monthStep: resData.result.wxRunData
          }, () => {
            for (let item of this.data.monthStep) {
              item.date =  this.formatTime(new Date(item.timestamp * 1000))
            }
            this.setData({
              monthStep: this.data.monthStep
            })
          })
        })
      },
    })
  },
  formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    return [year, month, day].map(this.formatNumber).join('/')
  },
   formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
})