import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req, res) {
    require('dotenv').config()
    const { name, email, company, demand, message } = await req.json();

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.SMTP_USER,
            subject: `[HENRILAB] Contact from ${name}`,
            text: message,
            html: `
                <h2><strong>henrilab.</strong></h2>
                <i>"Every contact is valuable"</i>
                <hr/>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Company: ${company}</p>
                <p>Demand: ${demand}</p>
                <hr/>
                <p>${message}</p>
            `,
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.log("Server - Failed to send email", error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}