// pages/upload/index.js
Page({
  data: {
    imgUrl: ''
  },
 //上传图片
 handleChoose() {
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