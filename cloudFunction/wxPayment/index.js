// 云函数代码
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  const res = await cloud.cloudPay.unifiedOrder({
    "body" : event.body, // 商品标题
    "outTradeNo" : event.outTradeNo, // 订单号
    "spbillCreateIp" : event.spbillCreateIp, // 回调的ip地址
    "subMchId" : event.subMchId, //  我们的商户号
    "totalFee" : event.totalFee, // 商品总价，单位分
    "envId": event.envId, // 云开发环境ID
    "functionName": event.functionName // 回调的云函数
  })
  return res
}