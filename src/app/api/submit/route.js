import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, phone, email, message } = data;
        const chatIds = process.env.TELEGRAM_CHAT_IDS.split(',')

        // 1. Валидация (простая проверка)
        if (!name || !phone) {
            return NextResponse.json(
                { error: 'Имя и телефон обязательны' },
                { status: 400 }
            );
        }

        // 2. Отправка в Telegram (через Fetch API)
        // const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
        // await fetch(telegramUrl, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         chat_id: process.env.TELEGRAM_CHAT_ID,
        //         text: `📢 Новая заявка:\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email || 'не указан'}\nСообщение: ${message || 'не заполнено'}`
        //     })
        // });

        // Отправка во все чаты
        const sendPromises = chatIds.map(chatId =>
            fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId.trim(),
                    text: `📢 Новая заявка:\nИмя: ${data.name}\nТелефон: ${data.phone}\nСтрана: ${data.country || 'не указана'}`
                })
            })
        )

        // 3. Отправка на Email (через Nodemailer)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        await transporter.sendMail({
            from: `"Kuchen Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: 'Новая заявка с сайта Kuchen',
            text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email || 'не указан'}\nСообщение: ${message || 'нет'}`
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Ошибка:', error);
        return NextResponse.json(
            { error: 'Ошибка сервера' },
            { status: 500 }
        );
    }
}