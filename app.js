//app.js
App({
  onLaunch() {
   wx.cloud.init({
    env: 'open-2mk50',
    traceUser: true
   })
  }
 })