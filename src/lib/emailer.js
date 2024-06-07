import nodemailer from 'nodemailer';
import { emailPW, email } from '$env/static/private';

const transporter = nodemailer.createTransport({
  service: 'icloud',
  auth: {
    user: email,
    pass: emailPW,
  },
});


/**
 * 
 * @param {String} msg : HTML message to be sent 
 * @param {any} attachments : array of attachments
 */
export const emailer = async (msg, attachments) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    // @ts-ignore
    from: 'Jorge <jorge@codingMustache.dev>',
    to: "erniepthethrid@gmail.com",
    subject: "New Client",
    //text: "Hello world?", // plain text body
    html: msg,
    attachments: attachments
  });

  console.log("Message sent: %s", info.messageId);

}
