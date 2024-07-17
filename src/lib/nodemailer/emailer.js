import nodemailer from 'nodemailer';
import { emailPW, email } from '$env/static/private';

/**
 *
 * @param {String} msg : HTML message to be sent
 * @param {any} attachments : array of attachments
 */
export const emailer = async (msg, attachments = []) => {
	const transporter = nodemailer.createTransport({
		service: 'icloud',
		auth: {
			user: email,
			pass: emailPW
		}
	});

	await new Promise((resolve, reject) => {
		// verify connection configuration
		transporter.verify(function (error, success) {
			if (error) {
				console.error(error);
				reject(error);
			} else {
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
				resolve(info);
			}
		});
	});
};
