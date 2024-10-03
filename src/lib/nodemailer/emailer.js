import nodemailer from 'nodemailer';
import { emailPW, email } from '$env/static/private';

/**
 *
 * @param {String} msg : HTML message to be sent
 * @param {any} attachments : array of attachments
 */
export const emailer = async (msg, attachments = []) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'icloud',
			auth: {
				user: email,
				pass: emailPW
			}
		});

		await transporter.verify();

		const mailData = {
			from: email,
			to: email,
			subject: 'New Client - Contact Form Submission',
			html: msg,
			attachments: attachments
		};
		await transporter.sendMail(mailData);
		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
	// const transporter = nodemailer.createTransport({
	// 	service: 'icloud',
	// 	auth: {
	// 		user: email,
	// 		pass: emailPW
	// 	}
	// });

	// await new Promise((resolve, reject) => {
	// 	// verify connection configuration
	// 	transporter.verify(function (error, success) {
	// 		if (error) {
	// 			console.error(error);
	// 			reject(error);
	// 		} else {
	// 			resolve(success);
	// 		}
	// 	});
	// });
	// await new Promise((resolve, reject) => {
	// 	// send mail
	// 	transporter.sendMail(mailData, (err, info) => {
	// 		if (err) {
	// 			console.error(err);
	// 			reject(err);
	// 		} else {
	// 			resolve(info);
	// 		}
	// 	});
	// });
};
