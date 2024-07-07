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
	const info = await transporter.sendMail({
		// @ts-ignore
		from: `Coyle Parker <appt@coyleparker.art>`,
		to: 'test@codingMustache.dev',
		subject: 'New Client',
		html: msg,
		attachments: attachments
	});
};
