import nodemailer from 'nodemailer';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendEmail = async (to: string, subject: string, html: string) => {
//     const data = await resend.emails.send({
//         from: "Website <schoolMgmt@resend.dev>",
//         to: [to],
//         subject,
//         html,
//     })
// };

const transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    // port: 587,
    // auth: {
    //     user: 'annamarie.heller25@ethereal.email',
    //     pass: 'rV9xPbser3waJ68f7n'
    // }

});

export const sendEmail = async (to: string, subject: string, html: string) => {
    const info = await transporter.sendMail({
        from: '"School System" <annamarie.heller25@ethereal.email>',
        to,
        subject,
        html
    });

    console.log('✅ Email sent: %s', info.messageId);
    console.log('🔎 Preview URL: %s', nodemailer.getTestMessageUrl(info)); // Only for Ethereal
};


