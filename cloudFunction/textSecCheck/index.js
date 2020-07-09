const cloud = require('wx-server-sdk')
cloud.init({
	env: cloud.DYNAMIC_CURRENT_ENV
	})
exports.main = async (event, context) => {
	try {
		const result = await cloud.openapi.security.msgSecCheck({
			content: event.content
		})
		return result
		
	} catch (error) {
		return error
	}
}