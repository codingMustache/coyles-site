import nodemailer from 'nodemailer';
import { emailPW, email } from '$env/static/private';

const transporter = nodemailer.createTransport({
	service: 'icloud',
	auth: {
		user: email,
		pass: emailPW
	}
});

/**
 *
 * @param {String} msg : HTML message to be sent
 * @param {any} attachments : array of attachments
 */
export const emailer = async (msg, attachments = []) => {
	// send mail with defined transport object

	await new Promise((resolve, reject) => {
		// verify connection configuration
		transporter.verify(function (error, success) {
			if (error) {
				console.log(error);
				reject(error);
			} else {
				console.log('Server is ready to take our messages');
				resolve(success);
			}
		});
	});

	const mailData = {
		// @ts-ignore
		from: `Coyle Parker <appt@coyleparker.art>`,
		to: 'contact@coyleparker.art',
		subject: 'New Client',
		html: msg,
		attachments: attachments
	};
	await new Promise((resolve, reject) => {
		// send mail
		transporter.sendMail(mailData, (err, info) => {
			if (err) {
				console.error(err);
				reject(err);
			} else {
				console.log(info);
				resolve(info);
			}
		});
	});
};
