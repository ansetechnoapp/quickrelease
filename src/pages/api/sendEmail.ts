import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const cors = Cors({
    methods: ["POST", "GET"],
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: (req: NextApiRequest, res: NextApiResponse, callback: (result: any) => void) => void) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, cors);
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Méthode non autorisée' });
    }

    const { to, subject, text } = req.body;

    // Vérification des données entrantes
    if (!to || !subject || !text) {
        return res.status(400).json({ message: 'Les champs to, subject, et text sont requis.' });
    }

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_SMTP_USER,
            pass: process.env.NEXT_PUBLIC_SMTP_PASS
        }
    });

    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER, // Expéditeur
            to,                         // Destinataire
            subject,                    // Sujet
            text                        // Contenu
        });

        res.status(200).json({ message: 'Email envoyé avec succès', info });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email', error });
    }
}