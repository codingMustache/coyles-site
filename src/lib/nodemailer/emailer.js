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
};
