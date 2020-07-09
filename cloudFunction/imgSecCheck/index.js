const cloud = require('wx-server-sdk')
cloud.init({
	env: cloud.DYNAMIC_CURRENT_ENV
})
exports.main = async (event, context) => {
	const fileID = event.fileID
	const res = await cloud.downloadFile({
		fileID: fileID
	})
	const Buffer = res.fileContent
	try {
		const result = await cloud.openapi.security.imgSecCheck({
			media: {
				contentType: 'image/png',
				value: Buffer
			}
		})
		return result
	} catch (error) {
		return error
	}
}