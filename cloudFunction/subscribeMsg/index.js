const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
  const { OPENID } = cloud.getWXContext()
  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser: OPENID,
      page: 'pages/index/index',
      templateId: "oAujDykWLvy8ci2leuDFyTInJRYpkJ08ufLykYlIHYM",
      data: {
        "thing1": {
          "value": '金之源大厦'
        },
        "thing3": {
          "value": '5000元/月'
        },
        "name4": {
          "value": '辣鸡子默'
        },
        "thing12": {
          "value": '程序员鼓励师'
        },
        "thing9": {
          "value": "青团社研发部"
        }
    }
    })
    return result
  } catch (err) {
    console.log(err)
    return err
  }
} 