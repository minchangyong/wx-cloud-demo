Page({
  data: {
    demoList: [{
      url: '/pages/getUserId/index',
      name: '获取用户基础信息'
    },{
      url: '/pages/createCode/index',
      name: '生成小程序码'
    },{
      url: '/pages/getPhoneNumber/index',
      name: '获取用户手机号'
    },{
      url: '/pages/secCheck/index',
      name: '内容安全检测'
    },{
      url: '/pages/sendMail/index',
      name: '发送电子邮件'
    },{
      url: '/pages/subscribeMsg/index',
      name: '发送订阅消息'
    },{
      url: '/pages/upload/index',
      name: '上传图片到云存储'
    },{
      url: '/pages/weRunData/index',
      name: '获取微信运动步数'
    },{
      url: '/pages/wxPayment/index',
      name: '云函数调用微信支付'
    },{
      url: '/pages/sendSms/index',
      name: '发送短信'
    },{
      url: '/pages/localIp/index',
      name: '获取本机IP地址'
    }]
  },
  onLoad(options) {
    console.log(options)
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  onShareTimeline() {},
  onShareAppMessage() {},
  skipToAuth() {
    wx.navigateToMiniProgram({
      appId: 'wx88736d7d39e2eda6',
      path: '/pages/oauth/authindex',
      extraData: {
          "api_version" : "1.1",
          "mch_id" : "1536042191",
          "appid" : "wx88736d7d39e2eda6",
          "scope" : "pay_identity",
          "response_type" : "code",
          "openid" : "oA4uH5JvhKXwjPYPhNcJIiKA-YyM",
          "sign_type" : "HMAC-SHA256",
          "sign" : "DBB47C037C812B29E0E7B4C5F62972B92E61CF05DE14FA958D9054B2",
          "nonce_str" : "190703203728315382",
      },
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.log(err)
      }
    })
  }
})