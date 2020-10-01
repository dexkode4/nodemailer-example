const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const defaultMailingList = "hrnkabir@gmail.com";
const senderEmail = "prepqlass@gmail.com";
const senderPassword = process.env.PASSWORD;


module.exports = {
    sendMail: async (subject, text, to = defaultMailingList) => {
        try {
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: senderEmail,
                    pass: senderPassword,
                },
            });

            const message = {
                from: `report sender <${senderEmail}>`,
                to,
                subject,
                text: subject,
                html: text,
            };

            transporter.sendMail(message, () => { });
        } catch (e) {
            // handle errors here
        }
    },
};