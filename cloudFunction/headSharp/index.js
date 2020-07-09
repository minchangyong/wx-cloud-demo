const cloud = require('wx-server-sdk')
const fs = require('fs')
const path = require('path')
cloud.init({
	env: cloud.DYNAMIC_CURRENT_ENV,
})
const sharp = require('sharp');
exports.main = async (event, context) => {
	//这里换成自己的fileID，也可以在小程序端上传文件之后，把fileID传进来event.fileID
	const fileID = 'cloud://xly-xrlur.786c-xly-xrlur-1300446086/1572315793628-366.png'
	
	//要用云函数处理图片，需要先下载图片，返回的图片类型为Buffer
	const res = await cloud.downloadFile({
		fileID: fileID,
	})
	const buffer = res.fileContent  
	
	//sharp对图片进行处理之后，保存为output.png，也可以直接保存为Buffer
	await sharp(buffer).rotate().resize(200).toFile('output.png')
	
	// 云函数读取模块目录下的图片，并上传到云存储
	const fileStream = await fs.createReadStream(path.join(__dirname, 'output.png'))
	return await cloud.uploadFile({
		cloudPath: 'sharpdemo.jpg',
		fileContent: fileStream,
	})  
}