// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init()
// 云函数入口函数
exports.main = async (event) => {
  console.log(event)
  try {
    // 生成小程序码
    const wxcodeResult = await cloud.openapi.wxacode.getUnlimited({
      scene: event.scene,
      page: event.page,
      width: 240
    })
    // return wxcodeResult;
    if (wxcodeResult.errCode !== 0) {
      // 生成二维码失败，返回错误信息
      return wxcodeResult;
    }

    // 上传到云存储
    const uploadResult = await cloud.uploadFile({
      cloudPath: Date.now() + '.jpg',
      fileContent: wxcodeResult.buffer
    });
    // return uploadResult;
    if (!uploadResult.fileID) {
      //上传失败，返回错误信息
      return uploadResult;
    }

    // 获取图片临时路径
    getURLReault = await cloud.getTempFileURL({
      fileList: [uploadResult.fileID]
    });
    fileObj = getURLReault.fileList[0];
    // 上传成功，获取文件临时url，返回临时路径的查询结果
    return fileObj;
  } catch (err) {
    return err
  }
}