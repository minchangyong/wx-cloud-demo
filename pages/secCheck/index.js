Page({
  data: {
    textareaval: ''
  },
  handleValue(e) {
    this.setData({
      textareaval: e.detail.value
    })
  },
  handleClick1() {
    wx.cloud.callFunction({
      name: 'textSecCheck',
      data: {
        content: this.data.textareaval
      },
      success: res => {
        console.log(res)
        if (res.result.errCode === 0) {
          wx.showToast({
            title: '文案正常'
          })
        } else if (res.result.errCode === 87014) {
          wx.showToast({
            title: '文案存在违规内容',
            icon: 'none'
          })
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  handleClick2() {
    wx.cloud.callFunction({
      name: 'imgSecCheck',
      data: {
        fileID: this.data.imgUrl
      },
      success: res => {
        console.log(res)
        if (res.result.errCode === 0) {
          wx.showToast({
            title: '图片正常'
          })
        } else if (res.result.errCode === 87014) {
          wx.showToast({
            title: '图片存在违规内容',
            icon: 'none'
          })
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  upload() {
    let timestamp = Date.now()
    wx.chooseImage({
     success: res => {
      wx.showLoading({
       title: '上传中'
      }) 
      // 将图片上传至云存储空间
      wx.cloud.uploadFile({
       // 指定上传到的云路径
       cloudPath: timestamp + '.png',
       // 指定要上传的文件的小程序临时文件路径
       filePath: res.tempFilePaths[0],
       // 成功回调
       success: todo => {
        console.log('上传成功', todo)
        wx.hideLoading()
        wx.showToast({
         title: '上传图片成功',
        })
        this.setData({
          imgUrl: todo.fileID || ''
         })
       }
      })
     }
    })
  }
})