const cloud = require('wx-server-sdk')
const tencentcloud = require("tencentcloud-sdk-nodejs");
cloud.init({
	env: cloud.DYNAMIC_CURRENT_ENV,
})
const config= require("./config/config.js")
const {secretId,secretKey} = config
exports.main = async (event, context) => {
	const smsClient = tencentcloud.sms.v20190711.Client;
	const models = tencentcloud.sms.v20190711.Models;
	const Credential = tencentcloud.common.Credential;
	const ClientProfile = tencentcloud.common.ClientProfile;
	const HttpProfile = tencentcloud.common.HttpProfile;
	let cred = new Credential(secretId,secretKey)
	let httpProfile = new HttpProfile();
	httpProfile.reqMethod = "POST";
	httpProfile.reqTimeout = 30;
	httpProfile.endpoint = "sms.tencentcloudapi.com";
	let clientProfile = new ClientProfile();
	clientProfile.signMethod = "HmacSHA256";
	clientProfile.httpProfile = httpProfile;
	let client = new smsClient(cred, "ap-guangzhou", clientProfile);
	let req = new models.SendSmsRequest();
	req.SmsSdkAppid = "1400394299";
	req.Sign = "青团社招聘商户版";
	req.ExtendCode = "";
	req.SenderId = "";
	req.SessionContext = "";
	req.PhoneNumberSet = [`${event.phoneNumber}`];
	req.TemplateID = "651442";
  req.TemplateParamSet = ["1234","5678"];
  console.log(req)
	client.SendSms(req, function (err, response) {
		if (err) {
			console.log(err);
			return;
		}
		console.log(response.to_json_string());
	});

}