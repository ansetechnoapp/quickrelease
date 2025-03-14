import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { to, subject, text, sendConfirmation } = await request.json();

        if (!to || !subject || !text) {
            return NextResponse.json(
                { message: 'Les champs to, subject, et text sont requis.' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(to)) {
            return NextResponse.json(
                { message: 'Format d\'email invalide.' },
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

        try {
            // Envoi de l'email à l'administrateur
            await transporter.sendMail({
                from: process.env.NEXT_PUBLIC_SMTP_USER,
                to: [process.env.NEXT_PUBLIC_SMTP_USER || 'jepierre095@gmail.com', 'contact@deblocage-device.com'],
                subject,
                text
            });

            // Envoi de l'email de confirmation au client
            if (sendConfirmation) {
                await transporter.sendMail({
                    from: `"Deblocage Device" <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
                    to: to,
                    subject: "Confirmation de votre demande de déblocage",
                    html: `
                        <h2>Confirmation de votre demande de déblocage</h2>
                        <p>Bonjour,</p>
                        <p>Nous avons bien reçu votre demande de déblocage. Voici le récapitulatif de vos informations :</p>
                        <pre>${text}</pre>
                        <p>Notre équipe traitera votre demande dans les plus brefs délais.</p>
                        <p>Cordialement,<br>L'équipe de déblocage<br>www.deblocage-device.com</p>
                    `.trim()
                });
            }

            return NextResponse.json(
                { message: 'Email envoyé avec succès' },
                { status: 200 }
            );
        } catch (emailError) {
            console.error('Email sending error:', emailError);
            return NextResponse.json(
                { message: 'Erreur lors de l\'envoi de l\'email', error: emailError },
                { status: 500 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { message: 'Erreur lors de l\'envoi de l\'email', error },
            { status: 500 }
        );
    }
}
