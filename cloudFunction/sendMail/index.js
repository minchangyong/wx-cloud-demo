const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
  const nodemailer = require("nodemailer");
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com", //SMTP服务器地址
    port: 465, //端口号，通常为465，587，25，不同的邮件客户端端口号可能不一样
    secure: true, //如果端口是465，就为true;如果是587、25，就填false
    auth: {
      user: "8662054@qq.com", //你的邮箱账号
      pass: "myukmlybjotjbghh" //邮箱密码，QQ的需要是独立授权码，不是QQ邮箱的密码
    }
  });

  let message = {
    from: event.from, //发件邮箱
    to:event.to, //收件人
    subject: event.subject,
    text: event.text,
    html: event.html
  };

  let res = await transporter.sendMail(message);
  return res;
}