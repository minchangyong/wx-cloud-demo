// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event) => {
  const {OPENID: openid, APPID: appid,UNIONID: unionid} = cloud.getWXContext()

  return {
    event,
    openid,
    appid,
    unionid
  }
}