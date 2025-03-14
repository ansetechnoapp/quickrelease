import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { to, subject, text } = await request.json();

        if (!to || !subject || !text) {
            return NextResponse.json(
                { message: 'Les champs to, subject, et text sont requis.' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NEXT_PUBLIC_SMTP_USER,
                pass: process.env.NEXT_PUBLIC_SMTP_PASS
            }
        });

        const info = await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_SMTP_USER,
            to: [process.env.NEXT_PUBLIC_SMTP_USER || 'jepierre095@gmail.com', 'contact@deblocage-device.com'],
            subject,
            text
        });

        return NextResponse.json(
            { message: 'Email envoyé avec succès', info },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Erreur lors de l\'envoi de l\'email', error },
            { status: 500 }
        );
    }
}
